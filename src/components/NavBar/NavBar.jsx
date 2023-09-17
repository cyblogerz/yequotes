import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
    <div className="navbar-logo">YeQuotes</div>
    <ul className="navbar-links">
        <li className="navbar-item"><a href="#">Github</a></li>
        <li className="navbar-item"><a href="#">Contribute</a></li>
    </ul>
    </nav>
  )
}

export default NavBar