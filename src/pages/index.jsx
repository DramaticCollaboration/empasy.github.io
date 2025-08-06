import Home1 from "./homes/home-1";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "엠파시 Sync Series: 디지털 혁신을 위한 MSA 기반 솔루션 | 개발, CMS, AI 테스트 자동화",
  description:
    "엠파시는 SyncBoot, SyncAdmin, SyncCMS, SyncEta로 구성된 Sync Series를 통해 기업의 디지털 혁신과 비즈니스 민첩성을 극대화합니다. MSA 기반 백엔드, 프론트엔드, CMS, AI 테스트 자동화로 개발 속도를 높이고 품질을 보장하며 유지보수 비용을 절감하세요.",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home1 />
    </>
  );
}
