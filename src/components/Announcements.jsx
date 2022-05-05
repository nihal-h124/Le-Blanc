import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    background-color: orange;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
`

const Announcements = () => {
  return (
    <Container>Limited Period only: SALE for 50% off!!</Container>
  )
}

export default Announcements