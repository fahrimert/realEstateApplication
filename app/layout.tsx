import ToastProvider from "@/provider";
import "./globals.css";
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      
    >
      <Providers>
      <ToastProvider />

      {children}
      </Providers>
      </body>
    </html>
  );
}
