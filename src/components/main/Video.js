import { useEffect, useState } from 'react'
import video from '../../video/eye.mp4'
import Modal from './Modal'


const Video = () => {
  const [showModal, setShowModal] = useState(false)

  const onClickHandle = () => {
    setShowModal(!showModal)
  }

  const blur = showModal ? { filter: 'blur(6px)' } : null


  const play = showModal ? false : true
  //pytanie: jak zatrzymac? autoplay sie nie odswieza


  return (
    <div className="video">
      <Modal value={showModal} functionValue={setShowModal} />
      <video autoPlay={play} loop muted className='videoPlay' style={blur}>
        <source src={video} type='video/mp4' />
      </video>
      <h1>Najlepsza jakość nagrywania</h1>
      <div className="play" onClick={onClickHandle}>
        <p>Obejrzyj film</p>
        <i class="far fa-play-circle"></i>
      </div>
    </div >
  )
}

export default Video