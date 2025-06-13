import { Link, useLocation } from "react-router-dom";

import { pagesData } from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
      <>
          <li>
              <Link to={`/page-about`}>엠파시는</Link>
          </li>
          <li className="has-dd-menu" style={{position: "relative"}}>
              <a href="#" role="button" aria-haspopup="true">
                  제품{" "}
                  <span
                      data-uc-navbar-parent-icon=""
                      className="uc-icon uc-navbar-parent-icon"
                  >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.1"
                  points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
              </a>
              <div
                  className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
                  data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
              >
                  <div
                      className="row child-cols-6 g-0 col-match uc-grid uc-grid-stack"
                      data-uc-grid=""
                  >
                      <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                              <li>
                                  <Link
                                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                      to={`/page-synccms`}
                                  >
                                      <i className="icon-1 unicon-view fw-bold text-primary dark:text-secondary"/>
                                      <span className="vstack gap-narrow mt-nnarrow">
                                          <b className="fw-bold dark:text-white">SyncCMS</b>
                                          <span className="fw-normal">
                                            비전문가도 변화에 쉽게 대응하는 웹 콘텐츠 관리
                                          </span>
                                        </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                      to={`/page-syncboot`}
                                  >
                                      <i className="icon-1 unicon-tools-alt fw-bold text-primary dark:text-secondary"/>
                                      <span className="vstack gap-narrow mt-nnarrow">
                                          <b className="fw-bold dark:text-white">SyncBoot</b>
                                          <span className="fw-normal">
                                            변화에 민첩한 오픈소스 MSA 개발 플랫폼
                                          </span>
                                        </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                      to={`/page-syncadmin`}
                                  >
                                      <i className="icon-1 unicon-chart-stacked fw-bold text-primary dark:text-secondary"/>
                                      <span className="vstack gap-narrow mt-nnarrow">
                                      <b className="fw-bold dark:text-white">SyncAdmin</b>
                                      <span className="fw-normal">
                                        최신 기술로 빠르고 유연한 관리 시스템
                                      </span>
                                    </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                      to={`/page-syncapim`}
                                  >
                                      <i className="icon-1 unicon-cloud fw-bold text-primary dark:text-secondary"/>
                                      <span className="vstack gap-narrow mt-nnarrow">
                                          <b className="fw-bold dark:text-white">SyncApim</b>
                                          <span className="fw-normal">
                                            API 관리부터 생태계까지, 민첩성 확보
                                          </span>
                                        </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                      to={`/page-synceta`}
                                  >
                                      <i className="icon-1 unicon-awake fw-bold text-primary dark:text-secondary"/>
                                      <span className="vstack gap-narrow mt-nnarrow">
                                      <b className="fw-bold dark:text-white">SyncEta</b>
                                      <span className="fw-normal">
                                        AI 자동 테스트로 품질 UP, 비즈니스 민첩성 확보
                                      </span>
                                    </span>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <div className="vstack gap-2 p-3 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                              <div
                                  className="featured-image panel"
                                  data-uc-lightbox="video-autoplay: true;"
                              >
                                  <figure
                                      className="featured-image m-0 rounded ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden">
                                      <img
                                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                          alt="Image"
                                          src="/assets/images/menu/evolution.jpg"
                                          width="1500"
                                          height="1000"
                                      />
                                  </figure>
                              </div>
                              <div className="vstack justify-between gap-2">
                                  <div className="vstack gap-1">
                                      <h5 className="h6 m-0">
                                          변화 최적화 Sync Series, 비즈니스 민첩성 확보
                                      </h5>
                                      <p className="fs-7 opacity-70">
                                          급변하는 비즈니스 환경 속, 변화에 최적화된 솔루션으로 개발부터 운영 전반의 민첩성을 확보하여 기업 경쟁력 강화에 기여합니다
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </li>

          <li>
              <Link to={`/page-contact`}>문의하기</Link>
          </li>
          <li>
              <Link to={`/page-team`}>엠파시 사람들</Link>
          </li>
          <li>
              <Link to={`/blog`}>블로그</Link>
          </li>
          <li>
              <Link to={`/page-career`}>인재 모집</Link>
          </li>
      </>
  );
}
