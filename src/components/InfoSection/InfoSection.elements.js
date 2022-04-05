import styled from 'styled-components'
import InfoSection from './InfoSection'

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: #282a36;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px --15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

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
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  background: #282a36;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`
export const TopLine = styled.div`
  color: #50fa7b;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: #f8f8fa
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1
`
export const SubtitleTitle = styled.p`
  max-width: 440px;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 24px;
  color: #ff79c6;
`

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`