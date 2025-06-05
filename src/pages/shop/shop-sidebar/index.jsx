import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/shop/Breadcumb";
import Shop4 from "@/components/shop/Shop4";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop 3 || 엠파시 - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "엠파시 - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ShopSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div
        className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
        style={{ overflowX: "clip" }}
      >
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb pageName="Shop Sidebar" />
          <Shop4 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
