import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaqsSectionType } from "@/lib/data/website/home";

type FaqsSectionProps = {
  data: FaqsSectionType;
};

const FaqsSection = ({ data }: FaqsSectionProps) => {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left Section */}
        <div className="bg-gray-100 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {data.title}
          </h1>

          <Accordion
            className="w-full max-w-lg rounded-md border mt-8 lg:mt-10"
            defaultValue={["0"]}
          >
            {data.faqItems.map((faq, index) => (
              <div className="border-b last:border-b-0" key={index}>
                <AccordionItem value={String(index)}>
                  <AccordionTrigger className="hover:no-underline [&[data-panel-open]]:bg-background-secondary [&[data-panel-open]]:text-white px-4 py-5 lg:py-6 text-base lg:text-lg rounded-none text-left">
                    {faq.heading}
                  </AccordionTrigger>

                  <AccordionContent className="p-4 lg:p-6 text-sm lg:text-base leading-relaxed">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-auto">
          <img
            src="/faqImage.webp"
            alt="FAQ"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;