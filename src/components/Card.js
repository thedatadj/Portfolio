import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="1em"
      width={{lg: "32em", sm: "24em"}}
    >
      <Image src={imageSrc} borderRadius="1em"/>
      <VStack alignItems="left" padding="1em">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <a href={url}>
          <HStack>
            <Text fontWeight="bold"> See more </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </HStack>
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
