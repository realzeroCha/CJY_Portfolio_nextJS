import tw from "tailwind-styled-components";

const FooterConatiner = tw.footer`text-center py-[10%] text-white bg-black text-[0.75rem] sm:py-[4%] sm:text-[1rem]`;

const Footer = () => {
  return (
    <FooterConatiner>
      Copyright 2025. Cha Jinyoung all rights reserved.
    </FooterConatiner>
  );
};
export default Footer;
