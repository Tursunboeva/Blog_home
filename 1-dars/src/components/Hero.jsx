import './Hero.scss';
import avatar from './images/Image.png';

function Hero(){
    return <>

     <section id='hero'>
        <div className='frame'>
              <h4 className='hero_h4'>5 mind blowing facts about the iPhone 14</h4>
              <div className='card'>
                <img src={avatar} alt="" />
                <div className=".title_card"> 
                <span className='hero_span' >Farok Rastegar  .  1 hour ago</span>
                </div>
              </div>
        </div>
        </section>
    </>
}

export default Hero