import React, { useEffect, useState } from "react"

import {
  ProviderSection,
  HeroBanner,
  HeroBannerOverlay,
  HeroBannerContent,
  HeroCategoryLabel,
  HeroTitle,
  HeroDescription,
  HeroMeta,
  Page,
  ProviderHead,
  ProviderSubtitle,
  ProviderGrid,
  ProviderCard,
  ProviderAvatar,
  ProviderName,
  ProviderJobTitle,
  ProviderDesc,
  ProviderStars,
  ProviderBadge,
  BackButton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateText,
} from "./styles/Provider.styles"
import type { Provider, ProviderProps } from "./Providers.types"
import JobView from "../jobs/Jobs"

/* ─── category config ─────────────────────────────────────────
   bgImage comes directly from the JSON (category.img).
   CATEGORY_META only holds the tagline, description & accent
   colour — no duplicate image URLs needed here.
──────────────────────────────────────────────────────────────── */

interface CategoryMeta {
  tagline: string
  description: string
  accent: string
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  "nail technicians": {
    tagline: "✨ Premium Nail Care",
    description:
      "Our nail technicians are certified, creative, and passionate about giving you flawless nails. From gel manicures to intricate nail art, they bring salon-quality finishes right to your area.",
    accent: "#F472B6",
  },
  "hair salons": {
    tagline: "💇 Expert Hair Styling",
    description:
      "Transform your look with our talented hair stylists. Whether it's a fresh cut, colour treatment, or a full bridal style, our professionals deliver stunning results every time.",
    accent: "#A78BFA",
  },
  plumbers: {
    tagline: "🔧 Reliable Plumbing",
    description:
      "Fast, reliable, and fully equipped — our plumbers tackle everything from leaking taps to full pipe installations. Available for emergency call-outs across your area.",
    accent: "#60A5FA",
  },
  electricians: {
    tagline: "⚡ Certified Electricians",
    description:
      "Stay safe and powered up. Our certified electricians handle installations, fault-finding, and compliance certificates with speed and professionalism.",
    accent: "#FBBF24",
  },
  construction: {
    tagline: "🏗️ Construction Services",
    description: "", // empty string → triggers the coming-soon state
    accent: "#F97316",
  },
  tutors: {
    tagline: "📚 Qualified Tutors",
    description:
      "From primary school to university level, our tutors are passionate educators who help students unlock their potential in any subject.",
    accent: "#34D399",
  },
}

const FALLBACK_META: CategoryMeta = {
  tagline: "🌟 Professionals Near You",
  description: "Discover talented local professionals ready to help with your needs.",
  accent: "#C2410C",
}

function getMeta(categoryName: string): CategoryMeta {
  return CATEGORY_META[categoryName.toLowerCase()] ?? FALLBACK_META
}

/* ─── component ───────────────────────────────────────────── */

interface Props {
  category: ProviderProps
  goBack: () => void
}

const ProviderView: React.FC<Props> = ({ category, goBack }) => {
  const [loaded, setLoaded] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null)
  const meta = getMeta(category.name)

  // Show empty state if no providers listed OR no description written for this category
  const isEmpty = category.providers.length === 0 || meta.description === ""

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  if (selectedProvider) {
    return (
      <JobView
        provider={selectedProvider}
        accent={meta.accent}
        categoryName={category.name}
        goBack={() => setSelectedProvider(null)}
      />
    )
  }

  return (
    <ProviderSection $loaded={loaded}>

      {/* ── dynamic hero banner ── */}
      <HeroBanner $bg={category.img} $accent={meta.accent}>
        <HeroBannerOverlay $accent={meta.accent} />
        <HeroBannerContent>
          <BackButton onClick={goBack}>Back to Home</BackButton>
          <HeroCategoryLabel $accent={meta.accent}>
            {meta.tagline}
          </HeroCategoryLabel>
          <HeroTitle>{category.name}</HeroTitle>
          {!isEmpty && meta.description && (
            <HeroDescription>{meta.description}</HeroDescription>
          )}
          {!isEmpty && (
            <HeroMeta>
              {category.count} professional{category.count !== 1 ? "s" : ""} available near you
            </HeroMeta>
          )}
        </HeroBannerContent>
      </HeroBanner>

      {/* ── main content ── */}
      <Page>

        {isEmpty ? (
          /* empty / coming-soon state */
          <EmptyState>
            <EmptyStateIcon>🚧</EmptyStateIcon>
            <EmptyStateTitle>Coming Soon</EmptyStateTitle>
            <EmptyStateText>
              Sorry, we do not have any {category.name.toLowerCase()} services
              yet — but keep visiting our site for more updates!
            </EmptyStateText>
            <BackButton onClick={goBack} style={{ marginTop: "24px" }}>
              Explore Other Services
            </BackButton>
          </EmptyState>
        ) : (
          <>
            <ProviderHead>
              <ProviderSubtitle>
                Showing {category.providers.length} provider
                {category.providers.length !== 1 ? "s" : ""} in your area
              </ProviderSubtitle>
            </ProviderHead>

            <ProviderGrid>
              {category.providers.map((provider, index) => (
                <ProviderCard 
                  key={index} 
                  $delay={index * 60} 
                  $accent={meta.accent}
                  onClick={() => setSelectedProvider(provider)}
                >
                  <ProviderAvatar
                    src={provider.avatar}
                    alt={provider.name}
                    loading="lazy"
                  />
                  <ProviderName>{provider.name}</ProviderName>
                  <ProviderJobTitle $accent={meta.accent}>
                    {provider.title}
                  </ProviderJobTitle>
                  <ProviderDesc>{provider.desc}</ProviderDesc>
                  <ProviderStars>{provider.stars}</ProviderStars>
                  {provider.badge && (
                    <ProviderBadge $accent={meta.accent}>
                      {provider.badge}
                    </ProviderBadge>
                  )}
                </ProviderCard>
              ))}
            </ProviderGrid>
          </>
        )}

      </Page>
    </ProviderSection>
  )
}

export default ProviderView