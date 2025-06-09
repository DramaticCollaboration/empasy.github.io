import { openSearchModal } from "@/utlis/toggleSearchModal";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="section py-6 sm:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h2 className="display-5 sm:display-2 fw-normal text-gray-200">
            404
          </h2>
          <h1 className="h3 sm:h1 m-0">페이지를 찾을 수 없어요</h1>
          <p className="fs-6">
            찾으시는 페이지가 사라졌거나 이동했어요!
          </p>
          <Link
            to={`/`}
            className="btn btn-sm sm:btn-md btn-primary text-white my-2 sm:my-0"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
