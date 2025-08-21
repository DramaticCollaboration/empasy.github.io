import Context from "@/context/Context";
import "./styles/style.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import Cart from "@/components/common/Cart";
import { useEffect } from "react";
import anime from "animejs";

import MobileMenu from "@/components/headers/component/MobileMenu";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactModal from "@/components/modals/ContactModal";
import NewsletterModal from "@/components/modals/NewsletterModal";
import SearchModal from "@/components/modals/SearchModal";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import HomePage1 from "./pages";

import SyncCmsPage from "./pages/innerPages/page-synccms";
import SyncBootPage from "./pages/innerPages/page-syncboot";
import SyncApimPage from "./pages/innerPages/page-syncapim";
import SyncEtaPage from "./pages/innerPages/page-synceta";
import SyncAdminPage from "./pages/innerPages/page-syncadmin";

import AboutPage from "./pages/innerPages/page-about";
import CareerPage from "./pages/innerPages/page-career";
import ContactPage from "./pages/innerPages/page-contact";
import BlogPage1 from "./pages/blogs/blog";

import BlogDetailsPage1 from "./pages/blogs/blog-details";

import NotFoundPage from "./pages/not-found";
import TeamPage from "./pages/innerPages/page-team";
import SyncEtaPricePage from "./pages/innerPages/page-pricing";
import SyncEtaDownloadPage from "./pages/innerPages/page-download";


import CareerDetailsPage from "./pages/innerPages/page-career-detail";
import ContactPage2 from "./pages/innerPages/page-contact-2";

import { TawkLiveChat } from 'tawk-react'
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const dataAnime = element.getAttribute("data-anime");

          const modifieddataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          if (modifieddataAnime) {
            const parseAnimeData = (data) => {
              const settings = {};
              data.split(";").forEach((param) => {
                const [key, value] = param
                  .split(":")
                  .map((item) => item.trim());
                if (key && value) {
                  settings[key] = value;
                }
              });
              return settings;
            };

            const animeSettings = parseAnimeData(modifieddataAnime);

            let targets;
            if (animeSettings.targets === ">*") {
              targets = element.children;
            } else {
              targets = element.querySelectorAll(animeSettings.targets);
            }
            // console.log(animeSettings);

            // Apply Anime.js animation
            anime({
              loop: animeSettings.loop ? true : false,
              targets: targets,
              translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
              translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
              opacity: [0, 1],
              // direction: "alternate",
              easing: animeSettings.easing || "spring(1, 80, 10, 0)",
              duration: Number(animeSettings.duration) || 450,
              delay: animeSettings.delay
                ? animeSettings.delay.includes(",")
                  ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                      start: animeSettings.delay.split(",")[1] / 1,
                    })
                  : animeSettings.delay / 1
                : 0,
            });

            // Unobserve the element after animation triggers
            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0, // Trigger when 10% of the element is in view
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Clean up the observer on component unmount
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);
  return (
    <>
      <Context>
        <ParallaxProvider>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage1 />} />

              <Route path="page-synccms" element={<SyncCmsPage />} />
              <Route path="page-syncboot" element={<SyncBootPage />} />
              <Route path="page-syncapim" element={<SyncApimPage />} />
              <Route path="page-syncadmin" element={<SyncAdminPage />} />
              <Route path="page-synceta" element={<SyncEtaPage />} />

              <Route path="page-about" element={<AboutPage />} />
              <Route path="page-career" element={<CareerPage />} />
              <Route path="page-contact" element={<ContactPage />} />
              <Route path="page-team" element={<TeamPage />} />
                <Route
                    path="page-career-detail/:id"
                    element={<CareerDetailsPage />}
                />

              <Route path="page-contact-2" element={<ContactPage2 />} />
              <Route path="blog" element={<BlogPage1 />} />
              <Route path="blog-details/:id" element={<BlogDetailsPage1 />} />
              <Route path="blog-details" element={<BlogDetailsPage1 />} />
              <Route path="page-not-found" element={<NotFoundPage />} />



            <Route path="synccms" element={<SyncCmsPage />} />
            <Route path="syncboot" element={<SyncBootPage />} />
            <Route path="syncapim" element={<SyncApimPage />} />
            <Route path="syncadmin" element={<SyncAdminPage />} />
            <Route path="synceta" element={<SyncEtaPage />} />

            <Route path="about" element={<AboutPage />} />
            <Route path="career" element={<CareerPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="contact-2" element={<ContactPage2 />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="synceta-price" element={<SyncEtaPricePage />} />
            <Route path="synceta-download" element={<SyncEtaDownloadPage />} />

            <Route
                path="career-detail/:id"
                element={<CareerDetailsPage />}
            />

              <Route path="page-not-found" element={<NotFoundPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ParallaxProvider>
        <MobileMenu />
        <ContactModal />
        <NewsletterModal />
        <SearchModal />
        <Cart />
        <BacktoTop />
        <ScrollTopBehaviour />
        <TawkLiveChat propertyId="6844d9b8bac035190e0e94a2" widgetId="1it6f4u58" />
      </Context>
    </>
  );
}

export default App;
