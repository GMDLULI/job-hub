import styled from 'styled-components'
import Text from '../../../components/display/text/Text'

export const PageWrapper = styled.div`
  width: 100%;
  background:  #fafaf9;
`

/* ── HERO (shared pattern with About) ── */

export const PageHero = styled.div`
  position: relative;
  min-height: 400px;
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
  background: linear-gradient(160deg, rgba(0,0,0,0.62) 0%, rgba(194,65,12,0.4) 55%, rgba(0,0,0,0.8) 100%);
`

export const PageHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px 52px;
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
export const PageHeroTitle = styled(Text)`
  font-size: clamp(30px, 5vw, 50px);
  margin-bottom: 14px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.35);
`

export const PageHeroSub = styled.p`
  font-size: 16px;
  color: rgba(255,255,255,0.85);
  max-width: 520px;
  line-height: 1.7;
`

/* ── CONTACT LAYOUT ── */

export const ContactLayout = styled.div`
  background: #fff;
  padding: 72px 24px;
`

export const ContactInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`

/* ── FORM ── */

export const FormSide = styled.div``

export const FormTitle = styled(Text)`
  color: #111827;
  margin-bottom: 6px;
`

export const FormSubtitle = styled.p`
  font-size: 14px;
  color: var(--muted, #6B7280);
  margin-bottom: 32px;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
`

export const FormLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color:  #374151;
  margin-bottom: 7px;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'Raleway', Cambria, serif;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  background: #fafaf9;
  color: #111827;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #C2410C;
    box-shadow: 0 0 0 3px rgba(194, 65, 12, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'Raleway', 'Cambria', 'serif';
  border: 1px solid  #E5E7EB;
  border-radius: 10px;
  background:  #fafaf9;
  color:  #111827;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color:  #C2410C;
    box-shadow: 0 0 0 3px rgba(194,65,12,0.1);
  }
`

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'raleway';
  border: 1px solid  #E5E7EB;
  border-radius: 10px;
  background:  #fafaf9;
  color: #111827;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #C2410C;
    box-shadow: 0 0 0 3px rgba(194,65,12,0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`

export const SubmitButton = styled.button`
  background:  #573b2f;
  color: #fff;
  border: none;
  padding: 13px 32px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #68534b;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const SuccessMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: 14px;
  padding: 24px;
  margin-top: 8px;

  span { font-size: 28px; }

  strong {
    display: block;
    font-size: 16px;
    color: #166534;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #15803D;
    margin: 0;
  }
`

/* ── INFO CARDS ── */

export const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InfoCard = styled.div`
  background: var(--bg, #fafaf9);
  border: 1px solid #E5E7EB;
  border-radius: 14px;
  padding: 22px 20px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  }
`

export const InfoIcon = styled.img`
  font-size: 24px;
  margin-bottom: 10px;
  width: 28px;
  height: 28px;
`

export const InfoTitle = styled.div`
  font-size: 14px;
  font-family: 'raleway';
  font-weight: 600;
  color:  #111827;
  margin-bottom: 4px;
`

export const InfoText = styled.p`
  font-size: 13px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0 0 6px;
`

export const InfoLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #C2410C;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

/* ── DIVIDER ── */

export const Divider = styled.div`
  height: 1px;
  background:#E5E7EB;
  max-width: 1200px;
  margin: 0 auto;
`

/* ── FAQ ── */

export const FaqSection = styled.section`
  padding: 72px 24px;
  background:  #fafaf9;
`

export const FaqInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const FaqLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:  #C2410C;
  margin-bottom: 10px;
`

export const FaqTitle = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700;
  color:  #111827;
  margin-bottom: 40px;
`

export const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`

export const FaqItem = styled.div`
  background: #fff;
  border: 1px solid  #E5E7EB;
  border-radius: 14px;
  padding: 24px 22px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  }
`

export const FaqQ = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color:  #111827;
  margin-bottom: 10px;
  font-family: 'Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;;
  line-height: 1.4;
`

export const FaqA = styled.p`
  font-size: 13px;
  color: #6B7280;
  line-height: 1.7;
  margin: 0;
`

/* ── FOOTER ── */

export const PageFooter = styled.footer`
  text-align: center;
  padding: 24px;
  font-size: 13px;
  color: #9CA3AF;
  background: #fff;
  border-top: 1px solid  #E5E7EB;
`