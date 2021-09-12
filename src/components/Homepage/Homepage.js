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
} from './Homepage.elements'
import { StyledContainer } from '../../globalStyles'

const Homepage = ({
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
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>Aisen Kim</TopLine>
                <Heading>
                  Software Engineer
                  <br /> Sports Enthusiast
                  <br /> Dog Person
                </Heading>
                <Subtitle>
                  Aisen Kim is a student and a software engineer who is pursuing
                  a computer science degree at the Stony Brook University.
                  <br />
                  <br />
                  He believes that clean software development is a weapon to
                  solve real world problems and build what one dreams.
                  <br />
                  <br />
                  Aisen is currently building an e-commerce website for his
                  sister taking advantage of knowledge gained from school and
                  self studying.
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={process.env.PUBLIC_URL + '/dogs.jpg'} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </StyledContainer>
      </InfoSec>
    </>
  )
}

export default Homepage
