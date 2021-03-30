import { useEffect, useContext } from 'react'
import office1 from '../../img/office1.jpg'
import office2 from '../../img/office2.jpg'
import Context from "./Context"


const Work = () => {
  const [scrollY, setScrollY] = useContext(Context)
  const scrollHandle = () => setScrollY(window.pageYOffset)

  useEffect(() => {
    document.addEventListener('scroll', scrollHandle)

    return () => document.removeEventListener('scroll', scrollHandle)

  }, [])
  let position1 = scrollY > 1600 ? '5' : '-100'
  let position2 = scrollY > 1750 ? '5' : '-100'



  return (
    <div className='work'>
      <h1>Doskonały do biura, w dwóch wersjach kolorystycznych</h1>
      <img src={office1} alt="office set with phone" className='office1' style={{ left: `${position1}%` }} />
      <img src={office2} alt="office set with phone" className='office2' style={{ right: `${position2}%` }} />
    </div>
  )
}

export default Work