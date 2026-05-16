import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 72px;
  border-bottom: 1px solid #e7e5e4;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;

  /* No flex-wrap — logo and burger must always sit on one line */

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 64px;
    flex-wrap: wrap;         /* allow MobileMenu to drop to a second row */
    align-content: flex-start;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    height: 60px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;          /* never squish the logo */
  height: 56px;            /* fixed height — scales the img proportionally */
  width: auto;             /* let width follow the image's natural ratio */

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    height: 48px;
  }

  @media (max-width: 480px) {
    height: 42px;
  }
`;

export const Logo = styled.span`
  color: #1c1917;
`;

export const NavLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #78716C;
  font-size: 15px;
  font-weight: 400;
  padding: 14px 0;
  border-bottom: 1px solid #F5F5F4;
  transition: color 0.2s;

  &:hover {
    color: #1C1917;
  }
`;

export const NavButton = styled.button`
  background: #573b2f;
  color: #fff7ed;
  border: none;
  padding: 9px 22px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  transition: background 0.2s;

  &:hover {
    background: #6a554c;
  }
`;

export const BurgerButton = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;           /* never squish the burger */
  z-index: 101;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: #1c1917;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $open }) =>
    $open &&
    `
    span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul`
  /* Takes up the full second row below the logo/burger row */
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  padding: 8px 0 16px;
  margin: 0;
  border-top: 1px solid #e7e5e4;
  background: #ffffff;

  /* Extend full viewport width so it covers content behind it */
  position: absolute;
  top: 64px;               /* matches the NavBarContainer height on mobile */
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);

  li {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    top: 60px;
    li {
      padding: 0 16px;
    }
  }
`;

export const MobileNavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #78716c;
  font-size: 15px;
  font-weight: 400;
  padding: 14px 0;
  border-bottom: 1px solid #f5f5f4;
  transition: color 0.2s;

  &:hover {
    color: #1c1917;
  }
`;