import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.1),
        rgba(255,255,255,0.1)
    ),
     url("https://peaseandcurren.com/wp-content/uploads/2020/03/Retail-and-online-shopping.jpg");

        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    /* background-color: white; */
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 10px 0px;
    padding: 5px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: green;
    /* margin: 10px; */
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    color: black;
`
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Anmelden</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>JETZT ANMELDEN</Button>
            <Link>Passwort vergessen?</Link>
            <Link>NEU KONTO ERSTELLEN</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login