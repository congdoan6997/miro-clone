import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;
export const viewport: Viewport = {
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Toaster theme="light" closeButton richColors />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
