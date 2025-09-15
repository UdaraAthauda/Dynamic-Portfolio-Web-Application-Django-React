import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <>
        <Flex as={'footer'} p={5} bg={'gray.400'}>
            <Text ml={{base: 0, md: 10}}>{new Date().getFullYear()} @UD sites</Text>
        </Flex>
    </>
  )
}
