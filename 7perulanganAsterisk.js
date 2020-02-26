// ASTERISK 

for (let i = 0; i < 5; i++) {
    console.log('*');    
}
console.log()

// NESTED LOOPING 
for (let i = 0; i < 5; i++) {
    let bintang=''
    for (let j = 0; j < 5; j++) {
      bintang += '*'
   }
   console.log(bintang)
}
console.log()

// NESTED LOOPING (bintang berurut)
for (let i = 0; i < 5; i++) {
    let bintang=''
    for (let j = 0; j <= i; j++) {
      bintang += '*'
   }
   console.log(bintang)
}