import React from "react";
import "./App.css";
import VehicleList from "./Components/VehicleList";
import VehicleDetails from "./Components/VehicleDetails";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Dock from "./Components/Dock";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { getVehicle } from "./Utilities/api-utilities";
import HangarCart from "./Components/HangarCart";

export const CartContext = createContext();
export const PageContext = createContext();

function App() {
  const [clickedVehicle, setClickedVehicle] = useState("");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("Cart")) || []
  );
  const [blackMarket, setBlackMarket] = useState(
    JSON.parse(localStorage.getItem("Black Market")) || []
  );
  const [added, setAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("Black Market", JSON.stringify(blackMarket));
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart, blackMarket]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const singleVehicle = await getVehicle(clickedVehicle);
      localStorage.setItem(
        "Ship",
        JSON.stringify({ ...singleVehicle, qty: 1 })
      );
      setIsLoading(false);
    })();
  }, [clickedVehicle]);

  return (
    <HashRouter>
      <div className="App">
        <CartContext.Provider
          value={[cart, setCart, blackMarket, setBlackMarket, added, setAdded]}
        >
          <PageContext.Provider value={[page, setPage]}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="ship-details"
                element={<VehicleDetails isLoading={isLoading} />}
              />
              <Route
                path="/vehicles"
                element={
                  <VehicleList
                    type="vehicles"
                    setClickedVehicle={setClickedVehicle}
                  />
                }
              />
              <Route
                path="/starships"
                element={
                  <VehicleList
                    type="starships"
                    setClickedVehicle={setClickedVehicle}
                  />
                }
              />
              <Route path="/hangar" element={<HangarCart />} />
              <Route path="/dock" element={<Dock />} />
            </Routes>
          </PageContext.Provider>
        </CartContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
