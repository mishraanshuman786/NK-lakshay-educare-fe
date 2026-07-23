import { QualitySectionType } from "@/lib/data/website/home";

type QualitySectionProps = {
  data: QualitySectionType;
};

const QualitySection = ({ data }: QualitySectionProps) => {
  return (
    <div className="bg-background-lightblue">
      <div className="max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4">
        <h4 className="text-background-secondary text-center text-lg md:text-xl lg:text-2xl">
          {data.title}
        </h4>

        <h2 className="text-black text-center text-2xl md:text-3xl lg:text-4xl mt-2">
          {data.subtitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-6 lg:gap-y-4 mt-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="group h-32 rounded-md border border-gray-300 bg-white px-4 flex items-center hover:bg-background-secondary transition-colors"
            >
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-black group-hover:text-white">
                  {item.title}
                </h2>

                <h4 className="text-sm lg:text-base text-gray-500 group-hover:text-white">
                  {item.stats}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualitySection;