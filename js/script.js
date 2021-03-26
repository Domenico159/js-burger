


// Variabili

var btn = document.getElementById('button') ;
var nameUser = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var priceTotal = document.getElementById('price');






// Click btn

btn.addEventListener('click', 

            function(){
                var nameBurger = nameUser.value.trim();
                if(!isNaN(nameBurger) || (nameBurger.length === 1)){
                    alert('Attenzione , non hai inserito un nome per il tuo hamburger!!!');
                }else{
                    // console.log('ok name is ' + nameBurger);
                    var price = 50;

                    for(var i = 0 ; i < ingredients.length; i++){
                        var ingredientCheck = ingredients[i];

                        if(ingredientCheck.checked){

                         price += parseInt(ingredientCheck.value);

                        //  console.log(price);

                        //  console.log(ingredientCheck.value)
                        
                        }
                    }

                    priceTotal.innerHTML = price.toFixed(2);
                }                         
            })