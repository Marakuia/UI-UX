import React from "react";
import * as Style from "./index.styled";

type StatisticItemProps = {
  icon: string;
  text: number | string | undefined;
};
const StatisticItem: React.FC<StatisticItemProps> = (props) => {
  return (
    <Style.StatisticItem>
      <Style.Img src={props.icon} alt="webDev"></Style.Img>
      
      <Style.Text>{props.text}</Style.Text>
    </Style.StatisticItem>
  );
};

export default StatisticItem;
