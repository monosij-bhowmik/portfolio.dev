import React from "react";
import imageUrl from "../../images/Banner3.svg";
import Highlights from "../Highlights";

import ParallaxImageBanner from "../ParallaxImageBanner";
import TimelineComponet from "../Timeline";
import ContactForm from "./ContactForm";

// ToDo:
// 1. Create a timeline compponent and use it on the homepage
// 2. Make a slider for the travel page
// 3.

const homepageBanner = {
  label: "Hi I'm Monosij !",
  description: "Full stack javascript developer/ Email Marketing Consultant",
};
const cardContents = [
  {
    cardHeader: "Portfolio website builder (MERN stack)",
    cardContents:
      "Building a MERN application which makes it easy for anyone with no coding experience build a portfolio website",
  },
  {
    cardHeader: "Marketing Email Builder (MERN Stack)",
    cardContents:
      "Building a platform which enables digital marketers to build customised HTML emails without any technical knowledge",
  },
];
const highlightsHeader = "On going projects";
const timeline = [
  {
    year: "Oct 2022 - Present",
    duration: "10 mos",
    area: "Hyderabad, Telangana, India ",
    companyName: "Google Operations Center",
    role: "Senior Associate - Production Specialist",
    description:
      "Proficient in developing mobile-responsive email campaigns and templates using HTML, CSS, and FTL.<br><br>Managed email translation for 83 different locales and coordinated with multiple stakeholders for approvals, ensuring on-time completion.<br><br>Oversaw all technical aspects and post-launch reporting for successful email launches.<br><br>",
  },
  {
    year: "Nov 2021 - Sep 2022",
    duration: "11 mos",
    area: "Bangalore Urban, Karnataka, India",
    companyName: "Indegene",
    role: "Associate - Campaign Management",
    description:
      "Integrated Veeva system with SFMC to facilitate marketing communications in the Asia-Pacific region.<br ><br >Developed data model and established data flow between CRM system and client website.<br ><br >Created personalized marketing communications and monthly newsletters for diverse audiences in various regions.<br ><br>Streamlined internal workflows and designed user journeys for sales and marketing teams.<br ><br>",
  },
  {
    year: "Jan 2020 - Oct 2021",
    duration: "1 yr 10 mos",
    area: "Bengaluru Area, India",
    companyName: "Deloitte India (Offices of the US)",
    role: "Associate Analyst",
    description:
      "Developed personalized marketing emails and interactive landing pages, leading the creative front, using HTML, CSS, JavaScript, Bootstrap, and SSJS. Managed end-to-end user journeys with Email Studio, Automation Studio, Contact Builder, and Journey Builder.<br ><br > Streamlined development by creating a content block repository with Bootstrap and a custom library, reducing development and QA effort by 40%. Proposed a more efficient approach for user journeys, resulting in a 20% reduction in platform resource usage.<br ><br > Introduced progressive web forms and micro-interactions on static cloud pages to enhance the user experience and generate a larger number of healthy leads.<br ><br > Ensured smooth data flow between SFDC and SFMC through integration, leveraging Automation Studio and SQL queries. Collaborated with marketing managers and stakeholders to implement complex business logic using different SFMC studios and improved documentation for developers.",
  },
];

function Homepage() {
  return (
    <>
      <ParallaxImageBanner imageUrl={imageUrl} bannerData={homepageBanner} />
      <Highlights
        sectionHeading={highlightsHeader}
        cardContents={cardContents}
      />
      <TimelineComponet timelineData={timeline} />
      <ContactForm formType="footer" sx={{ pb: 4 }} />
    </>
  );
}

export default Homepage;
