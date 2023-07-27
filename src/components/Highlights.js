import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Highlights({ heading, cardContents }) {
  return (
    <Container maxWidth="lg" sx={{ pb: 4 }}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="primary"
        textAlign="center"
        paddingY="20px"
      >
        {heading}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-evenly"
        alignContent="center"
      >
        <Box className="highlights-container-overlay">
          <Box className="highlights-container" sx={{ p: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              color="primary"
              textAlign="center"
              fontWeight={600}
            >
              {cardContents.cardHeader}
            </Typography>
            <Typography variant="body2" color="primary" textAlign="center">
              {cardContents.cardContents}
            </Typography>
          </Box>
        </Box>
        <Box className="highlights-container-overlay">
          <Box className="highlights-container" sx={{ p: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              color="primary"
              textAlign="center"
              fontWeight={600}
            >
              {cardContents.cardHeader}
            </Typography>
            <Typography variant="body2" color="primary" textAlign="center">
              {cardContents.cardContents}
            </Typography>
          </Box>
        </Box>
        <Box className="highlights-container-overlay">
          <Box className="highlights-container" sx={{ p: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              color="primary"
              textAlign="center"
              fontWeight={600}
            >
              {cardContents.cardHeader}
            </Typography>
            <Typography variant="body2" color="primary" textAlign="center">
              {cardContents.cardContents}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
