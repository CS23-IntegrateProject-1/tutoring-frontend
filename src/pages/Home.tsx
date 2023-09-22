import { Box, Heading } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading color={"primary.500"}>This is Home Page</Heading>
    </Box>
  );
};
