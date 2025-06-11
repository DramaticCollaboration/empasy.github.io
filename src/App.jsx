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
import HomePage2 from "./pages/homes/home-2";
import HomePage3 from "./pages/homes/home-3";
import HomePage4 from "./pages/homes/home-4";
import HomePage5 from "./pages/homes/home-5";
import HomePage6 from "./pages/homes/home-6";
import HomePageRtl from "./pages/homes/rtl";
import FeaturesPage from "./pages/innerPages/page-features";
import SyncCmsPage from "./pages/innerPages/page-synccms";
import SyncBootPage from "./pages/innerPages/page-syncboot";
import SyncApimPage from "./pages/innerPages/page-syncapim";
import SyncEtaPage from "./pages/innerPages/page-synceta";
import SyncAdminPage from "./pages/innerPages/page-syncadmin";
import PricingPage from "./pages/innerPages/page-pricing";
import AboutPage from "./pages/innerPages/page-about";
import CareerPage from "./pages/innerPages/page-career";
import ContactPage from "./pages/innerPages/page-contact";
import BlogPage1 from "./pages/blogs/blog";
import Blog2ColsPage from "./pages/blogs/blog-2cols";
import Blog3ColsPage from "./pages/blogs/blog-3cols";
import Blog4ColsPage from "./pages/blogs/blog-4cols";
import BlogDetailsPage1 from "./pages/blogs/blog-details";
import BlogDetailsPage2 from "./pages/blogs/blog-details-2";
import SignupPage1 from "./pages/othersPages/sign-up";
import SigninPage1 from "./pages/othersPages/sign-in";
import ResetPasswordPage from "./pages/othersPages/reset-password";
import NotFoundPage from "./pages/not-found";
import CommingSoonPage from "./pages/othersPages/coming-soon";
import TermsPage from "./pages/othersPages/page-terms";
import PrivacyPage from "./pages/othersPages/page-privacy";
import ShopPage1 from "./pages/shop/shop";
import ShopPage2 from "./pages/shop/shop-2";
import ShopPage3 from "./pages/shop/shop-3";
import ShopCategoryPage from "./pages/shop/shop-category";
import ShopDetailsPage1 from "./pages/shop/shop-product-detail";
import ShopDetailsPage2 from "./pages/shop/shop-product-detail-2";
import ShopCartPage1 from "./pages/shop/shop-cart";
import ShopCartPage2 from "./pages/shop/shop-cart-2";
import ShopcheckoutPage1 from "./pages/shop/shop-checkout";
import ShopcheckoutPage2 from "./pages/shop/shop-checkout-2";
import ShopOrder from "./pages/shop/shop-order";
import IntegrationPage from "./pages/innerPages/page-integrations";
import TeamPage from "./pages/innerPages/page-team";
import CareerDetailsPage from "./pages/innerPages/page-career-detail";
import ContactPage2 from "./pages/innerPages/page-contact-2";
import BlogClassicPage from "./pages/blogs/blog-classic";
import BlogCategoryPage from "./pages/blogs/blog-category";
import BlogAuthorPage from "./pages/blogs/blog-author";
import BlogDetailsPage3 from "./pages/blogs/blog-details-3";
import SigninPage2 from "./pages/othersPages/sign-in-2";
import SignupPage2 from "./pages/othersPages/sign-up-2";
import ResetPasswordPage2 from "./pages/othersPages/reset-password-2";
import ShopSidebarPage from "./pages/shop/shop-sidebar";
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

              <Route path="home-2" element={<HomePage2 />} />
              <Route path="home-3" element={<HomePage3 />} />
              <Route path="home-4" element={<HomePage4 />} />
              <Route path="home-5" element={<HomePage5 />} />
              <Route path="home-6" element={<HomePage6 />} />
              <Route path="rtl" element={<HomePageRtl />} />

              <Route path="page-features" element={<FeaturesPage />} />

              <Route path="page-synccms" element={<SyncCmsPage />} />
              <Route path="page-syncboot" element={<SyncBootPage />} />
              <Route path="page-syncapim" element={<SyncApimPage />} />
              <Route path="page-syncadmin" element={<SyncAdminPage />} />
              <Route path="page-synceta" element={<SyncEtaPage />} />

              <Route path="page-pricing" element={<PricingPage />} />
              <Route path="page-about" element={<AboutPage />} />
              <Route path="page-career" element={<CareerPage />} />
              <Route path="page-contact" element={<ContactPage />} />

              <Route path="page-integrations" element={<IntegrationPage />} />

              <Route path="page-team" element={<TeamPage />} />
              <Route
                path="page-career-detail/:id"
                element={<CareerDetailsPage />}
              />

              <Route path="page-contact-2" element={<ContactPage2 />} />

              <Route path="blog" element={<BlogPage1 />} />
              <Route path="blog-2cols" element={<Blog2ColsPage />} />
              <Route path="blog-3cols" element={<Blog3ColsPage />} />
              <Route path="blog-4cols" element={<Blog4ColsPage />} />

              <Route path="blog-details/:id" element={<BlogDetailsPage1 />} />
              <Route path="blog-details-2/:id" element={<BlogDetailsPage2 />} />

              <Route path="blog-classic" element={<BlogClassicPage />} />

              <Route
                path="blog-category/:category"
                element={<BlogCategoryPage />}
              />
              <Route path="blog-author/:author" element={<BlogAuthorPage />} />

              <Route path="blog-details-3/:id" element={<BlogDetailsPage3 />} />

              <Route path="sign-up" element={<SignupPage1 />} />
              <Route path="sign-in" element={<SigninPage1 />} />
              <Route path="reset-password" element={<ResetPasswordPage />} />
              <Route path="page-not-found" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="coming-soon" element={<CommingSoonPage />} />
              <Route path="page-terms" element={<TermsPage />} />

              <Route path="page-privacy" element={<PrivacyPage />} />

              <Route path="sign-in-2" element={<SigninPage2 />} />

              <Route path="sign-up-2" element={<SignupPage2 />} />

              <Route path="reset-password-2" element={<ResetPasswordPage2 />} />

              <Route path="shop" element={<ShopPage1 />} />
              <Route path="shop-3" element={<ShopPage2 />} />
              <Route path="shop-2" element={<ShopPage3 />} />
              <Route path="shop-sidebar" element={<ShopSidebarPage />} />
              <Route
                path="shop-category/:category"
                element={<ShopCategoryPage />}
              />
              <Route
                path="shop-product-detail/:id"
                element={<ShopDetailsPage1 />}
              />
              <Route
                path="shop-product-detail-2/:id"
                element={<ShopDetailsPage2 />}
              />
              <Route path="shop-cart" element={<ShopCartPage1 />} />
              <Route path="shop-cart-2" element={<ShopCartPage2 />} />
              <Route path="shop-checkout" element={<ShopcheckoutPage1 />} />
              <Route path="shop-checkout-2" element={<ShopcheckoutPage2 />} />
              <Route path="shop-order" element={<ShopOrder />} />

              {/* main multipage */}
              {/* <Route
                path="main-multi-page"
                element={<Home1MainDemoMultiPage />}
              /> */}
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
