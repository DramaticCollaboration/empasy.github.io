import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Cta2 from "@/components/innerpages/Cta2";
import Faq from "@/components/innerpages/Faq";
import Team from "@/components/innerpages/Team";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Team || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function TeamPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md dom-ready bp-xxl-max bp-lg bp-xl">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Team />
          <Faq />
          <Cta2 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
