var arr = [1,6,2,3,4,5,7,6]

console.log(arr[4])

// if(arr[4] < 10){
//     console.log("angkon")
// }else{
//     console.log("the kow company")
// }

if(arr[1]==arr[arr.length-1]){
    console.log("true")
}else{
    console.log("false")
}

var ages = [16, 18, 20, 15, 22];
var Voters = ages.filter(age => age >= 18);
console.log(Voters);

var anime = ["Naruto", "One Piece", "Attack on Titan", "Death Note"];
var animeWithO = anime.filter(anime => anime.includes("O") || anime.includes("o"));
console.log(animeWithO)