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
import { CATEGORIES } from "../../data/catagories"


/* ─── category config ─────────────────────────────────────────
   bgImage comes directly from the JSON (category.img).
   CATEGORY_META only holds the tagline, description & accent
   colour — no duplicate image URLs needed here.
──────────────────────────────────────────────────────────────── */


function getMeta(categoryName: string) {
  const match = CATEGORIES.find(
    c => c.name.toLowerCase() === categoryName.toLowerCase()
  )
  return match ?? {
    tagline: "🌟 Professionals Near You",
    description: "Discover talented local professionals ready to help with your needs.",
    accent: "#C2410C",
    img: "",
  }
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
                  <ProviderDesc>{provider.about}</ProviderDesc>
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