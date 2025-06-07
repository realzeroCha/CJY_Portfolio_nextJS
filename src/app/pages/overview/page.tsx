import OverviewTitle from "@/app/components/OverviewTitle";
import tw from "tailwind-styled-components";

const title = "프론트엔드 개발자\n차진영 포트폴리오입니다.";

const OverviewWrap = tw.main`relative flex h-[50vh] px-[10%] whitespace-pre-line before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/overview_background.jpg')] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-10 sm:h-[80vh]`;

const Overview = () => {
  return (
    <OverviewWrap id="overview">
      <OverviewTitle text={title} />
    </OverviewWrap>
  );
};

export default Overview;
