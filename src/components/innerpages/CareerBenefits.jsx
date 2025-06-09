import { benefitsData } from "@/data/career";
import React from "react";

export default function CareerBenefits() {
  return (
    <div
      id="career_benefits"
      className="career-benefits section panel pb-6 xl:pb-9 overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack max-w-850px mx-auto"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <p className="fs-5 xl:fs-3 text-dark dark:text-white text-opacity-70">
                우리는 우리 팀을 정말 소중하게 생각합니다.<br/>
                일터에서는 물론, 집에서도 든든히 응원받을 수 있도록 항상 노력하고 있어요.<br/>
                그 덕분에 자랑스러운 ‘일과 삶의 균형’ 문화를 지켜가고 있답니다.<br/>
                엠파시와 함께하면 누릴 수 있는 몇 가지 특별한 혜택, 지금 소개할게요
              </p>
              <div className="panel mt-4 xl:mt-6">
                <div className="row child-cols-6 lg:child-cols-4 col-match g-3">
                  {benefitsData.map((benefit, index) => (
                    <div key={index}>
                      <div className="panel hstack gap-1">
                        <i className="icon icon-2 unicon-checkmark text-primary" />
                        <span className="fs-6 sm:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                          {benefit}
                        </span>
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
