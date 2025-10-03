import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono, Roboto, Dancing_Script } from "next/font/google";
import Navbar from "../components/navbar/navbar";
import Cursor from "@/components/cursor";

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
  title: "Palash Jhaveri",
  description: "Thinking of something catchy",
  icons: {
    icon: "/palj.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.className} ${roboto.variable} ${dancing_script.variable}`}
      >
        <div className="flex min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827]">
          <Navbar />
          {children}
          <Cursor />
        </div>
      </body>
    </html>
  );
}
