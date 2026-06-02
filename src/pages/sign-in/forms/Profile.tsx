import React from 'react'
import { Avatar, AvatarContainer, FieldGroup, FieldRow, FormInput, FormSelect, FormTextarea, HiddenInput } from '../styles/SignIn.styles';
import { FormGroup } from '../../contact/styles/ContactPage.styles';
import  Text  from '../../../components/display/text/Text';
import user from '../../../assets/icons/user.png'
import useSignIn from '../hooks/useSignIn';

   
  type ProfileProps = {
  form: {
    fullName: string;
    title: string;
    subject: string;
    about: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};


const Profile = ({
  form,
  handleChange,
  handleImageChange,
}: ProfileProps) => {
    return (
          <FieldGroup>
            <Text variant="h2" color="primary" fontFamily="nunito">
              Your Profile
            </Text>
            <Text variant="p" color="secondary" fontFamily="nunito">
              This is what clients will see first so make it count!
            </Text>

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
                <Text variant="label" fontFamily="raleway" size="sm" color="text">
                  Full Name *
                </Text>
                <FormInput
                  name="fullName"
                  placeholder="e.g. Sipho Ndlovu"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Text variant="label" fontFamily="raleway" size="sm" color="text">
                  Professional title *
                </Text>
                <FormInput
                  name="title"
                  placeholder="e.g. Marketing Manager"
                  value={form.title}
                  onChange={handleChange}
                />
              </FormGroup>
            </FieldRow>

            <FormGroup>
              <Text variant="label" fontFamily="raleway" size="sm" color="text">
                Services Category *
              </Text>
              <FormSelect name="subject" value={form.subject} onChange={handleChange}>
                <option value="">Select a category…</option>
                <option value="nail_tech">Nail Technician</option>
                <option value="plumber">Plumber</option>
                <option value="hair_salon">Hair Salon</option>
                <option value="hair_nail_salon">Hair and Nail Salon</option>
                <option value="electrician">Electrician</option>
                <option value="construction">Construction</option>
                <option value="cleaner">Cleaner</option>
                <option value="tutor">Tutor</option>
                <option value="photography">Photography</option>
                <option value="catering">Catering</option>
                <option value="security">Security</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <Text variant="label" fontFamily="raleway" size="sm" color="text">
                About you *
              </Text>
              <FormTextarea
                name="about"
                rows={5}
                placeholder="Describe your background, services and experience, and what makes you stand out…"
                value={form.about}
                onChange={handleChange}
              />
            </FormGroup>
          </FieldGroup>
        )
}

export default Profile
