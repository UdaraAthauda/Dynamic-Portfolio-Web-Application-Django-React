import { Flex, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function LoadingSpinner() {
    return (
        <Flex
            minH={{ base: "100vh", md: "80vh" }}
            w="100%"
            justify="center"
            align="center"
            p={{ base: 4, md: 8 }}
        >
            <VStack>
                <Spinner size={'xl'} color="purple.700" />
                <Text fontSize={'xl'} color={'purple.700'}>Loading.....</Text>
            </VStack>
        </Flex>
    )
}
