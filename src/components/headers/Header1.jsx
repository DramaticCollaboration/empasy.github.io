import Nav from "./component/Nav";
import { Link } from "react-router-dom";

import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openContactModal } from "@/utlis/toggleContactModal";
import React from "react";

export default function Header1() {
  return (
    <header
      style={{ "--uc-nav-height": "80px" }}
      className="uc-header header-default uc-navbar-sticky-wrap z-999 uc-dark uc-sticky"
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className="uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent"
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="container max-w-xl">
          <div
            className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
            data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
          >
            <div className="uc-navbar-left">
              <div className="uc-logo text-dark dark:text-white">
                <Link
                  className="panel text-none"
                  to={`/`}
                  style={{ width: 140 }}
                >
                  <img
                    className="dark:d-none"
                    alt="엠파시"
                    src="/assets/images/common/empasy-logo.svg"
                    width="117"
                    height="40"
                  />
                  <img
                    className="d-none dark:d-block"
                    alt="엠파시"
                    src="/assets/images/common/empasy-logo_white.svg"
                    width="117"
                    height="40"
                  />
                </Link>
              </div>
              <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                <Nav />
              </ul>
            </div>
            <div className="uc-navbar-right">
              <a
                  className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                  onClick={openMobileMenu}
              >
                <svg width={20} height={20} viewBox="0 0 20 20">
                  <style
                      dangerouslySetInnerHTML={{
                        __html:
                            '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                      }}
                  />
                  <rect className="line-1" y={3} width={20} height={2}/>
                  <rect className="line-2" y={9} width={20} height={2}/>
                  <rect className="line-3" y={9} width={20} height={2}/>
                  <rect className="line-4" y={15} width={20} height={2}/>
                </svg>
              </a>
              <a href="http://doc.empasy.com" className="d-none lg:d-flex btn btn-sm btn-primary px-2" target="_blank">
                <span>문서 보러 가기</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
