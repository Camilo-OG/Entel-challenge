
import {Nav, NavLogo, NavStyledLinkContainer, NavStyledLink} from '../../styles/GlobalStyles'

export default function Navbar() {
  return (
    <Nav>
      <NavLogo src='/Group.png'></NavLogo>
      <NavStyledLinkContainer>
      <NavStyledLink to={'/'}>Formulario</NavStyledLink>
      <NavStyledLink to={'/list'}>Lista Formulario</NavStyledLink>
      </NavStyledLinkContainer>
    </Nav>
  )
}
