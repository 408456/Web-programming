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


function getPageContainer (){
    const main = document.createElement("main")
    main.classList.add("page-container")
    return main

}

// Создание заголовка 
function getMainTitle (text) {
    const title = document.createElement("h1")
    title.classList.add("main-title")
    title.textContent = text
    return title

}

function getProductCard(title, price) {
    const item = document.createElement("li")
    item.classList.add("product-list_item")

    const productTitle = document.createElement("h2")
    productTitle.classList.add("product-list_title")
    productTitle.textContent = title

    const productPrice = document.createElement("strong")
    productPrice.classList.add("product-list_price")
    productPrice.textContent = `${price} руб`

    const addBasket = document.createElement("button")
    addBasket.classList.add("btn")
    addBasket.textContent = "В корзину"

    item.append(productTitle, productPrice, addBasket)
    return item
}

function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")

    const title = getMainTitle("Главная страница")
    const list = document.createElement("ul")
    list.classList.add("product-list", "list-reset")

    // добавляем товары здесь, а не внутри getProductCard
    list.append(
        getProductCard("Товар 1", 5400),
        getProductCard("Товар 2", 3200),
        getProductCard("Товар 3", 9100),
        getProductCard("Товар 4", 12000)
    )

    page.append(title, list)
    return page
}


const header = getHeader()
const main = getPageContainer()
const page = getMainPage()
main.append(page)
app.append(header, main)
