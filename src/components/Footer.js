import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Toolbar, Box } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";
import ContactForm from "./page-layout/ContactForm";

export default function Footer() {
  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" flexGrow={1}>
            {/* left side */}
            <ContactForm type="footer" />
          </Box>
          {/* right side */}
          <SocialMediaLinks size="medium" color="primary" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
