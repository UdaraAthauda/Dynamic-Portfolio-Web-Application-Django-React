import {
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import profileImg from "../assets/img.PNG";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    <Container mt={10} centerContent>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
        {/* Profile + Socials */}
        <Flex
          justify="center"
          align="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack gap={6}>
            <HStack gap={5} align="center">
              <Image
                alt="UD img"
                src={profileImg}
                h={{ base: "250px", sm: "300px", md: "400px" }}
                bg="blue.100"
                p="20px"
                border="3px solid"
                borderColor="blue.400"
                borderRadius="full"
                _hover={{
                  transform: "scale(1.05)",
                  transition: "0.3s ease-in-out",
                }}
              />

              {/* Social Icons */}
              <Flex flexDir="column" gap={5}>
                <IconButton aria-label="GitHub" variant="solid" colorPalette="teal">
                  <FaGithub />
                </IconButton>
                <IconButton aria-label="LinkedIn" variant="solid" colorPalette="teal">
                  <FaLinkedin />
                </IconButton>
                <IconButton aria-label="Email" variant="solid" colorPalette="teal">
                  <MdAlternateEmail />
                </IconButton>
              </Flex>
            </HStack>

            <Heading
              size={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              textAlign="center"
            >
              Hi, I'm{" "}
              <Text as="span" color="purple.700">
                Udara
              </Text>{" "}
              Athauda
            </Heading>
          </VStack>
        </Flex>

        {/* About Me */}
        <VStack gap={5}>
          <Heading
            size={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            textAlign="center"
          >
            About Me.
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign={{ base: "center", md: "left" }}
            color={{ base: "gray.700", _dark: "gray.300" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
            quia dignissimos. Dolores quis fugiat quidem ullam natus nostrum,
            consequatur porro corporis voluptatem. Quasi numquam, reiciendis
            maxime iure quam laudantium magnam.
          </Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
