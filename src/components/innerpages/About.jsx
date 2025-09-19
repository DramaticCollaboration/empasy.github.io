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
                    저희의 모든 생각은 '엠파시(Empathy)', 즉 깊은 공감에서 시작됩니다.<br/>
                    회사 이름 'EmpaSy'는 고객과 팀원 서로를 깊이 이해하고 협업할 때 최고의 결과가 나온다는 의미의 '**Empathic Synergy(공감 시너지)**'를 담고
                    있습니다.<br/><br/>

                    저희는 급변하는 비즈니스 환경 속에서 기업이 겪는 어려움에 먼저 공감합니다.<br/>
                    기존의 거대하고 경직된 시스템으로는 시장의 속도를 따라잡기 어렵다는 것을 잘 알기 때문이죠.<br/>
                    그래서 저희는 예측 불가능한 변화에 민첩하게 대응하는 '<b>살아있는 소프트웨어</b>'를 만듭니다.<br/>
                    '변화에 최적화된 솔루션'이라는 저희의 약속은 바로 이 지점에서 출발합니다.<br/><br/>

                    이러한 공감의 문화는 저희 팀 안에서도 가장 중요한 원칙입니다.<br/>
                    저희는 <b>애자일(Agile)한 협업 문화</b>를 통해 투명하게 소통하고 함께 성장합니다.<br/>
                    동시에 누구도 눈치 보지 않는 <b>건강한 워라밸</b>을 최우선으로 존중합니다.<br/>
                    잘 쉬고, 잘 협업하는 팀만이 고객의 문제를 진정으로 해결할 수 있는 '공감 시너지'를 만들어낼 수 있다고 믿기 때문입니다.<br/><br/>

                    기술로 고객의 비즈니스를 돕고, 마음으로 고객과 함께 성장하는 것. 그것이 바로 저희가 꿈꾸는 엠파시의 모습입니다.
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
