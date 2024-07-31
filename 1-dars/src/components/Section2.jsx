import './Section2.scss';
import Black from './images/Black.svg';
import avatar2 from './images/avatar2.png';
function Section (){
    return<>
 
       <section>
        
       <div className="container">
             <section id='section2'>
                <div className="klavi">
                   <div className="klavi_text">
                    <button className='btn'>Featured</button>
                    <h3 className='h3_klavi'>
                    Beached to take you somewhere else
                    </h3>
                    <div className='card'>
                                  <img src={avatar2} alt="" />
                                  <div className=".title_card"> 
                                  <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                                  </div>
                            </div>
                   </div>
                   
                </div>
                <img src={Black} alt="" />
             </section>
        </div>
       </section>
    
    </>
}

export default Section