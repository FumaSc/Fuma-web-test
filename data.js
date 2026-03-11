const namaSaya = "Fuma";
let umurSaya = 17;

function tampilkanInfo() {
    if (umurSaya == 17){
        // Kondisi Pertama
        console.log("Anda Remaja");
    } else {
        // Kondisi Lain
        console.log("Anda Bukan Remaja");
    }
    console.log(`Nama saya ${namaSaya} dan umur saya ${umurSaya} tahun`);
}

tampilkanInfo();