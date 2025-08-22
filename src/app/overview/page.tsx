import OverviewTitle from "@/app/components/OverviewTitle";
import tw from "tailwind-styled-components";

const title = "FRONT-END\nCHA JINYOUNG";

const OverviewWrap = tw.main`relative flex h-[50vh] px-[10%] flex items-center whitespace-pre-line bg-black dark:bg-white  sm:h-[80vh]`;

const Overview = () => {
  return (
    <OverviewWrap id="overview">
      <OverviewTitle text={title} />
    </OverviewWrap>
  );
};

export default Overview;
