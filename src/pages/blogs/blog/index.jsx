import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import Blogs1 from "@/components/blog/Blogs1";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "블로그 || 여러분의 비즈니스를 더 빠르고 스마트하게 만드는 소식들을 만나보세요!",
  description:
    " 변화에 강한 Sync Series가 여러분의 비즈니스를 더욱 민첩하고 혁신적으로 이끄는 이야기들을 들려드릴게요!",
};
export default function BlogPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Blogs1 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
