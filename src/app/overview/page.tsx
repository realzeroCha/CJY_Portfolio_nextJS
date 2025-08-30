import OverviewTitle from "@/app/overview/OverviewTitle";
import { OverviewWrap } from "./styles";

const title = "FRONT-END\nCHA JINYOUNG";

const Overview = () => {
  return (
    <OverviewWrap id="overview">
      <OverviewTitle text={title} />
    </OverviewWrap>
  );
};

export default Overview;
