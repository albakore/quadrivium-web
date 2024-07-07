import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Divider, Flex, Grid, GridItem, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function SeccionVision() {
  return (
    <Box w={'100%'} bg={'linear-gradient(180deg, rgba(26,54,93,1) 0%, rgba(15,31,54,1) 54%, rgba(0,0,0,1) 81%, rgba(0,0,0,0.577468487394958) 92%, rgba(0,0,0,0) 100%)'} color={'white'}>
      <Container maxW={'6xl'} h={'inherit'} paddingBlock={'80px'}>
        <Flex gap={10} pos={'relative'}>

          <Box w={'inherit'} h={'auto'}  >
            <Text fontSize={'5xl'} fontWeight={500} mb={'20px'}>Vision</Text>
            <Text fontSize={'xl'} fontWeight={300} >Ser líderes en el comercio interior y exterior, reconocidos por nuestra capacidad para transformar empresas locales en competidores globales. Aspiramos a expandir nuestras operaciones y presencia en nuevos mercados, contribuyendo al crecimiento sostenible y equitativo de las economías regionales.</Text>


          </Box>
          <Box w={'400px'} flexShrink={0} >
            <Image w={'auto'} h={'auto'} src='imgs/undraw_connected_world_wuay.svg' alt='Vision' />
          </Box>
        </Flex>

        <br />
        <Text fontSize={'3xl'} fontWeight={500} mb={'20px'} textAlign={'center'}>Valores</Text>


        <Grid templateColumns='repeat(5, 1fr)' gap={3}>
          <Valor valor='Compromiso'>
            <Text fontSize={'md'}> Estamos dedicados al éxito de nuestros clientes y al desarrollo de las economías regionales.</Text>
          </Valor>
          <Valor valor='Integridad'>
            <Text fontSize={'md'}> Operamos con transparencia y ética en todas nuestras relaciones comerciales.</Text>
          </Valor>
          <Valor valor='Innovación'>
            <Text fontSize={'md'}> Buscamos constantemente mejorar nuestros procesos y servicios para ofrecer soluciones efectivas y eficientes.</Text>
          </Valor>
          <Valor valor='Calidad'>
            <Text fontSize={'md'}> Aseguramos la excelencia en cada etapa del proceso de exportación.</Text>
          </Valor>
          <Valor valor='Colaboración'>
            <Text fontSize={'md'}> Fomentamos un ambiente de trabajo colaborativo, tanto internamente como con nuestros clientes y socios.</Text>
          </Valor>
        </Grid>

      </Container>

    </Box>
  )
}


function Valor({ children, valor }: { children: React.ReactNode, valor: string }) {
  return (
    <GridItem w='100%' >
      <Card h={'full'} bg={'blackAlpha.50'} color={'white'} border={'1px solid'} borderColor={'whiteAlpha.300'}>
        <CardHeader paddingBlock={2} textAlign={'center'}>
          <Text fontSize={'xl'} fontWeight={500}>{valor}</Text>
        </CardHeader>
        <CardBody paddingBlock={2} textAlign={'center'}>
          {children}
        </CardBody>
      </Card>
    </GridItem>
  )
}