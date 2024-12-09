import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono, Roboto, Dancing_Script } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Palash",
  description: "Portfolio of Palash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancing_script.variable} ${roboto.variable} ${roboto_mono.variable}`}
      >
        <div className={inter.className}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
