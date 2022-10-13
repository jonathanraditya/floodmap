const readBMKG=require('./bmkgstationdata.json');

//calculate array length
const arrayLength=Object.keys(readBMKG).length;
console.log(arrayLength);

const definePath=readBMKG[0];
//console.log(definePath)

for(i=0; i<arrayLength; i++){
    const stationName=readBMKG[i].station_name;
    const lat=readBMKG[i].latitude;
    const long=readBMKG[i].longitude;
    console.log(`"${stationName}","${lat}","${long}"`);
    
}
