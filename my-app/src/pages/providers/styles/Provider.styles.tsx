

import styled from "styled-components"

export const ProviderSection = styled.div`
  width: 100%;
`

export const Page = styled.div`
  max-width: 1200px;
  margin: auto;
`


export const ProviderHead = styled.div`
  margin-bottom: 30px;
`

export const ProviderTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 700;
`

export const ProviderSubtitle = styled.p`
  color: var(--muted);
  font-size: 14px;
  margin-top: 5px;
`

/* GRID */

export const ProviderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 18px;
`

/* CARD */

export const ProviderCard = styled.div`
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  cursor: pointer;
  transition: box-shadow .2s, transform .2s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    transform: translateY(-3px);
  }
`

/* AVATAR */

export const ProviderAvatar = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 13px;
  border: 3px solid var(--brand-light);
  display: block;
`

/* TEXT */

export const ProviderName = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`

export const ProviderJobTitle = styled.div`
  font-size: 12px;
  color: var(--brand);
  font-weight: 500;
  margin-bottom: 7px;
`

export const ProviderDesc = styled.div`
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
`

export const ProviderStars = styled.div`
  font-size: 13px;
  color: #D97706;
  margin-top: 10px;
`

export const ProviderBadge = styled.div`
  display: inline-block;
  background: var(--brand-light);
  color: var(--brand);
  font-size: 11px;
  padding: 3px 9px;
  border-radius: 50px;
  margin-top: 7px;
  font-weight: 500;
`

/* BUTTON */

export const BackButton = styled.button`
  margin-bottom: 20px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
`