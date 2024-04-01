import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from "../images/David.png"

const greeting = "Hello, I am David!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={9}>
      <VStack>
        <Avatar src={photo} size="2xl" />
        <Heading size="2xm">{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading size="2xl">{bio1}</Heading>
        <Heading size="2xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
