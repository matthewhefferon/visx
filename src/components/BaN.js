import React from "react";
import { Text } from "@visx/text";

const BaN = () => (
  <div className="flex justify-around pt-10">
    <div className="shadow-2xl rounded-lg">
      <div className="p-4">
        <div className="text-xl font-semibold">
          <svg>
            <Text verticalAnchor="start" dy="8">
              Daily Active Users (DAU)
            </Text>
            <Text
              verticalAnchor="start"
              dx={8}
              dy={64}
              style={{ fontWeight: 900 }}
              fontSize="100px"
            >
              200K
            </Text>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default BaN;
