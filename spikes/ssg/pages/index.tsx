import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

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
import { LinkProps } from "../components/NavLink";

const getNavLinksResources = async (): Promise<LinkProps[]> => {
  // Mocked by now
  return [
    { label: "Home", href: "#" },
    { label: " About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Shop", href: "#" },
    { label: " Contact Us", href: "#" }
  ];
};

export async function getStaticProps() {
  const navLinks = await getNavLinksResources();

  return {
    props: {
      navLinks
    }
  };
}

const Home = ({ navLinks }: { navLinks: LinkProps[] }) => {
  return (
    <div>
      <CommonHeaders />
      <NavBar navLinks={navLinks} />
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
