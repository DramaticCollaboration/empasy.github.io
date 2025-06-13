import React, { useState } from "react";

export default function Pagination({ activePage, articleList, itemsPerPage, pageGroupSize, onPageChange }) {

    // 현재 페이지에 해당하는 항목들만 필터링
    const getCurrentPageItems = () => {
        const startIndex = (activePage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return articleList.slice(startIndex, endIndex);
    };

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(articleList.length / itemsPerPage);

    // 페이지 그룹 계산
    const getPageGroup = () => {
        const currentGroup = Math.ceil(activePage / pageGroupSize);
        const start = (currentGroup - 1) * pageGroupSize + 1;
        const end = Math.min(currentGroup * pageGroupSize, totalPages);

        return Array.from({length: end - start + 1}, (_, i) => ({
            pageNumber: start + i,
            isActive: start + i === activePage
        }));
    };


    // 현재 페이지 항목들
    const currentItems = getCurrentPageItems();
    // 현재 페이지 그룹
    const pageList = getPageGroup();

    const handlePageChange = (page) => {
      onPageChange(page);
    };

    const handleFirstPage = () => {
        onPageChange(activePage <= 1 ? 1 : activePage - 1);
    };

    const handleLastPage = () => {
        onPageChange(activePage >= articleList.length ? articleList.length - 1 : activePage + 1);
    };
  return (
    <ul>
        {/* 이전 페이지 */}
        {activePage > 1 && (
            <li>
                <a onClick={() => handleFirstPage()}>
                    <span className="icon icon-1 unicon-chevron-left rtl:rotate-180" />
                </a>
            </li>
        )}

        {/* 페이지 번호 목록 */}
        {pageList.map(({pageNumber, isActive}) => (
            <li key={pageNumber}>
                <a
                    className={isActive ? "uc-active" : ""}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </a>
            </li>
        ))}

        {/* 다음 페이지 */}
        {activePage < totalPages && (
            <li>
                <a onClick={() => handleLastPage()}>
                    <span className="icon icon-1 unicon-chevron-right rtl:rotate-180" />
                </a>
            </li>
        )}
    </ul>
  );
}
