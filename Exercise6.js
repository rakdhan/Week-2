
console.log('SOAL 1');
////// LOOPING WHILE ////////
var count = 0
var hitung = 22
console.log('LOOPING PERTAMA');
while (count < 20) {
    count += 2
    console.log(count + ' - I love coding');
}
console.log('LOOPING KEDUA');
while (hitung > 0) {
    hitung -= 2
    console.log(hitung + ' - I will become fullstack developer');
}
console.log('\n');



///////// LOOPING FOR /////////
console.log('SOAL 2');
console.log('LOOPING PERTAMA');

for (let count2 = 1; count2 <= 20; count2++) {
    console.log(count2 + ' - I love coding');
}
console.log('LOOPING KEDUA');

for (let hitung2 = 20; hitung2 >= 1; hitung2--) {
    console.log(hitung2 + ' - I will become fullstack developer');
}
console.log('\n');



//////////// GANJIL GENAP ///////////
console.log('SOAL 3');
console.log('PENENTUAN GANJIL-GENAP');
var count3 = -1
var hitung3 = 0
while (hitung3 < 100 && count3 <= 100) {
    count3+=2
    hitung3+=2
    console.log('GANJIL')
    console.log('GENAP')
}
console.log('');
console.log('PERULANGAN KELIPATAN 3');

for (let i = 1; i <= 100; i+=2) {
    if (i % 3 === 0) {
        console.log(i +' KELIPATAN 3');
    }  
}

console.log('100 kali perulangan kelipatan 3 selesai.' )

console.log('');
console.log('PERULANGAN KELIPATAN 6');

for (let i = 1; i <= 100; i+=5) {
    if (i % 6 === 0) {
        console.log(i +' KELIPATAN 6');
    }  
}


console.log('');
console.log('PERULANGAN KELIPATAN 10');

for (let i = 1; i <= 100; i+=9) {
    if (i % 10 === 0) {
        console.log(i +' KELIPATAN 10');
    }  
}

// console.log('100 kali perulangan kelipatan 10 selesai.' )

