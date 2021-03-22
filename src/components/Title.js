import { useState } from 'react';
import down_arrow from '../images/ARROW-DOWN.png';
import Switch from './Switch'

export const Title = () => {

    const [isArrowClicked, setArrow] = useState(false)

    function handleScroll() {
        setArrow(true);

        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });

      }

    return (
        <>
        <section className="home-body">
          <img className="overlay-img" onClick={handleScroll} src={down_arrow} alt="down-arrow"/>
          <div className='body-container fade-in'>
            <h1>UNPLUG PSORIASIS</h1>
          </div>
        </section>
        <Switch data={isArrowClicked}/>
        </>
    )
}

export default Title