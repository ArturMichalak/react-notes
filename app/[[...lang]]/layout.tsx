import type { Metadata } from "next";
import "@/app/globals.css";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { Sofia_Sans } from "next/font/google";

import Nav from "@/content/nav";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const t = useTranslations();
  return (
    <html lang={params.lang}>
      <body
        className={classNames(
          sofia.className,
          "min-h-screen flex flex-col md:flex-row items-end md:items-stretch"
        )}
      >
        <Nav labels={[t("title"), t("notes"), t("tasks"), t("settings")]} />
        {children}
      </body>
    </html>
  );
}
