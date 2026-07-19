import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { aboutData } from "@/lib/data/about";
import OurTeamSlider from "@/components/website/About/OurTeamSlider";

const About = () => {
  return (
    <div>
      <Header />

      {/* Route */}
      <div className="bg-background-lightblue py-10 md:py-14 px-4">
        <h1 className="text-center text-3xl md:text-4xl font-semibold">
          About Us
        </h1>
        <h3 className="text-center mt-2 text-sm md:text-base">
          Home // About Us
        </h3>
      </div>

      {/* First Section */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-background-secondary font-semibold text-lg md:text-xl">
          {aboutData.heading}
        </h2>

        <div className="py-4 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">
          <div>
            <h1 className="font-semibold text-2xl">
              {aboutData.section1.title}
            </h1>

            <p
              className="text-gray-600 mt-4 leading-7"
              dangerouslySetInnerHTML={{
                __html: aboutData.section1.content,
              }}
            />
          </div>

          <img
            src={aboutData.section1.image}
            alt={aboutData.section1.title}
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-background-lightblue py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">
            <img
              src={aboutData.section2.image}
              alt={aboutData.section2.title}
              className="w-full rounded-md object-cover lg:order-1 order-2"
            />

            <div className="lg:order-2 order-1">
              <h1 className="font-semibold text-2xl">
                {aboutData.section2.title}
              </h1>

              <p
                className="text-gray-600 mt-4 leading-7"
                dangerouslySetInnerHTML={{
                  __html: aboutData.section2.content,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <OurTeamSlider data={aboutData.ourTeamSliderSection} />

      <Footer />
    </div>
  );
};

export default About;