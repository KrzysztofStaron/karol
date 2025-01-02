import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dark Theme Product Card",
  description: "A product card with dark theme using zinc color",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-900 text-zinc-100`}>{children}</body>
    </html>
  );
}
