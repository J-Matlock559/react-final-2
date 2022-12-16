import { useState, useEffect } from 'react'
import DockAddress from './DockAddress';
import DockPayment from './DockPayment';
import DockFinal from './DockFinal';
import "./Dock.css"

function Dock() {
  
  const [address, setAddress] = useState({});
  const [showPayment, setShowPayment] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
    window.scrollTo(0, 0);
  }

  const handleCardSubmit = (e) => {
    e.preventDefault();
    setShowPayment(false);
    setShowFinal(true);
    window.scrollTo(0, 0);
  }

  return (
    <div className='dock-container'>

      {showPayment === false && showFinal === false && <DockAddress address={address} handleChange={handleChange} handleSubmit={handleSubmit} />}

      {showPayment && <DockPayment address={address} handleChange={handleChange} handleCardSubmit={handleCardSubmit} />}

      {showFinal && <DockFinal address={address} />}

    </div>
  )
}

export default Dock