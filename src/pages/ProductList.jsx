import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div``
const Filter = styled.div``

const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>filter1</Filter>
            <Filter>filter2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList