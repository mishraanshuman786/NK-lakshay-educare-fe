import { commonData } from "@/lib/data/common";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Top Footer */}
      <div className="bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {commonData.footer.topFooter.map((item, index) => (
            <div key={index} className="mb-8">
              <h2 className="mb-4 text-xl md:text-2xl">{item.title}</h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-square list-inside marker:text-background-primary">
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-sm cursor-pointer hover:text-background-primary transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-sm">
            {commonData.footer.bottomFooter.companyInfo}
          </div>

          <div className="flex gap-2">
            {commonData.footer.bottomFooter.socialLinks.map((Icon, index) => (
              <Icon
                key={index}
                className="text-3xl text-white hover:text-background-primary cursor-pointer transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;