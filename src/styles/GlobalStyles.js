import styled from 'styled-components';
import { Link } from 'react-router-dom'

// Navbar Styles
export const Nav = styled.nav`
  background-color: #fff;
  color: #002EFF;
  display: flex;
  align-items: center;
  min-width: 100vw;
  height: 90px;
  position: fixed;
  top: 0;
  box-shadow: 0px 4px 10px 0px #00000026;
`;

export const NavLogo = styled.img`
  width: 53.44px;
  height: 40px;
  padding: 25px 49px;
`;
export const NavStyledLinkContainer = styled.div`
  display: flex;
  position: fixed;
  right: 0;
`;
export const NavStyledLink = styled(Link)`
  text-decoration: none;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    text-decoration: none;
    font-family: Barlow;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F3F5FF;
    border-radius: 20px;
  }
`;

// Title Styles
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #002EFF;
  width: 100vw;
  height: 250px;
  position: fixed;
  top: 170px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #CCCCCC
`;
export const TitleLetter = styled.h1`
  font-family: Barlow;
  font-size: 56px;
  font-weight: 400;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-right: 100px;
`;
export const TitleSpan = styled.span`
  font-family: Barlow;
  font-size: 56px;
  font-weight: 600;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TitleStyledImg = styled.img`
  width: Fixed (424px);
  height: Fixed (424px);
  top: 90px;
  left: 851px;
  padding: 16px;

`;



