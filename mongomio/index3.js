const mongoose = require ('mongoose');

const mongoUri = 'mongodb://localhost:27017/prueba';

const main = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("conectado a mongo");
        const citySchema= new mongoose.Schema({
            
            ID: Number,
            Name: String,
            CountryCode: String,
            District: String,
            Population: Number,
            Country: {type: mongoose.Schema.Types.ObjectId, ref: "country"}
              
        });

        const countrySchema= new mongoose.Schema({
            Code: String,
            Name: String,
            Continent: String,
            Region: String,
            SurfaceArea: Number,
            IndepYear: Number,
            Population: Number,
            LifeExpectancy: Number,
            GNP: Number,
            GNPOld: Number,
            LocalName: String,
            GovernmentForm: String,
            HeadOfState: String,
            Capital: Number,
            Code2: String,
            Cities: [citySchema],
        }); 
        //Este countries y cities se refieren a las colecciones para que despues el find busque exactamente ahí
        const Country = mongoose.model("country",countrySchema);
        const City = mongoose.model("city",citySchema);
        
        // const countries = await Country.find({});   
        // for (const country of countries){
        //     const cities = await City.find({CountryCode: country.Code});
        //     country.Cities = cities;
        //     await country.save();
        //     console.log("se ha guardado");
        // }

        const cities = await City.find({});   
        for (const city of cities){
            const country= await Country.findOne({Code: city.CountryCode});
            city.Country=country._id;
            await city.save()
        }

        console.log("fin");
    }   catch (error) {
        console.log("Error al conectar al mongo",error);
    }
};



main();