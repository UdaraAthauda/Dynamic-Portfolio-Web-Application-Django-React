import { Button, CloseButton, Drawer, Portal, IconButton, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { to: '/', label: 'Home' },
        { to: '/education', label: 'Education' },
        { to: '/skills', label: 'Skills' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <Drawer.Root size={'xs'} placement={'start'} open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
                <IconButton color={'white'} variant={'ghost'} display={{ base: 'flex', md: 'none' }} position="absolute"
                    left="1rem" onClick={() => setOpen(true)}>
                    <GiHamburgerMenu />
                </IconButton>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Check about my details</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <VStack gap={8} mt={6}>

                                {routes.map(({ to, label }) => (
                                    <Button as={NavLink} to={to} key={to} w={'full'} variant={'subtle'} colorPalette={'blue'} onClick={() => setOpen(false)} style={({ isActive }) => ({
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        backgroundColor: isActive ? 'lightgreen' : '',
                                        color: isActive ? 'green' : '',
                                    })}>{label}</Button>
                                ))}

                            </VStack>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Button w={'full'} onClick={() => setOpen(false)}>Cancel</Button>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

export default Sidebar
