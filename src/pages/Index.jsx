import { Box, Button, Container, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaInfoCircle, FaMapMarkedAlt, FaQuestionCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl">
          Welcome to the Virtual World Event!
        </Heading>
        <Text fontSize="xl">Join us for an immersive experience in our virtual world, featuring top exhibitors and interactive sessions. Explore new trends, network with industry leaders, and gain insights from experts.</Text>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwd29ybGQlMjBldmVudHxlbnwwfHx8fDE3MTQ1MTI4NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Virtual World Event" />

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Event Overview</Heading>
          <Text mt={4}>Date: September 10-12, 2023</Text>
          <Text>Theme: Innovation in Technology</Text>
          <Text>Featuring over 50 exhibitors from around the globe.</Text>
          <Button rightIcon={<FaMapMarkedAlt />} colorScheme="teal" mt={3}>
            Explore Virtual World
          </Button>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="lg">About the Event</Heading>
            <Text>Our mission is to connect technology enthusiasts and professionals in a dynamic virtual environment.</Text>
            <Text>Learn how to navigate and interact within our virtual world for the best experience.</Text>
            <Button leftIcon={<FaInfoCircle />} colorScheme="pink" variant="solid">
              Learn More
            </Button>
          </VStack>

          <VStack spacing={3} alignItems="flex-start">
            <Heading size="lg">Need Help?</Heading>
            <Text>Got questions? Check out our FAQ or contact us directly for more information.</Text>
            <Button leftIcon={<FaQuestionCircle />} colorScheme="blue" variant="outline">
              FAQ
            </Button>
            <Button leftIcon={<FaCalendarAlt />} colorScheme="green" variant="solid">
              Contact Us
            </Button>
          </VStack>
        </SimpleGrid>

        <Box>
          <Text fontSize="sm" textAlign="center">
            © 2023 Virtual World Event. All rights reserved.
          </Text>
          <Text fontSize="sm" textAlign="center">
            <Link color="teal.500" href="#">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link color="teal.500" href="#">
              Privacy Policy
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
