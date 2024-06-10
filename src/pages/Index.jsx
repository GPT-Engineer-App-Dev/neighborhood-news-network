import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} mb={10}>
        <FaNewspaper size="3em" />
        <Heading as="h1" size="2xl">Local Herald</Heading>
        <Text fontSize="lg">Your trusted source for community news</Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article Title 1</Heading>
          <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article Title 2</Heading>
          <Text mt={4}>Pellentesque habitant morbi tristique senectus et netus...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article Title 3</Heading>
          <Text mt={4}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article Title 4</Heading>
          <Text mt={4}>Ut enim ad minim veniam, quis nostrud exercitation ullamco...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article Title 5</Heading>
          <Text mt={4}>Duis aute irure dolor in reprehenderit in voluptate velit...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article Title 6</Heading>
          <Text mt={4}>Excepteur sint occaecat cupidatat non proident...</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;