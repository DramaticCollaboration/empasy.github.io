import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Search() {
    const navigate = useNavigate();
    const [q, setQ] = useState('');

    const handleSearch = () => {
        if (q) {
            navigate(`/search?q=${q}`);
        }
    };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
              <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                      무엇을 찾으시나요?
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      원하는 정보를 빠르게 찾아보세요
                  </p>
              </div>
              <div className="panel max-w-750px mx-auto">
                  <form
                      onSubmit={(e) => handleSearch()}
                      id="search-panel"
                      className="form-icon-group vstack gap-1 mb-2 uc-sticky"
                      data-uc-sticky=""
                  >
                      <input
                          value={q}
                          onChange={(e) => setQ(e.target.value)}
                          name="searchWord"
                          type="text"
                          className="form-control form-control-sm fs-7 rounded-default"
                          placeholder="검색어를 입력하세요.."
                      />
                      <span className="form-icon text-gray">
                      <i className="unicon-search icon-1" />
                    </span>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
