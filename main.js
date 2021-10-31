var allButtons = document.querySelectorAll('.radio');
var sideRadioButton = document.querySelector('input[value="side"]');
var mainDishRadioButton = document.querySelector('input[value="main-dish"]');
var dessertRadioButton = document.querySelector('input[value="dessert"]');
var letsCookButton = document.querySelector('.lets-cook-button');
var recipeView = document.querySelector('.recipe-view');
var homeView = document.querySelector('.home-view');
var recipeName = document.querySelector('.recipe-text');
var clearButton = document.querySelector('.clear-button');

var selectedValue;
var recipeToDisplay;

letsCookButton.addEventListener('click', displayRecipe);
sideRadioButton.addEventListener('click', selectRecipeType);
mainDishRadioButton.addEventListener('click', selectRecipeType);
dessertRadioButton.addEventListener('click', selectRecipeType);
clearButton.addEventListener('click', clearSelection);

function displayRecipe() {
  checkRadioButtons();
  chooseRecipe();
  if (recipeToDisplay) {
    addHidden(homeView);
    removeHidden(recipeView);
    recipeName.innerText = recipeToDisplay;
  };
};

function selectRecipeType() {
  checkRadioButtons();
  if (selectedValue) {
    removeHidden(letsCookButton);
  };
};

function clearSelection() {
  deselectRadioButtons();
  addHidden(recipeView);
  removeHidden(homeView);
  addHidden(letsCookButton);
};

function checkRadioButtons() {
  for (var i = 0; i < allButtons.length; i++) {
    if (allButtons[i].checked) {
      selectedValue = allButtons[i].value;
    };
  };
};

function chooseRecipe() {
  if (selectedValue === 'side') {
    newRecipeToDisplay = sides[getRandomIndex(sides)];
    if (newRecipeToDisplay === recipeToDisplay) {
      newRecipeToDisplay = sides[getRandomIndex(sides)];
    };
  } else if (selectedValue === 'main-dish') {
    newRecipeToDisplay = mainDishes[getRandomIndex(sides)];
    if (newRecipeToDisplay === recipeToDisplay) {
      newRecipeToDisplay = mainDishes[getRandomIndex(sides)];
    };
  } else if (selectedValue === 'dessert') {
    newRecipeToDisplay = desserts[getRandomIndex(sides)];
    if (newRecipeToDisplay === recipeToDisplay) {
      newRecipeToDisplay = desserts[getRandomIndex(sides)];
    };
  };
  recipeToDisplay = newRecipeToDisplay;
};
// need to refactor, but not sure how...
//   var values = ['side', 'main-dish', 'dessert']
//   var recipeTypes = ['sides', 'mainDishes', 'desserts']
//   for (var i = 0; i < values.length; i++) {
//     if (selectedValue === values[i]) {
//       var recipeType = recipeTypes[i];
//     };
//   };
//   var recipe = ${recipeType[getRandomIndex(sides)]};
//   return recipe;
// };

function deselectRadioButtons() {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].checked = false;
  };
};

function addHidden(element) {
  element.classList.add('hidden');
};

function removeHidden(element) {
  element.classList.remove('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
