import { useState } from 'react'
import "./Dock.css"

function Dock() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div className='dock-container'>
      <div className='dock-card'>

        <form className='glow-border' onSubmit={handleSubmit}>

          <label>First Name:
            <input className="glow-border"
              type="text"
              name='firstName'
              value={inputs.firstName || ''}
              onChange={handleChange}
            />
          </label>

          <label>Last Name:
            <input className="glow-border"
              type="text"
              name='lastName'
              value={inputs.lastName || ''}
              onChange={handleChange}
            />
          </label>

          <label>Email:
            <input className="glow-border"
              type="email"
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
            />
          </label>

          <label>Phone:
            <input className="glow-border"
              type="phone"
              name='phone'
              value={inputs.phone || ''}
              onChange={handleChange}
            />
          </label>

          <label>Street:
            <input className="glow-border"
              type="text"
              name='street'
              value={inputs.street || ''}
              onChange={handleChange}
            />
          </label>

          <label>City:
            <input className="glow-border"
              type="text"
              name='city'
              value={inputs.city || ''}
              onChange={handleChange}
            />
          </label>

          <label>State:
            <input className="glow-border"
              type="text"
              name='state'
              value={inputs.state || ''}
              onChange={handleChange}
            />
          </label>

          <label>Country:
            <input className="glow-border"
              type="text"
              name='country'
              value={inputs.country || ''}
              onChange={handleChange}
            />
          </label>

          <label>Planet:
            <input className="glow-border"
              type="text"
              name='planet'
              value={inputs.planet || ''}
              onChange={handleChange}
            />
          </label>

          <label>Sector:
            <input className="glow-border"
              type="text"
              name='sector'
              value={inputs.sector || ''}
              onChange={handleChange}
            />
          </label>

          <label>Region:
            <input className="glow-border"
              type="text"
              name='region'
              value={inputs.region || ''}
              onChange={handleChange}
            />
          </label>

          <input type="submit" />

        </form>
      </div>
    </div>
  )
}

export default Dock