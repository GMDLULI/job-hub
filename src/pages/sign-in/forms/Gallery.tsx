import React, { useRef } from 'react'
import { FieldGroup, SubmitButton, DeleteButton, DeleteImage } from '../styles/SignIn.styles'
import  Text  from '../../../components/display/text/Text';
import deleteIcon from '../../../assets/icons/delete.png'


type GalleryProps = {
    images: File[];         
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    openFilePicker: () => void;
    deleteImage: (index: number) => void;
}   
const Gallery = ({
    images,
    handleImageUpload,
    deleteImage
}: GalleryProps) => {  
      const fileInputRef = useRef<HTMLInputElement | null>(null)

       const openFilePicker = () => {
        fileInputRef.current?.click()
  }
  
  return (
          <FieldGroup>
            <Text variant="h2" color="primary" fontFamily="nunito">
              Gallery
            </Text>
            <Text variant="p" color="secondary" fontFamily="nunito">
              Upload images of your work to showcase your services
            </Text>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              multiple
              accept="image/*"
              style={{ display: 'none' }}
            />

            <SubmitButton type="button" onClick={openFilePicker}>
              + Upload Image
            </SubmitButton>

            <div style={{ marginTop: '10px' }}>
              {images.map((file: File, index: number) => (
                <React.Fragment key={index}>
                  <p style={{ fontSize: '14px', margin: '4px 0' }}>{file.name}</p>
                  <DeleteButton onClick={() => deleteImage(index)}>
                    <DeleteImage src={deleteIcon} alt="Delete" />
                  </DeleteButton>
                </React.Fragment>
              ))}
            </div>
          </FieldGroup>
        )
}

export default Gallery
