
const Header = () => {
  return (
    <header className="header"> 
      <div className="container flex@sm justify-between@sm items-center">
        <a className="main-logo" href="/">
          <img src="logo.svg" />
        </a>
        <ul className="nav-list flex gap-xs">
          <li><a href="/">Contacto /</a></li>
          <li><a href="/"><i className='bx bxl-facebook'></i></a></li>
          <li><a href="/"><i className='bx bxl-twitter'></i></a></li>
        </ul>
      </div>
    </header>
   );
}
 
export default Header;