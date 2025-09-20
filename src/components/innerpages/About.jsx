import React from "react";
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
            <article className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                <hr className="my-6 border-gray-200" />

                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    빠르게 변하는 세상, 소프트웨어도 살아 움직여야 합니다.
                </h1>

                <p className="mb-4">
                    <strong>엠파시(Empasy)</strong>는 'Empathic Synergy(공감 시너지)'라는 이름처럼,
                    깊은 공감과 협업을 통해 비즈니스 변화에 최적화된{" "}
                    <strong>‘살아있는 소프트웨어’</strong>를 만듭니다.
                    소프트웨어를 얼마나 빨리 바꾸고 적용할 수 있느냐가
                    결국 비즈니스 민첩성의 핵심이니까요.
                </p>

                <p className="mb-6">
                    이를 위해 소프트웨어 개발부터 테스트까지, 전 과정을 아우르는{" "}
                    <strong>‘Sync Series’</strong> 솔루션 제품군을 개발했습니다.
                </p>

                <ul className="space-y-8">
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold mb-2">SyncBoot (백엔드)</h3>
                        <p>
                            Java 기반의 빠른 개발 플랫폼으로, MSA(마이크로서비스 아키텍처) 구현의 핵심입니다.
                            권한 관리, 보안 같은 복잡한 기업용 기능들을 미리 갖추고 있어,
                            개발자들은 비즈니스의 핵심 로직에만 집중할 수 있습니다.
                        </p>
                    </li>
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold mb-2">SyncAdmin (프론트엔드)</h3>
                        <p>
                            최신 기술(Vue 3, Vite)을 활용한 관리 시스템 템플릿입니다.
                            마치 레고를 조립하듯 재사용 가능한 컴포넌트로 복잡한 관리 화면을
                            빠르고 유연하게 만들어, 변화하는 요구사항에 신속히 대응할 수 있습니다.
                        </p>
                    </li>
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold mb-2">SyncCMS (콘텐츠 관리)</h3>
                        <p>
                            개발자가 아니어도 마케터나 운영 담당자가 웹사이트 콘텐츠를 쉽게 관리할 수 있는 CMS입니다.
                            덕분에 시장 변화에 맞춰 직접 콘텐츠를 수정하고 웹사이트를 계속 발전시킬 수 있죠.
                        </p>
                    </li>
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold mb-2">SyncEta (테스트 자동화)</h3>
                        <p>
                            AI 기반의 차세대 테스트 자동화 플랫폼입니다.
                            코딩 지식이 없어도 사용자의 행동을 기록해 테스트를 자동화하고,
                            AI가 테스트 케이스 생성부터 실패 원인 분석까지 도와
                            품질은 높이고 출시 속도는 앞당깁니다.
                        </p>
                    </li>
                </ul>

                <p className="mt-8">
                    엠파시의 <strong>Sync Series</strong>는 각자의 영역에서 속도와 유연성을 극대화하여,
                    기업이 예측 불가능한 시장 변화 속에서도 경쟁력을 유지하도록 돕는 최고의 파트너가 될 것입니다.{" "}
                    <strong>복잡한 기술은 엠파시에게 맡기고, 비즈니스의 성장에만 집중하세요.</strong>
                </p>
            </article>
            </div>
              <div className="panel row child-cols-12 col-match g-1 sm:g-2">
                  <div className="col-12">
                      <video controls autoPlay="" name="media">
                          <source src="/assets/video/엠파시_소개_v2.mp4" type="video/mp4"/>
                      </video>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
