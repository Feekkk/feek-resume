import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import BioSection from "@/components/sections/BioSection";
import ContentSection from "@/components/sections/ContentSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <BioSection />
      <ContentSection />
      <ShowcaseSection />
    </Layout>
  );
}
