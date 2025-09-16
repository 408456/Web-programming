import { getMainTitle } from "../components/mainTitle.js"

export function getOrderPage() {
    const page = document.createElement("div")
    page.classList.add("page", "order-page", "container")

    const title = getMainTitle("Оформление заказа")
    page.append(title)

    const form = document.createElement("form")
    form.classList.add("order-form")

    form.innerHTML = `
        <label>Имя <input type="text" name="firstName" required></label>
        <label>Фамилия <input type="text" name="lastName" required></label>
        <label>Адрес доставки <input type="text" name="address" required></label>
        <label>Телефон <input type="tel" name="phone" required></label>
        <button type="submit" class="btn">Создать заказ</button>
    `

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        localStorage.setItem("basket", JSON.stringify([]))
        alert("Заказ создан!")
        window.location.hash = ""
    })

    page.append(form)
    return page
}