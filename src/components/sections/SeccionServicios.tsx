import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function SeccionServicios() {
    return (
        <Box w={'100%'} paddingBlock={'80px'} bg={'white'} id='servicios'>
            <Container maxW={'6xl'} h={'inherit'} >
                
                    <Box w={'inherit'} h={'auto'} textAlign={'center'}>
                        <Flex align={'center'} gap={5} justify={'center'}>
                            <Divider border={'1px'} w={'50px'} color={'orange.500'}/>
                            <Text fontSize={'4xl'} fontWeight={500} lineHeight={'50px'}>SERVICIOS</Text>
                            <Divider border={'1px'} w={'50px'} color={'orange.500'}/>
                        </Flex>
                        <Text fontSize={'2xl'} fontWeight={400} lineHeight={'50px'} mb={'50px'}>Nos especializamos en tres áreas clave</Text>
                        <SimpleGrid spacing={4} columns={{base:1, md:1, lg:3}}>
                            <Card boxShadow={'xl'}>
                                <CardHeader>
                                    <Text fontSize='2xl' fontWeight={500}>Preparación y Desarrollo para la Exportación</Text>
                                </CardHeader>
                                <CardBody textAlign={'start'}>
                                    <Text>En Quadrivium SRL, entendemos que cada empresa es única. Por ello, trabajamos estrechamente con las empresas de las economías regionales para prepararlas y desarrollarlas para el mercado internacional. Ofrecemos asesoramiento y capacitación personalizada para asegurar que cada producto cumpla con los estándares globales y pueda competir en los mercados internacionales.</Text>
                                </CardBody>
                            </Card>
                            <Card boxShadow={'xl'}>
                                <CardHeader>
                                    <Text fontSize='2xl' fontWeight={500}>Servicio de Logística y Despacho</Text>
                                </CardHeader>
                                <CardBody textAlign={'start'}>
                                    <Text>La logística es una pieza fundamental en el proceso de exportación. Nuestro equipo de expertos en logística y despacho se encarga de todo el proceso, desde el almacenamiento hasta el transporte y la entrega final. Garantizamos un servicio eficiente y seguro que asegura que los productos lleguen a su destino en perfectas condiciones y en el tiempo estipulado.</Text>
                                </CardBody>
                            </Card>
                            <Card boxShadow={'xl'}>
                                <CardHeader>
                                    <Text fontSize='2xl' fontWeight={500}>Apertura de Mercados Internacionales</Text>
                                </CardHeader>
                                <CardBody textAlign={'start'}>
                                    <Text>Contamos con operadores propios en diversos mercados internacionales, lo que nos permite abrir puertas y facilitar la entrada de nuestros clientes a nuevos mercados. Nos encargamos de todas las gestiones necesarias, incluyendo el estudio de mercado, la búsqueda de socios comerciales y la negociación de contratos, asegurando así el éxito de las exportaciones.</Text>
                                </CardBody>
                            </Card>
                        </SimpleGrid>
                    </Box>
            </Container>

        </Box>
    )
}
