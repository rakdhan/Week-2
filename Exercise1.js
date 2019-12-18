
//////// NEWTON SECOND LAW ///////////
console.log('SOAL NOMOR 1:');
//Hitung nilai Besar Gaya !

//STORE "gaya" without any value
//STORE "massa" with number
//STORE "percepatan" with number
//SET "gaya" equal to "massa" times "percepatan"
//DISPLAY "gaya" N

var gaya
var massa = 600
var percepatan = 2
gaya = massa * percepatan
console.log("Besar Gaya adalah: " + gaya + " N")
console.log('');


/////////// TAHUN KABISAT  ////////////
console.log('SOAL NOMOR 2:');
//Tahun apakah ini?

//STORE "tahun" with any number
//IF "tahun" % 4 === 0 AND "tahun" % 100 !== 0
//DISPLAY "TahunKabisat"
//ELSE IF "tahun" % 4 === 0 AND tahun % 100 === 0 AND "tahun" % 400 === 0
//DISPLAY "TahunKabisat"
//ELSE 
//DISPLAY "BukanKabisat"
//ENDIF
 
var tahun = 2019
if (tahun % 4 === 0 && tahun % 100 !== 0 ){
    console.log(tahun + " bukan Kabisat")
}
    else if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0){
        console.log(tahun + " tahun Kabisat")
    }
else {
    console.log(tahun + ' bukan Kabisat')
}
console.log('');


/////////// LAUNDRY DAY /////////////
console.log('SOAL NOMOR 3:');
//Cuci semua pakaian! (20)

//STORE "jumlahpakaian" with 20
//STORE "count" with 0
//WHILE "count" less than "jumlahpakaian"
//INCREMENT "count" with 1
//IF "count" equal to 20
//DISPLAY "Pakaian sedang dicuci"
//ENDWHILE 

var jumlahpakaian = 20
var count = 0
while (count < jumlahpakaian) {
    console.log("Mesin cuci belum berputar. Mohon tambah satu pakaian: " + count)
    count++
    if(count === jumlahpakaian){
      console.log("Pakaian yang sedang dicuci: " + count)
    }
}
console.log('');


////////////// POTONG KUKU ////////////
console.log('SOAL NOMOR 4:');
console.log('Mohon maaf ilmu belum sampai :)');
//Cek Panjang Kuku Siswa!

//STORE "jumlahMurid" with 40
//STORE "countCheck" with 0
//STORE "kukuMurid"
//WHILE "countCheck" less than "jumlahMurid"
//IF "kukuMurid" equal to "panjang" 
//DISPLAY "diHukum"
//ELSE 
//DISPLAY "diPuji"
//ENDIF
//INCREMENT "countCheck" with 1
//ENDWHILE

// var PanjangKuku = 0
// var Hukum
// var Puji
// if (PanjangKuku > 2) {
//     console.log("Beri" + Hukum)
// }
//     else{
//         console.log("Beri" + Puji)
//     }