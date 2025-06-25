// app/layout.tsx (or app/(main)/layout.tsx)
import type { Metadata } from "next";
import { Barlow, Poppins } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/provider";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import LenisScroll from "@/components/Layouts/SmoothScroll";
import  CheckAdmin  from "@/components/Layouts/CheckAdmin";

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Pixbex",
  description: "My Personal Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${poppins.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        
        <LenisScroll/>
        <ReduxProvider>
          <CheckAdmin>
          <Header />
          {children}
          <Toaster position="top-right" />
          </CheckAdmin>
        </ReduxProvider>
      </body>
    </html>
  );
}
