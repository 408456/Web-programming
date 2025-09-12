import { getMainTitle } from "../components/mainTitle.js"

export function getBasketPage() {
    const page = document.createElement("div")
    page.classList.add("page", "basket-page", "container")

    const title = getMainTitle("Корзина")
    page.append(title)

    const basket = JSON.parse(localStorage.getItem("basket")) || []

    if (basket.length === 0) {
        const empty = document.createElement("p")
        empty.textContent = "Корзина пуста"
        page.append(empty)
    } else {
        const list = document.createElement("ul")
        list.classList.add("basket-list", "list-reset")

        let total = 0

        basket.forEach(item => {
            total += item.price
            const li = document.createElement("li")
            li.classList.add("basket-item")

            const img = document.createElement("img")
            img.src = item.imgUrl
            img.alt = item.title
            img.classList.add("basket-img")

            const name = document.createElement("span")
            name.textContent = item.title
            name.classList.add("basket-title")

            const price = document.createElement("span")
            price.textContent = `${item.price} руб`
            price.classList.add("basket-price")

            li.append(img, name, price)
            list.append(li)
        })

        page.append(list)

        const totalBlock = document.createElement("p")
        totalBlock.classList.add("basket-total")
        totalBlock.textContent = `Итого: ${total} руб`
        page.append(totalBlock)
    }

    return page
}
