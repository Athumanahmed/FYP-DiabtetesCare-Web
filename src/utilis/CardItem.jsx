import { Card } from "@tremor/react";
import React from "react";

function CardItem({ title, value }) {
  return (
    <p className="mx-auto mx-w-xs mb-3">
      <span className="text-lg ">{title}</span> :{" "}
      <span className="text-md bg-[#36ae9a] px-1 py-1 rounded-md text-white font-bold">
        {value}
      </span>
    </p>
  );
}

export default CardItem;
