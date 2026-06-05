const launch = new Map(

);


const launch = {
  flightNumber: 100,
  mission:'Kepler Exploration X',
  rocket:'Explorer IS1',
  launchesDate: newDate('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['Vincent','NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
launches,

};