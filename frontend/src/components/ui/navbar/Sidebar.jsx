import { Button, CloseButton, Drawer, Portal, IconButton } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
    return (
        <Drawer.Root size={'xs'} placement={'start'}>
            <Drawer.Trigger asChild>
                <IconButton color={'white'} variant={'ghost'} display={{ base: 'flex', md: 'none' }} position="absolute"
                    left="1rem">
                    <GiHamburgerMenu />
                </IconButton>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
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
