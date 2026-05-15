import styled from "styled-components";
import Text from "../../../components/display/text/Text";
import backgroundImage from "../../../assets/images/heme-hero-bg.jpg";

/* ─── Breakpoints ───────────────────────────────────────────────────────────
   xs  < 480px   (small phones)
   sm  < 640px   (phones)
   md  < 768px   (large phones / small tablets)
   lg  < 1024px  (tablets / small laptops)
   xl  ≥ 1024px  (desktops)
──────────────────────────────────────────────────────────────────────────── */
const bp = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
};

export const Home = styled.div`
  width: 100%;
  background: #fafaf9;
`;

export const MainPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: ${bp.sm}) {
    padding: 0 16px;
  }
`;

/* ─── Hero ─────────────────────────────────────────────────────────────── */

export const MainPageHero = styled.section`
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Darken on small screens so text stays readable */
  @media (max-width: ${bp.md}) {
    background-position: 70% center;
  }
`;

export const Hero = styled.div`
  padding: 96px 50px 72px;
  gap: 48px;
  align-items: center;
  max-width: 760px; /* keeps text from stretching wall-to-wall on wide screens */

  @media (max-width: ${bp.lg}) {
    padding: 80px 32px 60px;
  }

  @media (max-width: ${bp.md}) {
    padding: 64px 24px 48px;
    max-width: 100%;
  }

  @media (max-width: ${bp.sm}) {
    padding: 48px 16px 40px;
    gap: 28px;
  }

  @media (max-width: ${bp.xs}) {
    padding: 40px 12px 32px;
  }
`;

export const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #573b2f;
  color: #fff7ed;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 20px;

  /* dot */
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    background: #fff7ed;
    border-radius: 50%;
    flex-shrink: 0;
  }

  @media (max-width: ${bp.sm}) {
    font-size: 11px;
    padding: 4px 12px;
    margin-bottom: 16px;
  }
`;

export const HeroText = styled(Text)`
  margin: 0px;
`;

export const HeroSubtext = styled.div`
  margin: 16px 0 24px;
  max-width: 600px;

  @media (max-width: ${bp.md}) {
    max-width: 100%;
  }

  @media (max-width: ${bp.sm}) {
    margin: 12px 0 20px;
  }
`;

/* ─── Categories ───────────────────────────────────────────────────────── */

export const Categories = styled.section`
  padding: 64px 0;

  @media (max-width: ${bp.md}) {
    padding: 48px 0;
  }

  @media (max-width: ${bp.sm}) {
    padding: 36px 0;
  }
`;

export const SectionHead = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${bp.sm}) {
    margin-bottom: 28px;
  }
`;

export const SectionHeadP = styled(Text)`
  margin-bottom: 0px;

  @media (max-width: ${bp.sm}) {
    font-size: 14px !important;
  }
`;

export const SectionHeadH = styled(Text)`
  font-size: 38px;
  margin-bottom: 8px;

  @media (max-width: ${bp.md}) {
    font-size: 30px !important;
  }

  @media (max-width: ${bp.sm}) {
    font-size: 24px !important;
  }
`;

/* ─── Why Section ──────────────────────────────────────────────────────── */

export const WhySection = styled.section`
  padding: 72px 0;
  background: var(--bg, #fafaf9);

  @media (max-width: ${bp.md}) {
    padding: 56px 0;
  }

  @media (max-width: ${bp.sm}) {
    padding: 40px 0;
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;

  @media (max-width: ${bp.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${bp.sm}) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const WhyCard = styled.div`
  background: #fff;
  border: 1px solid var(--border, #e5e7eb);
  border-radius: 16px;
  padding: 28px 24px;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }

  @media (max-width: ${bp.sm}) {
    padding: 22px 18px;
    border-radius: 12px;
  }

  /* Disable hover lift on touch devices to avoid stuck states */
  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

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

  @media (max-width: ${bp.sm}) {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const WhyTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
  font-family: "DM Sans", sans-serif;

  @media (max-width: ${bp.sm}) {
    font-size: 17px;
  }
`;

export const WhyText = styled.p`
  font-size: 18px;
  color: #6b7280;
  line-height: 1.7;

  @media (max-width: ${bp.sm}) {
    font-size: 15px;
  }
`;

/* ─── How It Works ─────────────────────────────────────────────────────── */

export const HIWContainer = styled.section`
  padding: 72px 0;
  background: #fff;
  border-top: 1px solid var(--border, #e5e7eb);
  border-bottom: 1px solid var(--border, #e5e7eb);

  @media (max-width: ${bp.md}) {
    padding: 56px 0;
  }

  @media (max-width: ${bp.sm}) {
    padding: 40px 0;
  }
`;

export const HIWSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 780px;
  margin: 0 auto;

  @media (max-width: ${bp.md}) {
    /* Stack steps vertically on tablets and phones */
    grid-template-columns: 1fr;
    max-width: 420px;
    gap: 0;
  }
`;

export const HIWStep = styled.div`
  text-align: center;
  padding: 28px 20px;
  position: relative;

  /* Connector line between steps on desktop */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 51px; /* vertically centred with HIWNum */
    right: -12px;
    width: 24px;
    height: 2px;
    background: #e5e7eb;

    @media (max-width: ${bp.md}) {
      display: none;
    }
  }

  @media (max-width: ${bp.md}) {
    padding: 20px 16px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
  }

  @media (max-width: ${bp.sm}) {
    padding: 16px 8px;
  }
`;

export const HIWNum = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #f1e1cd;
  color: #573b2f;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  flex-shrink: 0;

  @media (max-width: ${bp.md}) {
    margin: 0; /* Remove auto margin when flex layout takes over */
  }

  @media (max-width: ${bp.sm}) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const HIWH = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--text, #111827);
  margin-bottom: 8px;
  font-family: "DM Sans", sans-serif;

  @media (max-width: ${bp.sm}) {
    font-size: 17px;
    margin-bottom: 4px;
  }
`;

export const HIWP = styled.p`
  font-size: 18px;
  color: var(--muted, #6b7280);
  line-height: 1.7;

  @media (max-width: ${bp.sm}) {
    font-size: 15px;
  }
`;

/* ─── CTA ──────────────────────────────────────────────────────────────── */

export const CTAContainer = styled.section`
  padding: 72px 0;
  text-align: center;
  background: #1c1917;

  @media (max-width: ${bp.md}) {
    padding: 56px 0;
  }

  @media (max-width: ${bp.sm}) {
    padding: 48px 0;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;

  @media (max-width: ${bp.xs}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const CTAButtonWhite = styled.button`
  background: #fff;
  color: #1c1917;
  border: none;
  padding: 13px 30px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.88;
  }

  @media (max-width: ${bp.xs}) {
    width: 100%;
    max-width: 260px;
    padding: 14px 30px;
  }
`;

export const CTAButtonOutline = styled.button`
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  padding: 13px 30px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.65);
  }

  @media (max-width: ${bp.xs}) {
    width: 100%;
    max-width: 260px;
    padding: 14px 30px;
  }
`;

/* ─── Footer ───────────────────────────────────────────────────────────── */

export const Footer = styled.footer`
  padding: 24px;
  text-align: center;
  color: #78716c;
  font-size: 13px;
  border-top: 1px solid #e7e5e4;

  @media (max-width: ${bp.sm}) {
    font-size: 12px;
    padding: 20px 16px;
  }
`;