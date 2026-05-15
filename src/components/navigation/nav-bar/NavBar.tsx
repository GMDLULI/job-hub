import { useState } from 'react';
import { 
  LogoContainer, 
  NavBarContainer,
  NavButton, 
  NavLink, 
  NavLinkContainer, 
  BurgerButton, 
  MobileMenu, 
  MobileNavLink } from './styles/NavBar.styles';
import pandaLogo from "../../../assets/images/pandapreneur-logo.jpeg"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBarContainer>
      <LogoContainer href="./"><img src={pandaLogo} /></LogoContainer>

      {/* Desktop */}
      <NavLinkContainer>
        <li><NavLink href="#categories">Browse Services</NavLink></li>
        <li><NavLink href="#how-it-works">How it Works</NavLink></li>
        <li><NavLink href="#cta">List Your Service</NavLink></li>
        <li><NavLink href="#contact">Contact Us</NavLink></li>
        <li><NavButton>Sign Up</NavButton></li>
      </NavLinkContainer>

      {/* Mobile */}
      <BurgerButton onClick={() => setMenuOpen(!menuOpen)} $open={menuOpen}>
        <span /><span /><span />
      </BurgerButton>

      {menuOpen && (
        <MobileMenu>
          <li><MobileNavLink href="#categories" onClick={() => setMenuOpen(false)}>Browse Services</MobileNavLink></li>
          <li><MobileNavLink href="#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</MobileNavLink></li>
          <li><MobileNavLink href="#cta" onClick={() => setMenuOpen(false)}>List Your Service</MobileNavLink></li>
          <li><MobileNavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</MobileNavLink></li>
          <li><NavButton style={{ width: '100%' }}>Sign Up Free</NavButton></li>
        </MobileMenu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;