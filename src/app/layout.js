import ClientLayout from "@/components/layout/ClientLayout";
import "./globals.css";
import { Syne, Urbanist } from "next/font/google";

// ✅ Fonts
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});  
  
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ✅ Metadata stays here (server-only)
export const metadata = {
  title: "360 Medical",
  description: "360 Medical provides innovative healthcare and biotech solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${syne.variable}`}>
      <body className="antialiased bg-black text-white relative overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
