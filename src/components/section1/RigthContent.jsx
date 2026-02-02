import React from "react";
import RightCard from "./RightCard";
const RigthContent = (props) => {
  console.log(props.users);

  return (
    <div id='right' className="h-full w-6/3 py-6 rounded-4xl flex overflow-x-auto felx-nowrap gap-10 shrink-0">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RigthContent;
