import { Box, Button, Center, Container, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function SeccionHero() {
  return (
    <Box bgImg={'imgs/pexels-ana-benet-8243357.jpg'} bgPosition={'center'} bgSize={'cover'} h={'500px'} w={'100%'} id='inicio' >
      <Box pos={'absolute'} w={'inherit'} h={'inherit'} bgGradient={'linear-gradient(90deg, #00bf62 20%, rgb(255 197 61 / 28%) 70%);'}></Box>
      <Container maxW={'6xl'} h={'inherit'} >
        <Center w={'inherit'} h={'inherit'} justifyContent={'start'}>
          <Box w={'800px'} h={'auto'} zIndex={1}>
            <Text fontSize={{base:'4xl',md:'6xl'}} fontWeight={500} lineHeight={'50px'}>Potenciamos el desarrollo económico Argentino</Text>
            <Text fontSize={{base:'md',md:'lg'}} mt={'20px'}>
              Quadrivium SRL es una empresa dedicada al comercio internacional,
              con sede en la Ciudad Autónoma de Buenos Aires.
              Nuestro objetivo es impulsar el crecimiento de las economías regionales a través de la exportación,
              ofreciendo un servicio integral que abarca desde la producción hasta la distribución en mercados internacionales.
            </Text>
            <Button mt={5} colorScheme='gray' size={'lg'}>Contactanos</Button>
          </Box>
        </Center>
      </Container>
    </Box>
  )
}
