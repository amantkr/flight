const {FlightRespository,AirplaneRespository} = require('../repository/index');
const{ compareTime } = require('../utils/helper');

class FlightService{

    constructor() {
        this.airplaneRespository = new AirplaneRespository();
        this.flightrespository = new FlightRespository();
    }

   async createFlight(data) {
    try{
        if(!compareTime(data.arrivalTime,data.departureTime)){
            throw {error:'Arrival time cannot be less than departure time'};
        }
        console.log("Data.airplaneId:=++=+=++=+=+=+=+=+=+=+=+=+", data.airplaneId); // Debugging line
        const airplane  = await this.airplaneRespository.getAirplane(data.airplaneId);
        const flight = await this.flightrespository.createFlight({
            ...data,totalSeats:airplane.capacity
        });
        return flight;
        
    }catch(error){
        console.log("Something went wrong in service layer");
        throw {error};
    }
   }

   async getFlightData(){

   

   }
}
module.exports = FlightService;