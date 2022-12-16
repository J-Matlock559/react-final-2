import React from 'react'
import { usePaymentInputs } from 'react-payment-inputs';

function DockPayment({address, handleChange, handleCardSubmit}) {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
  return (
    <div className='dock-card'>
      <div className="payment-address glow-border">
      <div style={{textAlign: 'center'}}><h1>Address Details</h1></div>
        <p>{address.firstName} {address.lastName}</p>
        <p>{address.email}</p>
        <p>{address.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</p>
        <p>{address.street}</p>
        <p>{address.city}, {address.state}, {address.country}</p>
        <p>Planet {address.planet} in the {address.sector} Sector of {address.region}</p>
      </div>
        <form className='glow-border' onSubmit={handleCardSubmit}>
        <div style={{textAlign: 'center'}}><h1>Enter Payment Details</h1></div>
          <label>First Name:
              <input 
                className="glow-border"
                placeholder='First Name'
                type="text"
                name='cardFirstName'
                value={address.cardFirstName || ''}
                onChange={handleChange}
              />
            </label>

            <label>Last Name:
              <input 
                className="glow-border"
                placeholder='Last Name'
                type="text"
                name='cardLastName'
                value={address.cardLastName || ''}
                onChange={handleChange}
              />
            </label>

            <label>Credit Card Number:
              <input {...getCardNumberProps({ onChange: handleChange })} 
              value={address.cardNumber || ''} 
              name='cardNumber' 
              className='glow-border' />
            </label>

            <label>Expiration Date:
              <input 
                {...getExpiryDateProps({ onChange: handleChange })}
                className="glow-border"
                name='cardExpiration'
                value={address.cardExpiration || ''}                
              />
            </label>

            <label>Security Code:
              <input 
                {...getCVCProps({ onChange: handleChange })}
                className="glow-border"
                name='cardCVC'
                value={address.cardCVC || ''}
              />
            </label>

            <input 
            type="submit" 
            className="glow-border submit-button clickable" 
            value='Proceed to Fleet Review'
          />
        </form>

    </div>    
  )
}

export default DockPayment