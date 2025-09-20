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
                <div className="col-12 lg:col-7">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="hstack gap-3 align-items-center">
                      <Link to={`/`}>
                        <img
                          className="text-primary"
                          alt="엠파시"
                          src="/assets/images/common/empasy-logo.svg"
                          style={{width: '100%', height: 'auto'}}
                        />
                      </Link>
                      <p className="m-0">
                          젊고 열정적인 전문가들이 모인 엠파시는 최신 기술과 애자일(Agile) 문화를 바탕으로, 빠르게 변화하는 비즈니스 환경에 민첩하게 대응하는 혁신적인 솔루션을 만듭니다
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 lg:col-12">
                  {footerLinks.map((section, index) => (
                      <div key={index}>
                        <ul className="nav-x gap-3 fw-medium text-end d-flex justify-end">
                          {section.links.map((link, i) => (
                              <li key={i}>
                                <Link to={link.href}>{link.label}</Link> {i < section.links.length - 1 && ' | '}
                              </li>
                          ))}
                        </ul>
                      </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  엠파시 © 2025, All rights reserved.
                </p>

              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
