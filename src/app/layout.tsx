// app/layout.tsx (or app/(main)/layout.tsx)
import type { Metadata } from "next";
import { Barlow, Poppins } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/provider";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/Layouts/SmoothScroll";

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
        <SmoothScroll></SmoothScroll>
        <ReduxProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
