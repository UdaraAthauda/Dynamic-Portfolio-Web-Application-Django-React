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
import { Link } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
import ResumeDownload from "@/components/ui/ResumeDownload";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [contactDetails, setContactDetails] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      await api.post('contact/', formData)

      toaster.create({
        title: 'Success',
        description: 'Your message has been sent!',
        type: 'success',
        duration: 5000,
      })

      setFormData({
        name: '',
        email: '',
        message: ''
      })

    } catch (error) {
      toaster.create({
        title: 'Error',
        description: 'An error occurred. Please try again.',
        type: 'error',
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  };

  return (
    <Container maxW="6xl" py={{ base: 6, md: 10 }}>
      <Heading
        textAlign="center"
        mb={{ base: 6, md: 10 }}
        size={{ base: "xl", md: "3xl" }}
        color="purple.700"
      >
        Get in Touch.
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 10 }}
        justify="center"
        align="stretch"
      >
        {/* Contact Info */}
        <Card.Root flex="1" p={{ base: 4, md: 6 }} shadow="md" borderRadius="2xl">
          <Card.Body>
            <Heading size="md" mb={4}>
              Contact Me
            </Heading>
            <Text mb={3}>
              I’d love to hear from you! Whether it’s a project, job opportunity,
              or just a chat.
            </Text>
            <Stack gap={4}>
              <Box>
                <Text fontWeight="bold">Email:</Text>
                <Text color="teal.600" wordBreak="break-word">
                  {contactDetails.email}
                </Text>
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
            <HStack mt={5} justify="center" spacing={6} wrap="wrap">
              <IconButton as={'a'} href={contactDetails?.github} aria-label="GitHub" variant="solid" colorPalette="teal">
                <FaGithub />
              </IconButton>
              <IconButton as={'a'} href={contactDetails?.linkedin} aria-label="LinkedIn" variant="solid" colorPalette="teal">
                <FaLinkedin />
              </IconButton>
            </HStack>
          </Card.Body>
          <Stack gap={3} w="100%">
            <ResumeDownload resumeUrl={contactDetails?.resume} />
            <Button as={Link} to="/" variant="subtle" w="100%">
              Back to Home
            </Button>
          </Stack>
        </Card.Root>

        {/* Contact Form */}
        <Card.Root
          as="form"
          onSubmit={handleSubmit}
          flex="2"
          p={{ base: 4, md: 6 }}
          shadow="md"
          borderRadius="2xl"
        >
          <Card.Body>
            <Heading size="md" mb={4}>
              Send a Message
            </Heading>
            <Stack gap={4}>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  size="lg"
                  colorPalette="teal"
                  required
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label>
                  Email<Field.RequiredIndicator />
                </Field.Label>
                <Input
                  name="email"
                  value={formData.email}
                  type="email"
                  onChange={handleChange}
                  placeholder="Your Email"
                  size="lg"
                  colorPalette="teal"
                  required
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label>
                  Message<Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  size="lg"
                  rows={5}
                  colorPalette="teal"
                  required
                />
              </Field.Root>

              <Button
                name="submit"
                type="submit"
                mt={3}
                alignSelf={{ base: "stretch", md: "flex-start" }}
                variant="solid"
                colorPalette="teal"
                size="lg"
                loading={loading}
                loadingText="Sending..."
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
