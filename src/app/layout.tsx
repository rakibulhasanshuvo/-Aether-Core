import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Aether-Core | The Architect",
  description: "An interactive Cyber-Luxury 3D portfolio experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${manrope.variable} bg-surface text-on-surface font-body selection:bg-primary-container selection:text-black min-h-screen overflow-x-hidden`}>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
