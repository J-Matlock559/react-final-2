import {useState, useEffect, useContext} from "react";
import VehicleCard from "./VehicleCard";
import { getAllVehicles } from "../Utilities/api-utilities";
import { PageContext } from '../App';
import "./VehicleList.css";
import Pagination from "./Pagination";

function VehicleList({type, setClickedVehicle}) {
  const [allVehiclesList, setAllVehiclesList] = useState([]);
  const vehicles = allVehiclesList;
  
  const [page, setPage] = useContext(PageContext);

  useEffect(() => {
    (async () => {
      const allVehicles = await getAllVehicles(page, type);
      setAllVehiclesList(allVehicles);
    })();
  }, [page, type]);

  return (
    <div className="flexwrap vehicle-list">
      {vehicles.map((vehicle) => {
        
        let price = vehicle.cost_in_credits;

        if (price === "unknown"){
          price = "Contact Dok-Ondar";
        }
        
        return (
          <div key={vehicle.created}>
            <VehicleCard
              name={vehicle.name}
              price={price}
              model={vehicle.model}
              maker={vehicle.manufacturer}
              url={vehicle.url}
              setClickedVehicle={setClickedVehicle}
            />
          </div>
        );
      })}
      <div className="button-row">
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default VehicleList;
