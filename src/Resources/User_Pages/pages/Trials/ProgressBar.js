import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";

const AnimatedCircularProgressbar = ({
  value,
  strokeWidth,
  styles,
  children,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      const interval = setInterval(() => {
        setAnimatedValue((prev) => {
          if (prev < value) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 20);
    }
  }, [value]);

  return (
    <CircularProgressbarWithChildren
      value={animatedValue}
      strokeWidth={strokeWidth}
      styles={styles}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
};

const AnimatedCircularProgressbarWithChildren = ({
  value,
  strokeWidth,
  styles,
  children,
}) => (
  <div style={{ position: "relative", width: "100%" }}>
    <AnimatedCircularProgressbar
      value={value}
      strokeWidth={strokeWidth}
      styles={styles}
    >
      {children}
    </AnimatedCircularProgressbar>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {value === 100 ? (
        <CircularProgressbar
          value={value}
          strokeWidth={strokeWidth}
          styles={styles}
        />
      ) : null}
    </div>
  </div>
);

const Example = () => {
  return (
    <AnimatedCircularProgressbarWithChildren
      value={75}
      strokeWidth={8}
      styles={buildStyles({
        pathColor: "#f00",
        trailColor: "transparent",
      })}
    >
      <div style={{ width: "84%" }}>
        <AnimatedCircularProgressbar
          value={70}
          strokeWidth={8}
          styles={buildStyles({
            trailColor: "transparent",
          })}
        />
      </div>
    </AnimatedCircularProgressbarWithChildren>
  );
};

export default Example;