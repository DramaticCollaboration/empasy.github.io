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
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                엠파시, 그리고 우리의 생각
              </h1>
              <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                <b>변화에 최적화된 솔루션으로 비즈니스 민첩성을 선도합니다.</b><br/>
                빠르게 바뀌는 시장 환경 속에서도 귀사의 소프트웨어가 민첩하게 대응하고, 경쟁 우위를 확보하도록 돕습니다.<br/>
                Sync Series는 개발, 운영, 테스트, 콘텐츠 관리 전반에서 속도와 효율성, 유연성을 극대화합니다.<br/>
                'Boon to business by agility' 정신 아래, 엠파시는 'Empathic Synergy(공감을 통한 시너지)'를 통해 고객과 깊이 공감하고 협력하여 혁신을 만들어갑니다.<br/>
                <b>'살아있는 소프트웨어'</b>로 귀사의 지속 가능한 성장을 지원합니다.
                <br/>지금 엠파시와 함께 변화를 기회로 만드세요.
              </p>
            </div>
            <div className="panel row child-cols-12 col-match g-1 sm:g-2">
              <div className="col-4">
                <figure className="featured-image m-0 rounded ratio ratio-2x3 sm:rounded-2 uc-transition-toggle overflow-hidden">
                  <img
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="About image"
                    src="/assets/images/about/agile_board_ticket.jpg"
                    width="1000"
                    height="1500"
                  />
                </figure>
                <div className="position-absolute top-0 start-0 z-1 ms-n8 mt-n8 d-none lg:d-block">
                  <img
                    className="w-200px xl:w-250px d-block dark:d-none"
                    alt="hand-pencil"
                    src="/assets/images/template/hand-pencil.svg"
                    width="154"
                    height="309"
                  />
                  <img
                    className="w-200px xl:w-250px d-none dark:d-block"
                    alt="hand-pencil-dark"
                    src="/assets/images/template/hand-pencil-dark.svg"
                    width="154"
                    height="309"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="h-100">
                  <figure className="panel h-100 m-0 rounded sm:rounded-2 overflow-hidden">
                    <canvas className="h-100 w-100" />
                    <img
                      className="media-cover image"
                      alt="About image"
                      src="/assets/images/about/agile_meeting.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="position-absolute bottom-0 end-0 z-1 me-n8 mb-n8 d-none lg:d-block">
                  <img
                    className="w-200px xl:w-250px d-block dark:d-none"
                    alt="empathing"
                    src="/assets/images/template/empathing.svg"
                    width="278"
                    height="229"
                  />
                  <img
                    className="w-200px xl:w-250px d-none dark:d-block"
                    alt="empathing-dark"
                    src="/assets/images/template/empathing-dark.svg"
                    width="278"
                    height="229"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
