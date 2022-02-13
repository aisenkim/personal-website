import styled from "styled-components";

export const StyledContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const InfoSec = styled.div`
  color: #fff;
  /* background-color: #fff; */
  padding: 60px 0;
  background: #282a36;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px --15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 786px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const TopLine = styled.div`
  color: #f8f8f2;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  /* margin-bottom: 5px; */
  font-size: 48px;
  line-height: 1;
  color: #ff79c6;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #50fa7b;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  width: 200px;
  height: 200px;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.span`
  font-size: 1.5rem;
  color: #f1fa8c;
`;
