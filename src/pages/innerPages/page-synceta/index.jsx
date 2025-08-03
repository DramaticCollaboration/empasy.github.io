import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/synceta/Hero";
import KeyFeatures from "@/components/innerpages/synceta/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/synceta/Cta";
import Brands2 from "@/components/common/Brands2";
import MetaComponent from "@/components/common/MetaComponent";
import SyncEtaIntro from "@/components/product/SyncEtaIntro";

const metadata = {
  title: "SyncEta || AI 테스트 자동화 솔루션 | 스마트 QA 혁신의 시작",
  description: "AI 기반 테스트 자동화로 QA 시간을 80% 절감하세요. 코드 없는 테스트 생성, 자연어 시나리오 작성, 다양한 플랫폼 지원으로 QA의 새로운 기준을 제시합니다.",
  author: "엠파시",
  keywords: "AI 테스트 자동화, QA 자동화, 소프트웨어 테스트, 테스트 시나리오 생성, 코드리스 테스트, 자연어 테스트, 테스트 자동화 도구, 테스트 자동화 플랫폼, 테스트 효율화, TestOps"
};
export default function FeaturesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">

          <Hero />
          <SyncEtaIntro/>
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
