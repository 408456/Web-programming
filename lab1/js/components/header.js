export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("container");

    // Логотип
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "seq0ence";
    logo.addEventListener("click", () => {
        window.location.hash = "";
        navigation("");
    });

    // // Навигация
    const nav = document.createElement("nav");
    nav.classList.add("navigation");

    // Корзина
    const cartLink = document.createElement("a");
    cartLink.href = "#basket";
    cartLink.classList.add("cart-header");
    cartLink.innerHTML = `<img src="./icons/basket.png" alt="Корзина"><span id="cart-count">0</span>`;
    cartLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "basket";
        navigation("basket");
    });

    nav.append(cartLink);
    container.append(logo, nav);
    header.append(container);

    return header;
}
