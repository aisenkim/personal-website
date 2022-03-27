import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer, Button } from "../../globalStylesProject";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SubtitleTitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { FaGithub } from "react-icons/fa";
import { SocialIconLinkGithub } from "../Footer/Footer.elements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  buttonLabel,
  description0,
  description1,
  description2,
  description3,
  description4,
  descriptionTitle0,
  descriptionTitle1,
  descriptionTitle2,
  descriptionTitle3,
  descriptionTitle4,
  headline,
  topLine,
  img,
  alt,
  start,
  buttonLink,
  githubLink,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <StyledContainer>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <SubtitleTitle>{descriptionTitle0}</SubtitleTitle>
                <Subtitle>{description0}</Subtitle>
                <SubtitleTitle>{descriptionTitle1}</SubtitleTitle>
                <Subtitle>{description1}</Subtitle>
                <SubtitleTitle>{descriptionTitle2}</SubtitleTitle>
                <Subtitle>{description2}</Subtitle>
                <SubtitleTitle>{descriptionTitle3}</SubtitleTitle>
                <Subtitle>{description3}</Subtitle>
                <SubtitleTitle>{descriptionTitle4}</SubtitleTitle>
                <Subtitle>{description4}</Subtitle>
                <SubtitleTitle>
                  <SocialIconLinkGithub
                    href={githubLink}
                    target="_blank"
                    aria-label="Github"
                  >
                    <FaGithub />
                  </SocialIconLinkGithub>
                </SubtitleTitle>
                <Button big fontBig prinary={primary} href={buttonLink}>
                  {buttonLabel}
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </StyledContainer>
      </InfoSec>
    </>
  );
};

export default InfoSection;
