import React from "react";
import imageUrl from "../../images/Banner1.jpg";
import ParallaxImageBanner from "../ParallaxImageBanner";

const homepageBanner = {
  label: "Hi I'm Monosij !",
  description: "An aspiring full-stack dev, writing code for a living.",
};

function Homepage() {
  return (
    <>
      <ParallaxImageBanner imageUrl={imageUrl} bannerData={homepageBanner} />
    </>
  );
}

export default Homepage;
