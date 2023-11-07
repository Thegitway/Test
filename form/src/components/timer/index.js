import React, { Fragment, useEffect } from "react";
import { Text, Border, Svg } from "./style";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}
export default function Timer() {

  return (
    <Fragment>
      <Svg>
        <path
          fill="none"
          stroke="#333"
          stroke-width="4"
          d={describeArc(50, 50, 48, 0, 30)}
        />
      </Svg>
    </Fragment>
  );
}
