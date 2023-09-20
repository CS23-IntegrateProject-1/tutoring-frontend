import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import { RestaurantDetailModal } from "./RestaurantDetailModal";
import { FC, useState } from "react";
import { SearchBar } from "./SearchBar";

interface RestaurantProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
  isAvailable: boolean;
}

export const Restaurants: FC = () => {
  const restaurantModal = useDisclosure();
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantProps | null>(
    null
  ); // Initialize as null

  const restaurants = [
    {
      id: 1,
      name: "Shinkanzen",
      location: "Bangkok",
      numberOfEmployee: 10,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Shinkanzen2",
      location: "Bangkok2",
      numberOfEmployee: 20,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Shinkanzen3",
      location: "Bangkok3",
      numberOfEmployee: 30,
      isAvailable: true,
    },
  ];

  const handleOpenModal = (restaurant: RestaurantProps) => {
    setSelectedRestaurant(restaurant);
    restaurantModal.onOpen(); // You were missing the function call here
  };

  return (
    <Box>
      <Heading>Restaurant Page</Heading>
      <SearchBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <Box>
        {restaurants
          .filter((restaurant) => restaurant.name.toLowerCase().includes(searchFilter.toLowerCase()) )
          .map((restaurant, index) => (
            <Box
              width={"100%"}
              height={"100px"}
              background={"pink"}
              key={restaurant.id}
              borderRadius={"12px"}
              mt={"10px"}
              onClick={() => handleOpenModal(restaurant)}
            >
              <Heading>{index + 1}.{restaurant.name}</Heading>
            </Box>
          ))}
      </Box>
      {selectedRestaurant && (
        <RestaurantDetailModal
          onOpen={restaurantModal.onOpen}
          isOpen={restaurantModal.isOpen}
          onClose={restaurantModal.onClose}
          {...selectedRestaurant}
        />
      )}
    </Box>
  );
};
