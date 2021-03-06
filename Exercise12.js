////////// KONVERSI MENIT /////////////
// Diberikan sebuah function konversiMenit(input) 
// yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam input. 
// Function akan me-return string waktu dalam format jam:input berdasarkan input tersebut. 
// Contoh, jika input adalah 63, maka function akan me-return "1:03".

function konversiMenit(input) {
    // you can only write your code here!
 if (input>60) {
     let jam = Math.trunc(input / 60)
    //  console.log(jam + " jam");
     let minute = input - jam * 60
    //  console.log(minute + 'menit');
     if (minute !== 0 && minute<10) {
        return jam +':0' + minute
        }
        else if (minute === 0) {
            return jam + ":00"
        }
        else {
            return jam + ":" + minute
     }
 }
 else if(input>10){
     return'0:' + input
    }
     else {
         return '0:0' + input
        }
}
//   TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  console.log(konversiMenit(9)); // 0:09