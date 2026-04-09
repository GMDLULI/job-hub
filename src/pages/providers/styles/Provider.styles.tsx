import styled, { keyframes } from "styled-components"

/* ─── animations ──────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.94); }
  to   { opacity: 1; transform: scale(1); }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.06); }
`

/* ─── page wrapper ────────────────────────────────────────── */

export const ProviderSection = styled.div<{ $loaded: boolean }>`
  width: 100%;
  min-height: 100vh;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.35s ease;
`

/* ─── hero banner ─────────────────────────────────────────── */

export const HeroBanner = styled.div<{ $bg: string; $accent: string }>`
  position: relative;
  width: 100%;
  min-height: 420px;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  /* subtle zoom-in on mount */
  animation: ${scaleIn} 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`

export const HeroBannerOverlay = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0, 0, 0, 0.65) 0%,
    ${({ $accent }) => $accent}33 60%,
    rgba(0, 0, 0, 0.82) 100%
  );
  backdrop-filter: blur(1px);
`

export const HeroBannerContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 28px 44px;

  animation: ${fadeUp} 0.65s 0.15s both;
`

export const HeroCategoryLabel = styled.span<{ $accent: string }>`
  display: inline-block;
  background: ${({ $accent }) => $accent}22;
  border: 1px solid ${({ $accent }) => $accent}88;
  color: ${({ $accent }) => $accent};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 14px;
  backdrop-filter: blur(6px);
`

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin: 0 0 14px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.4);
`

export const HeroDescription = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 0 18px;
  text-shadow: 0 1px 8px rgba(0,0,0,0.4);
`

export const HeroMeta = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`

/* ─── page body ───────────────────────────────────────────── */

export const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 24px 64px;
`

export const ProviderHead = styled.div`
  margin-bottom: 26px;
`

/* kept for backward-compat — title now lives in hero */
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

/* ─── grid ────────────────────────────────────────────────── */

export const ProviderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
`

/* ─── card ────────────────────────────────────────────────── */

export const ProviderCard = styled.div<{ $delay?: number; $accent?: string }>`
  background: var(--white, #fff);
  border: 1px solid var(--border, #e5e7eb);
  border-radius: 16px;
  padding: 22px 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;

  opacity: 0;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay ?? 0}ms;

  /* coloured top strip */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({ $accent }) => $accent ?? "#C2410C"};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    box-shadow: 0 10px 32px rgba(0,0,0,0.12);
    transform: translateY(-4px);
    border-color: ${({ $accent }) => $accent ?? "#C2410C"}55;

    &::before { transform: scaleX(1); }
  }
`

/* ─── avatar ──────────────────────────────────────────────── */

export const ProviderAvatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 13px;
  border: 3px solid var(--brand-light, #FEE2E2);
  display: block;
  transition: transform 0.25s;

  ${ProviderCard}:hover & {
    transform: scale(1.06);
  }
`

/* ─── text ────────────────────────────────────────────────── */

export const ProviderName = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
`

export const ProviderJobTitle = styled.div<{ $accent?: string }>`
  font-size: 12px;
  color: ${({ $accent }) => $accent ?? "var(--brand, #C2410C)"};
  font-weight: 500;
  margin-bottom: 7px;
`

export const ProviderDesc = styled.div`
  font-size: 13px;
  color: var(--muted, #6B7280);
  line-height: 1.6;
`

export const ProviderStars = styled.div`
  font-size: 13px;
  color: #D97706;
  margin-top: 10px;
`

export const ProviderBadge = styled.div<{ $accent?: string }>`
  display: inline-block;
  background: ${({ $accent }) => $accent ?? "#C2410C"}18;
  color: ${({ $accent }) => $accent ?? "var(--brand, #C2410C)"};
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 50px;
  margin-top: 8px;
  font-weight: 600;
`

/* ─── empty / coming-soon state ──────────────────────────── */

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  animation: ${fadeIn} 0.5s ease;
`

export const EmptyStateIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  animation: ${pulse} 2.4s ease-in-out infinite;
`

export const EmptyStateTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--text, #111827);
  margin-bottom: 12px;
`

export const EmptyStateText = styled.p`
  font-size: 16px;
  color: var(--muted, #6B7280);
  max-width: 480px;
  line-height: 1.7;
`

/* ─── back button ─────────────────────────────────────────── */

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 9px 22px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  backdrop-filter: blur(8px);
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  margin-bottom: 20px;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.28);
    border-color: rgba(255, 255, 255, 0.6);
  }

  /* when rendered outside the banner (empty state) */
  &[style] {
    background: #C2410C;
    border-color: #C2410C;
    color: #fff;
    backdrop-filter: none;

    &:hover {
      background: #7C2D12;
      border-color: #7C2D12;
    }
  }
`