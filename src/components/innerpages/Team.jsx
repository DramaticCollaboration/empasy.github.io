import { teamMembers5 } from "@/data/team";
import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div id="team" className="team section panel overflow-hidden border-bottom">
      <div className="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">
                  함께하는 사람들
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  당신과 함께할 멋진 사람들
                </h2>
                <p className="fs-6 xl:fs-5 text-opacity-70">
                  <b>엠파시팀</b>은 이름에 담긴 '공감 시너지'의 가치를 믿어요.<br/>
                  서로와 고객을 깊이 이해하고 함께 협력하며 최고의 결과를 만들어내죠.<br/>
                  앞선 기술력과 효율적인 협업으로 변화에 민첩하게 대응하는 <b>'살아있는 소프트웨어'</b>를 만들고, 고객의 지속 가능한 성장을 돕는 든든한 동반자가 되어드립니다.
                </p>
                <Link
                  to={`/page-about`}
                  className="btn btn-md btn-primary rounded-default mt-1 lg:mt-2 d-none sm:d-block"
                >
                  엠파시, 그리고 우리의 생각
                </Link>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4 xl:gx-4 xl:gy-6"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {teamMembers5.map((member) => (
                    <div key={member.id}>
                      <div className="panel vstack gap-2 xl:gap-3" style={{width: 200, height: 300, overflow: 'hidden'}}>
                        <img
                          className="w-100 rounded-1 sm:rounded-1-5"
                          src={member.imageSrc}
                          width={560}
                          height={592}
                          alt={member.altText}
                          style={{height: '300px'}}
                        />
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h6 xl:h5 m-0">{member.name}</h6>
                          <span className="fs-6 xl:fs-5 text-primary dark:text-white dark:text-opacity-70" dangerouslySetInnerHTML={{ __html: member.position }}>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:d-none">
                <Link
                  to={`/page-about`}
                  className="btn btn-md btn-primary rounded-default mt-1 lg:mt-2"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
