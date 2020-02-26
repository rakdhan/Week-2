// TUGAS 1 
console.log('TUGAS 1')
function shoutOut() {
    return 'Halo Function!'
}
console.log (shoutOut());
console.log('');


// TUGAS 2 
console.log('TUGAS 2')
function hasilKali(num1, num2) {
    return num1 * num2
}
var result = hasilKali(5,6);
console.log(result)
console.log('');



// TUGAS 3 
console.log('TUGAS 3')
function processSentence(name, age, address, hobby) {
    return ( 'Nama saya ' + name + ', umur saya ' + age + 'tahun, alamat saya di' + address + ', dan saya punya hobi yaitu ' + hobby + '!')
    }
    var fullSentence = processSentence("Agus", 30, " Jln. Malioboro, Yogjakarta", "gaming");
    console.log(fullSentence);