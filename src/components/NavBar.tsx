import { Box, FlexProps, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navProps: FlexProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "50px",
  background: "blue.400",
  padding: "0 1em",
};

export const NavBar = () => {
  return (
    <Box {...navProps}>
      <h1>Tutoring Web</h1>
      <HStack spacing={"2em"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/restaurants">Restaurant</NavLink>
      </HStack>
    </Box>
  );
};
