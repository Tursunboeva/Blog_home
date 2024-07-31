import './Footer.scss';
import arrow from './images/arrow.svg'

function Footer(){

    return<>
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul class="footer__list">
                    <li className="list__title">First Column</li>
                    <li className="list__item"><a className="item__link" href="">Link One</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Two</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Three</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Four</a></li>
                </ul>
                <ul class="footer__list">
                    <li className="list__title">Second Column</li>
                    <li className="list__item"><a className="item__link" href="">Link One</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Two</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Three</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Four</a></li>
                </ul>
                <ul class="footer__list">
                    <li className="list__title">Third Column</li>
                    <li className="list__item"><a className="item__link" href="">Link One</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Two</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Three</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Four</a></li>
                </ul>
                <ul class="footer__list">
                    <li className="list__title">Fourth Column</li>
                    <li className="list__item"><a className="item__link" href="">Link One</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Two</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Three</a></li>
                    <li className="list__item"><a className="item__link" href="">Link Four</a></li>
                </ul>
                <form className="search__form">
                  <input className="search__input" type="text" placeholder="Placeholder"/>
                  <button className="search__btn" type="submit"><img src={arrow} alt="" /></button>
                </form>
            </div>
        </div>
    </footer>
    
    </>
}

export default Footer