import {useState, useContext} from 'react'
import { CartContext } from '../App';
import ShipyardPopup from './ShipyardPopup'
import NavPopup from './NavPopup'
import {  useNavigate } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [cart,, blackMarket,] = useContext(CartContext);
  const navigate = useNavigate();
  let cartTotal = 0;

  cart.map((ship) => {
    cartTotal += ship.qty;
  });

  blackMarket.map((ship) => {
    cartTotal += ship.qty;
  });

  return (
    <div className='nav-container'>
      <div style={{marginLeft: '10rem'}}>
        <h1>Dok-Ondar's Shipyards</h1>
      </div>
      <div className='nav-links'>
        <div className="navbar-button glow-border" onClick={() => {navigate('/')}}>Home</div>

        <div className="navbar-button glow-border" onClick={() => setShowNav(!showNav)}>Navigation <NavPopup showNav={showNav} /></div>

        <div className="navbar-button glow-border" onClick={() => setShowPopup(!showPopup)}>Shipyards<ShipyardPopup showPopup={showPopup} /></div>

        
          {cartTotal > 0 ? <div className="navbar-button glow-border" onClick={() => {navigate('/hangar')}}>Hangar [{cartTotal}]</div> :
          <div className="navbar-button glow-border" onClick={() => {navigate('/hangar')}}>Hangar</div>}

        <div className="navbar-button glow-border" onClick={() => {navigate('/dock')}}>Dock</div>

      </div>
    </div>
  )
}

export default Navbar