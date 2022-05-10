import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    border:${(props) => props.type === "filled" && "none"};
    background-color:${(props) => props.type === "filled" ? "lightblue" : "transparent"};
    color:${(props)=> props.type === "filled" && "white"};
`
const Texts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductInfo = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const PriceInfo = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const Summary = styled.div`
    flex:1;
`



const Cart = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <Title>Einkaufstasche</Title>
            <Top>
                <TopButton>Weiter Einkaufen</TopButton>
                <Texts>
                    <TopText>Warenkorb(3)</TopText>
                    <TopText>Ihre Wunschliste(1)</TopText>
                </Texts>
                <TopButton type="filled">Weiter zur Kasse</TopButton>
            </Top>
           
            <Bottom>
                <Info>
                    <Product>
                        <ProductInfo>
                            <Image src="https://www.magicalearscollectibles.com/assets/images/7505055890374.jpg"/>
                            <Details>
                                <ProductName><b>Produkt:</b>Klassisch Hoodie</ProductName>
                                <ProductId><b>ID:</b>7524863554</ProductId>
                                <ProductColor color="grey"/>
                                <ProductSize><b>Groß:</b>45</ProductSize>
                            </Details>
                        </ProductInfo>
                    <PriceInfo>
                        price
                    </PriceInfo>
                 </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart