import {useContext, useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import { CartContext, PageContext } from '../App'

function DockFinal({address}) {
  const [cart, setCart, , setBlackMarket] = useContext(CartContext);
  const [, setPage] = useContext(PageContext);
  const navigate = useNavigate();
  let subTotal = 0;
  let shipTotal = 0;

  const handlePurchase = () => {
    setCart([]);
    setBlackMarket([]);
    setPage(1);
    navigate('/');
    window.scrollTo(0, 0);
  }

  return (
    <div className='dock-card'>
      <div className="payment-address" style={{display: 'flex', padding: '0'}}>
        <div className='final-details glow-border' style={{marginRight: '15px'}}>
          <div style={{textAlign: 'center'}}><h1>Address Details</h1></div>
          <p>{address.firstName} {address.lastName}</p>
          <p>{address.email}</p>
          <p>{address.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</p>
          <p>{address.street}</p>
          <p>{address.city}, {address.state}, {address.country}</p>
          <p>Planet {address.planet} in the {address.sector} Sector of {address.region}</p>

        </div>
        <div className="final-details glow-border">
          <div style={{textAlign: 'center'}}><h1>Payment Details</h1></div>
          <p>Card Holder: {address.cardFirstName} {address.cardLastName}</p>
          <p>Card Number: {address.cardNumber.replace(/.(?=.{4,}$)/g, '*')}</p>
          <p>Expiration Date: {address.cardExpiration}</p>
        </div>
      </div>

      <div className="payment-address glow-border">
      <div style={{textAlign: 'center'}}><h1>Review Your Fleet</h1></div>

        {cart.map((ship) => {
          subTotal += ship.cost_in_credits * ship.qty;
          shipTotal = ship.cost_in_credits * ship.qty;
          return(
            <div key={ship.created} className='final-ship'>
              <p>{ship.name}</p>
              <p style={{textAlign: 'center'}}>Quantity: {ship.qty}</p>
              <p style={{textAlign: 'right'}}>Total: <img className="credits-symbol checkout-symbol"
                src={require(`../vehicle-images/credits.png`)}
            />{shipTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>);
        })}

        <div className="final-price">
          <p>Subtotal:</p>
          <p><img className="credits-symbol checkout-symbol"
                src={require(`../vehicle-images/credits.png`)}
            />{subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="final-price">
          <p>Tax:</p>
          <p><img className="credits-symbol checkout-symbol"
                src={require(`../vehicle-images/credits.png`)}
            />{(subTotal * .08).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="final-price">
          <p>Grand Total:</p>
          <p><img className="credits-symbol checkout-symbol"
                src={require(`../vehicle-images/credits.png`)}
            />{(subTotal * 1.08).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>

      </div>
        <div className='glow-border purchase-button clickable' onClick={handlePurchase}>Purchase Fleet</div>

    </div>
  )
}

export default DockFinal