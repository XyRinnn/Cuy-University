const nama = "Rian";
let usia = 17;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } else if (usia > 17 && usia < 31) {
        generasi = "generasi dewasa";
    } else if (usia > 30) {
        generasi = "generasi tua";
    } else if (usia > 2 && usia < 11) {
        generasi = "generasi anak anak" ;
    } else {
        generasi = "generasi bayi";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata ();