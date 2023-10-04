import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (

    <VStack color ='black' 
    backgroundColor ="white" 
    cursor='pointer'
    borderRadius="1x"
    >
      <Image  src = {imageSrc} borderRadius ='x1/'>
        <VStack spacing={4} p={4} alignItems="flex-start" >
          <HStack justfyContent = 'space-between'>
            <Heading as = 'h3' size = 'md'>{title}</Heading>
            <Text color ='#64748b' FontSize="lg">{description}</Text>
          </HStack>
          <p>
            See more
          </p>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        
        </VStack>
      </Image>
      
    </VStack>
  );

};

export default Card;
