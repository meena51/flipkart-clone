import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
const Wrapper = styled(Box)
`
display:flex;
margin : 0 3% 0 auto;
& > button, &>p, & > div{
margin-right : 40px;
font-size:16px;
align-items:center;
}
`
const Container = styled(Box)`
display:flex;
`
const LoginButton = styled(Button)`
background-color:#fff;
color:#2874f0;
text-transform : none;
padding: 5px 40px;
border-radius : 2px;
font-weight:600;
box-shadow:none;
height:32px;
`
const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant='contained'>Login</LoginButton>
      <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
      <Typography style={{marginTop:3}}>More</Typography>
      <Container>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog/>
    </Wrapper>
  )
}

export default CustomButtons
