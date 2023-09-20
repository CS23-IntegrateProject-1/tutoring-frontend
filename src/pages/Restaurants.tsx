import { Box, Heading, useDisclosure, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { RestaurantDetailModal } from "./RestaurantDetailModal";
import { FC } from "react";

export const Restaurants: FC = () => {
  const restaurantModal = useDisclosure();
  // The mock data
  const restaurants = [
    {
      id: 1,
      name: "Shinkanzen",
      location: "Bangkok",
      numberOfEmployee: 10,
      isOpen: true,
    },
    {
      id: 2,
      name: "Shinkanzen2",
      location: "Bangkok2",
      numberOfEmployee: 20,
      isOpen: true,
    },
    {
      id: 3,
      name: "Shinkanzen3",
      location: "Bangkok3",
      numberOfEmployee: 30,
      isOpen: true,
    },
  ];

  const handleClick = (e: MouseEvent) => {};

  return (
    <Box>
      <Heading>Restaurant Page</Heading>
      <Outlet />
      {restaurants.map((restaurant) => (
        <Box >
          <Heading>{restaurant.name}</Heading>
          <Text>{restaurant.location}</Text>
        </Box>
      ))}

      <RestaurantDetailModal onClick={restaurantModal.onOpen} />
    </Box>
  );
};
