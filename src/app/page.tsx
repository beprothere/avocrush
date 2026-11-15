import ContactForm from "@/components/ContactForm";
import Copyrights from "@/components/Copyrights";
import Enjoy from "@/components/Enjoy";
import Faq from "@/components/Faq";
import HeroBanner from "@/components/HeroBanner";
import Ingredients from "@/components/Ingredients";
import Layout from "@/components/Layout";
import Market from "@/components/Market";
import NutritionValues from "@/components/NutritionValues";
import Partner from "@/components/Partner";
import Preserves from "@/components/Preserves";
import Taste from "@/components/Taste";
import MobBanner from "@/components/MobBanner";
import MobNutrition from "@/components/MobNutrition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocrush — Smooth. Green. Irresistible.",
  description: "A smooth, creamy avocado spread with real chunks. Made from ripe avocados, crafted for those who appreciate pure, honest flavour.",

  openGraph: {
    title: "Avocrush — Smooth. Green. Irresistible.",
    description: "A smooth, creamy avocado spread with real chunks. Made from ripe avocados, crafted for those who appreciate pure, honest flavour.",
    url: "https://avocrush.vercel.app",
    siteName: "Avocrush",
    images: [
      {
        url: "https://avocrush.vercel.app/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avocrush Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Avocrush — Smooth. Green. Irresistible.",
    description: "A smooth, creamy avocado spread with real chunks. Made from ripe avocados, crafted for those who appreciate pure, honest flavour.",
    images: ["https://avocrush.vercel.app/img/og-image.jpg"],
  },
};

const Home = () => {
  

  return (
    <Layout>
      <section className="main-container">
        <HeroBanner />
        <MobBanner />
        <Ingredients />
        <NutritionValues />
        <MobNutrition />
        <Preserves />
        <Enjoy />
        <Taste />
        <Market />
        <Partner />
        <Faq />
        <div></div>
        <ContactForm />
        <Copyrights />
      </section>
    </Layout>
  );
};

export default Home;
