import Image from "next/image";
import tw from "tailwind-styled-components";

const SideButtonWrap = tw.div`fixed bottom-6 right-6 flex sm:bottom-8 sm:right-8`;
const LinkButton = tw.button`p-2 rounded-full bg-[#dddddd] cursor-pointer hover:bg-white sm:p-3`;

const SideButton = () => {
  return (
    <SideButtonWrap>
      <LinkButton id={`bottomBtn`}>
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
