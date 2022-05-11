import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: cover;
    ${mobile({ height: "50vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding:"10px" })}
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
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({ width:"100%" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 6px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({ width:"100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid orange;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
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
                
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Farbe</FilterTitle>
                        <FilterColor color="blue"/>
                        <FilterColor color="red"/>
                        <FilterColor color="pink"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Groß</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>In den Warenkorb</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductItem