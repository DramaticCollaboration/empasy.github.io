import { teamMembers3 } from "@/data/team";
import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div
      id="team_members"
      className="team-members section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">
                  Our team
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0 dark:text-white">
                  People you’ll be working with
                </h2>
                <p className="fs-6 xl:fs-5 dark:text-white text-opacity-70">
                  We’re a 100% remote team spread all across the world.
                </p>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4 xl:gx-4 xl:gy-6"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {teamMembers3.map((member, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-2 xl:gap-3">
                        <img
                          className="w-100 rounded-1 sm:rounded-1-5"
                          src={member.imgSrc}
                          width={560}
                          height={592}
                          alt={member.alt}
                        />
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h6 xl:h5 m-0 dark:text-white">
                            {member.name}
                          </h6>
                          <span className="fs-6 xl:fs-5 opacity-70">
                            {member.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="vstack items-center gap-2 lg:gap-3 max-w-450px mx-auto text-center lg:mt-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="h4 sm:h3 m-0">우리는 항상 함께할 동료를 기다리고 있어요</h2>
                <p className="fs-6 sm:fs-5 lg:fs-4 text-dark dark:text-white text-opacity-70">
                  저희와 같은 비전을 나누는 분을 찾고 있습니다.<br/>
                  변화에 유연하고, 열정 가득하며, 따뜻한 마음을 가진 분이라면<br/>
                  꼭 함께하고 싶어요!
                </p>
                <Link
                  className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1"
                  to={`/page-career`}
                >
                  <span>지금 지원서 보내기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
