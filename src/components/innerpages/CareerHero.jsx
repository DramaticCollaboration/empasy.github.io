import React from "react";

export default function CareerHero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-400px sm:h-500px lg:h-screen xl:h-screen bg-secondary dark:bg-gray-800 z-0" />
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
      <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                당신의 다음, 엠파시에서
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                우리는 우리의 비전에 공감하는 멋진 분들을 기다리고 있어요.<br/>
                변화에 유연하고, 열정 넘치며, 함께하는 일을 좋아하시나요?<br/>
                빠르게 움직이는 팀워크 중심의 환경이 즐겁게 느껴진다면,<br/>
                바로 당신이 저희가 찾고 있는 분이에요!
              </p>
            </div>
            <div className="panel">
              <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                <img
                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                  alt="Career"
                  src="/assets/images/career/career.jpg"
                  width="1500"
                  height="1000"
                  style={{objectFit: "fill"}}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
