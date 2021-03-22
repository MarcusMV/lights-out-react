import {useState} from 'react';
import switch_img from '../SWITCH.png';
import switch_reset from '../RESET.png';

export const Switch = ({ data }) => {
    const [isSwitchOn, setSwitched] = useState(false)
    console.log(isSwitchOn);

    return (
        <section className={`home-info fade-in ${isSwitchOn ? 'switch-on' : 'switch-off'}`}>
          <div className='info-container'>
            {isSwitchOn ? <h2>FOR <b>GREATER</b> CLARITY...</h2> : <h2><b>TURN OFF</b> THE LIGHTS ON PSORIASIS...</h2>}
            <p>{isSwitchOn ? "As we shed light on the intricacies of psoriasis pathogenesis, we now know that other proinflammatory cytokines supplement the IL-17/23 axis and charge the immune cells in circulation." 
            : "The complex immunopathogenic mechanisms driving psoriasis involve interactions between keratinocytes and immune cells, overloading the cycle of inflammation that keeps patients plugged into their psoriasis – bound by skin plaques causing clinical symptoms of pain, itching, and burning sensations."}</p>
            <div className="switch-container">
              <img src={isSwitchOn ? switch_reset : switch_img} onClick={() => setSwitched(!isSwitchOn)} alt="switch" className={isSwitchOn == true ? "switch-on" : "switch-off"}/>
              <h5><b>{isSwitchOn ? 'RESET THE SWITCH' : 'FLIP THE SWITCH'}</b></h5>
            </div>
          </div>
        </section>
    )
}

export default Switch