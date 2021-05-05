import styled from 'styled-components';

//ABOUT OVERALL CSS
export const AboutStyled = styled.section`
  padding: 3rem;
  background: rgb(245, 245, 245);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutH1 = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const AboutContainer = styled.div`
  width: 100%;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  gap: 16px;
  padding: 0px 50px;
`;

//VALUES SECTION
export const ValuesH1 = styled.h1`
  color: rgb(68, 70, 73);
  font-size: 2rem;
  text-decoration: underline;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  text-align: center;
`;

export const ValuesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 16px;

  /* Items separated into 3 columns */
  grid-template-columns: 1fr 1fr 1fr;

  /* Down to 2 columns on smaller screen */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  /* Only 1 item showing on smaller screens */
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ValuesCard = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 30px;
  height: 250px;

  @media screen and (max-width: 480px) {
    height: 170px;
  }
`

export const ValuesH2 = styled.h2`
  font-size: 2rem;
  height: 80px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color: rgb(27, 139, 184);

  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`

export const ValuesP = styled.p`
  font-size: 1.3rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`
//ABOUT DIVIDER BAR
export const AboutDivider = styled.div`
  background: rgb(68, 70, 73);
  opacity: 0.5;
  height: 4px;
  border-radius: 3rem;
  margin-bottom: 1.3rem;
`

//BIO SECTION
export const BioWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    -webkit-box-pack: center;
    justify-content: center;
  }
`
export const BioImage = styled.img`
  border: 5px solid rgba(0, 255, 234, 0.575);
  border-radius: 5rem;
  width: 70%;
  height: auto;
  @media screen and (max-width: 768px) {
   width:100%;
  }
`
export const BioP = styled.p`
  text-align: left;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.2rem;
`

export const BioSpan = styled.span`
  color: rgb(27, 139, 184);
  text-decoration: underline;
  cursor: pointer;
`

//SKILLS SECTION (Nested inside Bio)
export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SkillsH1 = styled.h1`
  color: rgb(68, 70, 73);
  font-size: 2rem;
  text-decoration: underline;
  text-align: center;
`

export const SkillsIcons = styled.div`
  -webkit-box-pack: center;
  justify-content: center;
  display: grid;
  margin-top: 20px;
  margin-left: 10px;
  grid-template-columns: 60px 60px;
  grid-template-rows: 60px 60px 60px 60px;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    grid-template-columns: 100px 100px 100px 100px;
  }
`