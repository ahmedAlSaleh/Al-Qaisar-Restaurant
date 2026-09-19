import { HeroSection } from "@/components/sections/hero-section";
import { ChandelierSection } from "@/components/sections/chandelier-section";
import { RoyalTableSection } from "@/components/sections/royal-table-section";
import { WineSection } from "@/components/sections/wine-section";
import { StorySection } from "@/components/sections/story-section";
import { ChefSection } from "@/components/sections/chef-section";
import { SignatureSection } from "@/components/sections/signature-section";
import { MenuSection } from "@/components/sections/menu-section";
import { AmbianceSection } from "@/components/sections/ambiance-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ReserveSection } from "@/components/sections/reserve-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ChandelierSection />
      <RoyalTableSection />
      <WineSection />
      <StorySection />
      <ChefSection />
      <SignatureSection />
      <MenuSection />
      <AmbianceSection />
      <GallerySection />
      <ReviewsSection />
      <ReserveSection />
      <Footer />
    </main>
  );
}
