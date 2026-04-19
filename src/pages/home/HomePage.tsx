import  { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { 
  Categories, 
  CTAButtonOutline,
  CTAButtons, 
  CTAButtonWhite,
  CTAContainer, 
  Footer, 
  Hero, 
  HeroSubtext, 
  HeroTag, 
  HeroText, 
  HIWContainer, 
  HIWH, 
  HIWNum, 
  HIWP, 
  HIWStep, 
  HIWSteps, 
  Home, 
  MainPage, 
  MainPageHero, 
  SectionHead, 
  SectionHeadH, 
  SectionHeadP, 
  WhyCard, 
  WhyGrid, 
  WhyIcon, 
  WhySection, 
  WhyText, 
  WhyTitle } from './styles/HomePage.styles'
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
    <Home>
      {/* hero */}
      <MainPageHero>
        <Hero>
          <HeroTag><HeroText variant='p' fontFamily='nunito' color='light' size='sm'>South Africa's Service Marketplace</HeroText></HeroTag>
          <Text variant='h1' fontFamily='nunito' color='light' size='lg'>Find Any <em> Pandapreneur</em> You Need, Nearby</Text>
          <HeroSubtext>
              <Text variant='p' fontFamily='raleway' color='light' size='md'>
                Dear all Pandaperneurs who are looking for a space where you can advertise and 
                show your services and those looking for an easy platform to use to find your local 
                businesses in just one click. pandapreneur is your all-in-one local service hub. 
                Whether you need a nail technician for the weekend, a plumber for an emergency, or a tutor for
                your child — simply search, compare, and connect with vetted professionals
                in your area. No referrals, no guesswork, just one simple platform.
             </Text >
          </HeroSubtext>
        </Hero>
      </MainPageHero>

      {/* categories */}
      <Categories id='categories'>
        <MainPage>
          <SectionHead>
            <Text variant='h2' color='primary' size='lg' fontFamily='raleway'>Browse by Category</Text>
            <SectionHeadP variant='p' fontFamily='raleway' size='md'>Click a category to explore available professionals</SectionHeadP>
          </SectionHead>
          <ServiceCard  onSelectCategory={setSelectedCategory}/>
        </MainPage>
      </Categories>

      {/** Why Section */}

        <WhySection>
          <MainPage>
            <SectionHead>
              <SectionHeadH variant='h2' color='primary' size='lg' fontFamily='raleway'>Why Choose Pandapreneur?</SectionHeadH>
              <SectionHeadP variant='p' fontFamily='raleway' size='md'>
                We built pandapreneur to solve a real problem — finding reliable local
                services in South Africa shouldn't be hard.
              </SectionHeadP>
            </SectionHead>
            <WhyGrid>
              <WhyCard>
                <WhyIcon><img src={magnifyingGlass}/></WhyIcon>
                <WhyTitle >Everything in One Place</WhyTitle>
                <Text variant='p' fontFamily='raleway' size='md' color='secondary'>
                  Stop hopping between WhatsApp groups, Facebook pages, and word-of-mouth
                  recommendations. pandapreneur centralises hundreds of local service
                  providers into a single, easy-to-search platform.
                </Text>
              </WhyCard>
              <WhyCard>
                <WhyIcon><img src={checkIcon}/></WhyIcon>
                <WhyTitle>Vetted & Rated Providers</WhyTitle>
                <Text variant='p' fontFamily='raleway' size='md' color='secondary'>
                  Every professional on pandapreneur is reviewed by real clients. Ratings,
                  badges, and verified profiles give you the confidence to choose the
                  right person for the job — every time.
                </Text>
              </WhyCard>
              <WhyCard>
                <WhyIcon><img src={lightIcon}/></WhyIcon>
                <WhyTitle>Fast & Free to Use</WhyTitle>
                <Text variant='p' fontFamily='raleway' size='md' color='secondary'>
                  No sign-up fees, no hidden charges. Browse profiles, read reviews, and
                  reach out directly to providers — completely free for anyone looking for
                  a service.
                </Text>
              </WhyCard>
              <WhyCard>
                <WhyIcon> <img src={pinIcon}/></WhyIcon>
                <WhyTitle>Truly Local</WhyTitle>
                <Text variant='p' fontFamily='raleway' size='md' color='secondary'>
                  pandapreneur is proudly South African, built specifically for our
                  communities. Whether you're in Johannesburg, Cape Town, Durban, or a
                  smaller town — we connect you with providers nearby.
                </Text>
              </WhyCard>
            </WhyGrid>
          </MainPage>
        </WhySection>

      {/* how it works */}
      <HIWContainer id='how-it-works'>
        <MainPage>
          <SectionHead>
            <Text variant='h2' color='primary' size='lg' fontFamily='raleway'>How pandapreneur Works</Text>
            <SectionHeadP variant='p' fontFamily='raleway' size='md'>Three easy steps to get the help you need</SectionHeadP>
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
          <Text variant='h2' fontFamily='lora' color='light'>Are you a service provider?</Text>
          <Text variant='p' fontFamily='raleway' color='secondary'>Join some of our professionals already growing their client base on pandapreneur</Text>
          <CTAButtons>
            <CTAButtonWhite onClick={() => navigate("/contact")}>Contact us</CTAButtonWhite>
            <CTAButtonOutline onClick={() => navigate("/about")}>Learn more</CTAButtonOutline>
          </CTAButtons>
        </MainPage>
      </CTAContainer>
      <Footer>@ 2026 pandapreneur · Built for local service communities</Footer>
    </Home>
    </>
  )
}

export default HomePage
