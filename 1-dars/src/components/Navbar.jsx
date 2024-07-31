import "./Navbar.scss";
import image from './images/Image.svg';
import logo from './images/Logo.svg';
import icon1 from './images/Icon 01.svg';
import icon2 from './images/Icon 02.svg';


function Navbar(){
    return<>
        <header>
            <div className="container">
                  <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <li><img src={image}  alt="" /></li>
                        <li><p>Bruce Lee</p></li>
                        <li><img src={icon1} alt="" /></li>
                        <li><img src={icon2} alt="" /></li>
                    </ul>
                  </nav>
            </div>
        </header>

        
    
    </>
}

export default Navbar