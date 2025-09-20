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
                    <article className="py-12 px-4 flex justify-center">
                        {/* 헤더 */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                            엠파시, 우리는 이렇게 일해요!
                        </h1>

                        {/* 본문 */}
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>안녕하세요! 엠파시(Empasy) 팀이 일하는 방식을 소개해 드릴게요.</p>

                            <p>
                                저희 이름은 <strong>'공감 시너지(Empathic Synergy)'</strong>에서 왔어요.
                                동료, 고객, 파트너와 깊이 공감하고 협력할 때 가장 멋진 결과가 나온다고 믿기 때문이죠.
                                이 믿음은 저희가 일하는 모든 방식에 녹아있습니다.
                            </p>

                            <p>
                                오늘날 비즈니스 환경은 정말 빠르게 변하잖아요. 그래서 저희는{" "}
                                <strong>"변화에 최적화된 솔루션"</strong>을 만드는 것을 최고의 가치로 삼고 있어요.
                                엠파시의 소프트웨어는 한번 만들고 끝이 아니라, 비즈니스와 함께 계속 진화하는{" "}
                                <strong>'살아있는 소프트웨어'</strong>랍니다.
                            </p>

                            <p>
                                이런 목표를 위해 저희는 <strong>애자일(Agile) 문화</strong> 속에서 일합니다.
                                투명하게 업무를 공유하고, <strong>협업과 빠른 피드백</strong>을 통해 실험과 학습을 두려워하지 않죠.
                                최신 기술을 끊임없이 탐구하고 적용하는 것은 물론이고요.
                                저희의 Sync Series 솔루션들이 바로 이런 문화의 결과물입니다.
                            </p>

                            <p>
                                하지만 저희가 가장 중요하게 생각하는 건 '사람'이에요.
                                엠파시는 혁신적인 기술만큼 <strong>건강한 워라밸</strong>을 핵심 가치로 여깁니다.{" "}
                                <strong>주말, 휴가, 업무 외 시간은 온전히 당신의 것</strong>이어야 해요.
                                실제로 저희는 업무 외 시간에 메시지에 답하지 않아도 전혀 문제가 되지 않는 문화를 실천하고 있습니다.
                                이러한 존중과 신뢰가 모여 더 큰 시너지를 만든다고 믿거든요.
                            </p>

                            <p>
                                엠파시는 기술에 공감을 더해, 고객의 비즈니스가 변화 속에서 민첩하게 성장하도록 돕는
                                든든한 파트너가 되겠습니다. 저희와 함께 변화를 즐길 준비, 되셨나요?
                            </p>
                        </div>
                    </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
