"use client";
import { Avatar, Badge, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Repos from "./Repos";

const UserProfile = ({ userData }) => {
  return (
  <>
    <Flex
      my={16}
      border={"2px solid"}
      borderColor={"green.500"}
      borderRadius={4}
      padding={8}
    >
      <VStack mr={5} gap={5}>
        <Avatar name={userData.name} size="2xl" src={userData.avatar_url} />
        <Button colorScheme={"whatsapp"}><a target="_blank" href={userData.html_url}>View Profile</a></Button>
      </VStack>
      <VStack alignItems={"start"}>
        <Flex gap={3} mb={4} flexWrap={"wrap"}>
          <Badge size={"lg"} colorScheme="green">
            public repos: {userData.public_repos}{" "}
          </Badge>
          <Badge size={"lg"} colorScheme="teal">
            public gists: {userData.public_gists}
          </Badge>
          <Badge size={"lg"} colorScheme="orange">
            Followers: {userData.followers}
          </Badge>
          <Badge size={"lg"} colorScheme="purple">
            Following: {userData.following}
          </Badge>
        </Flex>
        <Text textAlign={"start"} fontSize={"2xl"} fontWeight={"bold"}>
          {userData.name}
        </Text>
        <Text textAlign={"start"} fontSize={"md"} fontWeight={"semibold"}>
         {userData.bio}
        </Text>
       <VStack alignItems={'start'} mt={4}>
       <Text>
          <Text as={"span"} fontWeight={"semibold"}>
            Company
          </Text>
          : {userData.company || "Not Specified"}
        </Text>
        <Text>
          <Text as={"span"} fontWeight={"semibold"}>
            Location
          </Text>
          : {userData.location || "Not Specified"}
        </Text>
        <Text>
          <Text as={"span"} fontWeight={"semibold"}>
            Blog/Website
          </Text>
          : {userData.blog ? <a href={userData.blog} target="_blank">{userData.blog}</a> : "Not Specified"}
        </Text>
        <Text>
          <Text as={"span"} fontWeight={"semibold"}>
            Member Since
          </Text>
          : {new Date(userData.created_at).toLocaleDateString()}
        </Text>
       </VStack>
      </VStack>
    </Flex>
    <Repos reposUrl={userData.repos_url} /></>
  );
};

export default UserProfile;
