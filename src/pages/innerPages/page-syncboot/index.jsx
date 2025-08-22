import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/syncboot/Hero";
import KeyFeatures from "@/components/innerpages/syncboot/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/syncboot/Cta";
import Brands2 from "@/components/common/Brands2";
import MetaComponent from "@/components/common/MetaComponent";
import { searchMetadata }  from "@/utlis/searchMeta";

const metadata = {
    ...searchMetadata,
    ...{
        title: "SyncBoot: Java 기반 MSA 빠른 개발 플랫폼 | 엔터프라이즈 솔루션",
        description: "SyncBoot는 Java 기반 오픈소스 마이크로서비스 아키텍처(MSA) 빠른 개발 플랫폼입니다. 기업용 애플리케이션의 신속한 개발, 배포, 안정적인 운영을 위한 E2E 솔루션을 제공하며, CI/CD, 모니터링, API 관리, 강력한 보안을 통해 비즈니스 민첩성과 효율성을 극대화합니다.",
        keywords: "SyncBoot, Java 기반, 마이크로서비스 (MSA), 빠른 개발, 오픈소스, 기업용 애플리케이션, Service Mesh, API Management,  API 게이트웨이,  Cloud-native MSA, 클라우드 네이티브 ,  Functions‑as‑a‑Service (FaaS), AI 기반 자가 치유(AI Self-Healing), GitOps, 컨테이너 및 오케스트레이션, 하이브리드 클라우드 및 분산 시스템, 모놀리식→MSA 점진적 전환, SAGA 패턴, 이벤트 소싱, MSA 베스트 프랙티스, 개발 플랫폼, Spring Boot, Spring Cloud, CI/CD, DevOps, 컨테이너, API 관리, 모니터링, E2E 솔루션, 확장성, ERP 시스템, CRM 시스템, 백오피스, 데이터 시각화, 클라우드 네이티브, 보안, 시스템 통합, 플러그인 구조, 낮은 학습 곡선"
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
