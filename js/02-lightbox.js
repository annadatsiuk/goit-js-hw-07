import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
const list = document.querySelector(".gallery");

const listItemsMarkup = createListItemsMarkup(galleryItems);
list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
  return items
    .map(
      (item) =>
        `
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>`
    )
    .join("");
}

// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,

});