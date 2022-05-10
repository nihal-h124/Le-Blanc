import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.1),
        rgba(255,255,255,0.1)
    ),
     url("https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2018/06/men-shopping-masculine.jpg?quality=90&strip=all&ssl=1");

        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
    /* background-color: white; */
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 10px 0px 0px;
    padding: 5px;
`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: red;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Konto erstellen</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                Um dir alle Vorteile der Mitgliedschaft bieten zu können, 
                verarbeiten wir deine personenbezogenen Daten gemäß der Datenschutzerklärung.
                </Agreement>
                <Button>Jetzt Member Werden</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
