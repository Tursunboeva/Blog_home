import './Section4.scss';
import inbox from './images/12px.png'



function Section(){
    return<>
       <section className="search">
        <div className="container">
          <div className="search__wrapper">
            <h2 className="search__title">Incredible deals, right to your inbox!</h2>
            <form className="search__form">
              <input className="search__input" type="text" placeholder="Placeholder"/>
              <button className="search__btn" type="submit"><img src={''} alt="" /></button>
            </form>
            <p className="search__text">By joining you agree to our Terms and Conditions</p>
          </div>
        </div>
      </section>
    </>
}


export default Section