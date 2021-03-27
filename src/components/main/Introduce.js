import { useEffect, useState } from 'react'
import phone from '../../img/smartphone.png'

const Introduce = () => {
  const [scroll, setScrollY] = useState(0)

  const scrollHandle = () => setScrollY(window.pageYOffset)


  useEffect(() => {
    document.addEventListener('scroll', scrollHandle)

    return () => document.removeEventListener('scroll', scrollHandle)

  }, [])

  let rot = scroll < 360 ? scroll : 360
  let translate = scroll < 420 ? scroll : 420



  return (
    <div className="introduce" style={{ background: `linear-gradient(90deg, rgba(45,40,28,1) 0%, rgba(${51 + scroll * 0.2},${49 + scroll * 0.2},${46 + scroll * 0.2},1) 50%, rgba(45,40,28,1) 100%)` }}>
      <h1>Smartphone X</h1>
      <h2>Finezja wykonania</h2>
      <img src={phone} alt="phone image"
        style={{
          transform: `translate(${translate * 1.6}px, ${-translate * 0.5}px) rotateY(${rot * 0.5}deg)`
        }} />
    </div>
  )
}

export default Introduce