import { navigation } from "../main.js"

export function getProductCard(title, price, imgUrl) {
    const item = document.createElement("li")
    item.classList.add("product-list_item")

    // Картинка товара
    const image = document.createElement("img")
    image.src = imgUrl
    image.alt = title
    image.classList.add("product-img")

    // Заголовок и цена
    const productTitle = document.createElement("h2")
    productTitle.classList.add("product-list_title")
    productTitle.textContent = title

    const productPrice = document.createElement("strong")
    productPrice.classList.add("product-list_price")
    productPrice.textContent = `${price} руб`

    // Кнопка добавления в корзину
    const addBasket = document.createElement("button")
    addBasket.classList.add("btn")
    addBasket.textContent = "В корзину"
    addBasket.addEventListener("click", () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || []
        basket.push({ title, price, imgUrl })
        localStorage.setItem("basket", JSON.stringify(basket))
        alert(`${title} добавлен в корзину!`)
        // Обновление стоимости корзины в шапке (если есть)
    })

    // Кнопка "Подробнее" ведет на страницу продукта
    const learnMore = document.createElement("button")
    learnMore.classList.add("btn")
    learnMore.textContent = "Узнать больше"
    learnMore.addEventListener("click", () => {
        window.location.hash = "product"
        navigation("product")
    })

    item.append(image, productTitle, productPrice, addBasket, learnMore)
    return item
}
