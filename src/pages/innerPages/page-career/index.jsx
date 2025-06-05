import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import Blogs from "@/components/homes/home-2/Blogs";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Career || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function CareerPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <CareerBenefits />
          <CareerOpenings />
          <Feedback />
          <Brands />
          <Blogs />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
