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
`
const Select = styled.select`
    margin: 2px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><TextFilter>Filter:</TextFilter>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>Black</Option>
                <Option>White</Option>
                <Option>Yellow</Option>
                <Option>Blue</Option>
                <Option>LightBlue</Option>
                <Option>Orange</Option>
                <Option>Red</Option>
            </Select>
        
            <Select>
                <Option disabled selected>
                    Size
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
                    Latest
                </Option>
                <Option>Highest</Option>
                <Option>Lowest</Option>
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