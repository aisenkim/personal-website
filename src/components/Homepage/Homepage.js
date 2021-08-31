import React from 'react'
import {
    Heading, Img, ImgWrapper,
    InfoColumn,
    InfoRow,
    InfoSec, Subtitle, TextWrapper, TopLine,
} from './Homepage.elements'
import {Button, StyledContainer} from "../../globalStyles";
import {Link} from "react-router-dom";

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
                                <TopLine >Who Am I?</TopLine>
                                <Heading >Software Engineer + Sports Enthusiast</Heading>
                                <Subtitle >lorem ipsum dffdjf fds f fdsf dfi ef wef wef w  efwe fwefw efwe fw efw fwefwe</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={process.env.PUBLIC_URL + '/jeju1.jpg'} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </StyledContainer>
            </InfoSec>
        </>
    )
}

export default Homepage
