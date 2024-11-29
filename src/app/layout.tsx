import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google"

const roboto = Roboto ({
  weight: ["300","400","700","900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for AI Web 3.0 and Metaverse",
  icons: {
    icon: {
     url: "/governor_sindh_logo.png", type: "image/png" }
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
        className={roboto.className}
      >
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
