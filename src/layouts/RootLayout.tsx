import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const RootLayout = () => {
  return (
    <Box width={"100%"} height={"100vh"}>
      <NavBar />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"3em"}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
