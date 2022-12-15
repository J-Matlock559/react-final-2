import React from 'react'

function DockAddress({address, handleChange, handleSubmit}) {
  return (
    <div className='dock-card'>

        <form className='glow-border' onSubmit={handleSubmit}>

          <label>First Name:
            <input className="glow-border"
              type="text"
              name='firstName'
              value={address.firstName || ''}
              onChange={handleChange}
            />
          </label>

          <label>Last Name:
            <input className="glow-border"
              type="text"
              name='lastName'
              value={address.lastName || ''}
              onChange={handleChange}
            />
          </label>

          <label>Email:
            <input className="glow-border"
              type="email"
              name='email'
              value={address.email || ''}
              onChange={handleChange}
            />
          </label>

          <label>Phone:
            <input className="glow-border"
              type="phone"
              name='phone'
              value={address.phone || ''}
              onChange={handleChange}
            />
          </label>

          <label>Street:
            <input className="glow-border"
              type="text"
              name='street'
              value={address.street || ''}
              onChange={handleChange}
            />
          </label>

          <label>City:
            <input className="glow-border"
              type="text"
              name='city'
              value={address.city || ''}
              onChange={handleChange}
            />
          </label>

          <label>State:
            <input className="glow-border"
              type="text"
              name='state'
              value={address.state || ''}
              onChange={handleChange}
            />
          </label>

          <label>Country:
            <input className="glow-border"
              type="text"
              name='country'
              value={address.country || ''}
              onChange={handleChange}
            />
          </label>

          <label>Planet:
            <input className="glow-border"
              type="text"
              name='planet'
              value={address.planet || ''}
              onChange={handleChange}
            />
          </label>

          <label>Sector:
            <input className="glow-border"
              type="text"
              name='sector'
              value={address.sector || ''}
              onChange={handleChange}
            />
          </label>

          <label>Region:
            <input className="glow-border"
              type="text"
              name='region'
              value={address.region || ''}
              onChange={handleChange}
            />
          </label>

          <input 
            type="submit" 
            className="glow-border submit-button" 
            value='Proceed to Payment Details'
          />

        </form>
      </div>
  )
}

export default DockAddress