console.log('Task-1 Hello');
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listReference = document.querySelector('ul#categories')

const listContent = listRef => {
    const amountOfICategories =  listRef.children.length;
    console.log(`В списке ${amountOfICategories} категории.`);

    const categoriesList = [...listRef.children]

    categoriesList.forEach(item => {
    const categoryTitle = item.querySelector('ul#categories h2').textContent;
    console.log('Категория: ', categoryTitle);
    
    const categoryLength = item.querySelectorAll('ul#categories li').length;
    console.log('Количество элементов: ', categoryLength);
    })
};

listContent(listReference);