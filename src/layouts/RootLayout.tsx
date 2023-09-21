import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const RootLayout = () => {
  return (
    <Box width={"100%"} height={"100vh"} background="primary.200">
      <NavBar />
      <Box
        // display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={{ base: "1em", md: "3em" }}
        height={"calc(100vh - 50px)"}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
