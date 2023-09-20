import { Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Restaurants = () => {
  const test = true;
  if (test){
            console.log("hi"     );
  }

  return (
    <Box>
      <Heading>Restaurant Page</Heading>
      <Outlet />

    </Box>
  );
};
