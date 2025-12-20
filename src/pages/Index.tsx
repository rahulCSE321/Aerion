import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ChallengeSection } from "@/components/home/ChallengeSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ClientApproachSection } from "@/components/home/ClientApproachSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengeSection />
      <ServicesOverview />
      <CategoriesSection />
      <ProcessSection />
      <WhyChooseSection />
      <ClientApproachSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
