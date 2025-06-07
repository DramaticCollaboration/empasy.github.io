import React from "react";
import { Link } from "react-router-dom";

import { footerLinks } from "@/data/footer";

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

export default function Footer1() {
  const shareUrl = window.location.href;
  const title = document.title;
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link to={`/`}>
                        <img
                          className="w-32px text-primary"
                          alt="엠파시"
                          src="/assets/images/common/logo-mark.png"
                          width="34"
                          height="34"
                        />
                      </Link>
                      <p>
                        Sync Series 플랫폼으로 소프트웨어 개발 및 변경의 속도와 유연성을 극대화하여, 고객의 비즈니스 민첩성 확보와 경쟁력 강화를 지원하는 변화에 최적화된 솔루션 기업입니다
                      </p>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  엠파시 © 2025, All rights reserved.
                </p>

              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                  <FacebookShareButton url={shareUrl} className="Demo__some-network__share-button">
                    <FacebookIcon size={32} round fill='none'/>
                  </FacebookShareButton>
                  <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                  >
                    <XIcon size={32} round />
                  </TwitterShareButton>

                  <TelegramShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <LineShareButton url={shareUrl} title={title} className="Demo__some-network__share-button">
                  <LineIcon size={32} round />
                </LineShareButton>
                <InstapaperShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                  >
                    <InstapaperIcon size={32} round />
                  </InstapaperShareButton>
                  <ThreadsShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                  >
                    <ThreadsIcon size={32} round />
                  </ThreadsShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
