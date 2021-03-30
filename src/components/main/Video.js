import { useState, useRef } from 'react'
import video from '../../video/eye.mp4'
import Modal from './Modal'


const Video = () => {
  const [showModal, setShowModal] = useState(false)
  const [isModalPlay, setIsModalPlay] = useState(false)
  const [play, setPlay] = useState(false)


  const ref = useRef(null)
  const modalRef = useRef(null)

  const onClickHandle = () => {
    setShowModal(!showModal)
    setIsModalPlay(!isModalPlay)
    setPlay(!play)
    ref.current.pause()
  }

  const blur = showModal ? { filter: 'blur(6px)' } : null


  const display = showModal ? 'none' : 'flex'

  const modalOff = (e) => {
    if (modalRef.current = e.target && showModal === true) {
      setShowModal(false)
    }
  }

  return (
    <div className="video" >
      <Modal isModalPlay={isModalPlay} setShowModal={setShowModal} showModal={showModal} play={play} setPlay={setPlay} />
      <div onClick={modalOff} ref={modalRef}>
        <video autoPlay loop muted className='videoPlay' style={blur} ref={ref}>
          <source src={video} type='video/mp4' />
        </video>
        <h1 style={blur}>Najlepsza jakość nagrywania</h1>
        <div className="play" onClick={onClickHandle} style={{ display: `${display}` }}>
          <p>Obejrzyj film</p>
          <i class="far fa-play-circle"></i>
        </div>
      </div>
    </div >
  )
}

export default Video