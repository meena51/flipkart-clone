import { Box, styled } from '@mui/material'
import React from 'react'
import { navData } from '../constants/data'
const NavComponent = styled(Box)`
display:flex;
margin : 55px 130px 0 130px;
justify-content: space-between;
`
const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text = styled('p')({
    fontSize:14,
    fontWeight:600,
    fontFamily:'inherit'
})

const Navbar = () => {
  return (
    <NavComponent>
        {
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt='nav' style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </NavComponent>
  )
}

export default Navbar
