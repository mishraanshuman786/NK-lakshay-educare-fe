import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
export const contactData={
    contactListSection:[
     {
           icon:FaPhoneAlt,
        title:`Whatsapp us & Mail us on Head Office number`,
        content:`+91-7376966308 qalpeducare@gmail.com`
     },
       {
           icon:FaMapLocation,
        title:`Noida & Greater Noida Office`,
        content:`Sector 137 Near Metro Station Naya Bans Village, Noida, Uttar Pradesh`
     },
       {
           icon:FaMapLocation,
        title:`Varanasi Head Office`,
        content:`First Flor Above Union Bank, Near Mega Shop, Suderpur DLW Marg, Varanasi, Uttar Pradesh 221005`
     },
       {
           icon:MdLocationPin,
        title:`Varanasi Sub Office`,
        content:`Near Daitraveer baba mandir, Pishach Mochan, Lahurabir, Chetganj, Varanasi, Uttar Pradesh 221001
+91-7376966308`
     },
       {
           icon:MdLocationPin,
        title:`Lucknow Office`,
        content:`56, near to Priyam Crossing Plaza, Rajni Khand, Sharda Nagar, Lucknow, Uttar Pradesh 226002
+91-7905524188`
     },
       {
           icon:MdLocationPin,
        title:`Prayagraj Office`,
        content:`171/10 AB, above Jain Tuition Wala, Rajrooppur, Prayagraj, Uttar Pradesh 211011
+91-7392919070`
     },


    ]
}

export type ContactListSectionType=typeof contactData.contactListSection;