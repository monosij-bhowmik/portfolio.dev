import React from "react";

export default function CircularImage({ imgURL, imgHeight, imgWidth }) {
  return (
    <div>
      <img
        src={imgURL}
        style={{
          borderRadius: "50%",
          width: "100%",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
