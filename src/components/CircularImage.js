import { Card } from "@mui/material";
import React from "react";

export default function CircularImage({ imgURL, imgHeight, imgWidth }) {
  return (
    <Card
      style={{
        width: "250px",
        height: "250px",
        overflow: "hidden",
        borderRadius: "100%",
        margin: "-60px auto 0",
      }}
    >
      <img
        src={imgURL}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
    </Card>
  );
}
