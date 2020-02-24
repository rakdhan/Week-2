// Pilihlah nama keren yang cocok untuk peranmu! //
// Pilihlah peran yang diantaranya adalah: Ksatria, Tabib, Penyihir//
// 'Mohon nama diisi!' 
// "Halo " + nama + ", Pilih peranmu untuk memulai game!"
// ("Selamat datang di Dunia Proxytia, " + nama)
// (Halo ksatria Raka, kamu dapat menyerang dengan senjatamu!" ) //kstria\
// ("Halo ..., kamu akan membantu temanmu yang terluka." ) // tabib
// ("Halo ..., ciptakan keajaiban yang membantu kemenanganmu!") // penyihir

var nama = 'AAAAA'
var peran = 'Tabib'

if (nama === '') {
    console.log( 'Mohon kolom nama diisi')
} 
else if (peran === '') {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
}  
else{
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    if (peran === 'Ksatria') {
        console.log('Halo ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    }
    else if (peran === 'Tabib') {
        console.log('Halo tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
    }
    else if (peran === 'Penyihir') {
        console.log('Halo penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }
}




