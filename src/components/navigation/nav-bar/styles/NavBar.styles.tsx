import styled from "styled-components";

export const NavBarContainer = styled.nav`
   display: flex; 
   justify-content: space-between; 
   align-items: center;
   padding: 18px 32px; border-bottom: 1px solid #E7E5E4;
   background: #FFFFFF; 
   position: sticky; 
   top: 0; 
   z-index: 100;
`;

export const LogoContainer = styled.a`
    font-family: 'Playfair Display', serif; 
    font-size: 22px; 
    font-weight: 900; color: #C2410C; 
    text-decoration: none;
`
export const Logo = styled.span`
    color: #1C1917;
`

export const NavButton = styled.button`
    background: #C2410C; 
    color: #fff; 
    border: none;
    padding: 9px 22px; 
    border-radius: 50px; 
    font-size: 13px; 
    font-weight: 500;
    cursor: pointer; 
    font-family: 'DM Sans', sans-serif; 
    transition: background .2s;

    &:hover{
        background: #7C2D12;
    }


`
export const NavLinkContainer = styled.ul`
    list-style: none; 
    display: flex; 
    gap: 28px;

`

export const NavLink = styled.a`
 text-decoration: none; 
 color:  #78716C; 
 font-size: 14px; 
 font-weight: 400; 
 transition: color .2s

 &:hover{
    color: #1C1917
 }

`