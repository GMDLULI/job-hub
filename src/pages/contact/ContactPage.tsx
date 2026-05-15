import React, { useState } from 'react'
import {
  PageWrapper,
  PageHero,
  PageHeroBg,
  PageHeroOverlay,
  PageHeroContent,
  PageTag,
  PageHeroTitle,
  PageHeroSub,
  ContactLayout,
  ContactInner,
  FormSide,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  SubmitButton,
  SuccessMessage,
  InfoSide,
  InfoCard,
  InfoIcon,
  InfoText,
  InfoLink,
  Divider,
  PageFooter,
} from './styles/ContactPage.styles'
import Text  from '../../components/display/text/Text'
import instagram from '../../assets/icons/instagram.png'
import mail from '../../assets/icons/communication.png'
import phone from '../../assets/icons/call.png'

// const faqs = [
//   {
//     q: 'Is Pandapreneur free to use?',
//     a: 'Yes — browsing profiles and contacting providers is completely free for clients. Providers can also list their services at no cost during our launch period.',
//   },
//   {
//     q: 'How do I list my services as a provider?',
//     a: 'Send us a message using the contact form above and select "Become a Provider". Our team will reach out to get your profile set up.',
//   },
//   {
//     q: 'How are providers verified?',
//     a: 'We manually review each provider application and collect proof of work where applicable. Client ratings and reviews then maintain ongoing quality on the platform.',
//   },
//   {
//     q: 'Which areas does Pandapreneur currently cover?',
//     a: 'We are live across all 9 provinces of South Africa, with the strongest coverage in Gauteng, the Western Cape, and KwaZulu-Natal.',
//   },
//   {
//     q: 'I found an issue on the platform. How do I report it?',
//     a: 'Use the contact form and select "Report an Issue". Our team aims to respond within one business day.',
//   },
//   {
//     q: 'Can I suggest a new service category?',
//     a: 'Absolutely — we love hearing from the community. Select "General Enquiry" in the form and tell us what category you\'d like to see added.',
//   },
// ]

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
  }

  return (

        <>
        <PageWrapper>

      {/* ── HERO ── */}
      <PageHero>
        <PageHeroBg src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=80" />
        <PageHeroOverlay />
        <PageHeroContent>
          <PageTag>Get in Touch</PageTag>
          <PageHeroTitle variant='h1' color='light' size='lg' fontFamily='nunito'>We'd love to hear from you</PageHeroTitle>
          <PageHeroSub>
            Whether you're a client with a question, a provider wanting to join,
            or just curious about Pandapreneur — our team is here and ready to help.
          </PageHeroSub>
        </PageHeroContent>
      </PageHero>

      {/* ── CONTACT LAYOUT ── */}
      <ContactLayout>
        <ContactInner>

          {/* form */}
          <FormSide>
            <FormTitle variant='h2' fontFamily='raleway' size='lg'>Send us a message</FormTitle>
            <FormSubtitle>We typically respond within one business day.</FormSubtitle>

            {submitted ? (
              <SuccessMessage>
                <span>✅</span>
                <div>
                  <strong>Message sent!</strong>
                  <Text variant='p' fontFamily='raleway' size='md'>Thanks {form.name}, we'll be in touch at {form.email} shortly.</Text>
                </div>
              </SuccessMessage>
            ) : (
              <>
                <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Full Name *
                  </Text>
                  <FormInput
                    name="name"
                    placeholder="e.g. Sipho Ndlovu"
                    value={form.name}
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Email Address *
                  </Text>
                  <FormInput
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Subject
                  </Text>
                  <FormSelect name="subject" value={form.subject} onChange={handleChange}>
                    <option value=""> Select a topic…</option>
                    <option value="general"> General Enquiry</option>
                    <option value="provider"> Become a Provider</option>
                    <option value="support"> Client Support</option>
                    <option value="report"> Report an Issue</option>
                    <option value="partnership"> Partnership / Press</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Message *
                  </Text>
                  <FormTextarea
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange} />
                </FormGroup>

                <SubmitButton onClick={handleSubmit}>
                  Send Message 
                </SubmitButton>
              </>
            )}
          </FormSide>

          {/* info cards */}
          <InfoSide>
            <InfoCard>
              <InfoIcon src={mail} alt='mail icon'></InfoIcon>
              <Text variant='label' fontFamily='raleway' size='sm' color='text'>Email Us</Text>
              <InfoText>For general questions and enquiries</InfoText>
              <InfoLink href="mailto:phandapreneurbusinesshub@gmail.com">phandapreneurbusinesshub@gmail.com</InfoLink>
            </InfoCard>

            <InfoCard>
              <InfoIcon src={phone} alt="Phone Icon"></InfoIcon>
              <Text variant='label' fontFamily='raleway' size='sm' color='text'>Call Us</Text>
              <InfoText>Mon – Fri, 8am – 5pm (SAST)</InfoText>
              <InfoLink href="tel:+2797288652">+27 79 728 8652</InfoLink>
            </InfoCard>

            {/* <InfoCard>
              <InfoIcon src={Pin} alt="Office Location" ></InfoIcon>
              <Text variant='label' fontFamily='raleway' size='sm' color='text'>Our Office</Text>
              <InfoText>
                The Innovation Hub<br />
                Mark Shuttleworth Street<br />
                Pretoria, Gauteng, 0087
              </InfoText>
            </InfoCard> */}

            <InfoCard>
              <InfoIcon src={instagram} alt="Social Media" ></InfoIcon>
              <Text variant='label' fontFamily='raleway' size='sm' color='text'>Social Media</Text>
              <InfoText>Follow us and join the conversation</InfoText>
              <InfoLink href="#">@Pandapreneur_SA</InfoLink>
            </InfoCard>
          </InfoSide>

        </ContactInner>
      </ContactLayout>

      <Divider />

      {/* ── FAQ ── */}
      {/* <FaqSection>
        <FaqInner>
          <FaqLabel>Quick Answers</FaqLabel>
          <FaqTitle>Frequently asked questions</FaqTitle>
          <FaqGrid>
            {faqs.map((faq, i) => (
              <FaqItem key={i}>
                <FaqQ>{faq.q}</FaqQ>
                <FaqA>{faq.a}</FaqA>
              </FaqItem>
            ))}
          </FaqGrid>
        </FaqInner>
      </FaqSection> */}

      <PageFooter>© 2026 Pandapreneur · Built for local service communities across South Africa</PageFooter>

    </PageWrapper></>
  )
}

export default ContactPage