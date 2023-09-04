const{FlightService} = require('../services/index');
const flightService = new FlightService();
const create = async(req,res) => {
    try {
        console.log('Request body:', req.body); // Check the request data
        const flight = await flightService.createFlight(req.body);
        console.log('Created flight:', flight); // Check the flight data
        return res.status(201).json({
            data:flight,
            success:true,err:{},
            message:'Successfully created a flight'

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch a city',
            err:error
            
        })
    }
}
module.exports = {
    create
};