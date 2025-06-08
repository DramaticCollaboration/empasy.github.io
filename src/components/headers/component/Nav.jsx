import { Link, useLocation } from "react-router-dom";

import { pagesData } from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
        <li>
            <Link to={`/page-about`}>엠파시는</Link>
        </li>
        <li>
            <Link to={`/page-features`}>SyncCMS</Link>
        </li>
        <li>
            <Link to={`/page-features`}>SyncBoot</Link>
        </li>
        <li>
            <Link to={`/page-features`}>SyncApim</Link>
        </li>
        <li>
            <Link to={`/page-features`}>SyncEta</Link>
        </li>
        <li>
            <Link to={`/page-contact`}>문의하기</Link>
        </li>
        <li>
            <Link to={`/page-team`}>엠파시 사람들</Link>
        </li>
        <li>
            <Link to={`/page-career`}>인재 모집</Link>
        </li>


    </>
  );
}
