import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 400;
`
const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    justify-content: center;
`
const Input = styled.input`
    border: none;
    flex: 8;
`
const Button = styled.button`
    flex:1;
    border: none;
    background-color: orange;
    color:white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Bleiben Sie mit all unseren Produkten auf dem Laufenden</Desc>
        <InputContainer>
            <Input placeholder='Bitte geben Sie Ihre E-Mail-Adresse ein'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter