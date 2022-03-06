const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="container max-width-xxxl flex@sm justify-between@sm items-center">
          <a className="main-logo" href="/">
            <img src="logo.png" />
          </a>
          <ul className="nav-list flex gap-xs quick-i">
            <li>Contacto |</li>
            <li>info@noelrayo.com |</li>
            <li>+34 647681946</li>
          </ul>
          <ul className="nav-list flex gap-xs">
            <li><a href="/"><i className='bx bxl-instagram'></i></a></li>
            <li><a href="/"><i className='bx bxl-twitter'></i></a></li>
          </ul>
        </div>
    </footer>
   );
}
 
export default Footer;