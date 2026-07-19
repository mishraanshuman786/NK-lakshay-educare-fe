import Header from "@/components/website/Header";
import ExpertTutorsSection from "@/components/website/Home/ExpertTutorsSection";
import HomepageSlider from "@/components/website/Home/HomepageSlider";
import QualitySection from "@/components/website/Home/QualitySection";
import FaqsSection from "@/components/website/Home/FaqsSection";
import Footer from "@/components/website/Footer";
import { homepageData } from "@/lib/data/home";

export default function Home() {
  return (
    <>
    <Header/>
   <HomepageSlider />
   <QualitySection data={homepageData.qualitySection} />
   <FaqsSection data={homepageData.faqsSection} />
   <ExpertTutorsSection data={homepageData.expertTutorsSection} />
   <Footer/>

    </>
   
  );
}
