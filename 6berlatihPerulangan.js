// BY WHILE //
console.log('LOOPING PERTAMA')
i=0
while (i<20) {
    i+=2
    console.log(i + ' - i love coding')
}

console.log('LOOPING KEDUA')
j=22
while (j>2) {
    j-=2
    console.log(j + ' - I will become fullstack developer')
}
console.log()

// BY FOR //
console.log('LOOPING PERTAMA')
for (let i = 1; i <= 20; i++) {
console.log(i + ' - i love coding')    
} 
console.log('LOOPING KEDUA')
for (let i = 20; i >= 1; i--) {
console.log(i + ' - i will become fullstack Developer')    
}

/// GANJIL GENAP ///
console.log('SOAL 3');
console.log('PENENTUAN GANJIL-GENAP');
var jil = -1
var nap = 0
while (nap < 100 && jil <= 100) {
    jil+=2
    nap+=2
    console.log('GANJIL')
    console.log('GENAP')
}
console.log()

console.log('PERULANGAN KELIPATAN 3');
for (let i = 1; i <= 100; i+=2) {
    if (i % 3 === 0) {
        console.log(i +' KELIPATAN 3');
    }  
}
console.log()

console.log('PERULANGAN KELIPATAN 6');
for (let i = 1; i <= 100; i+=5) {
    if (i % 6 === 0) {
        console.log(i +' KELIPATAN 6');
    }  
}
console.log()

console.log('PERULANGAN KELIPATAN 10');
for (let i = 1; i <= 100; i+=9) {
    if (i % 10 === 0) {
        console.log(i +' KELIPATAN 10');
    }  
}





