import { Banner } from "@/components/layout/Banner";
import { BrandsStrip } from "@/components/ui/BrandsStrip"
import { OpportunitySection } from "@/components/ui/OpportunitySection"
import { OfferPackage } from "@/components/ui/OfferPackage"
import { TopDestinations } from "@/components/ui/Destination";
import { AdventureCarousel } from "@/components/ui/OppertunityFeatures";
import { GrateOppertunity } from "@/components/ui/GrateOppertunity";
import  TestimonialCard  from "@/components/ui/AmazingFeaturs";



export default function Homepage() {
  return (
    <div>
      <Banner />
      <BrandsStrip />
      <OpportunitySection />
      <OfferPackage />
      <TopDestinations />
      <AdventureCarousel/>
      <GrateOppertunity/>
      <TestimonialCard />
    </div>
  );
}