import {useState, useContext} from 'react'
import { CartContext } from '../App';
import ShipyardPopup from './ShipyardPopup'
import NavPopup from './NavPopup'
import {  Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [cart, setCart, blackMarket, setBlackMarket] = useContext(CartContext);
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
        <Link to="/"><div className="navbar-button glow-border">Home</div></Link>

        <div className="navbar-button glow-border" onClick={() => setShowNav(!showNav)}>Navigation <NavPopup showNav={showNav} /></div>

        <div className="navbar-button glow-border" onClick={() => setShowPopup(!showPopup)}>Shipyards<ShipyardPopup showPopup={showPopup} /></div>

        <Link to="/hangar">
          {cartTotal > 0 ? <div className="navbar-button glow-border">Hangar [{cartTotal}]</div> :
          <div className="navbar-button glow-border">Hangar</div>}
        </Link>

        <Link to="/dock"><div className="navbar-button glow-border">Dock</div></Link>

      </div>
    </div>
  )
}

export default Navbar