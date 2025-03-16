import type { Metadata } from "next";
import { Ovo, Poppins, Roboto, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
});

const ovo = Ovo({
  variable: "--font-ovo",
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({
  variable: "--font-roboto",
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
        className={`${workSans.variable} ${ovo.variable} ${poppins.variable} ${roboto.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
