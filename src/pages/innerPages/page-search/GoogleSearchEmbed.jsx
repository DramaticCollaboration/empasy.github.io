
import React from "react";
import {useSearchParams} from "react-router-dom";

export default function GoogleSearch() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');
    const iframeUrl = `/googlesearch.html?q=${q ? q : '' }`;
    return (
        <div id="google-search" className="team section panel overflow-hidden border-bottom">
            <div className="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                     <iframe src={iframeUrl} width="100%" style={{border:0, minHeight:750}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
