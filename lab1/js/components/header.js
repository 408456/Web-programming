import { navigation } from "../main.js"

export function getHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header_container")

    const nav = document.createElement("nav")
    nav.classList.add("navigation")

    const links = [
        { text: "Главная страница", page: "" }
    ]

    links.forEach(linkData => {
        const link = document.createElement("a")
        link.href = `#${linkData.page}`
        link.classList.add("btn")
        link.textContent = linkData.text

        link.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.hash = linkData.page
            navigation(linkData.page)
        })

        nav.append(link)
    })

    const cartLink = document.createElement("a");
    cartLink.href = "#basket";
    cartLink.classList.add("cart-header");
    cartLink.innerHTML = `<img src="./icons/basket.png" alt="Корзина"><span id="cart-count">0</span>`;

    cartLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "basket";
        navigation("basket");
    });


    nav.append(cartLink)

    container.append(nav)
    header.append(container)
    return header
}
