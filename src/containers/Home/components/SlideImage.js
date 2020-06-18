import React from 'react'
import styled from 'styled-components'

export default function SlideImage(props) {
  const image = props.image
  const StyledImage = styled.div`
    img {
      max-height: 650px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  `
  return (
    <StyledImage>
      <img src={image} alt="img-slide" />
    </StyledImage>
  )
}
