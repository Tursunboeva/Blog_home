import './Section3.scss';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import avatar2 from './images/avatar2.png'



function Section (){
    return<>
    <section>
        <div className="container">
            <div className="articl">
                <div className="title">
                    <h2 className='hero_h2'>Featured articles</h2>
                </div>
                <div className="articl_card">
                    <div className="articl_box">
                        <img src={img1} alt="" />
                        <div className="articl_text">
                            <h3 className='h3_klavi'>Pathway to the Mediterranean</h3>
                            <div className='card'>
                                  <img src={avatar2} alt="" />
                                  <div className=".title_card"> 
                                  <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                                  </div>
                            </div>
                             <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                        </div>
                    </div>

                    <div className="articl_box">
                        <img src={img2} alt="" />
                        <div className="articl_text">
                            <h3 className='h3_klavi'>My awesome safari in Lahbab Desert, United Arab Emirates</h3>
                            <div className='card'>
                                  <img src={avatar2} alt="" />
                                  <div className=".title_card"> 
                                  <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                                  </div>
                            </div>
                             <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                        </div>
                    </div>

                    <div className="articl_box">
                        <img src={img3} alt="" />
                        <div className="articl_text">
                            <h3 className='h3_klavi'>10 amazing things to do in Cuba</h3>
                            <div className='card'>
                                  <img src={avatar2} alt="" />
                                  <div className=".title_card"> 
                                  <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                                  </div>
                            </div>
                             <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                        </div>
                    </div>
                    
                    <div className="articl_box">
                        <img src={img4} alt="" />
                        <div className="articl_text">
                            <h3 className='h3_klavi'>The best street food in the world. Ranked!</h3>
                            <div className='card'>
                                  <img src={avatar2} alt="" />
                                  <div className=".title_card"> 
                                  <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                                  </div>
                            </div>
                             <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                        </div>
                    </div>
           
                    <div className="articl_box">
                        <img src={img5} alt="" />
                        <div className="articl_text">
                            <h3 className='h3_klavi'>Travel Packing guide for beginners</h3>
                            <div className='card'>
                                  <img src={avatar2} alt="" />
                                  <div className=".title_card"> 
                                  <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                                  </div>
                            </div>
                             <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                        </div>
                    </div>
                    

                </div>

                <div className="btn">
                <button>Load more</button>
                </div>
            </div>
        </div>
    </section>    
    </>
}

export default Section