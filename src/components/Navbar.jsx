import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
// import styledComponents from 'styled-components'
import styled from 'styled-components'
// import './container.css'

const Container = styled.div`
  height: 60px; 
  // background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
font-size: 15px;
cursor: pointer;
`
const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
       <Wrapper> 
          <Left>
            <Language>DE</Language>
              <SearchContainer>
                <Input/>
                <Search style={{color:"gray", fontSize:16}}/>
              </SearchContainer>
          </Left>
          
          <Center>
            <Logo>E-Kart</Logo>
          </Center>
         
          <Right>
            <MenuItem>Registrieren</MenuItem>
            <MenuItem>Anmelden</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>

       </Wrapper> 
    </Container>
  );
};

export default Navbar