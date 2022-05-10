import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    /* font-weight: 100; */
`
const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
`
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`


const ProductItem = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://handcmediastorage.blob.core.windows.net/productimages/PP/PPPFV010-B34-130565-1400px-1820px.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Polo Shirt
                </Title>
                <Desc>Pikeeshirt aus einer Baumwollmischung mit schmaler Passform. 
                      Modell mit kurzem Arm, Kragen und kurzer Knopfleiste. 
                      Das Shirt besteht aus dem Funktionsmaterial COOLMAX®, 
                      einer innovativen Polyesterfaser, die Feuchtigkeit 
                      effektiv ableitet und gleichzeitig die Temperatur reguliert. 
                      Sie ist außerdem weich, hautfreundlich und schnelltrocknend.</Desc>
                <Price>149,99 €</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductItem