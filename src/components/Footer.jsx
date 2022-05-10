import { ContactPhoneOutlined, EmailOutlined, Facebook, Instagram, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    align-items: left;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    /* align-items: left; */
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    /* align-items: left; */
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>E-Kart</Logo>
            <Desc>
                pemg elmgemg emgeopmge eopmrüwpermwe fwfpomwf pwqoekmopfmwpfm 
                wopefowpf wpoekmfomwef opwefpmw wejfoiwj iwoojefiojw woijefioj
            </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
        
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Herren</ListItem>
                    <ListItem>Damen</ListItem>
                    <ListItem>Zubehör</ListItem>
                    <ListItem>Mein Konto</ListItem>
                    <ListItem>Bestellen</ListItem>
                    <ListItem>Einkaufstasche</ListItem>
                    <ListItem>T&C</ListItem>
                </List>
            </Center>
            
            <Right>
                <Title>Kontact</Title>
                <ContactItem><LocationOnOutlined style={{marginRight:"10px"}}/> Helgoländer Allee, 20459 Hamburg, Deutschland</ContactItem>
                <ContactItem><ContactPhoneOutlined style={{marginRight:"10px"}}/>+49 40 2345 6789</ContactItem>
                <ContactItem><EmailOutlined style={{marginRight:"10px"}}/>help@frageuns.dev</ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>
    </Container>
  )
}

export default Footer