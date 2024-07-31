import './Media.scss';
import logoIcon from "./images/logoIcon.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import be from "./images/be.svg";

function Media(){
    return<>
     <section className="media">
      <div className="container">
        <div className="media__wrapper">
          <a href="">
            <img src={logoIcon} alt="" />
          </a>
          <p className="media__text">© 2019 Fabrx </p>
          <div className="media__icons">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={be} alt="" />
            </a>
          </div>
        </div>
      </div>
     </section>
    </>
}

export default Media