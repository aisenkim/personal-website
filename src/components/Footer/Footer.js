import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/all'
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLinkFaceBook,
  SocialIconLinkGithub,
  SocialIconLinkTwitter,
  SocialIconLinkLinedIn,
  SocialIconLinkInstagram,
  SocialIconLinkGmail,
} from './Footer.elements'
import {
  BsFillTerminalFill,
  SiAmazonaws,
  SiPostgresql,
  SiReact,
  SiSpring,
} from 'react-icons/all'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            {/*<i><BsFillTerminalFill/> <SiSpring/>  <SiPostgresql/> <SiReact/> <SiAmazonaws/> </i>*/}
            <i>
              <h3>"Dream it Build it"</h3>
            </i>
          </SocialLogo>
          <WebsiteRights>Aisen Kim @2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLinkGithub
              href="https://github.com/aisenkim/"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLinkGithub>
            <SocialIconLinkLinedIn
              href="https://www.linkedin.com/in/aisenkim/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLinkLinedIn>
            <SocialIconLinkGmail
              href="mailto: aisenkim15@gmail.com"
              aria-label="Gmail"
            >
              <SiGmail />
            </SocialIconLinkGmail>
            <SocialIconLinkFaceBook
              href="https://www.facebook.com/chunghyun.kim.31"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLinkFaceBook>
            <SocialIconLinkInstagram
              href="https://www.instagram.com/choong15/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLinkInstagram>
            <SocialIconLinkTwitter
              href="https://twitter.com/AisenKim"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLinkTwitter>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
