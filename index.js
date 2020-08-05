const http = require('http');
const vehicles = require('./vehicles');

const server = http.createServer((req, res) => {
  res.end('Process terminated');
});

server.listen(5000, () => {

  listVehicles();

  console.log('=============================');

  console.log(`Vehículo más caro: ${mostExpensive.brand} ${mostExpensive.model}`);
  console.log(`Vehículo más barato: ${leastExpensive.brand} ${leastExpensive.model}`);
  containsLetterY();
  console.log('=============================');

  console.log(`Vehículos ordenados por precio de mayor a menor:`);
  orderedString();  

  
});

server.on('listening', () => {
  server.close(() => {});
});

const containsLetterY = () => vehicles.forEach(vehicle => {
  vehicle.model.includes('Y') && console.log(`Vehículo que contiene en el modelo la letra 'Y': ${vehicle.brand} ${vehicle.model} $${vehicle.price}`);
});  

const listVehicles = () => {
  vehicles.forEach(vehicle => console.log(`Marca: ${vehicle.brand} // Modelo: ${vehicle.model} // ${vehicle.doors ? 'Puertas' : 'Cilindrada'}: ${vehicle.doors ? vehicle.doors : vehicle.cylinder} // Precio: $${vehicle.price}`));
};

const orderByMostExpensive = () => {
  let orderedVehicles = vehicles.sort((vehicle1, vehicle2) => (parseFloat(vehicle1.price) < parseFloat(vehicle2.price)) ? 1 : -1 );
  return orderedVehicles;
};

const mostExpensive = orderByMostExpensive()[0];
const leastExpensive = orderByMostExpensive()[orderByMostExpensive().length - 1];

const orderedString = () => orderByMostExpensive().forEach(vehicle => console.log(`${vehicle.brand} ${vehicle.model}`));