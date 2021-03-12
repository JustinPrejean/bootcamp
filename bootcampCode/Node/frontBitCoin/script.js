let price = document.getElementById("price");
let submit = document.getElementById("submit");
// let usd = document.getElementById("usd")
// let gbp = document.getElementById("gbp")
// let eur = document.getElementById("eur")
let answers = document.getElementsByName("currency")

let url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
let currency = "usd";




fetch(url)
.then(response=>{
    if(!response.ok){
        throw Error("Receiving issue")
    }
    return response.json()
})
.then(data=>{
    price.innerHTML = `$${data.bpi.USD.rate_float.toFixed(2)}`

    submit.addEventListener("click", ()=>{
        answers.forEach(answer =>{
            if(answer.checked){
                currency = answer.value;
                if(currency == "eur") {
                    price.innerHTML = `€${data.bpi.EUR.rate_float.toFixed(2)}`
                     } else if(currency == "gbp"){ 
                        price.innerHTML = `£${data.bpi.GBP.rate_float.toFixed(2)}`
                    }else{ 
                        price.innerHTML = `$${data.bpi.USD.rate_float.toFixed(2)}`
                    } 
        }})
        event.preventDefault();
    })

    
    console.log(currency)
    
})
.catch(err=>console.log(`I am the error: ${err}`))




// _fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(
//           "It's not your fault but it definitely might be the receiving Response"
//         );
//       }
//       return response.json();
//     })
//     .then((data) => {
//       let newLyrics = data.lyrics.replace(/\n/g, "<br>");
//       res.render("lyricResults.ejs", { lyrics: newLyrics });
//     })
//     .catch((err) => {
//       console.log(`I am the error: ${err}`);
//       res.render("error.ejs", { error: "No matches found." });
//     });
// });