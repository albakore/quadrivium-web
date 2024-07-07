import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

export default function SeccionUnirse() {
    return (
        <Box w={'100%'} color={'white'}>
            <Container maxW={'6xl'} h={'inherit'} paddingBlock={'80px'}>
                <Box w={'inherit'} h={'auto'}  >
                    <Text fontSize={'5xl'} fontWeight={500} mb={'20px'}>Únase a Nosotros</Text>
                    <Text fontSize={'xl'} fontWeight={300} >Descubra cómo Quadrivium SRL puede ayudar a su empresa a alcanzar el mercado internacional. Contáctenos hoy mismo para una consulta personalizada y dé el primer paso hacia la globalización de sus productos.</Text>
                </Box>

                {/* <Flex>
                    <IconBrandFacebook/>
                    <IconBrandLinkedin/>
                    <IconBrandInstagram/>
                </Flex> */}
            </Container>

        </Box>
    )
}