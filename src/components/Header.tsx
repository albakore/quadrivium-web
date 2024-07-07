'use client'
import { Box, Button, Container, Flex, IconButton, Image, Link, Spacer, useColorMode, useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { IconBrightnessDown, IconBrightnessDownFilled, IconBrightnessUpFilled, IconMenu2, IconMoonFilled } from '@tabler/icons-react'
import React from 'react'

export default function Header() {
  const responsive = useBreakpointValue(
    {
      base: <MobileHeader />,
      md: <DesktopHeader />,
    }
  )

  return (
    <Box as='header' p={3} w={'100%'} bg={'white'} boxShadow={'lg'} zIndex={1000} pos={'sticky'} top={0}>
      <Container as={Flex} maxW={'6xl'} align={'center'} >
        <Box>
          <Image src='icons/Quadrivium_Logo.jpg' w={'60px'} alt='' />
        </Box>
        <Spacer />
        {responsive}
      </Container>
    </Box>
  )
}

function ButtonDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton onClick={toggleColorMode} aria-label=''>
      {colorMode === 'light' ? <IconMoonFilled /> : <IconBrightnessDownFilled />}
    </IconButton>
  )
}

function MobileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  return (
    <>
      <IconButton ref={btnRef} onClick={onOpen} aria-label='menu' size={'full'} variant={'ghost'}>
        <IconMenu2 size={'50px'}/>
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent zIndex={10000000}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Flex gap={8} align={'left'} direction={'column'}>
              <MenuLinks action={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

}

function DesktopHeader() {
  return (
    <Flex gap={8} align={'center'}>
      <MenuLinks />
    </Flex>
  )
}

function MenuLinks({action} : {action? : any}) {
  return (
    <>
      <Link href='#inicio' onClick={action ?? action }>Inicio</Link>
      <Link href='#servicios' onClick={action ?? action}>Servicios</Link>
      <Link href='#mision' onClick={action ?? action}>Mision</Link>
      <Link href='#vision' onClick={action ?? action}>Vision</Link>
      <Link href='#unite' onClick={action ?? action}>Unite</Link>
      {/* <Link href='#contacto' onClick={action ?? action}>Contacto</Link> */}
      {/* <ButtonDarkMode /> */}
    </>
  )
}