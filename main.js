// ELEMENTS
var allButtons = document.querySelectorAll('.radio');
var sideRadioButton = document.querySelector('input[value="side"]');
var mainDishRadioButton = document.querySelector('input[value="main-dish"]');
var dessertRadioButton = document.querySelector('input[value="dessert"]');
var letsCookButton = document.querySelector('.lets-cook-button');
var recipeView = document.querySelector('.recipe-view');
var homeView = document.querySelector('.home-view');
var clearButtonView = document.querySelector('.clear-buttoon-view');
var recipeName = document.querySelector('.recipe-text');
var clearButton = document.querySelector('.clear-button');

// VARIABLES
var selectedValue;
var recipeToDisplay;

// EVENT LISTENERS
letsCookButton.addEventListener('click', displayRecipe);
sideRadioButton.addEventListener('click', selectRecipeType);
mainDishRadioButton.addEventListener('click', selectRecipeType);
dessertRadioButton.addEventListener('click', selectRecipeType);
clearButton.addEventListener('click', clearSelection);

// FUNCTIONS
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

function chooseRecipe() {
  var inputs = ['side', 'main-dish', 'dessert'];
  var recipeTypes = [sides, mainDishes, desserts];
  for (i = 0; i < inputs.length; i++) {
    if (selectedValue === inputs[i]) {
      recipeList = recipeTypes[i];
      recipeToDisplay = recipeList[getRandomIndex(recipeList)];
    };
  };
};

function checkRadioButtons() {
  for (var i = 0; i < allButtons.length; i++) {
    if (allButtons[i].checked) {
      selectedValue = allButtons[i].value;
    };
  };
};

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
