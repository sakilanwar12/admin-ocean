import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/auth-provider";

const inter = Inter(
  {
    subsets: ["latin"],
    variable: '--font-inter',
  });
const robotoSlab = Roboto_Slab(
  {
    subsets: ["latin"],
    variable: '--font-roboto-slab',
  });
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
      <body className={`${inter.variable} ${robotoSlab.variable} bg-background`} suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
