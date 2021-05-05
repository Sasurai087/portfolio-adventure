import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
`;

export const FooterWrap = styled.div`
  padding-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 68rem;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`;  

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
   flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 480px) {
   margin: 0;
   padding: 0.625rem;
   width: 100%;
  }
`;


export const FooterLinkTitle = styled.h1`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;

  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 62.5rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 68.75rem;
  margin: 2.5rem auto 0 auto;

  @media screen and (max-width: 768px) {
   flex-direction: column;
  }
`;

export const SocialLogo = styled.li`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.8rem;
`;