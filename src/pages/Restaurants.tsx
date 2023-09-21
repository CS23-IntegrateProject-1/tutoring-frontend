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
  const restaurantModal = useDisclosure();
  const addModal = useDisclosure();
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantProps | null>(null);
  const restaurants: RestaurantProps[] = mock;

  const handleOpenModal = (restaurant: RestaurantProps) => {
    setSelectedRestaurant(restaurant);
    restaurantModal.onOpen();
  };

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
      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
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
          {restaurants
            .filter((restaurant) =>
              restaurant.name
                .toLowerCase()
                .includes(searchFilter.toLowerCase()),
            )
            .map((restaurant, index) => (
              <Flex
                justify={"center"}
                align={"center"}
                width={"100%"}
                height={"100px"}
                borderRadius={"12px"}
                padding={"2em"}
                background={"primary.100"}
                key={restaurant.id}
                cursor={"pointer"}
                onClick={() => handleOpenModal(restaurant)}
              >
                <Heading size={"lg"}>
                  {index + 1}.{restaurant.name}
                </Heading>
              </Flex>
            ))}
        </VStack>
      </Flex>

      <Button
        w={{ base: "70%", sm: "40%", lg: "30%" }}
        height={"50px"}
        m={"auto"}
        background={"primary.400"}
        color={"primary.100"}
        _hover={{ background: "primary.500" }}
        onClick={addModal.onOpen}
      >
        Add Restaurant
      </Button>

      {selectedRestaurant && (
        <RestaurantDetailModal
          isOpen={restaurantModal.isOpen}
          onClose={restaurantModal.onClose}
          id={selectedRestaurant.id}
          name={selectedRestaurant.name}
          location={selectedRestaurant.location}
          numberOfEmployee={selectedRestaurant.numberOfEmployee}
        />
      )}

      <AddModal isOpen={addModal.isOpen} onClose={addModal.onClose} />
    </Box>
  );
};
