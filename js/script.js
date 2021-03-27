


// Variabili

var btn = document.getElementById('button') ;
var nameUser = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var priceTotal = document.getElementById('price');
var coupons = ['6454ASD4AS564D','D6AS5D4AS6','D65AS4D65AS4','54SD65ASSA'];
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');
var imgBtn = document.getElementsByClassName('ingredient-image');
var yourBurger=document.getElementById('yourBurger');




// Click add for checked

for(var i = 0 ; i < addBtn.length; i++){
    var add = addBtn[i];

    add.addEventListener('click',
           function(){
               var thisCheckBox = this.previousElementSibling;
            //    console.log(this.previousElementSibling);

               thisCheckBox.checked = ! thisCheckBox.checked;

               
           })
}



// Click btn

btn.addEventListener('click', 

            function(){
                var nameBurger = nameUser.value.trim();
                if(!isNaN(nameBurger) || (nameBurger.length === 1)){
                    alert('Attenzione , non hai inserito un nome per il tuo hamburger!!!');
                }else{
                    // console.log('ok name is ' + nameBurger);
                    var price = 50;

                    yourBurger.innerHTML = 'Name burger is: ' + nameBurger ;

                    for(var i = 0 ; i < ingredients.length; i++){
                        var ingredientCheck = ingredients[i];

                        if(ingredientCheck.checked){

                         price += parseInt(ingredientCheck.value);

                        //  console.log(price);

                        //  console.log(ingredientCheck.value)
                        
                        }
                    }

                    
                var couponCode = coupon.value;

                    if(coupons.includes(couponCode)){
                        // console.log('ok coupon');
                        price -= price * 0.2; 
                        alert('Congratulazioni , codice accettato , hai diritto ad uno sconto del 20%!!!!!');
                    }
                        // console.log('nope coupon');
                        priceTotal.innerHTML = price.toFixed(2);                  
                }                         
            })