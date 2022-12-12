const baseUrl = "https://swapi.py4e.com/api/";

const getAllVehicles = async (page, type) => {
  const res = await fetch(`${baseUrl}${type}/?page=${page}`);
  const { results: productsFound } = await res.json();
  return productsFound;
};

const getVehicle = async (targetVehicle) => {
  const res = await fetch(`${targetVehicle}`);
  const vehicleFound = await res.json();
  return vehicleFound;
};

export { getAllVehicles, getVehicle };
