import { ContactListSectionType } from "@/lib/data/website/contact";

type ContactSectionProps = {
  data: ContactListSectionType;
};

const ContactSection = ({ data }: ContactSectionProps) => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((contact, index) => {
          const Icon = contact.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-6 rounded-md bg-background-lightblue p-8 mx-4"
            >
              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-orange-200 bg-white">
                <Icon className="text-3xl text-teal-700" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-3 text-md font-medium text-gray-700">
                  {contact.title}
                </h3>

                <p className="whitespace-pre-line text-md  font-semibold text-black">
                  {contact.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;