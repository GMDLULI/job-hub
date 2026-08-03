import React from "react"
import type { ServiceCardProps } from "./ServiceCard.types"

import {
  ServiceContainer,
  ServiceCard as StyledServiceCard,
  ServiceImage,
  ServiceOverlay,
  ServiceName,
  ServiceCount
} from "./styles/ServiceCard.styles"
import Text from "../text/Text"

const ServiceCard: React.FC<ServiceCardProps> = ({services, loading,  onSelectCategory }) => {

  if (loading) return <Text variant='p' >Loading services...</Text>
  return (
    <ServiceContainer>
      {services.map((service, index: number) => (
        <StyledServiceCard
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`Browse ${service.name}`}
          onClick={() => onSelectCategory(service)}
        >
          <ServiceImage
            src={service.img}
            alt={service.name}
            loading="lazy"
          />
          <ServiceOverlay>
            <ServiceName>{service.name}</ServiceName>
            <ServiceCount>
              {service.count > 0 ? `${service.count} providers` : 'Coming soon'}
            </ServiceCount>

          </ServiceOverlay>
        </StyledServiceCard>
      ))}
    </ServiceContainer>
  )
}

export default ServiceCard