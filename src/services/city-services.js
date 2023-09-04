// const {CityRepository } = require('../repository/index');

// class CityService{
// constructor(){
//     this.cityRepository = new CityRepository();
// }

// async createCity(data){
//     try{
//         const city = await this.cityRepository.createCity({name:data.name});
//         return city;
//     }catch(error){
//         console.log("Something went wrong at service layer");
//         throw error;
//     }

// }

// async deleteCity(city_Id){
//     try{
//         const response = await this.cityRepository.deleteCity(city_Id);
//         return response;
//     }
//     catch(error){
//         console.log("Something went wrong at service layer");
//         throw error;
//     }
// }

// async updateCity(city_Id,data){
//     try{
//         const city = await this.cityRepository.updateCity(city_Id,data);
//         return city;
//     }
//     catch(error){
//         console.log("Something went wrong at service layer");
//         throw error;
//     }
// }

// async getCity(city_Id){
//     try{
//         const city = await this.cityRepository.getCity(city_Id);
//         return city;
//     }
//     catch(error){
//         console.log("Something went wrong at service layer");
//         throw error;
//     }
// }
    
// }

// module.exports = CityService;
const { CityRepository } = require('../repository/index');

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity({ name: data.name });
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async deleteCity(city_Id) {
    try {
      console.log("Received cityId in deleteCity:", city_Id);
      const response = await this.cityRepository.deleteCity(city_Id);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async updateCity(city_Id, data) {
    try {
      const city = await this.cityRepository.updateCity(city_Id, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async getCity(city_Id) {
    try {
      const city = await this.cityRepository.getCity(city_Id);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async getAllCities(filter){
    try{
      const cities = await this.cityRepository.getAllCities({name:filter.name});
      return cities;
    }
    catch(error){
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
}

module.exports = CityService;
