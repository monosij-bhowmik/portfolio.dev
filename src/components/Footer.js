import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Toolbar, Box, Typography } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";
import ContactForm from "./page-layout/ContactForm";

export default function Footer() {
  return (
    <AppBar color="secondary" position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" flexGrow={1}>
            <Typography component="div" variant="body2">
              &#169; Monosij Bhowmik
            </Typography>
          </Box>
          {/* right side */}
          <SocialMediaLinks size="medium" color="primary" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
