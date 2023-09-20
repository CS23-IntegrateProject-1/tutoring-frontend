import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const RestaurantDetail = () => {
  const {id} = useParams();
  return (
    <Box>
      <Heading>Restaurant Detail</Heading>
      <Heading>Hi </Heading>

      <Heading>Hi {id}</Heading>

    </Box>
  );
};
