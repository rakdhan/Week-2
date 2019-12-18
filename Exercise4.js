var tanggal = 30 // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12 // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2001 // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


if(tahun>1900 && tahun<2100){
    if (tanggal > 0 && tanggal <=31){
        switch(bulan) {
            case 1:   { console.log(tanggal + ' Januari ' + tahun); break; }
            case 2:   { console.log(tanggal + ' Februari ' + tahun);
                        if (tanggal > 29){
                            console.log('Cakupan tanggal bulan Februari hanya sampai 29, mohon ubah kembali tanggal.')
                        } 
                        else if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0 && tanggal > 28){
                            console.log('Cakupan tanggal bulan Februari hanya sampai 28, mohon ubah kembali tanggal.')
                        } break;}
            case 3:   { console.log(tanggal + ' Maret ' + tahun); break; }
            case 4:   { console.log(tanggal + ' April ' + tahun);  
                        if (tanggal > 30){
                            console.log('Cakupan tanggal bulan April hanya sampai 30, mohon ubah kembali tanggal.');
                        } break; }
            case 5:   { console.log(tanggal + ' Mei ' + tahun); break; }
            case 6:   { console.log(tanggal + ' Juni ' + tahun);  
                        if (tanggal > 30){
                            console.log('Cakupan tanggal bulan Juni hanya sampai 30, mohon ubah kembali tanggal.');
                        } break; }
            case 7:   { console.log(tanggal + ' Juli ' + tahun); break; }
            case 8:   { console.log(tanggal + ' Agustus ' + tahun);
                        if (tanggal > 30){
                            console.log('Cakupan tanggal bulan Agustus hanya sampai 30, mohon ubah kembali tanggal.');
                        }  break; }
            case 9:   { console.log(tanggal + ' September ' + tahun); break; }
            case 10:   { console.log(tanggal + ' Oktober ' + tahun); 
                        if (tanggal > 30){
                            console.log('Cakupan tanggal bulan Oktober hanya sampai 30, mohon ubah kembali tanggal.');
                        } break; }
            case 11:   { console.log(tanggal + ' November ' + tahun); break; }
            case 12:   { console.log(tanggal + ' Desember ' + tahun); 
                        if (tanggal > 30){
                            console.log('Cakupan tanggal bulan Desember hanya sampai 30, mohon ubah kembali tanggal.');
                        } break; }
            default:  { console.log('Mohon periksa kembali bulan yang anda tulis.'); }
        }
    }
    else{
        console.log('Cakupan tanggal hanya dari 1 - 31');
    }
}
else{
    console.log('Cakupan tahun hanya dari 1900 - 2100');
}

