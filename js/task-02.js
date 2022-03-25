const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Через Map
// const ingredientsListRef = document.querySelector('#ingredients');

// const ingredientsArray = ingredients.map(ingredient => {
//   const ingredientItemRef = document.createElement('li');
//   ingredientItemRef.classList.add('item');
//   ingredientItemRef.textContent = ingredient;
  
//   return ingredientItemRef;
// });

// ingredientsListRef.append(...ingredientsArray);


// Через функцию
const makeIngredientItems = elements => { 
  return elements.map(ingredient => {
    const ingredientItemRef = document.createElement('li');
    ingredientItemRef.classList.add('item');
    ingredientItemRef.textContent = ingredient;
    
    return ingredientItemRef;
  });
};

const ingredientsListRef = document.querySelector('#ingredients');
const ingredientsItems = makeIngredientItems(ingredients);
ingredientsListRef.append(...ingredientsItems);