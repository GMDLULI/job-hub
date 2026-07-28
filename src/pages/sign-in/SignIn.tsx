import React, {useState} from 'react'
import {
  Avatar,
  ButtonsContainer,
  ErrorText,
  InfoContainer,
  SignInContainer,
  SignInFormContainer,
  SignInHeading,
  SignInNum,
  SignInStep,
  SignInSubHeading,
  SingInSteps,

} from './styles/SignIn.styles'
import Text from '../../components/display/text/Text'
import {  SubmitButton } from '../contact/styles/ContactPage.styles'
import useSignIn from './hooks/useSignIn'
import Profile from './forms/Profile'
import Services from './forms/Services'
import Gallery from './forms/Gallery'
import Contact from './forms/Contact'

export const SignIn = () => {
  const {
    step,
    form,
    services,
    showError,
    submitting,
    submitted,
    images,
    avatarPreview,
    handleServiceChange,
    deleteService,
    handleNext,
    handleChange,
    handleImageUpload, 
    handleImageChange,
    handleBack,
    deleteImage,
    addService,
  
  } = useSignIn()



  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Profile 
          avatarPreview={avatarPreview}
          form={form} 
          handleChange={handleChange} 
          handleImageChange={handleImageChange}/>
        )

      case 2:
        return (
         <Services 
          services={services} 
          handleServiceChange={handleServiceChange} 
          deleteService={deleteService} 
          addService={addService}/>
        )

      case 3:
        return (
          <Gallery 
            images={images} 
            handleImageUpload={handleImageUpload} 
            deleteImage={deleteImage} />
        )

      case 4:
        return (
         <Contact form={form} handleChange={handleChange}/>
         )
        

      default:
        return null
    }
  }
  if (submitted) {
  return (
    <SignInContainer>
      <InfoContainer>
      <Text variant="h1" color="secondary" fontFamily="nunito">You're live!</Text>
      <Text variant="p" color="primary" fontFamily="nunito">
        Your profile has been submitted. Check your email to confirm your account.
      </Text>
      </InfoContainer>
    </SignInContainer>
  )
}

  return (
    <SignInContainer>
      <SignInHeading>
        <Text variant="h1" color="secondary" fontFamily="nunito">
          Panda
        </Text>
        <Text variant="h1" color="label" fontFamily="nunito">
          Preneur
        </Text>
      </SignInHeading>

      <SignInSubHeading>
        <Text variant="p" color="primary" fontFamily="nunito">
          Provider Registration — step {step} of 4
        </Text>
      </SignInSubHeading>

      <SignInContainer>
        <SingInSteps>
          {['Profile', 'Services', 'Gallery', 'Contact'].map((label, i) => (
            <SignInStep key={label}>
              <SignInNum>{i + 1}</SignInNum>
              <Text variant="p" color="primary" fontFamily="raleway">
                {label}
              </Text>
            </SignInStep>
          ))}
        </SingInSteps>
      </SignInContainer>

      <SignInFormContainer>
        {renderStep()}
        {showError && <ErrorText >Fill in the missing fields</ErrorText>}
        <ButtonsContainer>
          <SubmitButton onClick={handleBack}>Back</SubmitButton>
          <SubmitButton onClick={handleNext}>{submitting ? 'Submitting...' : step === 4 ? 'Submit' : 'Next'}

          </SubmitButton>
        </ButtonsContainer>
      </SignInFormContainer>
    </SignInContainer>
  )
}

export default SignIn