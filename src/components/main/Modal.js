import { useState } from 'react'
import video from '../../video/eye.mp4'

const Modal = (props) => {
  const [play, setPlay] = useState(false)

  const closeModal = () => props.functionValue(!props.value)

  const playVideo = () => {
    setPlay(!play)
  }

  let displayValue = play ? 'none' : 'block'
  // nie zmienia się style w i

  return (
    props.value ?
      <div className='modalVideo'>
        <video autoPlay={play} loop muted className='videoPlay'>
          <source src={video} type='video/mp4' />
        </video>
        <i class="far fa-play-circle" onClick={playVideo} style={{ display: { displayValue } }}></i>
        <i class="far fa-times-circle" onClick={closeModal}></i>
      </div>

      :
      null

  )




}

export default Modal