const http = require('http');

const mongoose = require('mongoose');

const app = require('./app');

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) =>{
  console.error(err);
});

const { loadPlanetsData } = require('./models/planets.models');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:dMiWTaf4rXVsc7qQ@nasacluster.8c2fdxz.mongodb.net/nasa?appName=NasaCluster';

const server = http.createServer(app);

async function startServer (){
await mongoose.connect(MONGO_URL);
await loadPlanetsData();

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
}

startServer();

