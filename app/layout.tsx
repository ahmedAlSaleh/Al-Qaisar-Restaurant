import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GrainOverlay } from "@/components/effects/grain-overlay";
import { CommandMenu } from "@/components/effects/command-menu";
import { FollowerPointer } from "@/components/effects/follower-pointer";
import { PageTransition } from "@/components/effects/page-transition";
import { Navbar } from "@/components/sections/navbar";

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
      className="dark scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-[#C9A84C]/30 selection:text-[#F5F0E8]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          {/* STEP 2: Global Shell Elements */}
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
