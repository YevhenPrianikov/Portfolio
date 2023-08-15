// Получаем те элементы с которыми будем рабоать
// на странице их всего лишь 3 (три)

// создаём переменную hamburger
// document - обращаемся к HTML документу
// при помощи querySelector() получаем элемент страницы по селектору
// (это класс, комбинация классов, тэег + класс, атрибут и т.п.)
const hamburger = document.querySelector('.hamburger'),
// menu - вторая переменная
    menu = document.querySelector('.menu'),
// closeElem - третья переменная
    closeElem = document.querySelector('.menu__close'),


    menuLinks = document.querySelector('.menu__list');

// Далее, когда кликаем по гамбургеру, то добовляется к .menu класс активности .active
// .addEventListener('click') - отслеживаем все клики по гамбургеру
// дальше идет функция () => которая запускается после клика (она еще называется call back функция)
hamburger.addEventListener('click', () => {
// дальше берем элемент menu обращаемся к его свойству classList - это список его классов
// и добавляем класс .add()
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
// удаляем класс    .remove('')
    menu.classList.remove('active');
});

// Удаляем калсс 'active' активности у menu при клике по ссылке
menuLinks.addEventListener('click', () => {
    // удаляем класс    .remove('')
        menu.classList.remove('active');
});



// Автоматическое изменение шкалы процентов при изменении цифры процентов в HTML документе

// Получаем элементы с которыми будем взаимодействовать
const counters = document.querySelectorAll('.progress__element-percent'),
    lines = document.querySelectorAll('.orange');

// Прописываем прямую зависимость
// forEach() - метод который проходит по хранилищу найденых элемментов м с каждым элементов что-то делает
// item - это каждый эелемент который перебирается
// => {}- функция
// i - индекс

// lines так же как counters - массивы, которые содержат в себе найденные элементы

counters.forEach((item, i) => {
    // [i] - используем чтобы обратиться к конкретному элементу по номеру
    // .style.width - меняем инлайн стили
    lines[i].style.width = item.innerHTML;
    // помещаем в эту ширину = значение которое вытаскиваем из item
});
