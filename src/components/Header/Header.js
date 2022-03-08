
import { useState } from "react";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => {
   if(activeMenu === false) {
      setActiveMenu(true)
    } else {
      setActiveMenu(false)
    }
  }
  return (
    <header className={`header ${activeMenu ? 'active' : null}`}> 
      <div className="flex@sm justify-between@sm items-center">
        <div className="menu-box">
          <a className="main-logo" href="/">
            <img src="logo.png" />
          </a>
          <span onClick={() => handleMenu()} className={`menuButton ${activeMenu ? 'active' : null}`}>
            { activeMenu ? <i class='bx bx-x' ></i> : <i class='bx bx-menu'></i> }
          </span>
        </div>
        
      </div>
      <div className={`quick-menu ${activeMenu ? 'active' : null}`}>
        <div className="quick-menu-box">
          <h3>Profile</h3>
          <p>Noel begins his professional career as a porn film editor. After many years of work and countless projects, he's still affirming:</p>
          <p><em>"I've seen nothing, that I've never seen before"</em><span>Noel Rayo</span></p>

        </div>
        <div className="quick-menu-box margin-top-xl">
          <h3>Contact</h3>
          <ul class="nav-list flex quick-i">
            <li>info@noelrayo.com</li>
            <li>|</li>
            <li>+34 647681946</li>
          </ul>

        </div>
        <div className="quick-menu-box margin-top-md">
          <h3>Follow</h3>
          <ul class="nav-list flex gap-xs margin-top-xs">
            <li><a target="_blank" href="https://www.instagram.com/noelrayo/"><i class="bx bxl-instagram"></i></a></li>
            <li><a target="_blank" href="https://vimeo.com/noelrayo"><i class="bx bxl-vimeo"></i></a></li>
          </ul>

        </div>
      </div>
    </header>
   );
}
 
export default Header;