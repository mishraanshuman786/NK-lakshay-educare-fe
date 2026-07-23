import ContactSection from "@/components/website/Contact/ContactSection";
import FormSection from "@/components/website/Contact/FormSection";
import { contactData } from "@/lib/data/website/contact";
const Contact = () => {
  return (
    <div>
        
        <div className="bg-background-lightblue py-14">
            <h1 className="text-center">Contact</h1>
            <h3 className="text-center">Home // Contact</h3>

        </div>
        <ContactSection data={contactData.contactListSection} />
        <FormSection />

      
    </div>
  )
}

export default Contact;