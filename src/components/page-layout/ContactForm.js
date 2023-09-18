import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import image from "../../images/snapshot-backround-removed.png";
import SendIcon from "@mui/icons-material/Send";
import { TextField, Button, Box, Typography } from "@mui/material";
import CircularImage from "../CircularImage";

const validationSchema = yup.object({
  firstName: yup
    .string("First Name")
    .required("I would love to know your name :)")
    .min(2),
  lastName: yup.string("Last Name"),
  email: yup
    .string("Email")
    .email("That doesn't look like a valid one :(")
    .required("required"),
  message: yup.string("Message").min(1).required("That's empty!"),
});

const ContactForm = ({ formtype }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth={"lg"} gutterBottom>
      <Box sx={{ flexGrow: 1 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item lg={12} justifyContent="center">
            <Typography
              gutterBottom
              textAlign="center"
              color="primary"
              variant="h4"
              component="div"
              sx={{ pt: 4 }}
            >
              Feel free to drop a Hi!
            </Typography>
          </Grid>
          <Grid item lg={6} justifyContent="center" sx={{ p: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container direction="row" sx={{ pb: 2 }} spacing={2}>
                <Grid item lg={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    fullWidth
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          border: "2px solid white",
                        },
                        "&:hover": {
                          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                            border: "2px solid white",
                          },
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    fullWidth
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          border: "2px solid white",
                        },
                        "&:hover": {
                          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                            border: "2px solid white",
                          },
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item sx={{ pb: 2 }} lg={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.firstName}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                      },
                      "&:hover": {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          border: "2px solid white",
                        },
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Message"
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                      },
                      "&:hover": {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          border: "2px solid white",
                        },
                      },
                    },
                  }}
                />
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </form>
          </Grid>
          <Grid container xs={6}>
            <Grid item lg={12} justifyContent="center" sx={{ p: 2, pt: 10 }}>
              <CircularImage imgURL={image} height="250px" width="250px" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactForm;
