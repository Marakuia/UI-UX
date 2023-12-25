import React from "react";
import * as Style from "./index.styled";
import Head from "next/head";
import { PropsWithChildren } from "react";


const Header: React.FC<PropsWithChildren> = (props) => {
  return (
    <Style.Header id="header">
      <Head>
        <title>Main page</title>
      </Head>
      <Style.Content>
        <Style.Logo>
          <Style.Img src="/sun.svg" width={50} height={50} alt="webDev"></Style.Img>
          <Style.Name>SUNNY Movie</Style.Name>
        </Style.Logo>
        
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
