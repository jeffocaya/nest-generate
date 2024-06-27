import React from "react";
import Author from "./Author";
import Date from "./Date";

const MetaData = () => {
  return (
    <div class="flex items-center ">
      <div class="pr-1 text-sm">
        <Author />
      </div>
      <div class="border-l pl-1 border-bgray">
        <Date />
      </div>
    </div>
  );
};

export default MetaData;
