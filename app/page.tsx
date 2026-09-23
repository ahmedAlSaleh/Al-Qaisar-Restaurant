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
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <HeroSection />
      <BlurFade inView delay={0.05} blur="4px">
        <ChandelierSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <RoyalTableSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <WineSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <StorySection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <ChefSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <SignatureSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <MenuSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <AmbianceSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <GallerySection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <ReviewsSection />
      </BlurFade>
      <BlurFade inView delay={0.05} blur="4px">
        <ReserveSection />
      </BlurFade>
      <Footer />
    </main>
  );
}
