import styled from "styled-components";

export const Home = styled.div``;

export const MainPage = styled.div`
    max-width: 1100px; 
    margin: 0 auto;
    padding: 0 24px;

` 
export const Hero = styled.div`
    padding: 72px 0 56px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 48px; align-items: center;
`

export const HeroTag = styled.div`
    display: inline-flex; 
    align-items: center; 
    gap: 7px;
    background: var(--brand-light); 
    color: var(--brand);
    font-size: 12px; 
    font-weight: 500; 
    padding: 5px 13px;
    border-radius: 50px; 
    margin-bottom: 20px;

    ::before {
        content: ''; 
        width: 7px; 
        height: 7px; 
        background: var(--brand); 
        border-radius: 50%;
    }
`
