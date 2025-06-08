import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../common/Accordion";

export default function Faq() {
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 lg:child-cols-6 g-6 xl:g-8">
              <div>
                <div className="panel vstack gap-2">
                  <span className="fw-bold text-primary dark:text-secondary">
                    따뜻한 지원 서비스
                  </span>
                  <h2 className="title h3 xl:h2 m-0">함께 나누는 궁금증</h2>
                  <p className="desc fs-6 xl:fs-5">
                    제품과 결제에 관한 모든 정보가 여기 있습니다.
                    찾으시는 답변이 없으신가요?
                    언제든지 친절한 팀과{" "}
                    <br className="d-none lg:d-block xl:d-none" />
                    <Link
                      className="uc-link border-bottom border-gray-300 dark:text-white text-none"
                      to={`/page-contact`}
                      style={{ paddingBottom: 2 }}
                    >문의</Link>해 주세요!{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="panel">
                  <ul className="gap-0" data-uc-accordion="targets: > li;">
                    <Accordion parentClass="panel py-2" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
