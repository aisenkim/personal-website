import {Button, StyledContainer} from "../../globalStyles";
import {
    Heading, Img,
    ImgWrapper,
    InfoColumn,
    InfoRow,
    InfoSec,
    Subtitle,
    TextWrapper,
    TopLine
} from "../Homepage/Homepage.elements";
import {Link} from "react-router-dom";

const Projects = ({
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
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to="/contact">
                                    <Button big fontBig prinary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </StyledContainer>>
            </InfoSec>
        </>
    )
}

export default Projects;