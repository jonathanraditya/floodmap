//Konversi Koordinat ke format Rico
const kiriBawahIndonesia = {
    'lintang': -(10+(59 / 60)+(14.9 / 3600)),
    'bujur': 95+(40.7 / 3600)
}
const kiriAtasIndonesia = {
    'lintang': 5+(43 / 60)+(26.4 / 3600),
    'bujur': 95+(40.7 / 3600)
}
const kananBawahIndonesia = {
    'lintang': -(10+(59 / 60)+(14.9 / 3600)),
    'bujur': 141+(1 / 60)+(9.5 / 3600)
}
const kananAtasIndonesia = {
    'lintang': 5+(33 / 60)+(41.3 / 3600),
    'bujur': 141+(1/60)+(9.5/3600)
}

let panjangIndonesia=kananAtasIndonesia['bujur']-kiriAtasIndonesia['bujur']
let lebarIndonesia=kananAtasIndonesia['lintang']-kananBawahIndonesia['lintang']

console.log(panjangIndonesia, lebarIndonesia)

//Koefisien
const bagiPanjang=130
const bagiLebar=44

let hasilKoordinat=[]
for (i=0; i<bagiPanjang; i++){
    for (j=0; j<bagiLebar; j++){
        calcBujur=kiriAtasIndonesia['bujur']+i/bagiPanjang
        calcLintang=kiriBawahIndonesia['lintang']+j/bagiLebar
        mergeResult=`${calcBujur}, ${calcLintang}`
        //print(calcBujur,',', calcLintang, '\n', sep="")
        //hasilKoordinat=hasilKoordinat+[mergeResult]
        //hasilKoordinat.push(mergeResult)
        console.log(mergeResult)
    }
}

//console.log(hasilKoordinat)
    
        