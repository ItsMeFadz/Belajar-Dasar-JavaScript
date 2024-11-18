const price = 10000;
const payment = 5000;

// 1. kalau uangnya pas 
if (payment === price) {
    console.log('makasih udah bayar pake uang pas');
} else if (payment > price) {
const chance = payment - price;

console.log(`Terimakasih, kembalian anda ${chance}`);
}else {
    const uangkurang = price - payment;
    console.log(`Maaf uang anda kurang ${uangkurang}`)
}

