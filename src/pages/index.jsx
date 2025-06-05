import Home1 from "./homes/home-1";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "엠파시 || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home1 />
    </>
  );
}
