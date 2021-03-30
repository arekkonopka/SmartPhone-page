import { useState } from 'react'
import Context from "./Context"
import Introduce from "./Introduce"
import Video from "./Video"
import Work from "./Work"

const Main = () => {
  const [scrollY, setScrollY] = useState(0)




  return (
    <Context.Provider value={[scrollY, setScrollY]}>
      <div>
        <Introduce />
        <Video />
        <Work />
      </div>
    </Context.Provider >
  )
}

export default Main