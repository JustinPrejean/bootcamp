let image = document.getElementById('pic')
image.setAttribute("src", "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg")

let btn = document.getElementById('btn')
// TODO: alter the url in order to force a network error
const url = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener("click", ()=>{
    fetch(url)
    .then(response => {
        console.log(response)
        // console.log(response.json())
        if(!response.ok){ // TODO: toggle the bang to simulate a fetch error
            throw Error(response.statusText)
        }
        return response.json();
    })
    .then(data => {
        image.setAttribute("src", data.message)
    })
    .catch(error => console.error('Error from network: ', error))
})