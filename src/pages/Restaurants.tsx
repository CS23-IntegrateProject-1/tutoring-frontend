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
  isAvailable: boolean;
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
      <Heading m="0.5em" textAlign={"center"}>
        Restaurant Page
      </Heading>
      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        width={"100%"}
      >
        <VStack
          w={{ base: "100%", sm: "70%", lg: "50%" }}
          maxW={"550px"}
          my="1em"
          overflow={"hidden"}
        >
          {restaurants
            .filter((restaurant) =>
              restaurant.name.toLowerCase().includes(searchFilter.toLowerCase())
            )
            .map((restaurant, index) => (
              <Flex
                justify={"center"}
                align={"center"}
                width={"100%"}
                height={"100px"}
                background={"pink"}
                borderRadius={"12px"}
                key={restaurant.id}
                cursor={"pointer"}
                onClick={() => handleOpenModal(restaurant)}
              >
                <Heading>
                  {index + 1}.{restaurant.name}
                </Heading>
              </Flex>
            ))}
        </VStack>
      </Flex>

      <Button
        width={"250px"}
        height={"50px"}
        m={"auto"}
        onClick={addModal.onOpen}
      >
        Add
      </Button>

      {selectedRestaurant && (
        <RestaurantDetailModal
          isOpen={restaurantModal.isOpen}
          onClose={restaurantModal.onClose}
          id={selectedRestaurant.id}
          name={selectedRestaurant.name}
          location={selectedRestaurant.location}
          numberOfEmployee={selectedRestaurant.numberOfEmployee}
          isAvailable={selectedRestaurant.isAvailable}
        />
      )}

      <AddModal isOpen={addModal.isOpen} onClose={addModal.onClose} />
    </Box>
  );
};
