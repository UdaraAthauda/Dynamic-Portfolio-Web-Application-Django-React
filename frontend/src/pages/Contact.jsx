import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  Field,
  HStack,
  IconButton,
} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import api from "../../api";
import { FaLinkedin, FaGithub, FaArrowRight, FaPhoneSquareAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [contactDetails, setContactDetails] = useState([]);

  const getData = async () => {
    try {
      const res = await api.get('introduction/')
      setContactDetails(res.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxW="6xl" py={10}>
      <Heading
        textAlign="center"
        mb={10}
        size={{ base: "2xl", md: "3xl" }}
        color="purple.700"
      >
        Contact Me
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={10}
        justify="center"
        align="stretch"
      >
        {/* Contact Info */}
        <Card.Root flex="1" p={6} shadow="md" borderRadius="2xl">
          <Card.Body>
            <Heading size="md" mb={4}>
              Get in Touch
            </Heading>
            <Text mb={3}>
              I’d love to hear from you! Whether it’s a project, job opportunity,
              or just a chat.
            </Text>
            <Stack>
              <Box>
                <Text fontWeight="bold">Email:</Text>
                <Text color="teal.600">{contactDetails.email}</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Phone:</Text>
                <Text color="teal.600">{contactDetails.phone}</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Location:</Text>
                <Text color="teal.600">{contactDetails.location}</Text>
              </Box>
            </Stack>
            <HStack mt={10} justify={'center'} gap={8}>
              <IconButton as={'a'} href={contactDetails?.github} aria-label="GitHub" variant="solid" colorPalette="teal">
                <FaGithub />
              </IconButton>
              <IconButton as={'a'} href={contactDetails?.linkedin} aria-label="LinkedIn" variant="solid" colorPalette="teal">
                <FaLinkedin />
              </IconButton>
            </HStack>
            <Button variant={'subtle'} colorPalette={'purple'} mt={4}>Download Resume</Button>
            <Button variant={'subtle'} mt={4}>Back to Home</Button>
          </Card.Body>
        </Card.Root>

        {/* Contact Form */}
        <Card.Root as="form" onSubmit={handleSubmit} flex="2" p={6} shadow="md" borderRadius="2xl">
          <Card.Body>
            <Heading size="md" mb={4}>
              Send a Message
            </Heading>
            <Stack gap={4}>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input name="name" onChange={handleChange} placeholder="Your Name" size="lg" colorPalette={'teal'} />
              </Field.Root>

              <Field.Root required>
                <Field.Label>Email<Field.RequiredIndicator /></Field.Label>
                <Input name="email" type="email" onChange={handleChange} placeholder="Your Email" size="lg" colorPalette={'teal'} required />
              </Field.Root>
              <Field.Root required>
                <Field.Label>Message<Field.RequiredIndicator /></Field.Label>
                <Textarea name="message" onChange={handleChange} placeholder="Your Message" size="lg" rows={5} colorPalette={'teal'} required />
              </Field.Root>
              <Button
                name="submit"
                type="submit"
                mt={3}
                alignSelf="flex-start"
                variant="solid"
                colorPalette="teal"
                size="lg"
              >
                Send Message
              </Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Flex>
    </Container>
  )
}
