// https://www.thecocktaildb.com/api.php

$('button').on('click', ()=>{
    $('#drinkName').empty()
    $('#displayDrinkImage').empty()
    $('#displayInstructions').empty()
    $('#ingredientDisplay').empty()
    let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data => {
        let {strDrink, strDrinkThumb, strInstructions} = data.drinks[0]
        $('#drinkName').append(strDrink);
        $('#displayDrinkImage').attr('src', strDrinkThumb)
        $('#displayInstructions').append(strInstructions)
        let count = 1;
        while(data.drinks[0][`strIngredient${count}`]){
            let ingredient = data.drinks[0][`strIngredient${count}`]
            let measurements = data.drinks[0][`strMeasure${count}`]
            $('#ingredientDisplay').append(`
                <div class="thumb_container col-lg-2 col-xs-4">
                    <img class='thumb' src="https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png" alt="" srcset="">
                    <p>${measurements} ${ingredient}</p>    
                </div>
            `)
            count ++
        }
    })
    .catch(error => console.error('Error from network: ', error))
})