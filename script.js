// Пример данных для предложений и отзывов
const deals = [
    {
        destination: 'Париж',
        discount: 30,
        price: 4999,
        imgUrl: 'https://via.placeholder.com/150'
    },
    {
        destination: 'Лондон',
        discount: 25,
        price: 5999,
        imgUrl: 'https://via.placeholder.com/150'
    },
    {
        destination: 'Токио',
        discount: 15,
        price: 7999,
        imgUrl: 'https://via.placeholder.com/150'
    }
];

const reviews = [
    {
        text: '"Отличный сервис! Я забронировал билеты на Мальдивы с большой скидкой и всё прошло просто замечательно!"',
        author: 'Анна С.'
    },
    {
        text: '"Очень удобный сайт! Понравился интерфейс и разнообразие предложений. Рекомендую всем!"',
        author: 'Михаил П.'
    },
    {
        text: '"Бронировал билет на рейс в Париж. Очень быстро, и скидки просто супер!"',
        author: 'Ирина К.'
    }
];

// Функция для отображения предложений
function displayDeals() {
    const dealCardsContainer = document.getElementById('deal-cards');
    dealCardsContainer.innerHTML = ''; // Очистка контейнера

    deals.forEach(deal => {
        const card = document.createElement('div');
        card.class
