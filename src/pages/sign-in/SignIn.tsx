import React, { useState } from 'react'
import { AvatarContainer, ButtonsContainer, DeleteButton, FormInputNumber, FormSelect, InfoContainer, infoContainer, SignInContainer, SignInFormContainer, UploadButton } from './styles/SignIn.styles'
import Text from '../../components/display/text/Text'
import user from "../../assets/icons/user.png";
import deleteIcon from "../../assets/icons/delete.png";
import { Form } from 'react-router-dom'
import { FormGroup, FormInput, FormTextarea, SubmitButton } from '../contact/styles/ContactPage.styles'

const SignIn = () => {
    const [step, setStep] = React.useState<number>(1)
    const [submitted, setSubmitted] = useState(false)
    
     const [form, setForm] = useState({
        fullName: '',
        title: '',
        subject: '',
        service: '',
        about: '',
        price: '0',
        duration: '0',
        number: '0',
        email: '',
        location: '',
      })
      

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!form.fullName || !form.title || !form.service || !form.about || !form.subject || !form.price || !form.duration) return
        setSubmitted(true)
      }

      const handleNext = () => {
        setStep(prev => prev + 1)

        if (step === 4) {
            handleSubmit
        }

      }
      const handleBack = () => {
        setStep(prev => prev - 1)
      }

      const handleServicesSubmit = () => {

        return(
            <FormGroup>
                <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Service Name *
                </Text>
                <FormInput
                        name="service"
                        placeholder="e.g. Sipho Ndlovu"
                        value={form.service}
                        onChange={handleChange} />
                <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Price *
                </Text>
                <FormInputNumber
                    type='number'
                    name="price"
                    placeholder="e.g. 100"
                    value={form.price}
                    onChange={handleChange} />
                <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Duration *
                </Text>
                <FormInputNumber
                    type='number'
                    name="duration"
                    placeholder="e.g. 60"
                    value={form.duration}
                    onChange={handleChange} />
                <DeleteButton>
                    <img src={deleteIcon} alt="Delete" />
                </DeleteButton>
            </FormGroup>
        )
      }

    

 const handleFromSubmit = (step: number) => {
    switch(step) {
        case 1:         
        return(
             <SignInFormContainer>
            <Text variant='h2' color='primary' fontFamily='nunito'>Your Profile</Text>
            <Text variant='p' color='secondary' fontFamily='nunito'>This is what clients will see first so make it count!</Text>
            <AvatarContainer>
                <img src={user} alt="User Avatar" width={120} height={120} />
            </AvatarContainer>
            <FormGroup>
                <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Full Name *
                  </Text>
                  <FormInput
                    name="fullName"
                    placeholder="e.g. Sipho Ndlovu"
                    value={form.fullName}
                    onChange={handleChange} />
                    <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Professional title *
                  </Text>
                  <FormInput
                    name="title"
                    placeholder="e.g. Marketing Manager"
                    value={form.title}
                    onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Services Category *
                  </Text>
                <FormSelect name="subject" value={form.subject} onChange={handleChange}>
                    <option value=""> Select a category…</option>
                    <option value="general"> Nail Technician</option>
                    <option value="provider"> Plumber</option>
                    <option value="support">Hair salon</option>
                    <option value="report"> Hair and Nail Salon</option>
                    <option value="partnership">Electrician</option>
                    <option value="partnership">Construction</option>
                    <option value="partnership">Cleaner</option>
                    <option value="partnership">Tutor</option>
                    <option value="partnership">Photography</option>
                    <option value="partnership">Catering</option>
                    <option value="partnership">Security</option>
                </FormSelect>
            </FormGroup>

             <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    About you *
                  </Text>
                  <FormTextarea
                    name="message"
                    rows={5}
                    placeholder="Describe your background services and experience amd what makes you stand out…"
                    value={form.about}
                    onChange={handleChange} />
                </FormGroup>
        </SignInFormContainer>
        );
        case 2:
            return(
                <>
                    <Text variant='h2' color='primary' fontFamily='nunito'>Services and Prices</Text>
                    <Text variant='p' color='secondary' fontFamily='nunito'>List the services you offer and how much you charge for each</Text>
                    {handleServicesSubmit()}

                    <SubmitButton onClick={handleServicesSubmit}>
                        + Add Service
                    </SubmitButton>

                </>
            )
        case 3:
            return(
                <>
                    <Text variant='h2' color='primary' fontFamily='nunito'>Gallery</Text>
                    <Text variant='p' color='secondary' fontFamily='nunito'>Upload images of your work to showcase your services</Text>
                    <UploadButton>
                        + Upload Image
                    </UploadButton>
                </>
            )
        case 4:
            return(
                <>
                    <Text variant='h2' color='primary' fontFamily='nunito'>Contact</Text>
                    <Text variant='p' color='secondary' fontFamily='nunito'>How Clients will reach you. Will be shown on your profile</Text>

                    <FormGroup>
                    <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                        Phone Number *
                    </Text>
                    <FormInput
                        name="number"
                        placeholder="e.g. 083 123 4567"
                        value={form.number}
                        onChange={handleChange} />
                   </FormGroup>

                   <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Email Address *
                  </Text>
                  <FormInput
                    name="email"
                    type='email'
                    placeholder="e.g. sipho@ndlovu.com"
                    value={form.email}
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                  <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    location *
                  </Text>
                  <FormInput
                    name="location"
                    type='location'
                    placeholder="e.g. 12833 Main Road, Cape Town"
                    value={form.location}
                    onChange={handleChange} />
                </FormGroup>

                <InfoContainer>
                    <Text variant='p' fontFamily='raleway' size='sm' color='secondary'>
                        Your Location will is used to generate a map in your profile in order for you clients to find you.
                    </Text>
                </InfoContainer>
                </>
            )
    }
 }
 
 

  return (
    <SignInContainer>
        <Text variant="h1" color='secondary' fontFamily='nunito'>Panda</Text><Text variant="h1" color='label' fontFamily='nunito'>Preneur</Text>
        <Text variant='p' color='primary' fontFamily='nunito'> Provider Registration - step</Text><Text variant='p' color='primary' fontFamily='nunito'>{step}</Text><Text variant='p' color='primary' fontFamily='nunito'> of 4</Text>
        <SignInFormContainer>
            {handleFromSubmit(step)}
             <ButtonsContainer>
                    <SubmitButton onClick={handleBack}>
                        Back 
                    </SubmitButton>
                    <SubmitButton onClick={handleNext}>
                        Next
                    </SubmitButton>
                </ButtonsContainer>
        </SignInFormContainer>
       
    </SignInContainer>
  )
}

export default SignIn;
