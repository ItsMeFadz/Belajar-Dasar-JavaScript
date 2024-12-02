const users = ["Fadil", "Sasuke", "Doraemon", "Faqih", "Fatin"];

// for (let i = 0; i < users.length; i++) {
//     const currentUsername = users[i];
//       if (currentUsername.length < 5) {
//         console.log("Selamat datang :"+currentUsername);
//       }
//   }

// users adalah string, index adalah number
// users.forEach((users, index) => {
//   if (users.length < 5) {
//     console.log("selamat Datang :" + users);
//   }

// console.log(`Index : ${index}, Username ${users}`);
// });


// const findUsername = users.find((username) => username.length === 8);
// const findUsername = users.find((username) => {
//     return username.length === 8;
// });

// const filterUsername = users.filter((username, index) => {
//     return username.length > 5;
// });
// console.log(filterUsername);

// function nameArray(value) {
//   const nameIndx = value.map((newName) => newName[0]);
//   return nameIndx;
// }

// console.log(nameArray(["budi", "dayat", "hamid", "dodi", "farhan"]));

// function nameArray(value) {
//     const nameIndx = value.filter((newName)=>newName[0]!=="a");
//     return nameIndx;
//   }
 
//   console.log(nameArray(["asus","lenovo","acer","hp","axioo"]));

// let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];

// let gpu = [4070, 4090, 4050, 4080, 4060];


// console.log(`${laptop} dengan gpu ${gpu}`);

function laptopGpu(laptop, gpu) {
    // Mengurutkan kedua array
    let sortedLaptop = laptop.sort(); // Urutkan array laptop secara alfabetis
    let sortedGpu = gpu.sort((a, b) => a - b); // Urutkan array GPU secara numerik

    // Gabungkan laptop dan GPU menjadi format yang diinginkan
    let result = sortedLaptop.map((laptopName, index) => {
        return `{${laptopName} dengan gpu ${sortedGpu[index]}}`;
    });

    return result;
}

let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];
let gpu = [4070, 4090, 4050, 4080, 4060];

console.log(laptopGpu(laptop, gpu));
