import React from 'react'
import { FormGroup } from '../../contact/styles/ContactPage.styles'
import { FieldGroup, FormInput, InfoContainer } from '../styles/SignIn.styles';
import  Text  from '../../../components/display/text/Text';

type ContactProps = {
  form: {
    number: string;     
    email: string;
    password: string;
    location: string;
    instagram: string;
    twitter: string;
    facebook:string;
    };
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}


const Contact = ({form, handleChange}: ContactProps) => {
    return (
        <FieldGroup>
        <Text variant="h2" color="primary" fontFamily="nunito">
            Contact
        </Text>
        <Text variant="p" color="secondary" fontFamily="nunito">
            How clients will reach you. Will be shown on your profile
        </Text>

        <FormGroup>
            <Text variant="label" fontFamily="raleway" size="sm" color="text">
            Phone Number *
            </Text>
            <FormInput
            name="number"
            placeholder="e.g. 083 123 4567"
            value={form.number}
            onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
            <Text variant="label" fontFamily="raleway" size="sm" color="text">
            Email Address *
            </Text>
            <FormInput
            name="email"
            type="email"
            placeholder="e.g. sipho@ndlovu.com"
            value={form.email}
            onChange={handleChange}
            />
        </FormGroup>

        <FieldGroup>
            <Text variant="label" fontFamily="raleway" size="sm" color="text">
             Password *
            </Text>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                />
        </FieldGroup>

         <FieldGroup>
            <Text variant="label" fontFamily="raleway" size="sm" color="text">
             socials *
            </Text>
            <input
                type="instagram"
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="insert you instagram handle"
                />
            {/* <input
                type="instagram"
                name="instagram"
                value={form.twitter}
                onChange={handleChange}
                placeholder="insert you Twitter handle"
                />
            <input
                type="instagram"
                name="instagram"
                value={form.facebook}
                onChange={handleChange}
                placeholder="insert you facebook handle"
                /> */}
        </FieldGroup>


        <FormGroup>
            <Text variant="label" fontFamily="raleway" size="sm" color="text">
            Location *
            </Text>
            <FormInput
            name="location"
            placeholder="e.g. 12833 Main Road, Cape Town"
            value={form.location}
            onChange={handleChange}
            />
        </FormGroup>

        <InfoContainer>
            <Text variant="p" fontFamily="raleway" size="sm" color="secondary">
            Your location is used to generate a map on your profile so clients can find you.
            </Text>
        </InfoContainer>
        </FieldGroup>
        )
    }

export default Contact
