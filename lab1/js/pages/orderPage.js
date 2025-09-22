import { getMainTitle } from "../components/mainTitle.js";
import { navigation } from "../main.js";
import { updateCartUI } from "../components/counter.js";
export function getOrderPage() {
    const page = document.createElement("div");
    page.classList.add("page", "order-page", "container");

    const title = getMainTitle("Оформление заказа");
    page.append(title);

    function createInput(labelText, attrs) {
  const label = document.createElement("label");
  label.textContent = labelText + " ";

  const input = document.createElement("input");
  Object.entries(attrs).forEach(([key, value]) => input.setAttribute(key, value));

  label.appendChild(input);
  return label;
}
    const form = document.createElement("form");

    form.append(
    createInput("Имя", { type: "text", name: "firstName", required: true, pattern: "[A-Za-zА-Яа-яЁё]{2,}", title: "Имя должно содержать минимум 2 буквы" }),
    createInput("Фамилия", { type: "text", name: "lastName", required: true, pattern: "[A-Za-zА-Яа-яЁё]{2,}", title: "Фамилия должна содержать минимум 2 буквы" }),
    createInput("Email", { type: "email", name: "email", required: true }),
    createInput("Адрес доставки", { type: "text", name: "address", required: true, minlength: "5" }),
    createInput("Телефон", { type: "tel", name: "phone", required: true, pattern: "^\\+?[0-9\\-\\s]{7,15}$", title: "Введите корректный номер (7-15 цифр)" }),
    );

    const button = document.createElement("button");
    button.type = "submit";
    button.className = "btn";
    button.textContent = "Создать заказ";
    form.append(button);

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("basket", JSON.stringify([]));
    updateCartUI(); // обновляем счётчик корзины

    alert("Заказ создан!");
    window.location.hash = ""; // возвращаем на главную страницу
    });


    page.append(form);
    return page;
}
