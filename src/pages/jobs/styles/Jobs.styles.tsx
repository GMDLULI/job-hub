import styled, { keyframes } from "styled-components"

/* ─── animations ──────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`

/* ─── page wrapper ────────────────────────────────────────── */

export const JobWrapper = styled.div<{ $loaded: boolean }>`
  width: 100%;
  min-height: 100vh;
  background: var(--bg, #fafaf9);
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.3s ease;
`

/* ─── HERO ─────────────────────────────────────────────────── */

export const JobHero = styled.div`
  position: relative;
  min-height: 440px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  animation: ${scaleIn} 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`

export const JobHeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: blur(3px) brightness(0.7);
  transform: scale(1.04); /* hide blur edges */
`

export const JobHeroOverlay = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0,0,0,0.72) 0%,
    ${({ $accent }) => $accent}44 55%,
    rgba(0,0,0,0.85) 100%
  );
`

export const JobHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 28px 48px;
  animation: ${fadeUp} 0.6s 0.15s both;
`

export const JobBackButton = styled.button`
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  backdrop-filter: blur(8px);
  margin-bottom: 20px;
  display: inline-block;
  transition: background 0.2s;

  &:hover {
    background: rgba(255,255,255,0.22);
  }
`

export const JobCategoryPill = styled.span<{ $accent: string }>`
  display: inline-block;
  background: ${({ $accent }) => $accent}22;
  border: 1px solid ${({ $accent }) => $accent}99;
  color: ${({ $accent }) => $accent};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 12px;
  backdrop-filter: blur(6px);
`

export const JobHeroName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin: 0 0 6px;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
`

export const JobHeroTitle = styled.div`
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 10px;
  font-weight: 400;
`

export const JobHeroStars = styled.div`
  font-size: 18px;
  color: #FBBF24;
  margin-bottom: 10px;
`

export const JobHeroBadge = styled.span<{ $accent: string }>`
  display: inline-block;
  background: ${({ $accent }) => $accent};
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 50px;
  letter-spacing: 0.04em;
`

/* ─── BODY LAYOUT ─────────────────────────────────────────── */

export const JobBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 80px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const JobMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const JobSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 24px;

  @media (max-width: 860px) {
    position: static;
    order: -1; /* show sidebar above main on mobile */
  }
`

/* ─── SECTION BLOCKS ──────────────────────────────────────── */

export const SectionBlock = styled.div`
  animation: ${fadeUp} 0.5s ease both;
`

export const SectionLabel = styled.p<{ $accent: string }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
  margin-bottom: 6px;
`

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 700;
  color: var(--text, #111827);
  margin-bottom: 18px;
`

export const AboutText = styled.p`
  font-size: 15px;
  color: var(--muted, #4B5563);
  line-height: 1.8;
  max-width: 620px;
`

/* ─── SERVICES TABLE ──────────────────────────────────────── */

export const ServicesTable = styled.div`
  border: 1px solid var(--border, #E5E7EB);
  border-radius: 14px;
  overflow: hidden;
`

export const ServiceRow = styled.div<{ $accent: string; $even: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  background: ${({ $even }) => ($even ? '#fff' : 'var(--bg, #fafaf9)')};
  border-bottom: 1px solid var(--border, #E5E7EB);
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ $accent }) => $accent}0d;
  }
`

export const ServiceName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text, #111827);
  flex: 1;
`

export const ServiceMeta = styled.div`
  font-size: 12px;
  color: var(--muted, #9CA3AF);
  white-space: nowrap;
`

export const ServicePrice = styled.div<{ $accent: string }>`
  font-size: 15px;
  font-weight: 700;
  color: ${({ $accent }) => $accent};
  white-space: nowrap;
  min-width: 64px;
  text-align: right;
`

/* ─── GALLERY ─────────────────────────────────────────────── */

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
`

export const GalleryImg = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border, #E5E7EB);
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }
`

/* ─── CONTACT ROWS ────────────────────────────────────────── */

export const ContactCard = styled.div`
  background: #fff;
  border: 1px solid var(--border, #E5E7EB);
  border-radius: 14px;
  padding: 20px;
`

export const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ContactIcon = styled.img`
  font-size: 24px;
  margin-bottom: 10px;
  width: 28px;
  height: 28px;
`

export const ContactText = styled.span`
  font-size: 14px;
  color: var(--muted, #4B5563);
  line-height: 1.5;
`

export const ContactLink = styled.a`
  font-size: 14px;
  color: var(--text, #111827);
  font-weight: 500;
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`

/* ─── MAP ─────────────────────────────────────────────────── */

export const MapEmbed = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 14px;
  margin-top: 16px;
  border: 1px solid var(--border, #E5E7EB);
`

/* ─── SIDEBAR CARD ────────────────────────────────────────── */

export const SidebarCard = styled.div<{ $accent: string }>`
  background: #fff;
  border: 1px solid var(--border, #E5E7EB);
  border-radius: 16px;
  padding: 24px 20px;
  text-align: center;

  /* accent top border */
  border-top: 3px solid ${({ $accent }) => $accent};
`

export const SidebarAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--brand-light, #FEE2E2);
  margin: 0 auto 12px;
  display: block;
`

export const SidebarName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text, #111827);
  margin-bottom: 4px;
`

export const SidebarRole = styled.div<{ $accent: string }>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $accent }) => $accent};
  margin-bottom: 8px;
`

export const SidebarStars = styled.div`
  font-size: 16px;
  color: #FBBF24;
  margin-bottom: 8px;
`

export const SidebarBadge = styled.span<{ $accent: string }>`
  display: inline-block;
  background: ${({ $accent }) => $accent}18;
  color: ${({ $accent }) => $accent};
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 50px;
  margin-bottom: 16px;
`

export const BookButton = styled.a<{ $accent: string }>`
  display: block;
  background: ${({ $accent }) => $accent};
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
  margin-top: 4px;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`

/* ─── FOOTER ──────────────────────────────────────────────── */

export const JobFooter = styled.footer`
  text-align: center;
  padding: 24px;
  font-size: 13px;
  color: var(--muted, #9CA3AF);
  background: #fff;
  border-top: 1px solid var(--border, #E5E7EB);
`