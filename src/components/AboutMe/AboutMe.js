import React from 'react'
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
  StyledContainer,
  Name,
} from './AboutMe.elements'

const AboutMe = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec>
        <StyledContainer>
          <InfoRow>
            <TextWrapper>
              <Heading>About Me</Heading>
            </TextWrapper>
          </InfoRow>
          <InfoRow>
            <ImgWrapper start={start}>
              <Img src={process.env.PUBLIC_URL + '/me.jpg'} />
            </ImgWrapper>
          </InfoRow>
          <br />
          <InfoRow>
            <TextWrapper>
              <TopLine>
                Prefered Name: <Name>Aisen Kim</Name>
              </TopLine>
              <TopLine>
                Given Name: <Name>Chung Hyun Kim</Name>
              </TopLine>
            </TextWrapper>
          </InfoRow>
          <InfoRow>
            <TextWrapper>
              <Subtitle>
                Aisen Kim is a student and a software engineer who is pursuing a
                computer science degree at the Stony Brook University.
                <br />
                <br />
                After years of programming experience at the University and at
                an internship, Aisen believes that clean software development is
                a weapon to solve real world problems and build what one dreams.
                <br />
                <br />
                Aisen is passionate about learning new materials and sharing the
                knowledge with others in need.
                <br />
                <br />
                He is greedy about learning new skills and technologies as it
                excites him and makes him feel more confident about himeself.
                <br />
                <br />
                During COVID-19, Aisen worked at an English academy in Korea to
                help students learn English. He solved academy's concerns by
                developing an online vocabulary testing website.
                <br />
                <br />
                Aisen loves to spend time with his dogs and always spares time
                for an exercise each day.
              </Subtitle>
            </TextWrapper>
          </InfoRow>
        </StyledContainer>
      </InfoSec>
    </>
  )
}

export default AboutMe
