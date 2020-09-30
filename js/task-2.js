// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const addIngedientsToList = ingredientsArray => {
  const inggredientsListRef = document.querySelector('ul#ingredients')

  const ingredientsToAdd = ingredientsArray.map(ingredient => {

    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = `${ingredient}`;

    return ingredientItem;
  })

inggredientsListRef.append(...ingredientsToAdd)
}

addIngedientsToList(ingredients);