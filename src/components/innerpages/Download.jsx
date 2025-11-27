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
            // 로컬에서 빌드해서 업로드 한 7일짜리 링크임 > 12/1 에 github action 으로 테스트 필요
            downloadUrl: "https://synccms.s3.ap-northeast-2.amazonaws.com/SyncETA-v3.3.21-arm64.dmg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUNS6HJO2YFHSPX7C%2F20251127%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T032550Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=56029fae4c99450cb031811f94e7739c0747421a3d18b446aa1c12c5ed347d4b",
            icon: "/assets/images/os/mac.svg",
            disabled: false,
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
        <>
        <style>{`
        .col-md-row {
          display: flex;
          gap: 1rem;
          flex-direction: column; /* 기본: 모바일 = 세로 */
        }

        @media (min-width: 600px) {
          .col-md-row {
            flex-direction: row;  /* md 이상 = 가로 */
          }
        }
      `}</style>
        <div className="flex justify-center items-center mt-8">
            <div className="col-md-row download-options flex gap-4 flex-container">
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
    </>
  );
}
