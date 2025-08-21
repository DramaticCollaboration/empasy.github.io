import { tiers3 } from "@/data/pricing";
import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Download() {
    const downloads = [
        {
            os: "Windows",
            version: "3.2.7",
            downloadUrl: "#",
            icon: "/assets/images/os/windows.svg",
            disabled: false,
        },
        {
            os: "macOS",
            version: "3.2.7",
            downloadUrl: "#",
            icon: "/assets/images/os/mac.svg",
            disabled: true,
        },
        {
            os: "Linux",
            version: "3.2.7",
            downloadUrl: "#",
            icon: "/assets/images/os/linux.svg",
            disabled: true,
        },
    ];


    return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <img
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <img
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
        <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
            <div className="container max-w-xl">
                <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                    <div
                        className="vstack items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
                        data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                            SyncETA 다운로드
                        </h1>

                        <div className="flex justify-center items-center mt-8">
                            <div className="download-options flex flex-row gap-4">
                                {downloads.map((download) => (
                                    <div
                                        key={download.os}
                                        className={`download-item p-6 border rounded-lg ${
                                            download.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg transition-shadow'
                                        }`}
                                        style={{ width: '280px' }}
                                    >
                                        <img
                                            src={download.icon}
                                            alt={`${download.os} icon`}
                                            style={{ width: '100px', height: '100px' }}
                                            className="mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2 text-center">{download.os}</h3>
                                        <p className="text-sm text-gray-600 mb-4 text-center">
                                            버전 {download.version}
                                        </p>
                                        {download.disabled ? (
                                            <button
                                                disabled
                                                className="w-full py-2 px-4 bg-gray-300 text-gray-600 rounded-md"
                                            >
                                                준비중
                                            </button>
                                        ) : (
                                            <Link
                                                to={download.downloadUrl}
                                                className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700"
                                            >
                                                다운로드
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}
