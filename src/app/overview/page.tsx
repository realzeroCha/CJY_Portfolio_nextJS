import OverviewTitle from "@/app/overview/OverviewTitle";
import tw from "tailwind-styled-components";
import { SectionProps } from "../../types/type";

const title = "FRONT-END\nCHA JINYOUNG";

const OverviewWrap = tw.main`relative flex h-[50vh] px-[10%] flex  whitespace-pre-line sm:h-[80vh]`;

const Overview = ({ isView }: SectionProps) => {
  return (
    <OverviewWrap id="overview">
      <OverviewTitle text={title} isView={isView} />
    </OverviewWrap>
  );
};

export default Overview;
