import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import Providers from "@/providers";
import Menu from "@/features/dashboard/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bifr-OS",
  description: "My personal dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="BifrOS" />

      <html lang="en">
        <body className={` dark ${inter.className}  antialiased `}>
          <Providers>
            <div className={"flex flex-row w-full relative"}>
              <div className={"flex flex-col w-full gap-4 py-10"}>
                <Menu />
                {children}
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
