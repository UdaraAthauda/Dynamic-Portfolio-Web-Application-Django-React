import { Flex, Heading, HStack, Spacer, Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ColorModeButton } from '../color-mode'
import Sidebar from './Sidebar';

export default function Navbar() {
    return (
        <Flex 
            as="nav" 
            p={5} 
            bg="blue.600" 
            color="white"
            align="center"
            justify={{ base: "center", md: "space-between" }}
            position="relative"
        >

            {/* Hamburger menu for mobile */}
            <Sidebar />

            {/* Centered on mobile, left-aligned on desktop */}
            <Heading 
                as={NavLink} 
                to="/" 
                ml={{ base: 0, md: 10 }}
            >
                Udara Athauda
            </Heading>

            {/* Desktop links */}
            <HStack 
                gap={4} 
                mr={10} 
                display={{ base: 'none', md: 'flex' }}
            >
                <NavLink to="/" style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'greenyellow' : 'white',
                    fontSize: isActive ? '18px' : '16px',
                })}>Home</NavLink>

                <NavLink to="/skills" style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'greenyellow' : 'white',
                    fontSize: isActive ? '18px' : '16px',
                })}>Skills</NavLink>

                <NavLink to="/projects" style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'greenyellow' : 'white',
                    fontSize: isActive ? '18px' : '16px',
                })}>Projects</NavLink>

                <NavLink to="/contact" style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'greenyellow' : 'white',
                    fontSize: isActive ? '18px' : '16px',
                })}>Contact</NavLink>

                <ColorModeButton />
            </HStack>

            <ColorModeButton position="absolute" display={{ base: 'flex', md: 'none' }} right="1rem" />

        </Flex>
    )
}
