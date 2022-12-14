import React from "react";
import { useNavigate } from "react-router";
import "./VehicleCard.css";

function VehicleCard({ name, price, model, maker, url, setClickedVehicle }) {
  const vehicleName = name.replace(/\//g, "");
  const vehicleDisplayName = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  const modelName = model.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  const navigate = useNavigate();
  let symbol = "0px";

  if (price != "Contact Dok-Ondar") {
    price = parseInt(price);
    symbol = "1.2rem";
  }

  const handleVehicleClick = () => {
    setClickedVehicle(url);
    navigate("/ship-details");
  }

  return (
    <div className="vehicle-card">
      <div className="datapad-image flex glow-border">
      <img
        src={require(`../vehicle-images/${vehicleName}.jpg`)}
        />
        </div>
        <div className="datapad-details glow-border">
        <h3>{vehicleDisplayName}</h3>
        <p style={{height: "2rem"}}><b>Model:</b> {modelName}</p>
        <p style={{height: "3rem"}}><b>Manufacturer:</b> {maker}</p>
        <h3>Price: <img className="credits-symbol" style={{width:`${symbol}`}}
        src={require(`../vehicle-images/credits.png`)}
        />{price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
        </div>
        <div className="datapad-button glow-border" onClick={handleVehicleClick}><b>View In Hangar</b></div>
    </div>
  );
}

export default VehicleCard;
