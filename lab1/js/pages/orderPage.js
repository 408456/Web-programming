import { getMainTitle } from "../components/mainTitle.js";
import { navigation } from "../main.js";
import { updateCartUI } from "../components/counter.js";
export function getOrderPage() {
    const page = document.createElement("div");
    page.classList.add("page", "order-page", "container");

    const title = getMainTitle("Оформление заказа");
    page.append(title);

    const form = document.createElement("form");
    form.classList.add("order-form");

    form.innerHTML = `
        <label>Имя 
            <input type="text" name="firstName" required pattern="[A-Za-zА-Яа-яЁё]{2,}" title="Имя должно содержать минимум 2 буквы">
        </label>
        <label>Фамилия 
            <input type="text" name="lastName" required pattern="[A-Za-zА-Яа-яЁё]{2,}" title="Фамилия должна содержать минимум 2 буквы">
        </label>
        <label>Email 
            <input type="email" name="email" required>
        </label>
        <label>Адрес доставки 
            <input type="text" name="address" required minlength="5">
        </label>
        <label>Телефон 
            <input type="tel" name="phone" required pattern="^\\+?[0-9\\-\\s]{7,15}$" title="Введите корректный номер (7-15 цифр)">
        </label>
        <button type="submit" class="btn">Создать заказ</button>
    `;

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const basket = JSON.parse(localStorage.getItem("basket")) || [];
    // if(basket.length === 0){
    //     alert("Корзина пуста");
    //     return;
    // }

    localStorage.setItem("basket", JSON.stringify([]));
    updateCartUI(); // обновляем счётчик корзины

    alert("Заказ создан!");
    window.location.hash = ""; // возвращаем на главную страницу
    });


    page.append(form);
    return page;
}
