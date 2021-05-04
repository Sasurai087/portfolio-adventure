import styled from 'styled-components';

export const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: #191c24;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ContactH1 = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 5rem;
  margin-bottom: 3rem;
  width: 80%;
`;

export const FormP = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
`

export const FormSubmit = styled.input`
background: linear-gradient(
  90deg,
  rgb(39, 176, 255) 0%,
  rgb(0, 232, 236) 100%
);
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 12pt;
  padding-left: 10px;
  outline: none;
  border-radius: 3px;
  border: none;
  padding: 7px 10px;
`;

export const FormTextArea = styled.textarea`
  height: 15em;
  width: 80vw;
  padding: 7px 10px;
  font-size: 12pt;
`;


