import { Link } from "react-router-dom";
import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl lg:max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                엠파시는
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Sync Series는 '변화에 최적화된 솔루션'을 핵심 가치로 삼아 APIM, Boot, CMS, ETA로 구성된 플랫폼을 제공합니다.<br/>
                우리는 AI 기술을 적극적으로 활용하여 제품을 개발하고 있으며, 특히 SyncEta는 화면 검증과 LLM(Large Language Model)을 활용해 자연어로 테스트를 자동 생성하는 등 테스트 자동화의 새로운 기준을 제시합니다.<br/>
                이를 통해 고객의 소프트웨어 개발부터 테스트까지 전 과정의 속도와 유연성을 극대화하고,<br/>
                운영 효율 향상, 비용 절감, 안정성 확보 등 실질적인 가치를 제공합니다.
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul
                  className="main-features-nav hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist"
                >
                  <li
                    className={`${activeTab == 1 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(1)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">SyncCMS</a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    className={`${activeTab == 2 ? "uc-active" : ""}`}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">SyncBoot</a>
                  </li>
                  <li
                    className={`${activeTab == 3 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(3)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">
                      SyncApim
                    </a>
                  </li>
                  <li
                    className={`${activeTab == 4 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(4)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">SyncEta</a>
                  </li>
                </ul>
              </div>
              <div
                className="main-features-switcher uc-switcher overflow-hidden"
                role="presentation"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                {activeTab == 1 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              style={{ objectFit: 'fill' }}
                              className="media-cover image"
                              alt="Share tools quickly and confidently in minutes"
                              src="/assets/images/product/synccms.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    콘텐츠 관리의 효율성
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    웹 콘텐츠를 비전문가도 쉽고 효율적으로 관리하고, 모듈형 구조로 비즈니스 변화에 유연하게 대응 가능한 콘텐츠 관리 시스템입니다.
                                    콘텐츠 관리의 효율성을 높이고, 변화에 빠르게 대응하는 비즈니스 민첩성을 확보하세요
                                  </p>
                                  <Link
                                    to="/page-synccms"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>자세히</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              style={{ objectFit: 'fill' }}
                              className="media-cover image"
                              alt="Connect every part of your entire business"
                              src="/assets/images/product/syncboot.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    기업용 애플리케이션 개발의 효율성과 신속성 지원
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    비즈니스 민첩성을 위한 빠른 개발 플랫폼입니다. 마이크로서비스 기반으로 개발 속도를 높여 변화에 신속하게 대응하도록 지원합니다
                                  </p>
                                  <Link
                                      to="/page-syncboot"
                                      className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>자세히</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              style={{ objectFit: 'fill' }}
                              className="media-cover image"
                              alt="Maintain compliance and control your apps"
                              src="/assets/images/product/syncapim.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    API 관리 플랫폼
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    비즈니스 민첩성을 위한 API 관리 플랫폼입니다. 종합적인 API 관리로 서비스 개발 및 통합을 가속화하여 디지털 혁신과 경쟁력 강화를 지원
                                  </p>
                                  <Link
                                    to="/page-syncapim"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>자세히</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 4 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              style={{ objectFit: 'fill' }}
                              className="media-cover image"
                              alt="Review quickly and confidently"
                              src="/assets/images/product/synceta.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    테스트 자동화를 통한 개발 및 배포 주기 단축
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    웹/API 테스트 자동화 플랫폼입니다. 코딩 없이 쉽고 빠르게 테스트를 자동화하여 개발/배포 속도와 품질을 높이고, 변화에 민첩하게 대응하도록 지원합니다. CI/CD 연동으로 안정적인 배포 환경을 구축
                                  </p>
                                  <Link
                                    to="/page-synceta"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>자세히</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
