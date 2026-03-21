import React from "react"

import {
  ProviderSection,
  Page,
  ProviderHead,
  ProviderTitle,
  ProviderSubtitle,
  ProviderGrid,
  ProviderCard,
  ProviderAvatar,
  ProviderName,
  ProviderJobTitle,
  ProviderDesc,
  ProviderStars,
  ProviderBadge,
  BackButton
} from "./styles/Provider.styles"
import type { ProviderProps } from "./Providers.types"

interface Props {
  category: ProviderProps
  goBack: () => void
}

const ProviderView: React.FC<Props> = ({ category, goBack }) => {

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <ProviderSection>

      <Page>

        <BackButton onClick={goBack}>
          ← Back to Home
        </BackButton>

        <ProviderHead>
          <ProviderTitle>{category.name}</ProviderTitle>

          <ProviderSubtitle>
            {category.count} professionals available in your area
          </ProviderSubtitle>
        </ProviderHead>

        <ProviderGrid>

          {category.providers.map((provider, index) => (

            <ProviderCard key={index}>

              <ProviderAvatar
                src={provider.avatar}
                alt={provider.name}
                loading="lazy"
              />

              <ProviderName>{provider.name}</ProviderName>

              <ProviderJobTitle>
                {provider.title}
              </ProviderJobTitle>

              <ProviderDesc>
                {provider.desc}
              </ProviderDesc>

              <ProviderStars>
                {provider.stars}
              </ProviderStars>

              {provider.badge && (
                <ProviderBadge>
                  {provider.badge}
                </ProviderBadge>
              )}

            </ProviderCard>

          ))}

        </ProviderGrid>

      </Page>

    </ProviderSection>
  )
}

export default ProviderView