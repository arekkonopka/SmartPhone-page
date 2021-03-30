import { useState, useRef } from 'react'
import video from '../../video/eye.mp4'

const Modal = ({ setShowModal, showModal, play, setPlay }) => {


  const closeModal = () => {
    setShowModal(false)
    setPlay(false)
  }

  const ref = useRef(null)

  const playVideo = () => {
    setPlay(!play)
    ref.current.play()
  }

  let displayValue = play ? 'block' : 'none'

  return (

    <div className='modalVideo'>
      {showModal
        ? <div>
          <video loop muted className='videoPlay' ref={ref}>
            <source src={video} type='video/mp4' />
          </video>
          <i class="far fa-play-circle" onClick={playVideo} style={{ display: `${displayValue}` }}
          ></i>
          <i class="far fa-times-circle" onClick={closeModal}></i>
        </div> : null}
    </div >

  )

}

export default Modal