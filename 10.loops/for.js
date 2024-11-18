// loop -> if condition yang berulang selama condition masih true

// segement 1 -> dieksekusi sebelum loop jalan
// segement 2 -> CONDITION (True|False)
// segement 3 -> dieksekusi di akhir sebuah loop
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         // break;// berhentiin loop
//         continue; // berhentiin perulangan saat ini (3) dan lanjut
//     }
//     console.log("Masuk Loop");
//     console.log(`i = ${i}`);

// }

for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);

    for(let k = 0; k < 3; k++){
        console.log(`k = ${k}`);
    }
}