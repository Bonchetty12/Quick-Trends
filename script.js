let cart = /*JSON.parse(localStorage.getItem("cart")) ||*/ [];
function addToCart(name, price, image){
    cart.push({
        name:name,
        price:price,
        image:image
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + "added to cart!");
}
function placeOrder(event){
    event.preventDefault();
    alert("Order placed sucessfully! Thank you for shopping with QuickTrends.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}