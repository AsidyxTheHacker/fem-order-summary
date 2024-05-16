import './Buttons.css'

export default function Buttons() {

    return (
        <div className='button-container'>
            <button className='btn proceed-btn'>Proceed to Payment</button>
            <button className='btn cancel-btn'>Cancel Order</button>
        </div>
    );
};