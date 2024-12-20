import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import Providers from "@/providers";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <body className={` dark ${inter.className}  antialiased h-screen`}>
          <Providers>
            <Topbar />
            <div className={"  flex flex-row"}>
              <Sidebar />
              <div className={" m-auto flex flex-col flex-1  "}>
                <ScrollArea className={"h-[calc(100vh-4rem)] w-full   "}>
                  {children}
                </ScrollArea>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
