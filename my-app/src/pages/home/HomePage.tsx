import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Categories, CTAButtonOutline, CTAButtons, CTAButtonWhite, CTAContainer, Footer, Hero, HeroSubtext, HeroTag, HIWContainer, HIWH, HIWNum, HIWP, HIWStep, HIWSteps, Home, MainPage, SectionHead, SectionHeadH, SectionHeadP, WhyCard, WhyGrid, WhyIcon, WhySection, WhyText, WhyTitle } from './styles/HomePage.styles'
import Text from '../../components/display/text/Text'
import SearchBar from '../../components/navigation/search-bar/SearchBar'
import ServiceCard from '../../components/display/service-card/ServiceCard'
import ProviderView from '../providers/Providers'
import type { ProviderProps } from '../providers/Providers.types'
import NavBar from '../../components/navigation/nav-bar/NavBar'
import magnifyingGlass from '../../assets/icons/magnifying-glass.png'
import checkIcon from '../../assets/icons/check-list.png'
import lightIcon from '../../assets/icons/thunder.png'
import pinIcon from '../../assets/icons/pin.png'




const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProviderProps | null>(null)
  const navigate = useNavigate()

  if (selectedCategory) {
    return (
      <ProviderView
        category={selectedCategory}
        goBack={() => setSelectedCategory(null)}
      />
    )
  }

  return (
    <>
    <NavBar />
    <Home>
      {/* hero */}
      <MainPage>
        <Hero>
          <HeroTag>South Africa's Service Marketplace</HeroTag>
          <Text variant='h1'>Find Any <em> Services</em> You Need, Nearby</Text>
          <HeroSubtext>
            Dear all Pandaperneurs who are looking for a space where you can advertise and 
            show your services and those looking for an easy platform to use to find your local 
            businesses in just one click. ServeLink is your all-in-one local service hub. 
            Whether you need a nail technician for the weekend, a plumber for an emergency, or a tutor for
            your child — simply search, compare, and connect with vetted professionals
            in your area. No referrals, no guesswork, just one simple platform.
          </HeroSubtext >
          <SearchBar />
        </Hero>
      </MainPage>

      {/* categories */}
      <Categories id='categories'>
        <MainPage>
          <SectionHead>
            <SectionHeadH >Browse by Category</SectionHeadH>
            <SectionHeadP variant='p'>Click a category to explore available professionals</SectionHeadP>
          </SectionHead>
          <ServiceCard  onSelectCategory={setSelectedCategory}/>
        </MainPage>
      </Categories>

      {/** Why Section */}

        <WhySection>
          <MainPage>
            <SectionHead>
              <SectionHeadH>Why Choose ServeLink?</SectionHeadH>
              <SectionHeadP>
                We built ServeLink to solve a real problem — finding reliable local
                services in South Africa shouldn't be hard.
              </SectionHeadP>
            </SectionHead>
            <WhyGrid>
              <WhyCard>
                <WhyIcon><img src={magnifyingGlass}/></WhyIcon>
                <WhyTitle>Everything in One Place</WhyTitle>
                <WhyText>
                  Stop hopping between WhatsApp groups, Facebook pages, and word-of-mouth
                  recommendations. ServeLink centralises hundreds of local service
                  providers into a single, easy-to-search platform.
                </WhyText>
              </WhyCard>
              <WhyCard>
                <WhyIcon><img src={checkIcon}/></WhyIcon>
                <WhyTitle>Vetted & Rated Providers</WhyTitle>
                <WhyText>
                  Every professional on ServeLink is reviewed by real clients. Ratings,
                  badges, and verified profiles give you the confidence to choose the
                  right person for the job — every time.
                </WhyText>
              </WhyCard>
              <WhyCard>
                <WhyIcon><img src={lightIcon}/></WhyIcon>
                <WhyTitle>Fast & Free to Use</WhyTitle>
                <WhyText>
                  No sign-up fees, no hidden charges. Browse profiles, read reviews, and
                  reach out directly to providers — completely free for anyone looking for
                  a service.
                </WhyText>
              </WhyCard>
              <WhyCard>
                <WhyIcon> <img src={pinIcon}/></WhyIcon>
                <WhyTitle>Truly Local</WhyTitle>
                <WhyText>
                  ServeLink is proudly South African, built specifically for our
                  communities. Whether you're in Johannesburg, Cape Town, Durban, or a
                  smaller town — we connect you with providers nearby.
                </WhyText>
              </WhyCard>
            </WhyGrid>
          </MainPage>
        </WhySection>

      {/* how it works */}
      <HIWContainer id='how-it-works'>
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
              <HIWNum>3</HIWNum>
              <HIWH>Connect &amp; Book</HIWH>
              <HIWP>Reach out directly and arrange your appointment with ease.</HIWP>
            </HIWStep>
          </HIWSteps>
        </MainPage>
      </HIWContainer>
      {/* cta */}
      <CTAContainer id='cta'>
        <MainPage>
          <Text variant='h2'>Are you a service provider?</Text>
          <Text variant='p'>Join hundreds of professionals already growing their client base on ServeLink</Text>
          <CTAButtons>
            <CTAButtonWhite onClick={() => navigate("/contact")}>Contact us</CTAButtonWhite>
            <CTAButtonOutline onClick={() => navigate("/about")}>Learn more</CTAButtonOutline>
          </CTAButtons>
        </MainPage>
      </CTAContainer>
      <Footer>@ 2026 ServeLink · Built for local service communities</Footer>
    </Home>
    </>
  )
}

export default HomePage
