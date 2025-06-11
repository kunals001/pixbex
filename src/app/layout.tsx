
import type { Metadata } from "next";
import { Barlow } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import {ReduxProvider} from "@/redux/provider";
import "./globals.css";
import Header from "@/components/Navbar/Header";


const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});



export const metadata: Metadata = {
  title: "Pixbex",
  description: "My Personal Portfolio",
  icons: {
    icon: "/favicon.ico", // This sets the favicon correctly
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
        className={`${barlow.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ReduxProvider>
        <Header />
        {children}
        <Toaster position="top-right"/>
        </ReduxProvider>
      </body>
    </html>
  );
}
