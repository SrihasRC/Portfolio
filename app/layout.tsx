import type { Metadata } from "next";
import { Josefin_Sans, Ovo, Poppins, Prompt, Roboto, Tektur, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

const jos = Josefin_Sans({
  variable: "--font-jos",
  subsets: ["latin"],
  weight: ["400"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Portfolio - Srihas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${ovo.variable} ${poppins.variable} ${roboto.variable} ${jos.variable} ${prompt.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkBg dark:text-white/90 font-prompt tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
