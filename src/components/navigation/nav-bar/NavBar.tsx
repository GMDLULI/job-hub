import { useState } from 'react';
import { 
  LogoContainer, 
  NavBarContainer,
  NavButton, 
  NavLink, 
  NavLinkContainer, 
  BurgerButton, 
  MobileMenu, 
  MobileNavLink, 
  } from './styles/NavBar.styles';
import pandaLogo from "../../../assets/images/pandapreneur-logo.jpeg"
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()


  return (
    <NavBarContainer>
      <LogoContainer to="/"><img src={pandaLogo} /></LogoContainer>

      {/* Desktop */}
      <NavLinkContainer>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/#how-it-works">How it Works</NavLink></li>
        <li><NavLink to="/#categories">Our Services</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavButton onClick={() => navigate("/sign-in")}>Join Now</NavButton></li>
      </NavLinkContainer>

      {/* Mobile */}
      <BurgerButton onClick={() => setMenuOpen(!menuOpen)} $open={menuOpen}>
        <span /><span /><span />
      </BurgerButton>

      {menuOpen && (
        <MobileMenu>
          <li><MobileNavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</MobileNavLink></li>
          <li><MobileNavLink to="/#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</MobileNavLink></li>
          <li><MobileNavLink to="/#categories" onClick={() => setMenuOpen(false)}>Our Services</MobileNavLink></li>
          <li><MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</MobileNavLink></li>
          <li><NavButton onClick={() => navigate("/sign-in")} style={{ width: '100%' }}>Join Now</NavButton></li>
        </MobileMenu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;