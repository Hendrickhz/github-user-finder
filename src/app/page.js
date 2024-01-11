"use client";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import UserProfile from "./components/UserProfile";

export default function Home() {
  const [userData, setUserData] = useState(null);

  return (
    <Container maxW={"container.lg"}>
      <Navbar />
      <Text textAlign={"center"} py={6} fontSize={"3xl"}>
        Search users on Github
      </Text>
      <Search setUser={(res) => setUserData(res)} />
      {userData && <UserProfile userData={userData} />}
    </Container>
  );
}
