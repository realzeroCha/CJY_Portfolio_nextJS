import tw from "tailwind-styled-components";

const title = "프론트엔드 개발자\n차진영 포트폴리오입니다.";

const OverviewWrap = tw.main`flex py-[20%] whitespace-pre-line before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/overview_background.jpg')] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-10`;
const OverviewTitle = tw.h1`text-[3.75rem] leading-[5.5rem] font-bold font-SB_Aggro_L`;

const Overview = () => {
  return (
    <OverviewWrap>
      <OverviewTitle>{title}</OverviewTitle>
    </OverviewWrap>
  );
};

export default Overview;
