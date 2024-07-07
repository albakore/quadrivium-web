import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function SeccionMision() {
    return (
        <Box w={'100%'} bg={'#fe8b4b'} >
            <Box pos={'fixed'} top={0} left={0} w={'100%'} h={'100%'} overflow={'hidden'}
            bgImg={'imgs/pexels-tomfisk-3840441.jpg'}
            bgPosition={'center'} bgSize={'cover'}  zIndex={-1} >
                <Box  w={'100%'} h={'100%'} backdropFilter='blur(7px) brightness(0.5)'></Box></Box>
            <Container maxW={'6xl'} h={'inherit'} paddingBlock={'80px'}>
                <Box w={'inherit'} h={'auto'}  >
                    <Text fontSize={'5xl'} fontWeight={500} mb={'20px'}>Mision</Text>
                    <Text fontSize={'xl'} fontWeight={300} >Nuestra misión es potenciar el desarrollo económico de las regiones de Argentina, facilitando el acceso de sus productos a mercados internacionales a través de un servicio integral y personalizado. Nos esforzamos por ser un puente confiable entre los productores locales y el mercado global.</Text>
                </Box>
            </Container>

        </Box>
    )
}