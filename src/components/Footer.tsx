import { Box, Container, Divider, Flex, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

export default function Footer() {
    return (
        <Box bg={'black'} color={'white'}>
            <Container maxW={'6xl'}  paddingBlock={'30px'}>
                <Flex w={'full'} justify={'space-between'}>
                    <Box >
                        <Text fontSize={'2xl'} mb={5}>QUADRIVIUM SRL</Text>
                        <Text fontSize={'sm'}>Dirección: Hipólito Yrigoyen 2319 – Piso 7, CABA, Buenos Aires</Text>
                        <Text fontSize={'sm'}>Teléfono: Enlace Whatsapp </Text>
                        <Text fontSize={'sm'}>Formulario de Contacto: Enlace al formulario</Text>
                    </Box>
                    <SimpleGrid columns={3} spacing={10}>
                        <VStack align={'flex-start'}>
                            <Text fontSize={'lg'} fontWeight={600}>Seccion</Text>
                            <Link>Inicio</Link>
                            <Link>Servicios</Link>
                            <Link>Mision</Link>
                            <Link>Vision</Link>
                            <Link>Unirse</Link>
                        </VStack>
                        <VStack align={'flex-start'}>
                            <Text fontSize={'lg'} fontWeight={600}>Redes Sociales</Text>
                            <Link display={'inline-flex'} gap={2}><IconBrandLinkedin/> Linkedin</Link>
                            <Link display={'inline-flex'} gap={2}><IconBrandFacebook/> Facebook</Link>
                            <Link display={'inline-flex'} gap={2}><IconBrandInstagram/> Instagram</Link>
                        </VStack>
                    </SimpleGrid>
                </Flex>
                
            </Container>
            <Divider/>
                <Container maxW={'6xl'}  paddingBlock={'30px'}>
                <Text fontSize={'sm'}>© 2024 Quadrivium SRL. Todos los derechos reservados.</Text>
                </Container>
        </Box>
    )
}
