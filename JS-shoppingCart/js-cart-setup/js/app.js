// show cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart')

    cartInfo.addEventListener('click', () => {
        cart.classList.toggle('show-cart')
    })
})();

// add items to the cart

(function() {
    const cartBtn = document.querySelectorAll('.store-item-icon')
    cartBtn.forEach(function(btn){
        btn.addEventListener('click', (event) => {
            if(event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;              
                let pos = fullPath.indexOf('img') + 3;
                let partialPath = fullPath.slice(pos);
                
                const item = {};
                item.img = `img-cart${partialPath}`
                let name = event.target.parentElement.parentElement.nextElementSibling;
                

                console.log(item)
                
            }
        })
    })

})();