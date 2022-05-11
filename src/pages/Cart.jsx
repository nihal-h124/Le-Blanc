import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:"10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    ${mobile({ fontSize:"30px" })}
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
    ${mobile({ display:"none" })}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column" })}
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column" })}
`
const ProductInfo = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    ${mobile({ width:"100px" })}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ padding:"10px 0px", margin: "10px 5px" })}
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
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ marginBottom:"5px" })}
`
const ProductAmount = styled.div`
    font-size: 25px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom:"20px" })}
    `

const Hr = styled.hr`
    background-color: gray;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid gray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "25px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color:white;
    font-weight: 600;
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
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>49,99 €</ProductPrice>
                    </PriceInfo>
                 </Product>
                
                <Hr/>

                 <Product>
                        <ProductInfo>
                            <Image src="https://cf.shopee.com.my/file/5d3b71f79369d17f51c23c15baa8fc1d_tn"/>
                            <Details>
                                <ProductName><b>Produkt:</b>Damen Mütze</ProductName>
                                <ProductId><b>ID:</b>3564684654</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Groß:</b>M</ProductSize>
                            </Details>
                        </ProductInfo>
                    <PriceInfo>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>9,99 €</ProductPrice>
                    </PriceInfo>
                 </Product>
                </Info>
                
                <Summary>
                    <SummaryTitle>Bestellübersicht</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Zwischensumme</SummaryItemText>
                        <SummaryItemPrice>59,99 €</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Versand</SummaryItemText>
                        <SummaryItemPrice>0,00 €</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Rabatt</SummaryItemText>
                        <SummaryItemPrice>5%</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Gesamtpreis</SummaryItemText>
                        <SummaryItemPrice>57,00 €</SummaryItemPrice>
                    </SummaryItem>
                    <Button>JETZT BESTELLEN</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart