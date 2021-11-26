import React from "react";
import { render } from "react-dom";
import { Text } from "@visx/text";

const KPI = () => (
  <div className="container mx-auto flex justify-evenly pt-10">
    <div className="shadow-md rounded-md bg-white">
      <div className="p-5">
        <h5 className="text-xl font-semibold mb-2">
          Daily Active Users (DAU)
          {/* <svg>
            <Text verticalAnchor="middle">Daily Active Users (DAU)</Text>
          </svg> */}
        </h5>
        <h1 className="text-5xl font-semibold mb-2 flex flex-center justify-center p-5">
          200K
          {/* <svg>
            <Text verticalAnchor="middle" fontSize="100px">200K</Text>
          </svg> */}
        </h1>
      </div>
    </div>
  </div>
);

export default KPI;
