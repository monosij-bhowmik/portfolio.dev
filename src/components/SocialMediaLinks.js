import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function SocialMediaLinks({ size, color }) {
  const accounts = [
    {
      key: "1",
      label: "GitHub",
      icon: <GitHubIcon fontSize={size} color={color} />,
      url: "https://github.com/monosij-bhowmik",
    },
    {
      key: "2",
      label: "LinkedIn",
      icon: <LinkedInIcon fontSize={size} color={color} />,
      url: "https://www.linkedin.com/in/monosij-bhowmik-73a908152/",
    },
    {
      key: "3",
      label: "Instagram",
      icon: <InstagramIcon fontSize={size} color={color} />,
      url: "https://www.instagram.com/hig_h_af/",
    },
    {
      key: "4",
      label: "Facebook",
      icon: <FacebookIcon fontSize={size} color={color} />,
      url: "https://www.facebook.com/i.am.monk98",
    },
  ];

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {accounts.map((item, id) => (
        <Link to={item.url} target="_blank">
          {item.icon}
        </Link>
      ))}
    </Stack>
  );
}
