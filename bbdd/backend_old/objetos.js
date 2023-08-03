const City = function (city) {
  this.id = city.id;
  this.countryCode = city.countryCode;
  this.name = city.name;
  this.district = city.district;
  this.population = city.population;
  this.create = function (newCity, result) {
    console.log(newCity, result);
  };
};

City.prototype.update = function (city, result) {
  console.log("update", city, result);
};

const madrid = new City({
  city: "Madrid",
  country: "Spain",
  population: 1000000,
});
console.log(madrid);
const paris = new City({});
console.log(paris);

paris.create("a", "b");
paris.delete = function () {
  console.log("delete");
};
paris.delete();
madrid.create("x", "y");
paris.update("a", "b");
madrid.update("x", "y");

const array1 = [1, 2, 3, 4];
const array2 = array1.map((x) => x * 2);
console.log(array2);
