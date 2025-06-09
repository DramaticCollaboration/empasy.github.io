import React from "react";
import { Link } from "react-router-dom";

export default function Cta2() {
  return (
    <div id="cta" className="cta section panel overflow-hidden border-top">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-2 lg:gap-3 max-w-450px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 sm:h3 m-0">우리는 항상 함께할 동료를 기다리고 있어요</h2>
              <p className="fs-6 sm:fs-5 lg:fs-4 text-dark dark:text-white text-opacity-70">
                저희와 같은 비전을 나누는 분을 찾고 있습니다.<br/>
                변화에 유연하고, 열정 가득하며, 따뜻한 마음을 가진 분이라면<br/>
                꼭 함께하고 싶어요!
              </p>
              <Link
                to={`/page-career`}
                className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1"
              >
                <span>지금 지원서 보내기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
