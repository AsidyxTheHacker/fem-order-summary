import './Modal.css';
import Hero from '../../../order-summary-component-main/images/illustration-hero.svg';
import Summary from '../Summary/Summary.jsx';
import Plan from '../Plan/Plan.jsx';
import Buttons from '../Buttons/Buttons.jsx';

export default function Modal() {

    return (
        <div className="modal">
            <img src={Hero} alt="Hero Image" className='hero-img' />
            <Summary />
            <Plan />
            <Buttons />
        </div>
    );
};