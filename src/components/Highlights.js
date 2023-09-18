import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Highlights({ cardContents }) {
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
        Current Projects
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-evenly"
        alignContent="center"
      >
        {cardContents.map((data, id) => (
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
                {data.cardHeader}
                {console.log(data.cardHeader)}
              </Typography>
              <Typography variant="body2" color="primary" textAlign="center">
                {data.cardContents}
                {console.log(data.cardContents)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
