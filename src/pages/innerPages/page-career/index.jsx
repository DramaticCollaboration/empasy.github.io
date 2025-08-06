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
      "엠파시는 SyncBoot, SyncAdmin, SyncCMS, SyncEta로 구성된 Sync Series를 통해 기업의 디지털 혁신과 비즈니스 민첩성을 극대화합니다. MSA 기반 백엔드, 프론트엔드, CMS, AI 테스트 자동화로 개발 속도를 높이고 품질을 보장하며 유지보수 비용을 절감하세요.",
  keywords:
      "엠파시, Empasy, Sync Series, SyncBoot, SyncAdmin, SyncCMS, SyncEta, 마이크로서비스 아키텍처, MSA, 소프트웨어 개발, 솔루션, 디지털 혁신, 비즈니스 민첩성, 개발 플랫폼, 백엔드, 프론트엔드, 콘텐츠 관리 시스템, CMS, AI 테스트, 자동화 테스트, QA, 품질 보증, CI/CD, DevOps, 웹사이트 구축, 시스템 통합, SI, ITO, 맞춤형 솔루션, Java, Vue.js, Vue 3, Vite, TypeScript, Freemarker, Selenium"
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
