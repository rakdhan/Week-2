// ///////// LOGIC X & 0 /////////
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
// dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    var countx = 0
    var counto = 0
    for (let i = 0; i < str.length; i++) {
        // console.log(i);
        // console.log(str[i])
        if (str[i]==='x') {     
            countx++   
        }
        else {
            counto++  
        }
    }
    return counto === countx
    // if (countx === counto) {
    //         return true
    //     }
    // else {
    //         return false
    //     }
    //     console.log(countx);
    //     console.log(counto);
}

    // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  