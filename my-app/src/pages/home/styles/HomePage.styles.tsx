import styled from "styled-components";
import Text from "../../../components/display/text/Text";

export const Home = styled.div``;

export const MainPage = styled.div`
    max-width: 1100px; 
    margin: 0 auto;
    padding: 0 24px;

` 
export const Hero = styled.div`
    padding: 72px 0 56px;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    gap: 48px; 
    align-items: center;
`

export const HeroTag = styled.div`
    display: inline-flex; 
    align-items: center; 
    gap: 7px;
    background: #7C2D12; 
    color: #FFF7ED;
    font-size: 12px; 
    font-weight: 500; 
    padding: 5px 13px;
    border-radius: 50px; 
    margin-bottom: 20px;

    ::before {
        content: ''; 
        width: 7px; 
        height: 7px; 
        background: #FFF7ED; 
        border-radius: 50%;
    }
`


export const Categories = styled.section`
    padding: 64px 0;
`

export const SectionHead = styled.div`
   text-align: center; 
   margin-bottom: 40px; 
`

export const SectionHeadP = styled(Text)`
    margin-bottom: 0px;
`

export const SectionHeadH = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #3e3c3c;
    font-size: 38px;
    margin-bottom: 8px
`

export const HIWContainer = styled.section`
    padding: 64px 0; 
    background: #F5F5F4;

`

export const HIWSteps = styled.div`
    display: grid; grid-template-columns:
    repeat(3, 1fr); 
    gap: 24px; 
    max-width: 780px; 
    margin: 0 auto;

`

export const HIWStep = styled.div`
    text-align: center; 
    padding: 28px 20px;
`

export const HIWNum = styled.div`
    width: 46px; 
    height: 46px; 
    border-radius: 50%; 
    background: #f1e1cd; 
    color: #fff;
    font-size: 18px; 
    font-weight: 700; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    margin: 0 auto 16px;
`

export const HIWP = styled.p `
    font-size: 13px; 
    color: #78716C; 
    line-height: 1.65;

`
export const HIWH = styled.h3`
    font-size: 15px; 
    font-weight: 500;
    margin-bottom: 7px;

`

export const CTAContainer = styled.section`
    padding: 72px 0; 
    text-align: center; 
    background: #1C1917;
`

export const CTAButtons = styled.div`
    display: flex; 
    gap: 14px; 
    justify-content: center; 
    flex-wrap: wrap;

`

export const CTAButtonWhite = styled.button`
    background: #fff; 
    color: #1C1917; 
    border: none;
    padding: 13px 30px; 
    border-radius: 50px; 
    font-size: 14px; 
    font-weight: 500;
    cursor: pointer; 
    font-family: 'DM Sans', sans-serif; 
    transition: opacity .2s;

    &:hover {
        opacity: .88;
    }

`

export const CTAButtonOutline = styled.button`

   background: transparent; 
   color: #fff; 
   border: 1.5px solid rgba(255,255,255,0.3);
   padding: 13px 30px; 
   border-radius: 50px; font-size: 14px; 
   font-weight: 500;
   cursor: pointer; 
   font-family: 'DM Sans', sans-serif; 
   transition: border-color .2s;

   &:hover {
    border-color: rgba(255,255,255,0.65);
   }

`

export const Footer = styled.footer`
    padding: 24px; 
    text-align: center; 
    color: #78716C; 
    font-size: 13px; 
    border-top: 1px solid #E7E5E4

`