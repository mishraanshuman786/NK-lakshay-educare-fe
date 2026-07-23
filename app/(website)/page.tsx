import ExpertTutorsSection from "@/components/website/Home/ExpertTutorsSection";
import HomepageSlider from "@/components/website/Home/HomepageSlider";
import QualitySection from "@/components/website/Home/QualitySection";
import FaqsSection from "@/components/website/Home/FaqsSection";
import { homepageData } from "@/lib/data/website/home";

export default function Home() {
  return (
    <>
   <HomepageSlider />
   <QualitySection data={homepageData.qualitySection} />
   <FaqsSection data={homepageData.faqsSection} />
   <ExpertTutorsSection data={homepageData.expertTutorsSection} />

    </>
   
  );
}
