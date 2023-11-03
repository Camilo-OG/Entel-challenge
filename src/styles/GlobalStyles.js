import styled from 'styled-components';
import { Link } from 'react-router-dom'

// Navbar Styles
export const Nav = styled.nav`
  background-color: #fff;
  color: #002EFF;
  display: flex;
  align-items: center;
  position:fixed;
  width: 100%;
  top: 0;
  height: 90px;
  box-shadow: 0px 4px 10px 0px #00000026;
`;

export const NavLogo = styled.img`
  width: 53.44px;
  height: 40px;
  margin-left: 50px;
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
  display: grid;
  grid-template-columns: 560px 450px;
  color: #002EFF;
  width: 100%;
  height: 190px;
  border-bottom: 1px solid #CCCCCC;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin-top: 150px;
`;
export const TitleLetter = styled.h1`
  font-size: 56px;
  font-weight: 400;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
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
  height: 333px;
`;



