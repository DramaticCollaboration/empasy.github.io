import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/shop/Breadcumb";
import Cart2 from "@/components/shop/Cart2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Cart 2 || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function ShopCartPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb pageName={"Shop Cart 2"} />
          <Cart2 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
