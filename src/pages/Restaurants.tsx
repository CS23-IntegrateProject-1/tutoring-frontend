import { Box, Heading, useDisclosure, Text } from "@chakra-ui/react";
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
    restaurantModal.onOpen
  };

  return (
    <Box onClick={restaurantModal.onOpen}>
      <Heading>Restaurant Page</Heading>
      {restaurants.map((restaurant) => (
        <Box>
          <Box
            width={"100px"}
            height={"100px"}
            background={"pink"}
            onClick={()=>handleOpenModal(restaurant)}
          >
            <Heading>{restaurant.id}</Heading>
          </Box>
         
        </Box>
      ))}
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
