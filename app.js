let numberCal = [24, 98, 325, 65, 12, 9, 82, 785, 65, 32];
let sayilarinToplami = 0;
//Karekok
console.log("Sayilarin Karekoku");
for (let sayac = 0; sayac < numberCal.length; sayac++)
 {
    let sayilarinKareKoku = numberCal[sayac];
    console.log(Math.sqrt(sayilarinKareKoku));
};
//Karesi 
console.log("Sayilarin Karesi")
for (let sayac = 0; sayac < numberCal.length; sayac++)
 {
    let sayilarinKaresi = numberCal[sayac] * numberCal[sayac];
    console.log(sayilarinKaresi);
};
//Sayilarin Toplami
for (let sayac = 0; sayac < numberCal.length; sayac++)
 {
    sayilarinToplami += numberCal[sayac];

};
console.log(`Sayilarin Toplami= ${sayilarinToplami}`);
//Sayilarin Ortalamasi
let sayilarinOrtalamasi = sayilarinToplami / 10;
console.log(`Sayilarin Ortalamasi= ${sayilarinOrtalamasi}`);
//Buyuk ve Kucuk Sayilar
var enBuyuk = Math.max.apply(Math, numberCal);
var enKucuk = Math.min.apply(Math, numberCal);
console.log(`En buyuk sayi= ${enBuyuk}`);
console.log(`En kucuk sayi= ${enKucuk}`);


/* let kareKok=numberCal.map(function (n) {
    return Math.sqrt(n);
    
})
console.log(kareKok);

let sayilarinKaresi=numberCal.map(function (n) {
    return n*n;
    
});
console.log(sayilarinKaresi); */