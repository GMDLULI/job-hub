import styled from "styled-components";
import Text from "../../../components/display/text/Text";
import backgroundImage from "../../../assets/images/heme-hero-bg.jpg";

export const Home = styled.div`
    width:100%;
    background: #fafaf9
`;

export const MainPage = styled.div`
    max-width: 1200px; 
    margin: 0 auto;
    padding: 0 24px;
   

` 

export const MainPageHero = styled.section`
    width: 100%;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`

export const Hero = styled.div`
    padding: 72px 50px 56px;
    gap: 48px; 
    align-items: center;
   
`

export const HeroTag = styled.div`
    display: inline-block; 
    background: #573b2f; 
    color: #FFF7ED;
    font-size: 12px; 
    font-weight: 600; 
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 5px 14px;
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

export const HeroText = styled(Text)`
    margin: 0px;
`

export const HeroSubtext = styled.div`
  margin: 16px 0 24px;
  max-width: 600px;
`

/** Categories */

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

export const SectionHeadH = styled(Text)`
    font-size: 38px;
    margin-bottom: 8px
`

/** Why section */

export const WhySection = styled.section`
  padding: 72px 0;
  background: var(--bg, #fafaf9);
`
 
export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`
 
export const WhyCard = styled.div`
  background: #fff;
  border: 1px solid var(--border, #E5E7EB);
  border-radius: 16px;
  padding: 28px 24px;
  transition: box-shadow 0.2s, transform 0.2s;
 
  &:hover {
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }
`
 
export const WhyIcon = styled.div`
   font-size: 32px;
   margin-bottom: 14px;
   width: 48px;
   height: 48px;

   img {
     width: 100%;
     height: 100%;
     object-fit: contain;
   }
`
 
export const WhyTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color:  #111827;
  margin-bottom: 8px;
  font-family: 'DM Sans', sans-serif;
`
 
export const WhyText = styled.p`
  font-size: 18px;
  color:  #6B7280;
  line-height: 1.7;
`

/** How it works  */
 

export const HIWContainer = styled.section`
    padding: 72px 0;
    background: #fff;
    border-top: 1px solid var(--border, #E5E7EB);
    border-bottom: 1px solid var(--border, #E5E7EB);

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

export const HIWH = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--text, #111827);
  margin-bottom: 8px;
  font-family: 'DM Sans', sans-serif;
`
 
export const HIWP = styled.p`
  font-size: 18px;
  color: var(--muted, #6B7280);
  line-height: 1.7;
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