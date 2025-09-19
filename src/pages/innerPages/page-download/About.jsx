import React from "react";
import Download from "@/components/innerpages/Download.jsx";

export default function About() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
          <img
            className="w-24px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <img
            className="w-32px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                  SyncETA 다운로드
              </h1>
              <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                <b>반복적인 수작업 테스트와 복잡한 스크립트 작성에 소요되던 시간은 이제 끝입니다.</b><br/>
                  SyncETA는 사용자의 브라우저 동작을 그대로 녹화하고, AI가 테스트케이스를 자동으로 생성하여 개발 지식이 없는 사용자도 누구나 쉽게 테스트 자동화를 구축할 수 있는 혁신적인 솔루션입니다.
                  다운로드를 완료하고 SyncETA가 제공하는 강력한 기능들을 지금 바로 경험해보세요.
              </p>
                <a
                    href="https://doc.empasy.com/synceta/intro.html"
                    className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                    target="_blank"
                >
                    <span>사용자 가이드</span>
                    <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
                </a>
                <Download />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
