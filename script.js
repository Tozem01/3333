// Данные для предложений
const offers = [
    { destination: 'Париж', discount: 30, price: 4999, imgUrl: 'https://via.placeholder.com/150' },
    { destination: 'Лондон', discount: 25, price: 5999, imgUrl: 'https://via.placeholder.com/150' },
    { destination: 'Токио', discount: 15, price: 7999, imgUrl: 'https://via.placeholder.com/150' },
    { destination: 'Барселона', discount: 20, price: 5500, imgUrl: 'https://via.placeholder.com/150' },
    { destination: 'Нью-Йорк', discount: 10, price: 8500, imgUrl: 'https://via.placeholder.com/150' }
];

// Данные для отзывов
const reviews = [
    { text: '"Лучший сайт для бронирования билетов! Отличные предложения на любые направления."', author: 'Ирина' },
    { text: '"Никогда не думал, что могу так дешево летать. Всем советую!."', author: 'Сергей' },
    { text: '"Потрясающий сервис, удобный интерфейс и всегда лучшие цены."', author: 'Мария' }
];

// Функция для отображения предложений
function displayOffers() {
    const offerCardsContainer = document.getElementById('offer-cards');
    offerCardsContainer.innerHTML = ''; // Очистка контейнера

    offers.forEach(offer => {
        const card = document.createElement('div');
        card.classList.add('offer

