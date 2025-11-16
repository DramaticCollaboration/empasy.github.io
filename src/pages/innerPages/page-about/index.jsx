import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import MetaComponent from "@/components/common/MetaComponent";

import { searchMetadata }  from "@/utlis/searchMeta";
import Search from "@/pages/homes/home-1/Search.jsx";
import Cta from "./Cta.jsx";

const metadata = {
    ...{
      title: "엠파시는 || 살아 있는 소프트웨어를 만듭니다.",
    },
    ...searchMetadata
};


  export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <About />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >
                    <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                      <Brands />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About2 />
            <Cta />
            <Search />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
