import { useEffect, useContext } from 'react'
import phone from '../../img/smartphone.png'
import Context from './Context'

const Introduce = () => {
  const [scrollY, setScrollY] = useContext(Context)

  const scrollHandle = () => setScrollY(window.pageYOffset)


  useEffect(() => {
    document.addEventListener('scroll', scrollHandle)

    return () => document.removeEventListener('scroll', scrollHandle)

  }, [])

  let rot = scrollY < 360 ? scrollY : 360
  let translate = scrollY < 420 ? scrollY : 420


  return (
    <div className="introduce" style={{ background: `linear-gradient(90deg, rgba(45,40,28,1) 0%, rgba(${51 + scrollY * 0.2},${49 + scrollY * 0.2},${46 + scrollY * 0.2},1) 50%, rgba(45,40,28,1) 100%)` }}>
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