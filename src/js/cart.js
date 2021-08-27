let btnCloseCart = document.querySelector('.cart-header-button');
let btnOpenCart = document.querySelector('.icon-nav');
let cartModal = document.querySelector('.cart');
let body = document.querySelector('body');
let btnsAdd = body.querySelectorAll('.card-btn');
let containerItemsSelected = document.querySelector('.cart-items-selected')

btnsAdd.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        addItemToCart(e);
    })
})

function addItemToCart(e){
    let card = e.target.parentElement.parentElement.parentElement;
    let id = card.id;
    let img = card.querySelector('.card-img').src;
    console.log(card)
    let title = card.querySelector('.card-title').innerText;
    let price = card.querySelector('.card-price').innerText.replace('$','');

    let content = 
        `<i class="flaticon-delete card-item-remove"></i>
        <img class="cart-item-img" src=${img} alt="${title}">
        <div class="cart-item-info">
            <div class="cart-item-title">${title}</div>
            <div class="cart-item-price">$${parseFloat(price).toFixed(2)}</div>
            <div class="cart-item-btns">
                <button>-</button>
                <input type="number" name="item-quantity" id="item-quantity">
                <button>+</button>
            </div>
        </div>` 
    let element = document.createElement('div');
    element.classList.add('cart-item-card');
    element.setAttribute('itemID', id);
    element.innerHTML = content;
    containerItemsSelected.append(element);
}


btnCloseCart.addEventListener('click', function(){
    cartModal.classList.add('cart-hidden');
})

btnOpenCart.addEventListener('click', function(){
    cartModal.classList.remove('cart-hidden');
})

body.addEventListener('click', function(e){
    deleteItem(e);
})

function deleteItem(e){
    let element = e.target;
    let isBtnDelete = element.classList.contains('flaticon-delete');
    if(isBtnDelete) element.parentElement.remove();
}
