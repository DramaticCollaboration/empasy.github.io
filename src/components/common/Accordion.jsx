import { accordionItems } from "@/data/faq";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Accordion({
  faqData = accordionItems,
  parentClass = "",
  itemsPerPage = 10,
}) {
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0); // absolute index across all pages
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((faqData?.length || 0) / itemsPerPage)),
    [faqData, itemsPerPage]
  );
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleItems = faqData.slice(start, end);

  useEffect(() => {
    // Collapse all currently mounted items
    questionRefs.current.forEach((el) => {
      if (el) el.classList.remove("active");
    });
    parentRefs.current.forEach((el) => {
      if (el) el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      if (!el) return;
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginTop = "0px";
    });
    // Expand the active one if it is currently mounted (on current page)
    if (currentIndex !== -1) {
      const q = questionRefs.current[currentIndex];
      const p = parentRefs.current[currentIndex];
      const element = answerRefs.current[currentIndex];
      if (q && p && element) {
        q.classList.add("active");
        p.classList.add("active");
        element.style.height = element.scrollHeight + "px";
        element.style.overflow = "hidden";
        element.style.transition = "all 0.5s ease-in-out";
        element.style.marginTop = "20px";
      }
    }
  }, [currentIndex, currentPage, faqData]);

  // When page changes, keep the previously opened item if it belongs to the new page.
  // If not, the new page will show all collapsed items.

  const goToPage = (page) => {
    const next = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(next);
  };

  return (
    <>
      {visibleItems.map((item, indexOnPage) => {
        const absoluteIndex = start + indexOnPage;
        return (
          <li
            ref={(el) => (parentRefs.current[absoluteIndex] = el)}
            className={`${currentIndex == absoluteIndex ? "uc-open" : ""} ${parentClass} `}
            onClick={() => {
              setCurrentIndex((pre) => (pre == absoluteIndex ? -1 : absoluteIndex));
            }}
            key={item.id ?? absoluteIndex}
          >
            <a
              className="uc-accordion-title fs-5 sm:fs-4"
              role="button"
              aria-disabled="false"
              ref={(el) => (questionRefs.current[absoluteIndex] = el)}
            >
              {item.question}
            </a>
            <div
              className="uc-accordion-content"
              ref={(el) => (answerRefs.current[absoluteIndex] = el)}
            >
              <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
            </div>
          </li>
        );
      })}
      {totalPages > 1 && (
        <li className="list-style-none" style={{ listStyle: "none" }}>
          <div className="hstack gap-2 justify-center mt-3">
            <button
              type="button"
              className="btn btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                goToPage(currentPage - 1);
              }}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  type="button"
                  className={`btn btn-sm ${isActive ? "btn-primary" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPage(page);
                  }}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              className="btn btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                goToPage(currentPage + 1);
              }}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </li>
      )}
    </>
  );
}
