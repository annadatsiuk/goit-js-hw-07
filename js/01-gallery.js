import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const listItemsMarkup = createListItemsMarkup(galleryItems);
list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`
    )
    .join("");
}

list.addEventListener("click", showFullImage);

function showFullImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  modalShow(event.target.dataset.source);
}

let instance;

function modalShow(src) {
  instance = basicLightbox.create(
    `<div class="modal">
         <img src="${src}" style="height:100vh; display:block"></img>
        </div>`,
    {
      onShow: (instance) => {
        addListener();
      },
      onClose: (instance) => {
        removeListener();
      },
    }
  );
  instance.show();
}
function addListener() {
  window.addEventListener("keydown", onEscapeBtn);
}

function onEscapeBtn(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener("keydown", onEscapeBtn);
}
