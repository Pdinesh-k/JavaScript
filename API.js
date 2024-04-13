// fetch('https://api.chucknorris.io/jokes/random')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     var joke = data.value;
//     console.log("JOKE",joke);
// })

fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    var data = response.json();
    var joke = data.value;
    console.log("JOKE : ",joke);
})


