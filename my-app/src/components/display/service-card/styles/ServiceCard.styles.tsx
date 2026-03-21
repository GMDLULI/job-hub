import styled from "styled-components"

// cat-grid
export const ServiceContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); 
    gap: 18px; 

`
export const ServiceCard = styled.div`
    border-radius: 14px; 
    overflow: hidden; 
    cursor: pointer;
    position: relative; 
    height: 250px;
    transition: transform .25s ease, box-shadow .25s ease;

    &:hover {
     transform: translateY(-5px); 
     box-shadow: 0 14px 36px rgba(0,0,0,0.16);
    }
`

export const ServiceImage = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: transform .4s ease; 
    display: block;

    &:hover {
        transform: scale(1.07);
    }

`

export const ServiceOverlay = styled.div`
    position: absolute; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    padding: 16px;
    background: linear-gradient(to top, rgba(15,10,5,0.85) 0%, transparent 100%);
    
`

export const ServiceName = styled.div`
    color: #fff; 
    font-size: 15px; 
    font-weight: 500;
`

export const ServiceCount = styled.div `
    color: rgba(255,255,255,0.7); 
    font-size: 12px; 
    margin-top: 2px;
`