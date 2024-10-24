import React from 'react'
import {AppBar,Box,Toolbar, Typography, styled} from '@mui/material'
import flipkartLogo from '../images/flipkartLogo.png'
import plus from '../images/plus.png'
import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
`
const Logo =styled(Box)`
    
    margin-left : 12%;
    line-height : 0;
`
const SubHeading = styled(Typography)
`
    font-size : 10px;
    font-style : italic;
`
const PlusImage = styled('img')({
    height : 10,
    width:10,
    marginLeft: 4
})
const CustomButtonWrapper =styled(Box)`
margin:0 5% 0 auto;
`
function Header() {
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{minHeight:"55px"}}>
            <Logo>
                <img src={flipkartLogo} alt="" style={{width:75 }}/>
                <Box style={{display : 'flex'}}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={plus} alt="" />
                </Box>
            </Logo>
            <Search/>
            <CustomButtonWrapper>
            <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
        
      </StyledHeader>
    </div>
  )
}
export default Header
