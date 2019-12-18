var nama = "Raka" // Pilihlah nama keren yang cocok untuk peranmu! //
var peran = "Tabib" // Pilihlah peran yang diantaranya adalah: Ksatria, Tabib, Penyihir//
if (nama==="") {
    console.log("Mohon nama diisi!")    
}
else if (peran === "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
}
else { 
  if (peran === "Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!" )
    }
    else if (peran === "Tabib") {
        console.log("Selamat datang di Dunia Proxytia, " + nama)
        console.log("Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka." )
    }
    else if (peran === 'Penyihir') {
        console.log("Selamat datang di Dunia Proxytia, " + nama)
        console.log("Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!" )
    }
}
