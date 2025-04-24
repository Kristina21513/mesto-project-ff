// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(data, handleDelete) {
  const cardElement = cardTemplate.cloneNode(true).querySelector('.card');

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  deleteButton.addEventListener('click', () => handleDelete(cardElement));

  return cardElement;
}


// @todo: Функция удаления карточки
function handleDelete(cardElement) {
    cardElement.remove();
  }
// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
    const card = createCard(cardData, handleDelete);
    placesList.append(card);
  });
  