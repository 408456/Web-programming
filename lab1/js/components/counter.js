export function updateCartUI() {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        const totalQty = basket.reduce((sum, item) => sum + item.qty, 0);
        cartCount.textContent = totalQty;
    }
}
