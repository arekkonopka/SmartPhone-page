import { Link } from 'react-router-dom'
const Header = () => {
  const style = {
    textDecoration: 'none'
  }

  return (
    <div className='header'>
      <div className="logo">
        <i class="fas fa-mobile"></i>
        <Link to='/' style={style}>
          <h3>BeSmartPhone</h3>
        </Link>
      </div>
      <div className='info'>
        <Link to='/about' style={style}> <p>O nas</p> </Link>
        <Link to='/contact' style={style}> <p>Kontakt</p> </Link>
      </div>
      <div className="icons">
        <i class="fas fa-search"></i>
        <i class="fas fa-user-alt"></i>
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  )
}


export default Header