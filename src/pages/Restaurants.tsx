import { Box, Heading, useDisclosure, Text, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { RestaurantDetailModal } from "./RestaurantDetailModal";
import { FC, useState } from "react";

interface RestaurantProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
  isAvailable: boolean;
}

export const Restaurants: FC = () => {
  const restaurantModal = useDisclosure();
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantProps>(
    {
      id: 0,
      name: "",
      location: "",
      numberOfEmployee: 0,
      isAvailable: false,
    },
  );
  // The mock data
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
    restaurantModal.onOpen();
  };

  return (
    <Box >
      <Heading>Restaurant Page</Heading>
      <VStack>
        {restaurants.map((restaurant) => (
          <Box
            as="button"
            width={"100%"}
            // height={"100px"}
                          onClick={() => handleOpenModal(restaurant)}

            background={"pink"}
          >
            <Box
              background={"blue"}
            ></Box>
            <Heading>{restaurant.name}</Heading>
          </Box>
        ))}
      </VStack>

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
