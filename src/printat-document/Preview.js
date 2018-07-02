import React from 'react'
import Image from 'react-medium-image-zoom'
import styled, {css} from 'react-emotion'

const ImageContainer = styled.div`
  padding: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;

  margin-bottom: 1em;
`

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;

  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;

  margin-bottom: 1em;
`

const imageStyle = css`
  position: relative;
  width: 100%;
`

const Preview = ({file = {}}) => {
  const {type, preview} = file
  console.log(file)

  if (!type) {
    return null
  }

  if (type.indexOf('image') > -1) {
    return (
      <ImageContainer>
        <Image
          image={{
            src: preview,
            alt: 'Image Preview',
            className: imageStyle,
          }}
          zoomImage={{
            src: preview,
            alt: 'Image Preview',
          }}
        />
      </ImageContainer>
    )
  }

  if (type.indexOf('pdf') > -1) {
    return <IFrame src={preview} />
  }

  return null
}

export default Preview
