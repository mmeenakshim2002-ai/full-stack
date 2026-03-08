// /* Lightweight, robust add-to-cart implementation.
//    Requirements in HTML:
//    - Add-to-cart buttons: <button class="add-to-cart" data-name="Name" data-price="315" data-image="pic1.jpg">Add</button>
//    - Cart container: <ul id="cart-items"></ul>
//    - Total display: <div id="total-price">Total: Rs. 0</div>
//    - Checkout button: <button id="checkout-btn">Checkout</button>
//    - Include this script at end of body.
// */

// let cart = [];

// function initCart() {
//     loadCart();
//     updateCart();
    
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
//             const name = this.getAttribute('data-name');
//             const price = parseFloat(this.getAttribute('data-price'));
//             const image = this.getAttribute('data-image');
            
//             addToCart(name, price, image);
//         });
//     });
// }

// function addToCart(name, price, image) {
//     cart.push({
//         name: name,
//         price: price,
//         image: image
//     });
    
//     saveCart();
//     updateCart();
//     alert(`${name} added to cart!`);
// }

// function removeFromCart(index) {
//     cart.splice(index, 1);
//     saveCart();
//     updateCart();
// }

// function clearCart() {
//     if (confirm('Are you sure you want to clear the entire cart?')) {
//         cart = [];
//         saveCart();
//         updateCart();
//     }
// }

// function updateCart() {
//     const cartItemsList = document.getElementById('cart-items');
//     const totalPriceElement = document.getElementById('total-price');
//     const emptyCartMsg = document.getElementById('empty-cart');
    
//     if (!cartItemsList) return;
    
//     cartItemsList.innerHTML = '';
//     let totalPrice = 0;
    
//     if (cart.length === 0) {
//         if (emptyCartMsg) emptyCartMsg.style.display = 'block';
//         if (totalPriceElement) totalPriceElement.textContent = 'Total: Rs. 0';
//         return;
//     }
    
//     if (emptyCartMsg) emptyCartMsg.style.display = 'none';
    
//     cart.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.className = 'cart-item';
        
//         const img = document.createElement('img');
//         img.src = item.image;
//         img.alt = item.name;
        
//         const info = document.createElement('span');
//         info.textContent = `${item.name} - Rs. ${item.price.toFixed(2)}`;
        
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         removeBtn.className = 'cart-remove';
//         removeBtn.onclick = function(e) {
//             e.preventDefault();
//             removeFromCart(index);
//         };
        
//         li.appendChild(img);
//         li.appendChild(info);
//         li.appendChild(removeBtn);
//         cartItemsList.appendChild(li);
        
//         totalPrice += item.price;
//     });
    
//     if (totalPriceElement) {
//         totalPriceElement.textContent = `Total: Rs. ${totalPrice.toFixed(2)}`;
//     }
// }

// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// function loadCart() {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//         try {
//             cart = JSON.parse(savedCart);
//         } catch (e) {
//             console.error('Error loading cart:', e);
//             cart = [];
//         }
//     }
// }

// const checkoutBtn = document.getElementById('checkout-btn');
// if (checkoutBtn) {
//     checkoutBtn.addEventListener('click', function() {
//         if (cart.length === 0) {
//             alert('Your cart is empty!');
//             return;
//         }
//         alert('Proceeding to checkout...');
//     });
// }

// const clearCartBtn = document.getElementById('clear-cart-btn');
// if (clearCartBtn) {
//     clearCartBtn.addEventListener('click', clearCart);
// }

// document.addEventListener('DOMContentLoaded', initCart);







let cart = [];

function initCart() {
    loadCart();
    updateCart();
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            
            console.log('Adding to cart:', name, price, image); // Debug log
            addToCart(name, price, image);
        });
    });
}

function addToCart(name, price, image) {
    cart.push({
        name: name,
        price: price,
        image: image
    });
    
    saveCart();
    updateCart();
    alert(`${name} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

function clearCart() {
    if (confirm('Are you sure you want to clear the entire cart?')) {
        cart = [];
        saveCart();
        updateCart();
    }
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const emptyCartMsg = document.getElementById('empty-cart');
    
    if (!cartItemsList) return;
    
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    
    console.log('Cart items:', cart); // Debug log
    
    if (cart.length === 0) {
        if (emptyCartMsg) emptyCartMsg.style.display = 'block';
        if (totalPriceElement) totalPriceElement.textContent = 'Total: Rs. 0';
        return;
    }
    
    if (emptyCartMsg) emptyCartMsg.style.display = 'none';
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.padding = '15px';
        li.style.backgroundColor = '#fff';
        li.style.border = '1px solid #ddd';
        li.style.borderRadius = '5px';
        li.style.marginBottom = '10px';
        li.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        
        // Create image container
        const imgContainer = document.createElement('div');
        imgContainer.style.marginRight = '15px';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '5px';
        img.style.border = '1px solid #ddd';
        
        // Handle image load error
        img.onerror = function() {
            this.src = 'placeholder.png'; // Fallback image
            console.log('Image failed to load:', item.image);
        };
        
        imgContainer.appendChild(img);
        
        // Create info container
        const infoContainer = document.createElement('div');
        infoContainer.style.flex = '1';
        
        const nameDiv = document.createElement('div');
        nameDiv.textContent = item.name;
        nameDiv.style.fontSize = '16px';
        nameDiv.style.fontWeight = 'bold';
        nameDiv.style.marginBottom = '5px';
        
        const priceDiv = document.createElement('div');
        priceDiv.textContent = `Rs. ${item.price.toFixed(2)}`;
        priceDiv.style.fontSize = '14px';
        priceDiv.style.color = '#666';
        
        infoContainer.appendChild(nameDiv);
        infoContainer.appendChild(priceDiv);
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'cart-remove';
        removeBtn.style.padding = '8px 10px';
        removeBtn.style.backgroundColor = '#ff6b6b';
        removeBtn.style.color = 'white';
        removeBtn.style.border = 'none';
        removeBtn.style.borderRadius = '4px';
        removeBtn.style.cursor = 'pointer';
        removeBtn.style.marginLeft = '10px';
        
        removeBtn.onclick = function(e) {
            e.preventDefault();
            removeFromCart(index);
        };
        
        li.appendChild(imgContainer);
        li.appendChild(infoContainer);
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        
        totalPrice += item.price;
    });
    
    if (totalPriceElement) {
        totalPriceElement.textContent = `Total: Rs. ${totalPrice.toFixed(2)}`;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}
function registerUser(){

fetch("http://localhost:8080/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

fullname:document.getElementById("fullname").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value

})

})

.then(response => response.json())
.then(data => {
alert("Account Created Successfully");
});

}


function registerUser(){

fetch("http://localhost:8080/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

fullname:document.getElementById("fullname").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value

})

})

.then(response => response.json())
.then(data => {
alert("Account Created Successfully");
});

}



const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Proceeding to checkout...');
    });
}

const clearCartBtn = document.getElementById('clear-cart-btn');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
}

document.addEventListener('DOMContentLoaded', initCart);


function registerUser(){

const userData = {
fullname:document.getElementById("fullname").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value
};

fetch("http://localhost:8080/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(userData)

})

.then(response => response.json())
.then(data => {
alert("Account Created Successfully");
console.log(data);
})

.catch(error=>{
console.error("Error:",error);
});

}


