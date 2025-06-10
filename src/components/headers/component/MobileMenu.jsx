import { useContextElement } from "@/context/Context";
import { icons, menuItems } from "@/data/menu";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";

import { Link, useLocation } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton, ThreadsIcon, ThreadsShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

export default function MobileMenu() {
  const { isChecked, handleToggle } = useContextElement();
  const { pathname } = useLocation();
  const [activeParent1, setActiveParent1] = useState(-1);
  const [activeParent2, setActiveParent2] = useState(-1);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href) {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href) {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href) {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };

  const shareUrl = window.location.href;
  const title = document.title;
  return (
    <div
      ref={containerRef}
      id="uc-menu-panel"
      data-uc-offcanvas="overlay: true;"
      className="uc-offcanvas mobile-menu"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 876 }}
      >
        <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
          <div className="uc-logo">
            <Link
              to={`/`}
              className="h5 text-none text-gray-900 dark:text-white"
            >
              <img
                className="w-32px"
                alt="엠파시"
                src="/assets/images/common/logo-mark.png"
                width="34"
                height="34"
              />
            </Link>
          </div>
          <button
            className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
            onClick={closeMobileMenu}
          >
            <i className="unicon-close" />
          </button>
        </header>
        <div className="panel">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="search-panel"
            className="form-icon-group vstack gap-1 mb-2 uc-sticky"
            data-uc-sticky=""
          >
            <input
              type="email"
              className="form-control form-control-sm fs-7 rounded-default"
              placeholder="Search.."
            />
            <span className="form-icon text-gray">
              <i className="unicon-search icon-1" />
            </span>
          </form>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 40, width: 290, margin: "0px 0px 16px" }}
            hidden=""
          />
          <ul className="nav-y gap-narrow fw-medium fs-6 uc-nav" data-uc-nav="">
            <li>
              <Link to={`/page-about`}>엠파시는</Link>
            </li>
            <li>
              <Link to={`/page-synccms`}>SyncCMS</Link>
            </li>
            <li>
              <Link to={`/page-syncboot`}>SyncBoot</Link>
            </li>
            <li>
              <Link to={`/page-syncapim`}>SyncApim</Link>
            </li>
            <li>
              <Link to={`/page-synceta`}>SyncEta</Link>
            </li>
            <li>
              <Link to={`/page-contact`}>문의하기</Link>
            </li>
            <li>
              <Link to={`/page-team`}>엠파시 사람들</Link>
            </li>
            <li>
              <Link to={`/page-career`}>인재 모집</Link>
            </li>
            <li>
              <a href="https://doc.empasy.com" target="_blank">
                <span>문서 보러 가기</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </a>
            </li>

          </ul>
          <ul className="social-icons nav-x mt-4">
            <li>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round fill='none'/>
              </FacebookShareButton>
              <TwitterShareButton
                  url={shareUrl}
                  title={title}
              >
                <XIcon size={32} round />
              </TwitterShareButton>

              <TelegramShareButton
                  url={shareUrl}
                  title={title}
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <EmailShareButton
                  url={shareUrl}
                  subject={title}
                  body="body"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
              <LineShareButton url={shareUrl} title={title}>
                <LineIcon size={32} round />
              </LineShareButton>
              <InstapaperShareButton
                  url={shareUrl}
                  title={title}
              >
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>
              <ThreadsShareButton
                  url={shareUrl}
                  title={title}
              >
                <ThreadsIcon size={32} round />
              </ThreadsShareButton>
            </li>
          </ul>
          <div
            className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky uc-active uc-sticky-fixed"
            data-uc-sticky="position: bottom"
          >
            <div className="vstack gap-1">
              <span className="fs-7 opacity-60">테마:</span>
              <div className="darkmode-trigger" data-darkmode-switch="">
                <label className="switch">
                  <input
                    checked={!isChecked}
                    onChange={handleToggle}
                    type="checkbox"
                  />
                  <span className="slider fs-5" />
                </label>
              </div>
            </div>
          </div>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 83, width: 290, margin: "32px 0px 0px" }}
          />
        </div>
      </div>
    </div>
  );
}
