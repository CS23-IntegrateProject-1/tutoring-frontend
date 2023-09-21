import { Box, FlexProps, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navProps: FlexProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "50px",
  padding: "0 1em",
  background: "primary.500",
  color: "primary.100",
};

export const NavBar = () => {
  return (
    <Box {...navProps}>
      <Text>Logo</Text>
      <HStack spacing={"2em"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/restaurants">Restaurant</NavLink>
      </HStack>
    </Box>
  );
};
