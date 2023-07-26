import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";

export default function TimelineComponet({ timelineData }) {
  return (
    <Timeline position="alternate">
      {timelineData.map((data, id) => (
        <TimelineItem>
          <TimelineOppositeContent color="primary">
            <Typography variant="caption" component="div">
              {data.year}
            </Typography>
            <Typography variant="caption" component="div">
              {data.duration}
            </Typography>
            <Typography variant="caption" component="div">
              {data.area}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box className="highlights-container-overlay">
              <Box className="highlights-container" sx={{ p: 2 }}>
                <Typography
                  variant="body1"
                  component="div"
                  color="primary"
                  textAlign="left"
                  fontWeight={600}
                >
                  {data.companyName}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="primary"
                  textAlign="left"
                >
                  {data.role}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  textAlign="left"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></Typography>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
