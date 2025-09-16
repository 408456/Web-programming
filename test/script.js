function changeText(){
    const title = document.getElementById("title")
    title.textContent = "Не кнопка"
}

let click = 0
function countClick(){
    click ++;
    document.getElementById("counter").textContent = "Кликов: " + click;
}

let productId = 1;

document.getElementById("addCard").addEventListener("click", ()=> {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>Товар ${productId}</h3><p>Описание товара</p>`;

    document.getElementById("catalog").appendChild(card);
    productId ++;
})
