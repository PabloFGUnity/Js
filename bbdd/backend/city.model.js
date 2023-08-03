const City = function (city) {
  this.id = city.ID;
  this.countryCode = city.CountryCode;
  this.name = city.Name;
  this.district = city.District;
  this.population = city.Population;
};

module.exports = City;
