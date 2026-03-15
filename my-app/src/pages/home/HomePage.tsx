import React, { useState } from 'react'
import { Categories, CTAButtonOutline, CTAButtons, CTAButtonWhite, CTAContainer, Footer, Hero, HeroTag, HIWContainer, HIWH, HIWNum, HIWP, HIWStep, HIWSteps, Home, MainPage, SectionHead, SectionHeadH, SectionHeadP } from './styles/HomePage.styles'
import Text from '../../components/display/text/Text'
import SearchBar from '../../components/navigation/search-bar/SearchBar'
import ServiceCard from '../../components/display/service-card/ServiceCard'
import ProviderView from '../providers/Providers'
import type { ProviderProps } from '../providers/Providers.types'

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProviderProps | null>(null)

  return (
    <><Home>
      {/* hero */}
      <MainPage>
        <Hero>
          <HeroTag>South Africa's Service Marketplace</HeroTag>
          <Text variant='h1'>Find Any <em> Services</em> You Need, Nearby</Text>
          <Text variant='p'>From nail technicians to plumbers, hairstylists to tutors — connect with trusted local professionals in minutes</Text>
          <SearchBar />
        </Hero>
      </MainPage>
      {/* categories */}
      <Categories>
        <MainPage>
          <SectionHead>
            <SectionHeadH variant='h2'>Browse by Category</SectionHeadH>
            <SectionHeadP variant='p'>Click a category to explore available professionals</SectionHeadP>
          </SectionHead>
          <ServiceCard />
        </MainPage>
      </Categories>
      {/* how it works */}
      <HIWContainer>
        <MainPage>
          <SectionHead>
            <SectionHeadH>How ServeLink Works</SectionHeadH>
            <SectionHeadP>Three easy steps to get the help you need</SectionHeadP>
          </SectionHead>
          <HIWSteps>
            <HIWStep>
              <HIWNum>1</HIWNum>
              <HIWH>Browse or Search</HIWH>
              <HIWP>Find the type of service you need from our growing list of categories.</HIWP>
            </HIWStep>
            <HIWStep>
              <HIWNum>2</HIWNum>
              <HIWH>View Profiles</HIWH>
              <HIWP>Compare providers by ratings, descriptions, and location.</HIWP>
            </HIWStep>
            <HIWStep>
              <HIWNum>2</HIWNum>
              <HIWH>View Profiles</HIWH>
              <HIWP>Compare providers by ratings, descriptions, and location.</HIWP>
            </HIWStep>
            <HIWStep>
              <HIWNum>3</HIWNum>
              <HIWH>Connect &amp; Book</HIWH>
              <HIWP>Reach out directly and arrange your appointment with ease.</HIWP>
            </HIWStep>
          </HIWSteps>
        </MainPage>
      </HIWContainer>
      {/* cta */}
      <CTAContainer>
        <MainPage>
          <Text variant='h2'>Are you a service provider?</Text>
          <Text variant='p'>Join hundreds of professionals already growing their client base on ServeLink</Text>
          <CTAButtons>
            <CTAButtonWhite>Contact us</CTAButtonWhite>
            <CTAButtonOutline>Learn more</CTAButtonOutline>
          </CTAButtons>
        </MainPage>
      </CTAContainer>
      <Footer>@ 2026 ServeLink · Built for local service communities</Footer>
    </Home>
     {selectedCategory ? (
      <ProviderView
        category={selectedCategory}
        goBack={() => setSelectedCategory(null)}
      />
    ) : (
      <ServiceCard />
    )}
    </>
  )
}

export default HomePage
