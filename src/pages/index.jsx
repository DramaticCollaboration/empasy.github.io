import Home1 from "./homes/home-1";
import MetaComponent from "@/components/common/MetaComponent";

import { searchMetadata }  from "@/utlis/searchMeta";

const metadata = {...{
  title:
    "엠파시 Sync Series: 디지털 혁신을 위한 MSA 기반 솔루션 | 개발, CMS, AI 테스트 자동화",
}, ...searchMetadata };
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home1 />
    </>
  );
}
