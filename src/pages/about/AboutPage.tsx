import {
  PageWrapper,
  PageHero,
  PageHeroBg,
  PageHeroOverlay,
  PageHeroContent,
  PageTag,
  PageHeroTitle,
  PageHeroSub,
  Section,
  SectionInner,
  SectionLabel,
  SectionTitle,
  SectionBody,
  TwoCol,
  MissionText,
  MissionHighlight,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueText,
  TeamGrid,
  TeamCard,
  TeamAvatar,
  TeamName,
  TeamRole,
  TeamBio,
  PageFooter,
} from './styles/AboutPage.styles'

import Gugulethu from '../../assets/images/Gugulethu.jpeg'
import Sibonelo from '../../assets/images/Sibonelo.jpeg'

const team = [
  {
    name: 'Sibonelo Mnisi',
    role: 'Founder & Marketing Lead',
    avatar: `${Sibonelo}`,
    bio: 'Sibonelo is a growth marketer and community builder with a passion for connecting people. He leads Pandapreneur’s outreach and partnerships, ensuring we stay rooted in the needs of South African service communities.',
  },
  {
    name: 'Gugulethu Mdluli',
    role: 'Co-Founder & Developer',
    avatar: `${Gugulethu}`,
    bio: 'Full-stack engineer, Former MTN Front End Developer. Gugulethu designs, builds, maintains, and architects the platform that powers thousands of service connections monthly.',
  },
  
]

const values = [
  { icon: '🤝', title: 'Community First', text: 'Every feature we build starts with one question: does this make life easier for South Africans looking for or offering a service?' },
  { icon: '🔒', title: 'Trust & Safety', text: 'We verify providers, publish real reviews, and give clients the information they need to make confident decisions.' },
  { icon: '⚡', title: 'Simplicity', text: 'Finding a service should take seconds, not hours. We obsess over removing friction from every step of the journey.' },
  { icon: '🌍', title: 'Inclusive Growth', text: 'We believe every skilled person deserves a platform to grow their income, regardless of where they live or work.' },
]


const AboutPage = () => {
  return (

        <>
        <PageWrapper>

      {/* ── HERO ── */}
      <PageHero>
        <PageHeroBg src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80" />
        <PageHeroOverlay />
        <PageHeroContent>
          <PageTag>Our Story</PageTag>
          <PageHeroTitle  variant='h1' color='light' size='lg' fontFamily='nunito'>Built for South Africa,<br />by South Africans</PageHeroTitle>
          <PageHeroSub>
            Pandapreneur exists to close the gap between skilled local professionals
            and the people who need them — one connection at a time.
          </PageHeroSub>
        </PageHeroContent>
      </PageHero>

      {/* ── MISSION ── */}
      <Section $bg="#fff">
        <SectionInner>
          <TwoCol>
            <div>
              <SectionLabel  variant='label' color='label' size='sm' fontFamily='nunito'>Our Mission</SectionLabel>
              <SectionTitle variant='h2' color='primary' size='md' fontFamily='raleway'>Connecting communities through trusted services</SectionTitle>
            </div>
            <div>
              <MissionText variant='p' color='secondary' size='sm' fontFamily='nunito'>
                South Africa is full of talented, hardworking professionals — nail
                technicians, plumbers, tutors, builders, stylists — who struggle to
                reach clients beyond their immediate circle. At the same time, millions
                of people waste hours searching for reliable help through word-of-mouth
                and scattered social media groups.
              </MissionText>
              <MissionHighlight >
                Pandapreneur solves both sides of that problem. We are a free, centralised
                hub where anyone can find a verified local professional in minutes, and
                where every provider gets the visibility they deserve.
              </MissionHighlight>
              <MissionText  variant='p' color='secondary' size='sm' fontFamily='nunito'>
                We are proudly South African, built with a deep understanding of our
                communities — their needs, their hustle, and their potential.
              </MissionText>
            </div>
          </TwoCol>
        </SectionInner>
      </Section>

      {/* ── VALUES ── */}
      <Section $bg="var(--bg, #fafaf9)">
        <SectionInner>
          <SectionLabel  variant='label' color='label' size='sm' fontFamily='nunito'>What We Stand For</SectionLabel>
          <SectionTitle variant='h2' color='primary' size='md' fontFamily='raleway'>Our values</SectionTitle>
          <SectionBody variant='p' color='secondary' size='sm' fontFamily='nunito'>The principles that guide every decision we make.</SectionBody>
          <ValuesGrid>
            {values.map((v, i) => (
              <ValueCard key={i}>
                <ValueIcon>{v.icon}</ValueIcon>
                <ValueTitle variant='h3' color='primary' size='sm' fontFamily='raleway'>{v.title}</ValueTitle>
                <ValueText variant='p' color='secondary' size='sm' fontFamily='nunito'>{v.text}</ValueText>
              </ValueCard>
            ))}
          </ValuesGrid>
        </SectionInner>
      </Section>

      {/* ── TEAM ── */}
      <Section $bg="#fff">
        <SectionInner>
          <SectionLabel  variant='label' color='label' size='sm' fontFamily='nunito'>The People Behind Pandapreneur</SectionLabel>
          <SectionTitle variant='h2' color='primary' size='md' fontFamily='raleway'>Meet the team</SectionTitle>
          <SectionBody variant='p' color='secondary' size='sm' fontFamily='nunito'>A small, passionate crew obsessed with building South Africa's most trusted service marketplace.</SectionBody>
          <TeamGrid>
            {team.map((member, i) => (
              <TeamCard key={i}>
                <TeamAvatar src={member.avatar} alt={member.name} />
                <TeamName>{member.name}</TeamName>
                <TeamRole variant='span' color='label' size='sm' fontFamily='nunito'>{member.role}</TeamRole>
                <TeamBio variant='p' color='secondary' size='sm' fontFamily='nunito'>{member.bio}</TeamBio>
              </TeamCard>
            ))}
          </TeamGrid>
        </SectionInner>
      </Section>

      <PageFooter>© 2026 Pandapreneur · Built for local service communities across South Africa</PageFooter>

    </PageWrapper></>
  )
}

export default AboutPage