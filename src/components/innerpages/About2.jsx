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
                엠파시는 <b>"변화에 최적화된 솔루션"</b>과 <b>"비즈니스 민첩성"</b> 확보를 통해 고객을 돕습니다.<br/>
                핵심 제품인 Sync Series(Admin, Boot, CMS, ETA, APIM)는 개발, 운영, 테스트, 콘텐츠 및 API 관리 등 소프트웨어 라이프사이클 전반에서 <b>속도, 효율성, 유연성을 극대화</b>합니다.<br/>
                이를 통해 고객은 빠르게 변하는 시장 환경에 민첩하게 대응하고, 경쟁 우위를 확보하며, <b>'살아있는 소프트웨어'</b>로 지속 가능한 성장을 이룰 수 있습니다.<br/>
                또한, SI/ITO, 모바일 사업, 기술 지원 및 컨설팅 등 다양한 사업 및 서비스를 통해 고객의 시스템 구축/운영 효율화와 디지털 혁신을 지원합니다.<br/>
                <b>"공감을 통한 시너지"</b>를 바탕으로 고객과 깊이 협력하여 최상의 결과를 만들어냅니다
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                <b>변화에 최적화된 솔루션으로 비즈니스 민첩성을 선도합니다.</b><br/>
                빠르게 바뀌는 시장 환경 속에서도 귀사의 소프트웨어가 민첩하게 대응하고, 경쟁 우위를 확보하도록 돕습니다.<br/>
                Sync Series는 개발, 운영, 테스트, 콘텐츠 관리 전반에서 속도와 효율성, 유연성을 극대화합니다.<br/>
                'Boon to business by agility' 정신 아래, 엠파시는 'Empathic Synergy(공감을 통한 시너지)'를 통해 고객과 깊이 공감하고 협력하여 혁신을 만들어갑니다.<br/>
                <b>'살아있는 소프트웨어'</b>로 귀사의 지속 가능한 성장을 지원합니다.<br/>
                지금 엠파시와 함께 변화를 기회로 만드세요.
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
