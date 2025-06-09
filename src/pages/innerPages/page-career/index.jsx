import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Brands from "@/components/innerpages/Brands";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "당신의 다음, 엠파시에서 || 살아 있는 소프트웨어를 만듭니다.",
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
          <Brands />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
