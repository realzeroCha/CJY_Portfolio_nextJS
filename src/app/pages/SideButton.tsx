import Image from "next/image";
import tw from "tailwind-styled-components";

const SideButtonWrap = tw.div`fixed bottom-8 right-8 flex`;
const LinkButton = tw.a`p-3 rounded-full bg-white cursor-pointer hover:bg-[#cecece]`;

const SideButton = () => {
  return (
    <SideButtonWrap>
      <LinkButton href={`#top`}>
        <Image
          src="/images/svg/ic_arrow_up.svg"
          width={24}
          height={24}
          alt="up"
        />
      </LinkButton>
    </SideButtonWrap>
  );
};

export default SideButton;
