import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  border-bottom: 1px solid #E7E5E4;
  background: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: wrap;
`;

export const LogoContainer = styled.a`
  display: flex;
  width: 280px;
  height: 80px;
`;

export const Logo = styled.span`
  color: #1C1917;
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

export const NavLink = styled.a`
  text-decoration: none;
  color: #78716C;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s;

  &:hover {
    color: #1C1917;
  }
`;

export const NavButton = styled.button`
  background: #573b2f;
  color: #FFF7ED;
  border: none;
  padding: 9px 22px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
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
  z-index: 101;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: #1C1917;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  width: 100%;
  padding: 12px 0 20px;
  margin: 0;
  border-top: 1px solid #E7E5E4;

  li {
    padding: 0;
  }
`;

export const MobileNavLink = styled.a`
  display: block;
  text-decoration: none;
  color: #78716C;
  font-size: 15px;
  font-weight: 400;
  padding: 14px 4px;
  border-bottom: 1px solid #F5F5F4;
  transition: color 0.2s;

  &:hover {
    color: #1C1917;
  }
`;