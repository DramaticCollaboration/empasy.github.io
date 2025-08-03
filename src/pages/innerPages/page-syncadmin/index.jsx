import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/syncadmin/Hero";
import KeyFeatures from "@/components/innerpages/syncapim/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Brands2 from "@/components/common/Brands2";
import MetaComponent from "@/components/common/MetaComponent";
import Cta from "@/components/innerpages/syncadmin/Cta.jsx";
const metadata = {
  title: "SyncAdmin: Vue 3 기반 오픈소스 관리 시스템 템플릿 | 빠른 백오피스 개발",
  description: "SyncAdmin은 Vue 3, Vite, TypeScript 기반 오픈소스 관리 시스템 템플릿으로, 중대형 백오피스 및 관리자 대시보드 개발 속도를 혁신적으로 향상시킵니다. 다국어 지원, 세분화된 권한 관리, 유연한 테마 커스터마이징, Mock 서버 내장 등 풍부한 기능과 재사용 가능한 컴포넌트를 제공하여 기업용 시스템 구축의 효율성과 민첩성을 극대화합니다. ERP, CRM, 인사 관리 시스템 및 데이터 시각화 대시보드 구축에 이상적인 솔루션입니다.",
  keywords: "SyncAdmin, Vue 3, Vite, TypeScript, 오픈소스, 관리 시스템 템플릿, 백오피스 개발, 관리자 대시보드, 프론트엔드 개발, 빠른 개발, 기업용 시스템, Pinia, 다국어 지원, 권한 관리, 테마 커스터마이징, Mock 서버, UI 프레임워크, 모노레포, 재사용 가능한 컴포넌트, ERP 시스템, CRM 시스템, 데이터 시각화, 엠파시, Sync Series"
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
