"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Repos = ({ reposUrl }) => {
  const [repos, setRepos] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await fetch(reposUrl);
        const data = await res.json();
        if (data.message) {
          return toast({
            title: "Error.",
            description: data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
        setRepos(data);
      } catch (error) {
        return toast({
          title: "Error.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [reposUrl, toast]);
  return (
    <>
      <Text mb={4} fontWeight={"bold"} fontSize={"3xl"} textAlign={"center"}>
        Repositories
      </Text>
      {loading ? (
        <Flex justifyContent={"center"} w="full">
          <Spinner size={"xl"} />
        </Flex>
      ) : (
        <VStack w={"full"} gap={5}>
          {repos.sort((a,b)=>b.stargazers_count - a.stargazers_count).map((repo,idx) => {
            if( idx>4 && showMore==false) return null;
            return (
              <Flex
                key={repo.id}
                w={"full"}
                justifyContent={"space-between"}
                alignItems={"center"}
                background={"whiteAlpha.200"}
                _hover={{ background: "whiteAlpha.400" }}
                py={4}
                px={8}
                borderRadius={4}
                transition={"all 0.3 ease"}
              >
                <Flex flex={1} direction={"column"} gap={2}>
                  <Box>
                    <Text  fontWeight={"bold"}><a href={repo.html_url} target="_blank">{repo.name}</a></Text>
                    <Badge colorScheme={"green"}>Language: {repo.language || "Not Specified"}</Badge>
                  </Box>
                </Flex>
                <Flex
                  flex={1}
                  justifyContent={"end"}
                  flexWrap={"wrap"}
                  gap={4}
                  alignItems={"center"}
                >
                  <Badge fontSize={"0.9em"} colorScheme={"orange"}>
                    Stars: {repo.stargazers_count}
                  </Badge>
                  <Badge fontSize={"0.9em"} colorScheme={"blue"}>
                    Forks: {repo.forks_count}
                  </Badge>
                  <Badge fontSize={"0.9em"} colorScheme={"purple"}>
                    Watchers: {repo.watchers_count}
                  </Badge>
                </Flex>
              </Flex>
            );
          })}
          {showMore && <Flex justifyContent={'center'} my={4}>
            <Button colorScheme={'whatsapp'} onClick={()=>setShowMore(false)}>Show Less</Button></Flex>}
          {!showMore && repos.length>5  &&<Flex justifyContent={'center'} my={4}>
            <Button colorScheme={'whatsapp'} onClick={()=>setShowMore(true)}>Show More</Button></Flex>}
        </VStack>
      )}
    </>
  );
};

export default Repos;
