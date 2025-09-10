const app = document.getElementById("app")

// Шапка страницы
function getHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header_container")


    const nav = document.createElement("nav")
    nav.classList.add("navigation")


    let link1 = document.createElement("a")
    link1.href= ""
    link1.classList.add("btn")
    link1.textContent="Корзина"

    let link2 = document.createElement("a")
    link2.href= ""
    link2.classList.add("btn")
    link2.textContent="Каталог"

    nav.append(link1, link2)
    container.append(nav)
    header.append(container)


    return header
}


const header = getHeader()
app.append(header)