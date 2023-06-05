import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'
import {Carousel} from 'react-carousel-minimal'

const Styled = styled.div`
  .carousel-container{
    max-height: 100vh !important;
  };
  .carousel-item {
    display: flex;
    align-items: end;
  };
  & .thumbnails {
    justify-content: center;
  };
  .prev, .next {
    color: #476ff1;
  }
`

const HomeModal = ({images, ...props}) => {
  const captionStyle = {
    display: 'none',
    fontSize: '2em',
    fontWeight: 'bold'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  }
  return (
    <Modal
      fullWidth
      {...props}
    >
      <Styled>
        <Carousel
          data={images}
          slideNumber={false}
          width="100%"
          height="60vh"
          captionStyle={captionStyle}
          radius="10px"
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          dots
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="transparent"
          slideImageFit="contain"
          thumbnails
          thumbnailWidth="100px"
          style={{
            textAlign: 'center',
            maxWidth: '100%',
            margin: '40px auto'
          }}
        />
      </Styled>

    </Modal>
  )
}

export default HomeModal
