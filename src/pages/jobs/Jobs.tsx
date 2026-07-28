import React, { useEffect, useState } from "react"
import type { Provider } from "../providers/Providers.types"
import {
  JobWrapper,
  JobHero,
  JobHeroBg,
  JobHeroOverlay,
  JobHeroContent,
  JobBackButton,
  JobCategoryPill,
  JobHeroName,
  JobHeroTitle,
  JobHeroStars,
  JobHeroBadge,
  JobBody,
  JobMain,
  JobSidebar,
  SectionBlock,
  SectionLabel,
  SectionTitle,
  AboutText,
  ServicesTable,
  ServiceRow,
  ServiceName,
  ServiceMeta,
  ServicePrice,
  GalleryGrid,
  GalleryImg,
  ContactCard,
  ContactRow,
  ContactIcon,
  ContactText,
  ContactLink,
  MapEmbed,
  SidebarCard,
  SidebarAvatar,
  SidebarName,
  SidebarRole,
  SidebarStars,
  SidebarBadge,
  BookButton,
  JobFooter,
} from "./styles/Jobs.styles"
import pin from "../../assets/icons/pin-1.png"
import whatsapp from "../../assets/icons/whatsapp.png"
import twitter from "../../assets/icons/twitter.png"
import facebook from "/src/assets/icons/facebook.png"
import instagram from '../../assets/icons/instagram.png'
import email from '../../assets/icons/communication.png'

interface Props {
  provider: Provider
  accent: string
  categoryName: string
  goBack: () => void
}

const JobView: React.FC<Props> = ({ provider, accent, categoryName, goBack }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Use avatar as hero bg — blurred / overlaid for visual richness
  const heroBg = provider.gallery?.[0] ?? provider.avatar

  return (
    <JobWrapper $loaded={loaded}>

      {/* ── HERO ── */}
      <JobHero>
        <JobHeroBg src={heroBg} />
        <JobHeroOverlay $accent={accent} />
        <JobHeroContent>
          <JobBackButton onClick={goBack}> Back to {categoryName}</JobBackButton>
          <JobCategoryPill $accent={accent}>{categoryName}</JobCategoryPill>
          <JobHeroName>{provider.name}</JobHeroName>
          <JobHeroTitle>{provider.title}</JobHeroTitle>
          <JobHeroStars>{provider.stars}</JobHeroStars>
          {provider.badge && (
            <JobHeroBadge $accent={accent}>{provider.badge}</JobHeroBadge>
          )}
        </JobHeroContent>
      </JobHero>

      {/* ── BODY ── */}
      <JobBody>

        {/* ── MAIN COLUMN ── */}
        <JobMain>

          {/* About */}
          {provider.about && (
            <SectionBlock>
              <SectionLabel $accent={accent}>Who I Am</SectionLabel>
              <SectionTitle>About {provider.name.split(" ")[0]}</SectionTitle>
              <AboutText>{provider.about}</AboutText>
            </SectionBlock>
          )}

          {/* Services */}
          {provider.services && provider.services.length > 0 && (
            <SectionBlock>
              <SectionLabel $accent={accent}>What I Offer</SectionLabel>
              <SectionTitle>Services & Pricing</SectionTitle>
              <ServicesTable>
                {provider.services.map((svc, i) => (
                  <ServiceRow key={i} $accent={accent} $even={i % 2 === 0}>
                    <ServiceName>{svc.name}</ServiceName>
                    <ServiceMeta>Starting at: </ServiceMeta>
                    <ServicePrice $accent={accent}>R {svc.price}</ServicePrice>
                  </ServiceRow>
                ))}
              </ServicesTable>
            </SectionBlock>
          )}

          {/* Gallery */}
          {provider.gallery && provider.gallery.length > 0 && (
            <SectionBlock>
              <SectionLabel $accent={accent}>My Work</SectionLabel>
              <SectionTitle>Gallery</SectionTitle>
              <GalleryGrid>
                {provider.gallery.map((img, i) => (
                  <GalleryImg key={i} src={img} alt={`${provider.name} work ${i + 1}`} loading="lazy" />
                ))}
              </GalleryGrid>
            </SectionBlock>
          )}

          {/* Location */}
          {provider.location && (
            <SectionBlock>
              <SectionLabel $accent={accent}>Where to Find Me</SectionLabel>
              <SectionTitle>Location</SectionTitle>
              <ContactRow>
                <ContactIcon src={pin} alt="Pin" />
                <ContactText>{provider.location}</ContactText>
              </ContactRow>
                <MapEmbed
                  title={`${provider.name} location`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(provider.location)}&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
            </SectionBlock>
          )}

        </JobMain>

        {/* ── SIDEBAR ── */}
        <JobSidebar>

          {/* sticky profile card */}
          <SidebarCard $accent={accent}>
            <SidebarAvatar src={provider.avatar} alt={provider.name} />
            <SidebarName>{provider.name}</SidebarName>
            <SidebarRole $accent={accent}>{provider.title}</SidebarRole>
            <SidebarStars>{provider.stars}</SidebarStars>
            {provider.badge && (
              <SidebarBadge $accent={accent}>{provider.badge}</SidebarBadge>
            )}
            <BookButton $accent={accent} href={`mailto:${provider.email ?? ""}`}>
              📩 Contact {provider.name.split(" ")[0]}
            </BookButton>
          </SidebarCard>

          {/* contact details */}
          <ContactCard>
            <SectionLabel $accent={accent} style={{ marginBottom: "14px" }}>
              Contact Details
            </SectionLabel>
            {provider.phone && (
              <ContactRow>
                <ContactIcon src={whatsapp} alt="WhatsApp" />
                <ContactLink href={`tel:${provider.phone}`}>{provider.phone}</ContactLink>
              </ContactRow>
            )}
            {provider.email && (
              <ContactRow>
                <ContactIcon src={email} alt="Email" />
                <ContactLink href={`mailto:${provider.email}`}>{provider.email}</ContactLink>
              </ContactRow>
            )}
            {provider.location && (
              <ContactRow>
                <ContactIcon src={pin} alt="Pin" />
                <ContactText>{provider.location}</ContactText>
              </ContactRow>
            )}
             {provider.instagram && (
              <ContactRow>
                <ContactIcon src={instagram} alt="Instagram" />
                <ContactText>{provider.instagram}</ContactText>
              </ContactRow>
            )}
             {provider.twitter && (
              <ContactRow>
                <ContactIcon src={twitter} alt="Twitter" />
                <ContactText>{provider.twitter}</ContactText>
              </ContactRow>
            )}
             {provider.facebook && (
              <ContactRow>
                <ContactIcon src={facebook} alt="Facebook" />
                <ContactText>{provider.facebook}</ContactText>
              </ContactRow>
            )}
          </ContactCard>

        </JobSidebar>

      </JobBody>

      <JobFooter>© 2026 ServeLink · {provider.name} · {categoryName}</JobFooter>

    </JobWrapper>
  )
}

export default JobView