import { Hydrate, NotesList } from '@/fragments';
import { getNotes } from '@/server-actions';
import { getQueryClient } from '@/utils';
import { dehydrate } from '@tanstack/react-query';

export default async function Home({ params }: { params: { lang: string } }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ["notes"], queryFn: getNotes });
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <main className="flex-grow">
        <NotesList lang={params.lang} />
      </main>
    </Hydrate>
  );
}
