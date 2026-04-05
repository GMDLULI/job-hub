import React from 'react'
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
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineYear,
  TimelineContent,
  TimelineTitle,
  TimelineText,
  PageFooter,
} from './styles/AboutPage.styles'

const team = [
  {
    name: 'Sipho Ndlovu',
    role: 'Co-Founder & CEO',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Sipho spent 10 years in township entrepreneurship before building ServeLink to solve the service-discovery problem he lived every day.',
  },
  {
    name: 'Ayanda Mokoena',
    role: 'Co-Founder & CTO',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    bio: 'Full-stack engineer and former Google Developer Expert. Ayanda architects the platform that powers thousands of service connections monthly.',
  },
  {
    name: 'Thabo Sithole',
    role: 'Head of Growth',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    bio: 'Growth strategist who scaled two South African startups to profitability. Thabo leads provider acquisition and community expansion.',
  },
  {
    name: 'Nomsa Dlamini',
    role: 'Head of Design',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    bio: 'UX designer with a passion for building products that feel native to African communities — intuitive, fast, and beautiful.',
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
    <PageWrapper>

      {/* ── HERO ── */}
      <PageHero>
        <PageHeroBg src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80" />
        <PageHeroOverlay />
        <PageHeroContent>
          <PageTag>Our Story</PageTag>
          <PageHeroTitle>Built for South Africa,<br />by South Africans</PageHeroTitle>
          <PageHeroSub>
            ServeLink exists to close the gap between skilled local professionals
            and the people who need them — one connection at a time.
          </PageHeroSub>
        </PageHeroContent>
      </PageHero>

      {/* ── MISSION ── */}
      <Section $bg="#fff">
        <SectionInner>
          <TwoCol>
            <div>
              <SectionLabel>Our Mission</SectionLabel>
              <SectionTitle>Connecting communities through trusted services</SectionTitle>
            </div>
            <div>
              <MissionText>
                South Africa is full of talented, hardworking professionals — nail
                technicians, plumbers, tutors, builders, stylists — who struggle to
                reach clients beyond their immediate circle. At the same time, millions
                of people waste hours searching for reliable help through word-of-mouth
                and scattered social media groups.
              </MissionText>
              <MissionHighlight>
                ServeLink solves both sides of that problem. We are a free, centralised
                hub where anyone can find a verified local professional in minutes, and
                where every provider gets the visibility they deserve.
              </MissionHighlight>
              <MissionText>
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
          <SectionLabel>What We Stand For</SectionLabel>
          <SectionTitle>Our values</SectionTitle>
          <SectionBody>The principles that guide every decision we make.</SectionBody>
          <ValuesGrid>
            {values.map((v, i) => (
              <ValueCard key={i}>
                <ValueIcon>{v.icon}</ValueIcon>
                <ValueTitle>{v.title}</ValueTitle>
                <ValueText>{v.text}</ValueText>
              </ValueCard>
            ))}
          </ValuesGrid>
        </SectionInner>
      </Section>

      {/* ── TEAM ── */}
      <Section $bg="#fff">
        <SectionInner>
          <SectionLabel>The People Behind ServeLink</SectionLabel>
          <SectionTitle>Meet the team</SectionTitle>
          <SectionBody>A small, passionate crew obsessed with building South Africa's most trusted service marketplace.</SectionBody>
          <TeamGrid>
            {team.map((member, i) => (
              <TeamCard key={i}>
                <TeamAvatar src={member.avatar} alt={member.name} />
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
              </TeamCard>
            ))}
          </TeamGrid>
        </SectionInner>
      </Section>

      <PageFooter>© 2026 ServeLink · Built for local service communities across South Africa</PageFooter>

    </PageWrapper>
  )
}

export default AboutPage