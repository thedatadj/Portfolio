import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="1em"
      width="32em"
    >
      <Image src={imageSrc} borderRadius="1em"/>
      <VStack
        alignItems="left"
        padding="1em"
      >
        <Heading
          size="md"
        >
          {title}
        </Heading>
        <Text
        >
          {description}
        </Text>
        <HStack>
          <Text
            fontWeight="bold"
          >
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
