const products = [
    { id:1, name:"Keyboard", price:25.50 },
    { id:2, name:"Mouse", price:12.00 },
    { id:3, name:"Monitor", price:149.99 },
    { id:4, name:"USB Hub", price:18.75 },
  ];
  let cart = {};
 
  document.getElementById('products').innerHTML = products.map(p =>
    `<div class="card">
      <h2>${p.name}</h2>
      <p>$${p.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${p.id})">Add to cart</button>
    </div>`
  ).join('');
 
  function addToCart(id) { cart[id] = (cart[id] || 0) + 1; renderCart(); }
  function removeFromCart(id) { if (--cart[id] <= 0) delete cart[id]; renderCart(); }
 
  function renderCart() {
    let total = 0, count = 0;
    document.getElementById('cartItems').innerHTML = Object.entries(cart).map(([id, qty]) => {
      const p = products.find(p => p.id == id);
      const lineTotal = p.price * qty;
      total += lineTotal; count += qty;
      return `<div class="cart-item">
        <span>${p.name} x ${qty}</span>
        <div><span>$${lineTotal.toFixed(2)}</span>
        <button class="remove-btn" onclick="removeFromCart(${p.id})">-</button></div>
      </div>`;
    }).join('');
    document.getElementById('cartTotal').textContent = total.toFixed(2);
    document.getElementById('cartCount').textContent = count;
  }