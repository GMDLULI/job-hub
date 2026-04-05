import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  background: var(--bg, #fafaf9);
`

/* ── HERO ── */

export const PageHero = styled.div`
  position: relative;
  min-height: 460px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`

export const PageHeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const PageHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(0,0,0,0.6) 0%, rgba(194,65,12,0.45) 60%, rgba(0,0,0,0.78) 100%);
`

export const PageHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px 56px;
`

export const PageTag = styled.span`
  display: inline-block;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.35);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 18px;
  backdrop-filter: blur(6px);
`

export const PageHeroTitle = styled.h1`
  font-family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
  font-size: clamp(32px, 5vw, 54px);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.35);
`

export const PageHeroSub = styled.p`
  font-size: 17px;
  color: rgba(255,255,255,0.85);
  max-width: 560px;
  line-height: 1.7;
  text-shadow: 0 1px 8px rgba(0,0,0,0.3);
`

/* ── SECTIONS ── */

export const Section = styled.section<{ $bg?: string }>`
  background: ${({ $bg }) => $bg ?? '#fff'};
  padding: 72px 24px;
`

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const SectionLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand, #C2410C);
  margin-bottom: 10px;
`

export const SectionTitle = styled.h2`
  font-family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  color: var(--text, #111827);
  margin-bottom: 12px;
`

export const SectionBody = styled.p`
  font-size: 15px;
  color: var(--muted, #6B7280);
  max-width: 540px;
  line-height: 1.7;
  margin-bottom: 40px;
`

/* ── MISSION ── */

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const MissionText = styled.p`
  font-size: 15px;
  color: var(--muted, #6B7280);
  line-height: 1.8;
  margin-bottom: 18px;
`

export const MissionHighlight = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text, #111827);
  line-height: 1.75;
  border-left: 3px solid var(--brand, #C2410C);
  padding-left: 18px;
  margin-bottom: 18px;
`

/* ── VALUES ── */

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  margin-top: 40px;
`

export const ValueCard = styled.div`
  background: #fff;
  border: 1px solid var(--border, #E5E7EB);
  border-radius: 16px;
  padding: 28px 22px;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.07);
    transform: translateY(-3px);
  }
`

export const ValueIcon = styled.div`
  font-size: 30px;
  margin-bottom: 14px;
`

export const ValueTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text, #111827);
  margin-bottom: 8px;
  font-family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
`

export const ValueText = styled.p`
  font-size: 13px;
  color: var(--muted, #6B7280);
  line-height: 1.7;
`

/* ── TEAM ── */

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 40px;
`

export const TeamCard = styled.div`
  background: var(--bg, #fafaf9);
  border: 1px solid var(--border, #E5E7EB);
  border-radius: 16px;
  padding: 28px 22px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.07);
    transform: translateY(-3px);
  }
`

export const TeamAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--brand-light, #FEE2E2);
  margin: 0 auto 14px;
  display: block;
`

export const TeamName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text, #111827);
  margin-bottom: 4px;
`

export const TeamRole = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--brand, #C2410C);
  margin-bottom: 10px;
`

export const TeamBio = styled.p`
  font-size: 13px;
  color: var(--muted, #6B7280);
  line-height: 1.65;
`

/* ── TIMELINE ── */

export const Timeline = styled.div`
  margin-top: 48px;
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border, #E5E7EB);
  }
`

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 44px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const TimelineDot = styled.div`
  position: absolute;
  left: -28px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--brand, #C2410C);
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px var(--brand, #C2410C);
`

export const TimelineYear = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--brand, #C2410C);
  background: var(--brand-light, #FEE2E2);
  padding: 3px 10px;
  border-radius: 50px;
  margin-bottom: 8px;
`

export const TimelineContent = styled.div``

export const TimelineTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--text, #111827);
  margin-bottom: 6px;
  font-family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
`

export const TimelineText = styled.p`
  font-size: 14px;
  color: var(--muted, #6B7280);
  line-height: 1.7;
  max-width: 540px;
`

/* ── FOOTER ── */

export const PageFooter = styled.footer`
  text-align: center;
  padding: 24px;
  font-size: 13px;
  color: var(--muted, #9CA3AF);
  background: #fff;
  border-top: 1px solid var(--border, #E5E7EB);
`