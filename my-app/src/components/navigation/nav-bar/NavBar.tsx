import React from 'react'
import { Logo, LogoContainer, NavBarContainer, NavButton, NavLink, NavLinkContainer } from './styles/NavBar.styles'

const NavBar = () => {
  return (
    <NavBarContainer>
        <LogoContainer href="#" >Serve<Logo>Link</Logo></LogoContainer>
        <NavLinkContainer>
            <li><NavLink href="#categories">Browse Services</NavLink></li>
            <li><NavLink href="#how-it-works">How it Works</NavLink></li>
            <li><NavLink href="#cta">List Your Service</NavLink></li>
        </NavLinkContainer>
        <NavButton>Sign Up Free</NavButton>
  </NavBarContainer>
  )
}

export default NavBar
