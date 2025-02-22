import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:123-456-7890">123-456-789</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:syedmilad99@gmail.com">syedmilad99@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
                <SocialIcons href='https://github.com/syedmilad'>
                  <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href='https://www.linkedin.com/in/syed-milad-ali-aijazi-4375891a0/'>
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href='https://instgaram.com'>
                  <AiFillInstagram size="3rem" />
                </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
