import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const TextFilter = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 10px;
`
const Select = styled.select`
    margin: 2px;
    padding: 5px;
    margin-right: 10px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Kleider</Title>
        <FilterContainer>
            <Filter><TextFilter>Filter:</TextFilter>
            <Select>
                <Option disabled selected>
                    Farbe
                </Option>
                <Option>Schwarz</Option>
                <Option>Wieß</Option>
                <Option>Gelb</Option>
                <Option>Blau</Option>
                <Option>Pink</Option>
                <Option>Orange</Option>
                <Option>Rot</Option>
            </Select>
        
            <Select>
                <Option disabled selected>
                    Groß
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
            </Filter>
            
            <Filter>
                <TextFilter>Sort:</TextFilter>
            <Select>
                <Option disabled selected>
                    Neueste
                </Option>
                <Option>Höchst</Option>
                <Option>Unterste</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList