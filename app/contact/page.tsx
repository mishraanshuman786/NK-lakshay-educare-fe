import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import ContactSection from "@/components/website/Contact/ContactSection";
import FormSection from "@/components/website/Contact/FormSection";
import { contactData } from "@/lib/data/contact";
const Contact = () => {
  return (
    <div>
        <Header />

        <div className="bg-background-lightblue py-14">
            <h1 className="text-center">Contact</h1>
            <h3 className="text-center">Home // Contact</h3>

        </div>
        <ContactSection data={contactData.contactListSection} />
        <FormSection />

        <Footer />
    </div>
  )
}

export default Contact;