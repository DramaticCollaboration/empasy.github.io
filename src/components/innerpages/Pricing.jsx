import { tiers3 } from "@/data/pricing";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <img
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <img
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="vstack items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                SyncETA 요금제
              </h1>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                비즈니스 성장에 맞춰 유연하게
              </p>
              <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow border rounded-2 fs-7 fw-medium"
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={!isYearly ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsYearly(false)}
                    className="text-none w-128px cstack p-1"
                  >
                    매월
                  </a>
                </li>
                <li className={isYearly ? "uc-active" : ""}>
                  <a
                    onClick={() => setIsYearly(true)}
                    className="text-none w-128px cstack p-1"
                  >
                    매년
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-switcher pricing-switcher mt-4">
              <div className="uc-active">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers3.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div  className={`tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800 ${
                          tier.disabled ? 'opacity-40 pointer-events-none' : ''
                      }`}
                      >
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            인기
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {isYearly ? tier.yearlyPrice : tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {tier.priceDetails}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                                {tier.disabled ? (
                                    <span className="fs-6 fw-medium text-muted">준비 중입니다</span>
                                ) : (

                                    <Link
                                    to="/contact"
                                    className={`btn btn-md sm:btn-sm lg:btn-md ${
                                      tier.title === "설치형"
                                        ? "btn-dark"
                                        : "btn-primary"
                                    } text-white`}
                                  >
                                    {tier.linkText}
                                  </Link>
                                )}
                              <span className="fs-7 opacity-70 min-h-24px">
                                {!tier.disabled && tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.title === "무료"
                                ? "주요 기능:"
                                : `${
                                    tier.title === "베이직"
                                      ? "무료"
                                      : "베이직"
                                  }의 모든 기능 :`}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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
