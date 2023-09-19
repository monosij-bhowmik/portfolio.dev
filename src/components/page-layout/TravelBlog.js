import React from "react";
import Posts from "../Posts";
import Carousel from "../Carousel";
import { Box, Grid } from "@mui/material";

export default function TravelBlog() {
  return (
    <>
      <Box m={"auto"} maxWidth={"lg"} sx={{ pb: 4 }}>
        <Carousel />
      </Box>
      //Add a 50 - 50 text image block
      <Box m={"auto"} maxWidth={"lg"} sx={{ pb: 4, px: 4 }}>
        <Posts />
      </Box>
    </>
  );
}
