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
                              src="/assets/images/product/synccms/SyncCms.jpg"
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
                                    누구나 웹 전문가! SyncCMS로 쉽고 빠르게
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                      웹사이트 문구 하나, 이미지 하나 바꾸는 일, 아직도 개발자에게 부탁하시나요?<br/>
                                      <b>SyncCMS는 코딩을 모르는 마케터나 운영자도 직접 웹사이트 콘텐츠를 쉽고 빠르게 관리할 수 있는 Java 기반 콘텐츠 관리 시스템(CMS)입니다</b>.<br/><br/>

                                      <b>모듈 구조</b>로 필요한 기능만 쏙쏙 골라 쓰고, 비즈니스 성장에 맞춰 유연하게 확장할 수 있어요.<br/>
                                      사용자 친화적인 UI는 기본, 강력한 **SEO 최적화 기능**까지 내장되어 있어 사이트 홍보 효과도 톡톡히 볼 수 있죠.<br/>
                                      SyncCMS로 똑똑하고 유연한 웹사이트 운영을 경험해보세요!
                                  </p>
                                  <Link
                                    to="/synccms"
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
                              src="/assets/images/product/syncboot/SyncBoot.jpg"
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
                                      MSA 개발, 헤매지 말고 SyncBoot!
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                      복잡한 마이크로서비스(MSA) 개발, 더 이상 고민하지 마세요! <b>SyncBoot는 MSA 구축에 필요한 모든 것을 담은 Java 기반 오픈소스 빠른 개발 플랫폼</b>입니다.
                                      <br/><br/>
                                      인증/권한 관리부터 CI/CD, 강력한 모니터링까지, 검증된 기업용 기능들이 <b>E2E(End-to-End) 솔루션</b>으로 모두 준비되어 있어요.<br/>
                                      개발자는 반복적인 인프라 구축 대신 <b>핵심 비즈니스 로직에만 집중</b>할 수 있죠.<br/>
                                      특정 업체에 종속되지 않는 유연함과 다수의 구축사례로 검증된 안정성으로 여러분의 비즈니스 민첩성을 극대화해 보세요!<br/>
                                  </p>
                                  <Link
                                      to="/syncboot"
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
                              src="/assets/images/product/syncapim/SyncApim.jpg"
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
                                     API 개발부터 운영까지, 복잡한 관리는 이제 그만!
                                  </h3>
                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                        SyncAPIM은 API의 생성, 배포, 보안, 모니터링, 분석까지 모든 생명주기를 **하나의 플랫폼에서 해결**하는 통합 API 관리
                                        솔루션입니다.<br/>
                                        직관적인 개발자 포털과 API 수명 주기 자동화 기능으로 **개발 효율을 극대화**하고, 개발자는 핵심 비즈니스 로직에만
                                        집중할 수 있어요.<br/><br/>

                                        강력한 보안과 안정적인 운영 환경은 기본! <b>‘DNA에 각인된 맞춤화(Customization in its DNA)’</b> 정신으로 고객의
                                        비즈니스 환경에 꼭 맞는 유연한 솔루션을 제공해 새로운 비즈니스 기회를 함께 만들어갑니다.
                                    </p>
                                    <Link
                                    to="/syncapim"
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
                              src="/assets/images/product/synceta/SycnEta.jpg"
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
                                      AI가 알아서 해주는 테스트 자동화
                                  </h3>
                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                        <b>반복적인 웹 테스트, 이제부턴 AI에게 맡겨주세요.</b><br/>
                                        SyncETA는 여러분의 마우스 클릭과 키보드 입력을 그대로 녹화하고, 똑똑한 AI가 사람이 읽기 쉬운 엑셀 테스트케이스로 알아서 만들어
                                        드립니다.<br/><br/>

                                        <b>코딩 지식이요? 전혀 필요 없어요!</b><br/>
                                        이 과정만으로 테스트케이스 작성 시간을 <b>최대 80%까지</b> 줄일 수 있죠.<br/>
                                        더 놀라운 건, QA의 피드백을 먹고 자라나는 AI가 쓸수록 더 정확하고 믿음직한 테스트를 보장한다는 점입니다.<br/>
                                        이제 지루한 반복 작업에서 벗어나 더 중요한 일에 집중하세요!<br/>
                                    </p>
                                    <Link
                                    to="/synceta"
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
