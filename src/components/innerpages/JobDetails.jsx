import { benefits, requirement, tasks } from "@/data/jobDetails";
import React from "react";

export default function JobDetails() {
  return (
    <div id="job_details" className="job-details section panel pb-6 xl:pb-9">
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
              <div className="row g-3 gy-6 lg:g-6 lg:gy-8" data-uc-grid="">
                <div className="col-12 md:col-8 md:order-2">
                  <div className="panel fs-5 vstack gap-2">
                    <p>
                      엠파시는 “살아있는 소프트웨어를 만듭니다” 라는 슬로건으로 빠르게 변화하는 비즈니스 환경에 효율적으로 대응할수 있는 유연한 소프트웨어 개발을 통한 가치 창출을 목표로 하는 회사입니다.<br/>
                      유연한 소프트웨어 개발과 운영을 위해서는 고객과의 합리적인 소통 그리고 효율적인 개발 플랫폼이 필요합니다.<br/>
                      그래서 엠파시는<br/>
                      * 에자일을 통해서 고객및 팀간의 과의 합리적인 소통을 위해 노력하고 있습니다<br/>
                      * 마이크로서비스를 통해서 유연한 시스템에 필요한 플랫폼을 구축하고 있습니다.<br/><br/>

                      엠파시는 현재 두개의 솔루션을 보유하고 있습니다<br/>
                      * SyncCMS: Spring 기반 프레임웍을 통해서 자유로운 기능 확장이 가능한 콘텐츠 관리 시스템입니다.<br/>
                      * SyncBoot: 준비되 있는 마이크로서비스 플랫폼을 통해서 MSA구축에 필요한 자원을 절약할 수 있습니다<br/>
                      * SyncAPM : MSA에서 증가하는 API에 대한 관리및 모니터링 기능을 제공합니다.<br/>
                      * SyncEta : 복잡한 MSA 시스템을 위해서 손쉽게 브라우저 기반 회귀 테스트를 진행할수 있도록 하는 툴입니다.<br/><br/>

                      엠파시는<br/>
                      * 클라우드 기반의 MSA구축 전문 회사를 향해 나아가고 있습니다.<br/>
                      * 애자일 기반으로 협업을 중시하는 문화를 만들어 가고 있습니다<br/>
                      * 새로운 기술이나 정보를 함께 공부하고 공유하는 문화를 사랑합니다.
                    </p>
                    <h3 className="h5 mt-2 mb-0">함께하게 될 일들:</h3>
                    <ul className="m-0">
                      <p>
                        엠파시는 솔루션 기반의 SI를 지향하고 있습니다<br/>
                        솔루션은 SI를 하기위한 수단으로 생각하고 있습니다
                      </p>
                      <li>그로스해킹을 통한 자사 제품 개선</li>
                      <li>자사 제품 고객사 적용(SI)</li>
                      <li>프리랜서 개발자 소싱</li>
                    </ul>
                    <h3 className="h5 mt-2 mb-0">엠파시의 일상을 만드는 기술들:</h3>
                    <ul className="m-0">
                      <li>Spring Boot, Spring Cloud, Alibaba Cloud, JPA, Kotlin을 이용한 서버 개발</li>
                      <li>SPA(Single Page Application) 개발 역량</li>
                      <li>클라우드 환경에 대한 경험이 있거나, 이에 관심이 많은 사람</li>
                      <li>AWS/Docker/Jenkins를 이용한 개발/운영 환경 관리</li>
                      <li>Node/NoSQL/RDB등에 대한 기본 소양을 가지고 있는 프로그래머</li>
                      <li>Github 기반 이슈 관리</li>
                    </ul>
                    <h3 className="h5 mt-2 mb-0">이런 경험이 있다면 더 좋아요:</h3>
                    <div className="row child-cols-6 col-match g-1">

                        <div>
                          <div className="panel hstack gap-1">
                            <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                            <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">애자일 방법론이 가능하다 믿고 있는분</span>
                          </div>
                        </div>
                      <div>
                        <div className="panel hstack gap-1">
                          <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                          <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">적극적인 태도와 합리적인 커뮤니케이션</span>
                        </div>
                      </div>
                      <div>
                        <div className="panel hstack gap-1">
                          <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                          <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">오픈소스 프로젝트 개발 경험</span>
                        </div>
                      </div>
                      <div>
                        <div className="panel hstack gap-1">
                          <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                          <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">최신 기술과 개발 트렌드에 대한 관심</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-4 order-1">
                  <div data-uc-sticky="end: #job_details; offset: 80; media: @m;">
                    <div className="panel vstack gap-3 lg:gap-4 p-2 lg:p-3 rounded bg-secondary dark:bg-gray-800">
                      <h4 className="h5 m-0 pb-2 border-bottom">구인 상세</h4>
                      <div className="vstack gap-2">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-portfolio" />
                          <h5 className="h6 m-0">유형</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          <span className="px-1 py-narrow bg-white dark:bg-gray-800 rounded">
                            풀타임
                          </span>
                          <span className="px-1 py-narrow bg-white dark:bg-gray-800 rounded">
                            파견
                          </span>
                        </div>
                      </div>
                      <div className="vstack gap-1">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-location" />
                          <h5 className="h6 m-0">위치</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          <span>서울 전역</span>
                        </div>
                      </div>
                      <div>
                        <a
                          href="mailto:poh@empasy.com"
                          className="btn btn-md btn-primary text-white w-100"
                        >
                          지금 바로 함께해요
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
