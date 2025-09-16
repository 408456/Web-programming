export function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const totalQty = basket.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;
}