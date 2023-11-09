import React, { Fragment } from "react";
import { Svg } from "./style";
const _ = require("lodash");
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
export default function DyCircle(props) {
  const height = props.height ?? 100;
  const width = props.width ?? 100;
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...props.style,
      }}
    >
      <svg style={{ width: `${width}px`, height: `${height}px` }}>
        <path
          fill="none"
          stroke="#333"
          strokeWidth="4"
          d={describeArc(
            width / 2,
            height / 2,
            (45 * _.min([width, height])) / 100,
            0,
            props.radius
          )}
        />
      </svg>
      <div
        style={{
          marginTop: "-100%",
          width: `${width}px`,
          height: `${height}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: `${width}px`,
            height: `${height}px`,

            fontSize: `${width / 7}px`,
          }}
        >
          {props.value} <div>{props.text}</div>
        </div>
      </div>
    </div>
  );
}
