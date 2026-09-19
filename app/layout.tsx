import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { GrainOverlay } from "@/components/effects/grain-overlay";
import { CommandMenu } from "@/components/effects/command-menu";
import { FollowerPointer } from "@/components/effects/follower-pointer";
import { PageTransition } from "@/components/effects/page-transition";
import { Navbar } from "@/components/sections/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Qaisar | Four Seasons Fine Dining Experience",
  description:
    "An extraordinary 3D fine dining experience at Four Seasons. Where culinary artistry meets architectural magnificence. Al-Qaisar Restaurant.",
  openGraph: {
    title: "Al-Qaisar | Four Seasons Fine Dining",
    description:
      "An extraordinary 3D fine dining experience at Four Seasons. Al-Qaisar Restaurant.",
    siteName: "Al-Qaisar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} dark scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-[#C9A84C]/30 selection:text-[#F5F0E8]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          {/* STEP 2: Global Shell Elements */}
          <ScrollProgress />
          <GrainOverlay />
          <FollowerPointer />
          <CommandMenu />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
