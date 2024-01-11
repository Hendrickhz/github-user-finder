import { Box, Flex, Text  } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import React from "react";


const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} py={6}>
      <Box position={"relative"} display={"flex"} gap={2} alignItems={"center"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Github
        </Text>{" "}
        <FaGithub size={30} />
      </Box>
      <Box>
      
      </Box>
    </Flex>
  );
};

export default Navbar;
