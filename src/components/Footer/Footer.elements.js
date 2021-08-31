import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {GiVampireDracula} from "react-icons/all";

export const FooterContainer = styled.div`
  padding: 0;
  //display: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const SocialMedia = styled.section`
  /* max-width: 1000px; */
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #6272a4;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    //color: #4b59f7;
    color: #f1fa8c;
    transition: all 0.3s ease;
  }
`

export const SocialIcon = styled(GiVampireDracula)`
  margin-right: 10px;
  color: #50fa7b;
`

export const WebsiteRights = styled.small`
  color: #ffb86c;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLinkFaceBook = styled.a`
  color: #ff79c6;
  font-size: 24px;

  &:hover {
    //color: #4b59f7;
    color: #4267B2;
    transition: all 0.3s ease;
  }
`
export const SocialIconLinkTwitter = styled.a`
  color: #ff79c6;
  font-size: 24px;

  &:hover {
    color: #00ACEE;
    transition: all 0.3s ease;
  }
`
export const SocialIconLinkGithub = styled.a`
  color: #ff79c6;
  font-size: 24px;

  &:hover {
    color: #333;
    transition: all 0.3s ease;
  }
`
export const SocialIconLinkLinedIn = styled.a`
  color: #ff79c6;
  font-size: 24px;

  &:hover {
    //color: #4b59f7;
    color: #0077b5;
    transition: all 0.3s ease;
  }
`
export const SocialIconLinkInstagram = styled.a`
  color: #ff79c6;
  font-size: 24px;

  &:hover {
    //color: #4b59f7;
    color: #8a3ab9;
    transition: all 0.3s ease;
  }
`
