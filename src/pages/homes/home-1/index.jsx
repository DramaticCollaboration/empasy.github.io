import Header1 from "@/components/headers/Header1";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Integretion from "@/components/homes/home-1/Integretion";
import Facts from "@/components/homes/home-1/Facts";
import Pricing from "@/components/homes/home-1/Pricing";
import Feedback from "@/components/homes/home-1/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/homes/home-1/Cta";
import Footer1 from "@/components/footers/Footer1";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "엠파시 || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Integretion />
          <Facts />
          <Pricing />
          <Feedback />
          <Timeline />
          <Team />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
