import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/synccrawl/Hero";
import Faq from "@/components/homes/home-2/Faq";
import Brands2 from "@/components/common/Brands2";
import MetaComponent from "@/components/common/MetaComponent";
import Cta from "@/components/innerpages/synccrawl/Cta.jsx";
import { searchMetadata }  from "@/utlis/searchMeta";
import Search from "@/pages/homes/home-1/Search.jsx";

const metadata = {
    ...searchMetadata,
    ...{
        title: "SyncCrawl | 자연어 지능형 웹 크롤링 및 RAG 지식 구축 플랫폼",
        description: "자연어 명령으로 웹 데이터를 수집하고 RAG 지식 기반을 구축합니다. 웹 구조 변경에 자동 대응하여 운영 효율성을 극대화하며, LLM 환각 없는 정확하고 신뢰도 높은 답변을 제공하는 지능형 통합 크롤링 솔루션입니다.",
        keywords: "웹 크롤링 솔루션,지능형 크롤링,크롤링 자동화,통합 크롤링 시스템,웹 데이터 수집,B2B 지식 솔루션,리서치 자동화,RAG (검색 증강 생성),RAG 지식 기반 구축,LLM 환각 방지,시맨틱 검색,맥락 기반 질의응답,AI 에이전트,벡터 저장소 연동,임베딩 생성,한국어 최적화,자연어 명령 크롤링,운영 효율성 극대화,추가 개발 노력 최소화,자동 적응 시스템,비개발자 크롤링,적응형 크롤링,자동화된 선택자 재학습,동적 웹 크롤링,LangChain4j,Playwright MCP,Vector DB,크로스 플랫폼 UI,다중 브라우저 지원"
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
            <Search searchWord="SyncAdmin" />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
