import React from "react";
import Highlights from "../Highlights";

export default function DevPortfolio() {
  const cardContents = [
    {
      cardHeader: "Portfolio website builder (MERN stack)",
      cardContents:
        "Building a MERN application which makes it easy for anyone with no coding experience build a portfolio website",
    },
    {
      cardHeader: "Marketing Email Builder (MERN Stack)",
      cardContents:
        "Building a platform which enables digital marketers to build customised HTML emails without any technical knowledge",
    },
  ];
  const highlightsHeader = "Projects";
  return (
    <>
      <Highlights
        sectionHeading={highlightsHeader}
        cardContents={cardContents}
      />
    </>
  );
}
