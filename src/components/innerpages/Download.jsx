import { tiers3 } from "@/data/pricing";
import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Download() {
    const downloads = [
        {
            os: "Windows",
            version: "3.3.21",
            downloadUrl: "https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA+Setup+3.3.21.exe",
            icon: "/assets/images/os/windows.svg",
            disabled: false,
        },
        {
            os: "macOS",
            version: "3.3.21",
            downloadUrl: "https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA-3.3.21-arm64.dmg",
            icon: "/assets/images/os/mac.svg",
            disabled: true,
        },
        {
            os: "Linux",
            version: "3.3.21",
            downloadUrl: "https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA-3.3.21.AppImage",
            icon: "/assets/images/os/linux.svg",
            disabled: true,
        },
    ];


    return (
        <div className="flex justify-center items-center mt-8">
            <div className="download-options flex flex-row gap-4 flex-container">
                {downloads.map((download) => (
                    <div
                        key={download.os}
                        className={`download-item flex-item p-6 border rounded-lg ${
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
  );
}
