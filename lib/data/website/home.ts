import ExpertTutorsSection from "@/components/website/Home/ExpertTutorsSection";

export const homepageData = {
  qualitySection: {
    title: "NK Lakshay Educare",
    subtitle: "Our Quality",
    items: [
      {
        title: "Covering Cities",
        stats: "12 Cities",
      },
      {
        title: "Class & Course",
        stats: "37 Courses",
      },
      {
        title: "Language",
        stats: "7 Language",
      },
      {
        title: "Subject",
        stats: "27 Subject",
      },
      {
        title: "Blogs",
        stats: "71 Blogs",
      },
      {
        title: "Educational Board",
        stats: "7 Board",
      },
    ],
  },
  faqsSection: {
    title: "Frequently Asked Questions",
    faqItems:[
      {
        heading: "Does NK Lakshay Educare Provide Free Demo Classes?",
        content:
          "Yes, NK Lakshay Educare offers one free demo class for every student. This helps students and parents evaluate the teaching quality before choosing a home tutor.",
      },
      {
        heading: "Which Cities Does NK Lakshay Educare Serve?",
        content:
          "Currently, NK Lakshay Educare provides qualified home tutors in Varanasi, Prayagraj, and Lucknow. We are continuously working to expand our services to more cities.",
      },
      {
        heading: "How Are Tutors Selected at NK Lakshay Educare?",
        content:
          "Our tutors are carefully selected based on their qualifications, subject expertise, teaching experience, and communication skills to ensure the best learning experience for students.",
      },
      {
        heading: "What Subjects and Classes Do You Provide Home Tutors For?",
        content:
          "NK Lakshay Educare provides home tutors for students from primary to senior secondary levels, covering subjects such as Mathematics, Science, English, Social Science, Commerce, and other academic and competitive exam subjects.",
      },
      {
        heading: "How Can I Book a Home Tutor?",
        content:
          "You can book a home tutor by contacting NK Lakshay Educare through our website, phone, or WhatsApp. Our team will understand your requirements and match you with a suitable tutor in your city.",
      },
    ],
  },
  expertTutorsSection: {
    title: "Promising personalized guidance at every step",
    subtitle: "Our Expert Tutors",
    experts: [
      {
        image: "/profile.png",
        name: "Sourav Pal",
        qualification: "B.tech(Chemical Engineering",
        location: "Varanasi",
      },
      {
        image: "/profile.png",
        name: "Ananya Sharma",
        qualification: "M.Sc (Mathematics)",
        location: "Lucknow",
      },
      {
        image: "/profile.png",
        name: "Rahul Verma",
        qualification: "M.Tech (Computer Science)",
        location: "Kanpur",
      },
      {
        image: "/profile.png",
        name: "Priya Singh",
        qualification: "M.A (English Literature)",
        location: "Prayagraj",
      },
      {
        image: "/profile.png",
        name: "Amit Kumar",
        qualification: "B.Ed, M.Sc (Physics)",
        location: "Patna",
      },
      {
        image: "/profile.png",
        name: "Neha Gupta",
        qualification: "M.Sc (Chemistry)",
        location: "Jaipur",
      },
      {
        image: "/profile.png",
        name: "Vivek Mishra",
        qualification: "Ph.D (Biology)",
        location: "Bhopal",
      },
      {
        image: "/profile.png",
        name: "Sneha Roy",
        qualification: "M.Com",
        location: "Kolkata",
      },
      {
        image: "/profile.png",
        name: "Arjun Mehta",
        qualification: "MBA (Finance)",
        location: "New Delhi",
      },
      {
        image: "/profile.png",
        name: "Kavya Nair",
        qualification: "M.Sc (Computer Science)",
        location: "Bengaluru",
      },
    ],
  },
};

export type QualitySectionType = typeof homepageData.qualitySection;
export type FaqsSectionType=typeof homepageData.faqsSection;
export type TutorsSectionType = typeof homepageData.expertTutorsSection;
