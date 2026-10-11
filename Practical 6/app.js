let cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 800, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 }
];

function addToCart(product) {
    cart.push(product);
}

function removeItem(id) {
    cart = cart.filter(product => product.id !== id);
}

function getProductNames() {
    return cart.map(product => product.name);
}

function calculateTotal() {
    return cart.reduce(
        (total, product) => total + product.price * product.quantity, 0);
}

console.log("Initial Cart:");
console.log(cart);

addToCart({
    id: 4,
    name: "Headphones",
    price: 2000,
    quantity: 1
});

console.log("\nCart after adding Headphones:");
console.log(cart);

removeItem(2);

console.log("\nCart after removing Mouse:");
console.log(cart);

console.log("\nProduct Names:");
console.log(getProductNames());

console.log("\nTotal Price: ₹" + calculateTotal());

let nextId = 5;

function renderCart() {
    let tbody = document.getElementById("cartTableBody");
    tbody.innerHTML = "";

    cart.forEach(product => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>₹${product.price * product.quantity}</td>
            <td><button class="remove-btn" onclick="handleRemove(${product.id})">Remove</button></td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById("namesList").innerText = getProductNames().join(", ");
    document.getElementById("totalPrice").innerText = calculateTotal();
}

function handleAdd() {
    let name = document.getElementById("pName").value.trim();
    let price = parseInt(document.getElementById("pPrice").value);
    let qty = parseInt(document.getElementById("pQty").value);

    if (!name || isNaN(price) || isNaN(qty)) {
        alert("Please fill all fields correctly.");
        return;
    }

    addToCart({ id: nextId, name: name, price: price, quantity: qty });
    nextId += 1;

    document.getElementById("pName").value = "";
    document.getElementById("pPrice").value = "";
    document.getElementById("pQty").value = "1";

    renderCart();
}

function handleRemove(id) {
    removeItem(id);
    renderCart();
}

renderCart();
