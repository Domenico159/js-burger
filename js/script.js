


// Variabili

var btn = document.getElementById('button') ;
var nameUser = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');






// Click btn

btn.addEventListener('click', 

            function(){
                var nameBurger = nameUser.value.trim();
                if(!isNaN(nameBurger) || (nameBurger.length === 1)){
                    alert('Attenzione , non hai inserito un nome per il tuo hamburger!!!');
                }else{
                    // console.log('ok name is ' + nameBurger);
                    var price = 50;
                }
            })