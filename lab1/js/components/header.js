import { navigation } from "../main.js"

export function getHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header_container")

    const nav = document.createElement("nav")
    nav.classList.add("navigation")

    const links = [
        { text: "Главная страница", page: "" },
        { text: "Каталог", page: "catalog" },
        { text: "Корзина", page: "basket" },
    ]

    links.forEach(linkData => {
        const link = document.createElement("a")
        link.href = `#${linkData.page}` // ставим hash
        link.classList.add("btn")
        link.textContent = linkData.text

        link.addEventListener("click", (event) => {
            event.preventDefault()
            // обновляем hash
            window.location.hash = linkData.page
            navigation(linkData.page)
        })

        nav.append(link)
    })


    container.append(nav)
    header.append(container)
    return header
}
