import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/synccms/Hero";
import KeyFeatures from "@/components/innerpages/synccms/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/synccms/Cta";
import Brands2 from "@/components/common/Brands2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "SyncCMS || 웹사이트 및 콘텐츠 관리 시스템",
  description: "SyncCMS는 최신 Java 기술 기반으로 설계되어 높은 안정성과 확장성을 제공하며, SEO 친화적인 구조를 통해 웹사이트의 검색 노출을 효과적으로 향상시킵니다",
  keywords: "SyncCMS, CMS, 콘텐츠 관리 시스템, SEO 최적화,  웹사이트 구축, Java 기반, 오픈소스, 템플릿, 다국어 지원, 사용자 친화적 UI, 확장성, Headless CMS, Headful CMS,  모듈화된 구조, 사용자 친화적 인터페이스, 템플릿 지원, 다중 사이트 및 다국어 지원",
  author: "엠파시"
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
