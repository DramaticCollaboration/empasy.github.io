import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
import Brands from "@/components/common/Brands2";
import Blogs from "@/components/homes/home-2/Blogs";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
      "언제든 연락주세요 || 살아 있는 소프트웨어를 만듭니다.",
  description:
      "엠파시는 SyncBoot, SyncAdmin, SyncCMS, SyncEta로 구성된 Sync Series를 통해 기업의 디지털 혁신과 비즈니스 민첩성을 극대화합니다. MSA 기반 백엔드, 프론트엔드, CMS, AI 테스트 자동화로 개발 속도를 높이고 품질을 보장하며 유지보수 비용을 절감하세요.",
  keywords:
      "엠파시, Empasy, Sync Series, SyncBoot, SyncAdmin, SyncCMS, SyncEta, 마이크로서비스 아키텍처, MSA, 소프트웨어 개발, 솔루션, 디지털 혁신, 비즈니스 민첩성, 개발 플랫폼, 백엔드, 프론트엔드, 콘텐츠 관리 시스템, CMS, AI 테스트, 자동화 테스트, QA, 품질 보증, CI/CD, DevOps, 웹사이트 구축, 시스템 통합, SI, ITO, 맞춤형 솔루션, Java, Vue.js, Vue 3, Vite, TypeScript, Freemarker, Selenium"
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
          <Faq />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-8 sm:pb-9 xl:pb-9">
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
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
}
