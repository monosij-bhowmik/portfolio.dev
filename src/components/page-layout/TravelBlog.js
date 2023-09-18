import React from "react";
import Posts from "../Posts";
import Carousel from "../Carousel";
import { Box, Grid } from "@mui/material";

export default function TravelBlog() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth={"lg"}
      >
        <Carousel />
      </Box>

      <Posts />
    </>
  );
}
