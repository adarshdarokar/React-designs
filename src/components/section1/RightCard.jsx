import React from "react";
import RightContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-60 overflow-hidden relative  rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightContent id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
