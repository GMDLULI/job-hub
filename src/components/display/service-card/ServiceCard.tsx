import React from "react"
import services from "../../../data/ServicesData.json"
import type { ServiceCardProps, ServiceItem } from "./ServiceCard.types"

import {
  ServiceContainer,
  ServiceCard as StyledServiceCard,
  ServiceImage,
  ServiceOverlay,
  ServiceName,
  ServiceCount
} from "./styles/ServiceCard.styles"


const ServiceCard: React.FC<ServiceCardProps> = ({ onSelectCategory }) => {

  return (
    <ServiceContainer>
      {services.map((service: ServiceItem, index: number) => (
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
            <ServiceCount>{service.count} providers</ServiceCount>
          </ServiceOverlay>
        </StyledServiceCard>
      ))}
    </ServiceContainer>
  )
}

export default ServiceCard