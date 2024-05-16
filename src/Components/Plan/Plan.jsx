import MusicIcon from '../../../order-summary-component-main/images/icon-music.svg';
import './Plan.css';

export default function Plan() {

    return (
        <div className="plan-container">
            <div className="plan-item">
                <img src={MusicIcon} alt="Music Icon" className='music-img' />
                <div className='price-container'>
                    <p className="price-title">Annual Plan</p>
                    <p className="price">$59.99/year</p>
                </div>
            </div>
            <a href='#'>Change</a>
        </div>
    );
};