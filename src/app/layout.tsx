// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Link from "next/link";
import { MountainIcon } from "@/components/component";
import { StateContextProvider } from "@/core/CoreStateContext";
import { Toaster } from "react-hot-toast";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link
            href="/"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Crypto Launchpad</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/exchange"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Exchange
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Create ICO
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Create Token
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Transfer Token
            </Link>
          </nav>
        </header>
        <div>
          <StateContextProvider>
            <Toaster />
            {children}
          </StateContextProvider>
        </div>
      </body>
    </html>
  );
}
