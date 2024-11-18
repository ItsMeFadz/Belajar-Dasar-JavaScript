// function sayhHello() {
//     console.log('Hello world');
// }

// function sayhGoodbye() {
//     sayhHello();
//     console.log('Say Goodbay');
// }

// parameter yang wajib diisi harus ditaruh di depan (contoh age = 0)
function getUser(usernames, age) {
    if (typeof usernames === "string" && typeof age === "number") {
        if (age > 80) {
            console.log('mambu lema');
        } else if (typeof usernames !== "string") {
            console.log("username harus bertype string");
        } else if (typeof age !== "number") {
            console.log("umur harus bertype number");
        } else {
            console.log("tidak terdefiniskan")
        }
        // const usernames = ('Fadhil')
        console.log(`Hello, ${usernames}`);
        console.log(`Umur anda adalah ${age} tahun`);

    }
}

function repeatGreetings(numberOfTimes =0){
    for(let i = 0; i < numberOfTimes; i++){
        console.log("hello")
    }

}

function greeting(){
    return "Hello Wolrd"; // menggunakan return agar mengembalikan value agar tidak tampil undifined
}

function add(x=0, y=0) {
    return x + y;
}

function divide(x,y) {
    return x / y;
}

function names(value) {
    const nameVar = [value]
    return nameVar
}

console.log(names(["budi", "dayat", "hamid", "dodi", "farhan"]))

// usernames = ['Fadhil', 'Alex'];
// getUser("Fadil", 40);
// repeatGreetings(5);
// greeting();
// console.log(add(3, 4) + divide(4,2));

