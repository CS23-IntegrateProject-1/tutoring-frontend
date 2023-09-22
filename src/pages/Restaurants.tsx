import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RestaurantDetailModal } from "./RestaurantDetailModal";
import { FC, useState } from "react";
import { SearchBar } from "./SearchBar";
import { AddModal } from "./AddModal";
import mock from "../mock.json";

interface RestaurantProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
}

export const Restaurants: FC = () => {
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading m="0.5em" textAlign={"center"} color={"primary.500"}>
        Restaurant List
      </Heading>
      {/* <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      /> */}
      <Flex
        flexDir={"column"}
        align={"center"}
        overflowY="auto"
        maxHeight="55vh"
        my={"1em"}
        width={{ base: "100%", sm: "70%", lg: "50%" }}
      >
        <VStack
          maxW={"550px"}
          spacing={"0.5em"}
          width={{ base: "100%", sm: "80%" }}
        >
          {/* 
            Map restaurant components here
          */}
        </VStack>
      </Flex>

      {
        /*
          create add Button here
        */
      }
      {
        /*
          call a <RestaurantDetailModal/> component here
          and pass the props

        */
      }
      {
        /*
          call a <AddModal/> component here

        */
      }
    </Box>
  );
};
