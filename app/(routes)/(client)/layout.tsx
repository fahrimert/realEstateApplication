import type { Metadata } from "next";
import { Inter} from "next/font/google";
import { outfit } from "@/public/fonts/font";

import "../../globals.css";
import { Providers } from "@/app/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      
      className={outfit.className}
    >
      <Providers>

      {children}
      </Providers>
      </body>
    </html>
  );
}
