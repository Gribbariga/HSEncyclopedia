import React from "react";
import { userFooterStyles } from "./style";

const Footer = () => {
  return (
    <>
      <FooterSC />
    </>
  );
};

const { FooterSC } = userFooterStyles();

export default React.memo(Footer);
