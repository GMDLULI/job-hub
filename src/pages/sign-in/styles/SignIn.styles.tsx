import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

  export const SignInFormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #e5e7eb;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    `

    export const AvatarContainer = styled.div`
        padding: 12px;
        border: 1px solid #e5e7eb;
        border-radius: 50%;
    `

    export const FormSelect = styled.select`
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'Raleway', 'Cambria', 'serif';
  border: 1px solid  #E5E7EB;
  border-radius: 10px;
  background:  #fafaf9;
  color:  #111827;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color:  #C2410C;
    box-shadow: 0 0 0 3px rgba(194,65,12,0.1);
  }
`

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'raleway';
  border: 1px solid  #E5E7EB;
  border-radius: 10px;
  background:  #fafaf9;
  color: #111827;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #C2410C;
    box-shadow: 0 0 0 3px rgba(194,65,12,0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`
export const FormInput = styled.input`
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'Raleway', Cambria, serif;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  background: #fafaf9;
  color: #111827;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #C2410C;
    box-shadow: 0 0 0 3px rgba(194, 65, 12, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;
export const FormInputNumber = styled.input`
  width: 75px;
  padding: 11px 14px;
  font-size: 14px;
  font-family: 'Raleway', Cambria, serif;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  background: #fafaf9;
  color: #111827;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #C2410C;
    box-shadow: 0 0 0 3px rgba(194, 65, 12, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

export const SubmitButton = styled.button`
  background:  #573b2f;
  color: #fff;
  border: none;
  padding: 13px 32px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #68534b;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`
export const DeleteButton = styled.button`
  background: #6B7280;
  
   &:active {
    transform: translateY(0);
  }
  `

export const UploadButton = styled.button`
  background: #6B7280;
  
  &:hover {
    background: #4B5563;
}

 &:active {
    transform: translateY(0);
  }
  `

export const InfoContainer = styled.div`
    width: 100%;
    background: #573b2f;
    padding: 20px;
    border-radius: 8px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`