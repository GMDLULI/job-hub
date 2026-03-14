import React from 'react'
import { Hero, HeroTag, Home, MainPage } from './styles/HomePage.styles'
import Text from '../../components/display/text/Text'
import SearchBar from '../../components/navigation/search-bar/SearchBar'

const HomePage = () => {
  return (
    <Home>
        <MainPage>
            <Hero>
                <HeroTag>South Africa's Service Marketplace</HeroTag>
                <Text variant='h1'>Find Any <em> Service</em> You Need, Nearby</Text>
                <SearchBar/>
            </Hero>
        </MainPage>
    </Home>
  )
}

export default HomePage
