const inventory = [
  { id: '1', make: 'Toyota', model: 'Corolla', year: 2020, price: 15000, color: 'White', mileage: 25000 },
  { id: '2', make: 'Honda', model: 'Civic', year: 2019, price: 14000, color: 'Black', mileage: 30000 },
  { id: '3', make: 'Ford', model: 'Focus', year: 2021, price: 17000, color: 'Blue', mileage: 15000 },
  { id: '4', make: 'Tesla', model: 'Model S Plaid', year: 2024, price: 120000, color: 'Red', mileage: 500 },
  { id: '5', make: 'Lucid', model: 'Air Dream Edition', year: 2023, price: 130000, color: 'Pearl White', mileage: 300 },
  { id: '6', make: 'Rivian', model: 'R1T Launch Edition', year: 2024, price: 90000, color: 'Deep Blue', mileage: 700 }
];

exports.getAllInventory = async () => {
  return inventory;
};

exports.getInventoryById = async (id) => {
  return inventory.find(item => item.id === id);
};
