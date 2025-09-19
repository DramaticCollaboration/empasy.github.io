import { panelsData } from "@/data/facts";
import React from "react";

export default function About2() {
  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div
          className="d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
        >
          <div className="position-absolute bottom-0 start-0 ms-n8 mb-6">
            <img
              className="w-150px xl:w-250px d-block dark:d-none"
              alt="walking"
              src="/assets/images/template/walking.svg"
              width="224"
              height="226"
            />
            <img
              className="w-150px xl:w-250px d-none dark:d-block"
              alt="walking-dark"
              src="/assets/images/template/walking-dark.svg"
              width="224"
              height="227"
            />
          </div>
        </div>
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 mb-4">엠파시는 어떻게 고객을 돕나요?</h2>
                <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                    빠르게 변하는 시장, 따라가기 벅찬 시스템... 많이 힘드셨죠?<br/>
                    엠파시는 바로 그 어려움에 깊이 공감합니다.<br/>
                    저희는 예측 불가능한 변화에 민첩하게 대응하는 <b>'살아있는 소프트웨어'</b>를 만듭니다.<br/>
                    '변화에 최적화된 솔루션'으로 고객의 비즈니스 민첩성을 극대화하는 것이 저희의 목표입니다.<br/><br/>

                    어떻게 돕냐고요? 저희는 <b>'Sync Series'</b>로 개발부터 운영까지 전 과정을 혁신합니다.
                </p>
                <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                   <b>SyncBoot와 SyncAdmin</b>을 통해 개발자들은 반복적인 인프라 구축 대신 핵심 비즈니스 로직에만 집중할 수 있어 개발 속도가 획기적으로 빨라집니다.<br/>
                   <b>SyncCMS</b>는 코딩을 모르는 마케터나 운영자도 직접 웹 콘텐츠를 쉽게 관리하게 해주고,<br/>
                   <b>SyncETA</b>는 AI가 지루한 반복 테스트를 대신해줘서 품질 걱정 없이 더 빠른 출시를 가능하게 하죠.
                </p>
                <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                    단순한 도구 제공을 넘어, 저희는 <b>‘DNA에 각인된 맞춤화(Customization in its DNA)’</b> 정신으로 고객의 비즈니스 환경에 꼭 맞는 솔루션을 함께 만듭니다.<br/>
                    결국, 고객이 시장 변화를 기회로 만들고 새로운 비즈니스를 창출하도록 돕는 것, 그것이 엠파시가 일하는 방식입니다.
                </p>

                <div className="panel mt-6">
                <div className="row child-cols-6 lg:child-cols-4 justify-center g-3 col-match">
                  {panelsData.map((panel, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-1">
                        <h4 className="h2 xl:h1 m-0">
                          <span data-anime={panel.animationData}>
                            {panel.value}
                          </span>
                          {panel.suffix && panel.suffix}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 text-nowrap">
                          {panel.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
