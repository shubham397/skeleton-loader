import React from "react";
import "./skeleton.css";

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  variant?: "rectangle" | "circle" | "text";
  repeat?: number;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width = "200px",
  height = "200px",
  borderRadius = "4px",
  variant = "rectangle",
  repeat = 1,
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: variant === "circle" ? "50%" : borderRadius,
  };

  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <div key={index} className="skeleton-loader" style={style}></div>
      ))}
    </>
  );
};

export default Skeleton;
