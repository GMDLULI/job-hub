import React from 'react'
import { DeleteButton, DeleteImage, FieldGroup, FieldRow, FormInput, FormInputNumber, SubmitButton } from '../styles/SignIn.styles'
import { FormGroup } from '../../contact/styles/ContactPage.styles'
import  Text  from '../../../components/display/text/Text';
import deleteIcon from '../../../assets/icons/delete.png'
import type { Service } from '../SignIn.types'


  
  type ServicesProps = {
    services: Service[];
    handleServiceChange: (
        index: number,
        e: React.ChangeEvent<
        HTMLInputElement
        >
    ) => void;
    deleteService: (
        index: number
    ) => void;
    addService: () => void;
    };
const Services = ({
  services,
  handleServiceChange,
  deleteService,
  addService
}: ServicesProps) => {

    return (
        <FieldGroup>
            <Text variant="h2" color="primary" fontFamily="nunito">
            Services and Prices
            </Text>
            <Text variant="p" color="secondary" fontFamily="nunito">
            List the services you offer and how much you charge for each
            </Text>

            {services.map((item: Service, index: number) => (
            <FieldRow key={index}>
                <FormGroup>
                <Text variant="label" fontFamily="raleway" size="sm" color="text">
                    Service Name *
                </Text>
                <FormInput
                    name="service"
                    placeholder="e.g. Haircut"
                    value={item.service}
                    onChange={e => handleServiceChange(index, e)}
                />
                </FormGroup>

                <FormGroup>
                <Text variant="label" fontFamily="raleway" size="sm" color="text">
                    Price *
                </Text>
                <FormInputNumber
                    type="number"
                    name="price"
                    placeholder="100"
                    value={item.price}
                    onChange={e => handleServiceChange(index, e)}
                />
                </FormGroup>

                <FormGroup>
                <Text variant="label" fontFamily="raleway" size="sm" color="text">
                    Duration *
                </Text>
                <FormInputNumber
                    type="number"
                    name="duration"
                    placeholder="60"
                    value={item.duration}
                    onChange={e => handleServiceChange(index, e)}
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
        )
    }

export default Services
