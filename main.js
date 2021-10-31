var allButtons = document.querySelectorAll('.radio');
var letsCookButton = document.querySelector('.lets-cook-button');
var recipeView = document.querySelector('.recipe-view');
var homeView = document.querySelector('.home-view');
var recipeName = document.querySelector('.recipe-text');
var selectedValue;
var recipeToDisplay;

letsCookButton.addEventListener('click', displayRecipe);

function displayRecipe() {
  checkRadioButtons();
  chooseRecipe();
  addHidden(homeView);
  removeHidden(recipeView);
  recipeName.innerText = recipeToDisplay;
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
    recipeToDisplay = sides[getRandomIndex(sides)];
  } else if (selectedValue === 'main-dish') {
    recipeToDisplay = mainDishes[getRandomIndex(sides)];
  } else if (selectedValue === 'dessert') {
    recipeToDisplay = desserts[getRandomIndex(sides)];
  };
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

function addHidden(element) {
  element.classList.add('hidden');
};

function removeHidden(element) {
  element.classList.remove('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
