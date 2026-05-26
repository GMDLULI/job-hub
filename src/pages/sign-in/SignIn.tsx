import React, { useRef, useState } from 'react'
import { Avatar, AvatarContainer, ButtonsContainer, DeleteButton, DeleteImage, FieldGroup, FieldRow, FormInputNumber, FormSelect, HiddenInput, InfoContainer, SignInContainer, SignInFormContainer, SignInHeading, SignInNum, SignInStep, SignInSubHeading, SingInSteps, UploadButton } from './styles/SignIn.styles'
import Text from '../../components/display/text/Text'
import user from "../../assets/icons/user.png";
import deleteIcon from "../../assets/icons/delete.png";
import { FormGroup, FormInput, FormTextarea, SubmitButton } from '../contact/styles/ContactPage.styles'
import type { Service } from './SignIn.types';

export const SignIn = () => {
    const [step, setStep] = React.useState<number>(1)
    const [submitted, setSubmitted] = useState(false)
    
     const [form, setForm] = useState({
        fullName: '',
        title: '',
        subject: '',
        service: '',
        about: '',
        number: '0',
        email: '',
        location: '',
      })

    const [services, setServices] = useState<Service[]>([
    {
        service: "",
        price: "",
        duration: "",
    },
    ]);

    const [images, setImages] = useState<File[]>([]);
            

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
      }


      const handleNext = (e: React.MouseEvent) => {
        e.preventDefault()

        if(step === 1 && (!form.fullName || !form.title || !form.service || !form.about || !form.subject)) {
            setStep(prev => prev + 1)
        } else if (step === 2 && (!services[0].price || !services[0].duration)) {
            setStep(prev => prev + 1)
        } else if (step === 3) {
            setStep(prev => prev + 1)
        }

        if (step === 4 && (!form.number || !form.email || !form.location)) {
            setSubmitted(true)
        }

      }
      const handleBack = () => {
        setStep(prev => prev - 1)
      }


      const handleImageChange = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            console.log(file);
            // you can also preview the image here
        }
        };
        
    const deleteService = (index:number) => {
        const updatedServices = services.filter((_, i) => i !== index);

        setServices(updatedServices);
        };

        const addService = () => {
        setServices([
            ...services,
            {
            service: "",
            price: "",
            duration: "",
            },
        ]);
        };

       const handleServiceChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
        ): void => {
        const { name, value } = e.target;

        const updatedServices = [...services];

        updatedServices[index] = {
            ...updatedServices[index],
            [name]: value,
        };

        setServices(updatedServices);
        };
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setImages((prev) => [...prev, ...selectedFiles]);

    // reset input so same file can be selected again if needed
    e.target.value = "";
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);

        const openFilePicker = () => {
        fileInputRef.current?.click();
        };

const deleteImage = (index: number): void => {
  setImages((prev) => prev.filter((_, i) => i !== index));
};

 const handleFromSubmit = (step: number) => {
    switch(step) {
        case 1:         
        return(
            <FieldGroup>
            <Text variant='h2' color='primary' fontFamily='nunito'>Your Profile</Text>
            <Text variant='p' color='secondary' fontFamily='nunito'>This is what clients will see first so make it count!</Text>
            <AvatarContainer>
                <Avatar htmlFor="avatar-upload">
                    <img src={user} alt="User Avatar" />
                </Avatar>

                <HiddenInput
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
        </AvatarContainer>

            <FieldRow>
                <FormGroup>
                    <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Full Name *
                  </Text>
                  <FormInput
                    name="fullName"
                    placeholder="e.g. Sipho Ndlovu"
                    value={form.fullName}
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Text variant='label' fontFamily='raleway' size='sm' color='text'>
                    Professional title *
                  </Text>
                  <FormInput
                    name="title"
                    placeholder="e.g. Marketing Manager"
                    value={form.title}
                    onChange={handleChange} />
                </FormGroup>
            </FieldRow>
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
        </FieldGroup>
        );
       case 2:
  return (
    <FieldGroup>
      <Text variant="h2" color="primary" fontFamily="nunito">
        Services and Prices
      </Text>

      <Text variant="p" color="secondary" fontFamily="nunito">
        List the services you offer and how much you charge for each
      </Text>

      {services.map((item, index) => (
        <FieldRow key={index}>
          <FormGroup>
            <Text
              variant="label"
              fontFamily="raleway"
              size="sm"
              color="text"
            >
              Service Name *
            </Text>

            <FormInput
              name="service"
              placeholder="e.g. Haircut"
              value={item.service}
              onChange={(e) => handleServiceChange(index, e)}
            />
          </FormGroup>

          <FormGroup>
            <Text
              variant="label"
              fontFamily="raleway"
              size="sm"
              color="text"
            >
              Price *
            </Text>

            <FormInputNumber
              type="number"
              name="price"
              placeholder="100"
              value={item.price}
              onChange={(e) => handleServiceChange(index, e)}
            />
          </FormGroup>

          <FormGroup>
            <Text
              variant="label"
              fontFamily="raleway"
              size="sm"
              color="text"
            >
              Duration *
            </Text>

            <FormInputNumber
              type="number"
              name="duration"
              placeholder=" 60"
              value={item.duration}
              onChange={(e) => handleServiceChange(index, e)}
            />  
          </FormGroup>
          <FormGroup>
             <DeleteButton onClick={() => deleteService(index)}>
              <DeleteImage src={deleteIcon} alt="Delete" />
            </DeleteButton>
          </FormGroup>
         
        </FieldRow>
      ))}

      <SubmitButton type="button" onClick={addService}>
        + Add Service
      </SubmitButton>
    </FieldGroup>
  );
        case 3:
            return(
                <FieldGroup>
                    <Text variant='h2' color='primary' fontFamily='nunito'>Gallery</Text>
                    <Text variant='p' color='secondary' fontFamily='nunito'>Upload images of your work to showcase your services</Text>
                    <>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        multiple
                        accept="image/*"
                        style={{ display: "none" }}
                    />

                    <SubmitButton type="button" onClick={openFilePicker}>
                        + Upload Image
                    </SubmitButton>

                    {/* Preview file names */}
                    <div style={{ marginTop: "10px" }}>
                        {images.map((file, index) => (
                        <><p key={index} style={{ fontSize: "14px", margin: "4px 0" }}>
                                {file.name}
                            </p>
                            <DeleteButton onClick={() => deleteImage(index)}>
                                <DeleteImage src={deleteIcon} alt="Delete" />
                            </DeleteButton></>
                        ))}
                    </div>
                    </>
                </FieldGroup>
            )
        case 4:
            return(
                <FieldGroup>
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
                </FieldGroup>
            )
    }
 }
 
 

  return (
    <SignInContainer>
        <SignInHeading>
            <Text variant="h1" color='secondary' fontFamily='nunito'>Panda</Text><Text variant="h1" color='label' fontFamily='nunito'>Preneur</Text>
        </SignInHeading>
        <SignInSubHeading>
            <Text variant='p' color='primary' fontFamily='nunito'> Provider Registration - step</Text><Text variant='p' color='primary' fontFamily='nunito'>{step}</Text><Text variant='p' color='primary' fontFamily='nunito'> of 4</Text>
        </SignInSubHeading>
        <SignInContainer>
            <SingInSteps>
                <SignInStep>
                    <SignInNum>1</SignInNum>
                    <Text variant='p' color='primary' fontFamily='raleway'>Profile</Text>
                </SignInStep>
                <SignInStep>
                    <SignInNum>2</SignInNum>
                    <Text variant='p' color='primary' fontFamily='raleway'>Services</Text>
                </SignInStep>
                <SignInStep>
                    <SignInNum>3</SignInNum>
                    <Text variant='p' color='primary' fontFamily='raleway'>Gallery</Text>
                </SignInStep>
                <SignInStep>
                    <SignInNum>4</SignInNum>
                    <Text variant='p' color='primary' fontFamily='raleway'>Contact</Text>
                </SignInStep>
            </SingInSteps>
        </SignInContainer>
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

export default SignIn
