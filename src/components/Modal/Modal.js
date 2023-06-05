import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CloseIcon from './CloseIcon'
import ModalPortal from './ModalPortal'
import AnimationWrapper from '../AnimationWrapper'

const StyledModal = styled('div')`
  margin: 70px 50px 50px 50px;
  max-width: 88vw;
`

const ModalMask = styled('div')`
  background: rgba(0, 0, 0, 0.76);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  pointer-events: auto;
  z-index: 10;
`

const ModalRoot = styled('div')`
  position: relative;
  z-index: ${props => props.zIndex};
  & ${StyledModal} {
    opacity: ${props => props.fadeType === 'in' ? '1' : '0'};
    transform: ${props => props.fadeType === 'in' ? 'scale(1)' : 'scale(0.2)'};
    transition:
            transform ${props => `${props.fadeDuration}ms`} cubic-bezier(0.03, 0.93, 0.44, 0.95),
            opacity ${props => `${props.fadeDuration}ms`};
    transform-origin: center 100px;
    max-width: ${({maxWidth}) => maxWidth};
    width ${props => props.fullWidth ? '100%' : props.width};
    z-index: 20;
  }
  & ${ModalMask} {
    opacity: ${props => props.fadeType === 'in' ? '1' : '0'};
    transition: all ${props => `${props.fadeDuration}ms`};
  }
`

const ModalWrapper = styled('div')`
  align-items: baseline;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`

const CloseBtn = styled.div`
  overflow: hidden;
  position: fixed;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgb(149, 157, 165);
  background: inherit;
  transition: all 0.2s ease-out 0s;
  top: 20px;
  right: 20px;
  z-index: 1000;
  :before{
    content: " ";
    background: inherit;
    position: absolute;
    inset: 0px;
    box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 3000px inset;
    filter: blur(10px);
  }
`
const Modal = props => {
  const {
    open,
    isRendered,
    onClose,
    children,
    width,
    maxWidth,
    fullWidth,
    maskClosable,
    fadeType,
    fadeDuration,
    zIndex
  } = props
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style = null
    }
  }, [open])

  if (!isRendered) return null

  return (
    <ModalPortal>
      <ModalRoot
        open={open}
        fadeType={fadeType}
        fadeDuration={fadeDuration}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        width={width}
        zIndex={zIndex}
      >
        <ModalWrapper>
          <StyledModal>
            <>{children}</>
          </StyledModal>
          <CloseBtn onClick={onClose}>
            <CloseIcon />
          </CloseBtn>
          <ModalMask onClick={maskClosable ? onClose : null} />
        </ModalWrapper>
      </ModalRoot>
    </ModalPortal>
  )
}

Modal.propTypes = {
  fadeType: PropTypes.oneOf([null, 'in', 'out']),
  fadeDuration: PropTypes.number,
  maskClosable: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  isRendered: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  zIndex: PropTypes.number
}

Modal.defaultProps = {
  maskClosable: true,
  showCloseIcon: true,
  showHeader: true,
  width: '600px',
  zIndex: 1000
}

export default AnimationWrapper(Modal)
