"use client";
import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";


const Search = ({ setUser }) => {
  const [query, setQuery] = useState("");
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setUser(null);
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();
      if (data.message) {
        return toast({
          title: "Error.",
          description:
            data.message == "Not Found" ? "User not found" : data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      setUser(data);
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
  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        variant={"outline"}
        placeholder={"Type username (eg. Hendrickhz)"}
        focusBorderColor="green.500"
      />
      <Button
        mt={4}
        opacity={!query ? 0.5 : 1}
        disabled
        type="submit"
        colorScheme={"whatsapp"}
        isLoading={loading}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
