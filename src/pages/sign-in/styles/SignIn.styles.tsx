import styled from "styled-components";


const bp = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
};

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  align-self: center;
  width: 120px;
  height: 120px;
  padding: 3px;
  margin-bottom: 20px;  
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  `
export const Avatar = styled.label`
  width: 120px;
  height: 120px;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const SignInHeading = styled.div`
  display: flex;
  align-items: center;
`;

      export const SignInSubHeading = styled.div`
      display: flex;
      align-items: center;
      gap: 8px;
    `;


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
    background: #ececec;
    border: 1px solid #E5E7EB;
    border-radius: 50%;
    padding: 6px;
    cursor: pointer;


  width: 32px;
  height: 32px;
  
   &:active {
    transform: translateY(0);
  }
  `

  export const DeleteImage = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
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

 export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 1.2rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1.1rem;

    @media (max-width: 480px) {
        margin-bottom: 0.8rem;
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

export const StepContainer = styled.section`
  padding: 72px 0;
  background: #fff;
  border-top: 1px solid var(--border, #e5e7eb);
  border-bottom: 1px solid var(--border, #e5e7eb);

  @media (max-width: ${bp.md}) {
    padding: 56px 0;
  }

  @media (max-width: ${bp.sm}) {
    padding: 40px 0;
  }
`

export const SingInSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 780px;
  margin: 0 auto;

  @media (max-width: ${bp.md}) {
    /* Stack steps vertically on tablets and phones */
    grid-template-columns: 1fr;
    max-width: 420px;
    gap: 0;
  }
`;

export const SignInStep = styled.div`
  text-align: center;
  padding: 28px 20px;
  position: relative;

  /* Connector line between steps on desktop */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 51px; /* vertically centred with HIWNum */
    right: -12px;
    width: 24px;
    height: 2px;
    background: #e5e7eb;

    @media (max-width: ${bp.md}) {
      display: none;
    }
  }

  @media (max-width: ${bp.md}) {
    padding: 20px 16px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
  }

  @media (max-width: ${bp.sm}) {
    padding: 16px 8px;
  }
`;

export const SignInNum = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #f1e1cd;
  color: #573b2f;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  flex-shrink: 0;

  @media (max-width: ${bp.md}) {
      margin-top: 18px;
  }

  @media (max-width: ${bp.sm}) {
    margin-top: 14px;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;