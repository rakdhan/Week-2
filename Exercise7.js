console.log('SOAL 1');
////// ASTERISK ////////

for (let rows1 = 0; rows1 < 5; rows1++) {
    console.log('*');    
}



console.log('SOAL 2');
////// NESTED LOOPING ////////

for (let i = 0; i < 5; i++) {
    let bintang=''
    for (let j = 0; j < 5; j++) {
      bintang += '*'
   }
   console.log(bintang)
}



console.log('SOAL 3');
////// TANGGA NESTED LOOPING ////////

for (let i = 0; i < 5; i++) {
    let bintang=''
    for (let j = 0; j <= i; j++) {
      bintang += '*'
   }
   console.log(bintang)
}

// // var str = 'Budi\nBeda\nBedu'
// var str = ''
// var names = 'Budi Beda Bedu'
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === ' ') {
//             str += '\n';
//         }else
//             str += names[i];
//         }
//         console.log(str);
