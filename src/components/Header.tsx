'use client'
import { Box, Button, Container, Flex, IconButton, Image, Link, Spacer, useColorMode } from '@chakra-ui/react'
import { IconBrightnessDown, IconBrightnessDownFilled, IconBrightnessUpFilled, IconMoonFilled } from '@tabler/icons-react'
import React from 'react'

export default function Header() {

  return (
    <Box as='header' p={3} w={'100%'} bg={'white'} boxShadow={'lg'} zIndex={1000000} pos={'sticky'} top={0}>
      <Container as={Flex} maxW={'6xl'} align={'center'} >
        <Box>
          <Image src='icons/Quadrivium_Logo.jpg' w={'60px'} alt=''/>
        </Box>
        <Spacer />
        <Flex gap={8} align={'center'}>
          <Link href='#inicio'>Inicio</Link>
          <Link href='#servicios'>Servicios</Link>
          <Link href='#mision'>Mision</Link>
          <Link href='#unite'>Unite</Link>
          <Link href='#contacto'>Contacto</Link>
          {/* <ButtonDarkMode /> */}
        </Flex>
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