import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import JobDetails from "@/components/innerpages/JobDetails";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import { useParams } from "react-router-dom";
import { jobListings } from "@/data/career";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
      "당신의 다음, 엠파시에서 || 살아 있는 소프트웨어를 만듭니다.",
  description:
      "엠파시는 SyncBoot, SyncAdmin, SyncCMS, SyncEta로 구성된 Sync Series를 통해 기업의 디지털 혁신과 비즈니스 민첩성을 극대화합니다. MSA 기반 백엔드, 프론트엔드, CMS, AI 테스트 자동화로 개발 속도를 높이고 품질을 보장하며 유지보수 비용을 절감하세요.",
  keywords:
      "엠파시, Empasy, Sync Series, SyncBoot, SyncAdmin, SyncCMS, SyncEta, 마이크로서비스 아키텍처, MSA, 소프트웨어 개발, 솔루션, 디지털 혁신, 비즈니스 민첩성, 개발 플랫폼, 백엔드, 프론트엔드, 콘텐츠 관리 시스템, CMS, AI 테스트, 자동화 테스트, QA, 품질 보증, CI/CD, DevOps, 웹사이트 구축, 시스템 통합, SI, ITO, 맞춤형 솔루션, Java, Vue.js, Vue 3, Vite, TypeScript, Freemarker, Selenium"
};
export default function CareerDetailsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <div
            id="hero_header"
            className="hero-header section panel overflow-hidden"
          >
            <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
              <div className="container max-w-lg">
                <div className="section-inner panel">
                  <div className="vstack items-center text-center gap-2 lg:gap-4">
                    <span className="fs-6 fw-bold text-uppercase text-primary">
                      이런 분을 상시 기다리고 있어요
                    </span>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto">
                        공감과 협업으로 변화를 주도하는 인재
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <JobDetails />
          <Brands />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
