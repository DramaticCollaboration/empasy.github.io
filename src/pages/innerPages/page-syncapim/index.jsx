import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/syncapim/Hero";
import KeyFeatures from "@/components/innerpages/syncapim/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Brands2 from "@/components/common/Brands2";
import MetaComponent from "@/components/common/MetaComponent";
import Cta from "@/components/innerpages/syncapim/Cta.jsx";
import { searchMetadata }  from "@/utlis/searchMeta";

const metadata = {
    ...searchMetadata,
    ...{
        title: "SyncAPIM: Agility API Platform | 종합 API 관리 및 디지털 혁신 솔루션",
        description: "SyncAPIM은 API 게이트웨이, 개발자 포털, 분석 도구 등 종합적인 API 관리 기능을 제공하여 안정적이고 효율적인 API 운영을 지원합니다. 비즈니스 민첩성을 위한 맞춤형 아키텍처를 통해 디지털 혁신을 선도하고, 강력한 보안, 최적의 성능, 개발 효율성 향상으로 새로운 비즈니스 기회를 창출합니다",
        keywords: "SyncAPIM, API 관리, API 플랫폼, API 게이트웨이, 개발자 포털, API 분석, 디지털 혁신, 비즈니스 민첩성, API 보안, API 성능 최적화, API 수명 주기 관리, 마이크로서비스 (MSA), 커스터마이징, 오픈소스, 엔터프라이즈 솔루션, SI 프로젝트, API 운영, API 개발, API 테스트, API 통합, 모니터링, RESTful AP"
    },
};


export default function FeaturesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <div className="pt-6 xl:pt-9"></div>
          <Faq />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                엠파시의 혁신을 이끄는 핵심 기술들.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands2 />
                </div>
              </div>
            </div>
          </div>
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
