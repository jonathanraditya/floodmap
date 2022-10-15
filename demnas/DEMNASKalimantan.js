const readDemnas=require('./example.json');

//calculate array length
const arrayLength=Object.keys(readDemnas.features).length;
//console.log(arrayLength);

//breakdown json data
const definePath=readDemnas.features[2100].properties.REGION;
console.log(definePath);

//example download path
const downloadPath=`http://tides.big.go.id/DEMNAS/download.php?download_file=DEMNAS_${definePath}_v1.0.tif`;
//console.log(downloadPath);

//save file from url
const http = require('http');
const fs = require('fs');

for (i=1981; i<2812; i++){
    const checkKalimantan=readDemnas.features[i].properties.REGION;
    if(true){
        const loopPath=readDemnas.features[i].properties.NAMOBJ;
        const loopDownloadPath=`http://tides.big.go.id/DEMNAS/download.php?download_file=DEMNAS_${loopPath}_v1.0.tif`;
        console.log(loopDownloadPath)
    }
}

async function demnasDownloadPath(){
    var j=0;
    var k=0;
    for(i=4729; i<arrayLength; i++){
        const loopPath=readDemnas.features[i].properties.NAMOBJ;
        const loopDownloadPath=`http://tides.big.go.id/DEMNAS/download.php?download_file=DEMNAS_${loopPath}_v1.0.tif`;
        const fileNameExtract=`download/${i}_DEMNAS_${loopPath}_v1.0.tif`;
    }
}

//demnasDownloadPath();






