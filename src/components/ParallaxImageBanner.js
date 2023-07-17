import React from "react";
import { Parallax } from "react-parallax";
import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function ParallaxImageBanner({ imageUrl, bannerData }) {
  return (
    <Parallax
      blur={0}
      bgImage={imageUrl}
      bgImageAlt="the cat"
      className="homepage-banner-image"
      strength={800}
    >
      <Card className="homepage-banner-card" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className="typewriter"
            component="div"
            sx={{ width: "fit-content" }}
          >
            {bannerData.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bannerData.description}
          </Typography>
        </CardContent>
      </Card>
    </Parallax>
  );
}
