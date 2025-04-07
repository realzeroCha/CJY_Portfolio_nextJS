import tw from "tailwind-styled-components";

const FooterConatiner = tw.footer`text-center py-[4%] text-white bg-black`;

const Footer = () => {
  return (
    <FooterConatiner>
      Copyright 2025. Cha Jinyoung all rights reserved.
    </FooterConatiner>
  );
};
export default Footer;
