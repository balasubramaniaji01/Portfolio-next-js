import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import ErrorBoundaryClient from "@/components/ErrorBoundaryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balasubramani A | Frontend Developer",
  description:
    "Portfolio website of Balasubramani A, a Frontend & Mobile Developer specializing in React.js, Next JS and React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundaryClient>{children}</ErrorBoundaryClient>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
