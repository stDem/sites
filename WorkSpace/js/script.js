const API_URL = "https://workspace-methed.vercel.app/"; // сервер, который возвращает нам данные
// const LOCATION_URL = "api/locations";

const API_URL_LOCATION = "https://workspace-methed.vercel.app/api/locations"; // API сервер, который возвращает нам данные
// const API_URL_LOCATION = "/json/location.json";

const API_URL_VACANCY = "https://workspace-methed.vercel.app/api/vacancy";
// const API_URL_VACANCY = "/json/vacancies.json";

const cardsList = document.querySelector(".cards__list")
let lastUrl = '';
const pagination = '';

// fetch(API_URL) // запрос получения данных с сервера
//     .then((response)=>{return response.json()}) // колбек функция возвращает данные сервера в формате json
//     .then((data)=>{console.log(data)})
//     .catch((err)=>{console.log(err)}) // возвращает ошибку

const getData = async (url, cbSuccess, cbError)=>{ // вызываем асинхронную фенкцию, которая принимает url, колбек удачного 
    // выполнения запроса и колбек ошибки
    try { // конструкция try catch выполняет весь код в try. елси есть ошибка переходит в catch
        const response = await fetch(url); // с помощью fetch запрашиваем получение данных с сервера, 
        // await - ожидай пока данные загрузятся
        const data = await response.json(); //возвращаем данные в формате json
        cbSuccess(data); // вызываем колбек функцию с имеющимися данными

    } catch (error) {
        cbError(error);
    }
};

//возвращаем верстку карточек
const createCard =vacancy=>` 
    <article class="vacancy" tabindex="0" data-id=${vacancy.id}>
        <img src="${API_URL}${vacancy.logo}" alt="${vacancy.company} logo" class="vacancy__img">
        <p class="vacancy__company">${vacancy.company}</p>
        <h3 class="vacancy__title">${vacancy.title}</h3>

        <ul class="vacancy__fields">
            <li class="vacancy__field">от ${parseInt(vacancy.salary).toLocaleString()}₽</li>
            <li class="vacancy__field">${vacancy.format}</li>
            <li class="vacancy__field">${vacancy.type}</li>
            <li class="vacancy__field">${vacancy.experience}</li>
        </ul>
    </article>
`

const createCards=(data)=> //создаем элемент для вставки карточек
    data.vacancies.map(vacancy=>{
        const li = document.createElement('li');
        li.classList.add('cards__item');
        li.insertAdjacentHTML('beforeend', createCard(vacancy));  // метод, который вставляет верстку в указанное место. 
        //beforeend - вставляет в конец элемента
        return li;
    });

const renderVacancies = (data) =>{
    cardsList.textContent = "";
    const cards = createCards(data);
    cardsList.append(...cards); // выносим все карточки через запятую
    
    if(data.pagination){
        Object.assign(pagination, data.pagination)
    };

    observer.observe(cardsList.lastElementChild);
};

const renderMoreVacancies = (data) =>{
    const cards = createCards(data);
    cardsList.append(...cards);
    
    if(data.pagination){
        Object.assign(pagination, data.pagination)
    };

    observer.observe(cardsList.lastElementChild);
};

const loadMoreVacancies = () =>{

    if(pagination.totalPages>pagination.currentPage){
        const urlWithParams = new URL(lastUrl); // lastUrl - последний вызов, который осуществлялся
        urlWithParams.searchParams.set("page", pagination.currentPage + 1);
        urlWithParams.searchParams.set("limit", window.innerWidth < 768 ? 6 : 12);

        getData(urlWithParams, renderMoreVacancies, renderError).then(()=>{
            lastUrl = urlWithParams;
        });
    };
};

const renderError =error=>{console.warn(error)};



//возвращаем верстку модального окна
const createDetailVacancy = modal=>`
    <article class="detail">
    <div class="detail__header">
        <img src="${API_URL}${modal.logo}" alt="${modal.company}" class="detail__logo">
        <p class="detail__company">${modal.company}</p>
        <h2 class="detail__title">${modal.title}</h2>
    </div>

    <div class="detail__main">
        <p class="detail__description">
        ${modal.description.replaceAll("\n", "<br>")}
        </p>

        <ul class="detail__fields">
        <li class="detail__field">от ${parseInt(modal.salary).toLocaleString()}₽</li>
        <li class="detail__field">${modal.format}</li>
        <li class="detail__field">${modal.type}</li>
        <li class="detail__field">${modal.experience}</li>
        <li class="detail__field">${modal.location}</li>
        </ul>
    </div>

    <p class="detail__resume">Отправляйте резюме на
        <a href="mailto:${modal.email}" class="blue-text">${modal.email}</a>
    </p>
    </article>
`


const renderModal = (data) =>{ // создаем элемент для вставки модального окна с кнопкой закрыть
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalMain = document.createElement('div');
    modalMain.classList.add('modal__main');
    modalMain.innerHTML=createDetailVacancy(data);
    const modalClose = document.createElement('button');
    modalClose.classList.add('modal__close');
    modalClose.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M10.7831 10L15.3887 5.39444C15.4797 5.28816 15.5272 5.15145 15.5218 5.01163C15.5164 4.87181 15.4585 4.73918 15.3595 4.64024C15.2606 4.5413 15.128 4.48334 14.9881 4.47794C14.8483 4.47254 14.7116 4.52009 14.6053 4.61111L9.99977 9.21666L5.39421 4.60555C5.2896 4.50094 5.14771 4.44217 4.99977 4.44217C4.85182 4.44217 4.70994 4.50094 4.60532 4.60555C4.50071 4.71017 4.44194 4.85205 4.44194 5C4.44194 5.14794 4.50071 5.28983 4.60532 5.39444L9.21643 10L4.60532 14.6056C4.54717 14.6554 4.49993 14.7166 4.46659 14.7856C4.43324 14.8545 4.4145 14.9296 4.41155 15.0061C4.40859 15.0826 4.42148 15.1589 4.44941 15.2302C4.47734 15.3015 4.51971 15.3662 4.57385 15.4204C4.62799 15.4745 4.69274 15.5169 4.76403 15.5448C4.83532 15.5727 4.91162 15.5856 4.98813 15.5827C5.06464 15.5797 5.13972 15.561 5.20864 15.5276C5.27757 15.4943 5.33885 15.447 5.38866 15.3889L9.99977 10.7833L14.6053 15.3889C14.7116 15.4799 14.8483 15.5275 14.9881 15.5221C15.128 15.5167 15.2606 15.4587 15.3595 15.3598C15.4585 15.2608 15.5164 15.1282 15.5218 14.9884C15.5272 14.8485 15.4797 14.7118 15.3887 14.6056L10.7831 10Z" fill="#CCCCCC"/>
          </g>
        </svg>`   
    modalMain.append(modalClose);
    modal.append(modalMain);
    document.body.append(modal);

    modal.addEventListener("click", ({target})=>{ // реализуем закрытие модального окна через обработчик событий по клику 
        if (target===modal || target.closest(".modal__close")){
            modal.remove();
        }
    }); 
};

const openFilter =(btn, dropDown, classNameBtn, classNameDd)=>{ // функция для открытия фильтра
    dropDown.style.height = `${dropDown.scrollHeight}px`; // принимаем высоту скрытую и ставим ее в высоту открытую
    btn.classList.add(classNameBtn);
    dropDown.classList.add(classNameDd);

};

const closeFilter =(btn, dropDown, classNameBtn, classNameDd)=>{ // функция для закрытия фильтра
    btn.classList.remove(classNameBtn);
    dropDown.classList.remove(classNameDd);
    dropDown.style.height = "";

};

const openModal = (id)=>{
    getData(`${API_URL_VACANCY}/${id}`, renderModal, renderError);
};

// The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
// in our case is used for render more cards which dont fit the page

// isIntersecting property is a Boolean value which is true if the target element intersects with the intersection observer's root. If this is true, then, the IntersectionObserverEntry describes a transition into a state of intersection; if it's false, then you know the transition is from intersecting to not-intersecting.
const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting)
                loadMoreVacancies();
        });
    },
    {
        rootMargin: '100px',   // на каком расстояни от элемента будет срабатывать
    }
);


//  SELECT CITY
const init = ()=>{ // запускается сразу после запуска сайта
    const vacanciesFilterBtn = document.querySelector(".vacancies__filter-btn"); // находим фильтр для скрывания/раскрывания
    const vacanciesFilter = document.querySelector('.vacancies__filter');
    const filterForm = document.querySelector('.filter__form'); // находим фильтр
    const citySelect = document.querySelector("#city");

    vacanciesFilterBtn.addEventListener('click', ()=>{
        if(vacanciesFilterBtn.classList.contains('vacancies__filter-btn_active')){ // проверяем есть ли у кнопки этот класс
            closeFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active')
        }
        else openFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active')
    });

    window.addEventListener('resize', ()=>{
        if(vacanciesFilterBtn.classList.contains('vacancies__filter-btn_active')){ 
            vacanciesFilter.style.height = `${vacanciesFilter.scrollHeight}px`; 
        }
    })  // resize - событие, которое происходит при изменении высоты или ширины окна
    
    const cityChoices = new Choices(citySelect, {
        searchEnabled: false,
        itemSelectText: "",
    });



    getData(
        `${API_URL_LOCATION}`,
        (locationData)=>{
            const locations = locationData.map((location)=>({
                value:location,

            }));
            cityChoices.setChoices(locations, "value", "label", false); // метод, который позволяет передать 
            //данные в виде массива, false - запрет на замену имеющихся городов
        },
        (error)=>{
            console.log(error)
        }
        );


    
    const urlWithParams = new URL( `${API_URL_VACANCY}`);
    urlWithParams.searchParams.set("limit", window.innerWidth < 768 ? 6 : 12); // уменьшаем количество загружаемых карточек в мобильной версии
    urlWithParams.searchParams.set("page", 1);

    getData(urlWithParams, renderVacancies, renderError).then(()=>{
        lastUrl = urlWithParams;
    });

    cardsList.addEventListener('click', ({target})=>{ // вызываем обработчик события по клику для поиска Id карточки
        const vacancyCard = target.closest(".vacancy");
        if (vacancyCard){
            const vacancyId = vacancyCard.dataset.id;
            openModal(vacancyId);
        }
    }); 

    cardsList.addEventListener('keydown', ({code, target})=>{ // открытие модального окна с помощью Enter при фокусе на карточке
        const vacancyCard = target.closest(".vacancy");
        if ((code==="Enter" || code === "NumpadEnter") && vacancyCard){
            const vacancyId = vacancyCard.dataset.id;
            openModal(vacancyId);
            target.blur(); // снимаем фокус
        };
    });

    // FILTER
    filterForm.addEventListener("submit", (event)=>{ // обработчик события кнопки submit в фильтрации
        event.preventDefault(); // предотвращаем перезагрузку страницы
        const formData = new FormData(filterForm); // метод для получения всех данных из формы
        const urlWithParams=new URL(`${API_URL_VACANCY}`); // создаем URL со всеми параметрами

        formData.forEach((value, key) => {
            urlWithParams.searchParams.append(key, value)
        });
        
        getData(urlWithParams, renderVacancies, renderError).then(()=>{
            lastUrl = urlWithParams;
        }).then(()=>{
            closeFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active');
        });
    });
       
};

init();