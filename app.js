'use strict';
let cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartDOM = document.querySelector('.cart');
const clearBtn = document.querySelector('.clear-button');


addToCartButtons.forEach(function(addToCartButton){
    addToCartButton.addEventListener('click', () => {
        const productDOM = addToCartButton.parentElement;
        
        

        const product = {
            name: productDOM.querySelector('.product-name').innerText,
            content: productDOM.querySelector('.content').innerText,
            price: productDOM.querySelector('.product-price').innerText,
            quantity: 1
        };
        
        const inCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);
        
        if(inCart === false){

            cartDOM.insertAdjacentHTML('beforeend', `
            <div class="indi-cart">
            <h5 class = "cart-item-name">${product.name}</h5>
            <p class = "cart-item-content">${product.content}</p>
            <h5><span class="product-price">${product.price}</span> BDT</h5>
            
            <button class="btn btn-danger btn-sm  remove-item">X</button>               
            </div>
            `);
            addToCartButton.innerText = 'In Cart';
            cart.push(product);
            addToCartButton.disabled = true;

            const cartItemsDOM = cartDOM.querySelectorAll('.indi-cart');

            cartItemsDOM.forEach(cartItemDOM =>{

                if (cartItemDOM.querySelector('.cart-item-name').innerText === product.name){

                    cartItemDOM.querySelector('.remove-item').addEventListener('click', () => {
                    cart.forEach(cartItem => {
                        if (cartItem.name === product.name) {
                          //cartItemDOM.classList.add('cart-item-removed');
                          cartItemDOM.remove();
                          cart = cart.filter(cartItem => cartItem.name !== product.name);
                          addToCartButton.innerText = 'Add To Cart';
                          addToCartButton.disabled = false;
                        }
                      });
                    });
                    
                }
            });
            clearBtn.addEventListener('click', clearCart);

            function clearCart(e){
                let itemCart = e.target.parentElement.parentElement.children[1];
                itemCart.innerHTML = '';
                cart = cart.filter(cartItem => cartItem.name !== product.name);
                addToCartButton.innerText = 'Add To Cart';
                addToCartButton.disabled = false;
                
            }
            
        
           
       }
       
               
        
        
        

    });

    
    
});

// clearBtn.addEventListener('click', clearCart);

// function clearCart(e){
//     let itemCart = e.target.parentElement.parentElement.children[1];
//     itemCart.innerHTML = '';
    
// }


