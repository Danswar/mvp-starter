import type { NextPage } from "next";

import CommonHeaders from "../component/CommonHeaders";
import BlogFeed from "../component/BlogFeed";
import CallToActionSection from "../component/CallToActionSection";
import CustomSection from "../component/CustomSection";
import FeatureListSection from "../component/FeatureListSection";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import MainBanner from "../component/MainBanner";
import PricingTable from "../component/PricingTable";
import SpecificFeatureSection from "../component/SpecificFeatureSection";
import Testimonials from "../component/Testimonials";
import CommonScripts from "../component/CommonScripts";

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
