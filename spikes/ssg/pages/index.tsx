import type { NextPage } from "next";

import CommonHeaders from "../sections/CommonHeaders";
import BlogFeed from "../sections/BlogFeed";
import CallToActionSection from "../sections/CallToActionSection";
import CustomSection from "../sections/CustomSection";
import FeatureListSection from "../sections/FeatureListSection";
import Footer from "../sections/Footer";
import NavBar from "../sections/NavBar";
import MainBanner from "../sections/MainBanner";
import PricingTable from "../sections/PricingTable";
import SpecificFeatureSection from "../sections/SpecificFeatureSection";
import Testimonials from "../sections/Testimonials";
import CommonScripts from "../sections/CommonScripts";

const Home: NextPage = () => {
  return (
    <div>
      <CommonHeaders />
      <NavBar />
      <MainBanner />
      <CallToActionSection />
      <FeatureListSection />
      <BlogFeed />
      <SpecificFeatureSection />
      <CustomSection />
      <PricingTable />
      <Testimonials />
      <CallToActionSection />
      <Footer />
      <CommonScripts />
    </div>
  );
};

export default Home;
