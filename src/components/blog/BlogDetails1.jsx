import { Link } from "react-router-dom";
import RelatedBlogs from "./RelatedBlogs";

import { Gallery, Item } from "react-photoswipe-gallery";
import React from "react";
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

export default function BlogDetails1({ blogItem }) {
  const shareUrl = window.location.href;
  const title = document.title;
  return (
    <>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
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
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <img
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src={blogItem.imgSrc}
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p dangerouslySetInnerHTML={{ __html: blogItem.content }} />

              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    {blogItem.category}
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    {blogItem.authorAlt}
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">공유:</span>
                </li>
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
              </ul>
            </div>

            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">이 주제와 관련된 글:</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
