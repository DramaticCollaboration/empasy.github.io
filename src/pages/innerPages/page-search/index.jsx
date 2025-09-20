import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import MetaComponent from "@/components/common/MetaComponent";

import {searchMetadata} from "@/utlis/searchMeta.js";
import GoogleSearch from "./GoogleSearchEmbed.jsx";

const metadata = {
    ...searchMetadata,
    ...{
        title: "함께하는 사람들 || 검색 결과.",
    },
};


export default function SearchPage() {
    return (
        <>
            <MetaComponent meta={metadata} />
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md dom-ready bp-xxl-max bp-lg bp-xl">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <GoogleSearch />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
