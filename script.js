// Get the main div and footer divs
let main = document.getElementById('main-div');
let footer = document.getElementById('footer-div');

// First child of the main div is the title div
let titleDiv = main.children[0];
console.log(titleDiv);

// First child of the recipe-title div is the h1
let recipeTitle = titleDiv.children[0];
console.log('Recipe is called:', recipeTitle.textContent); 

// Next sibling of the title div is the ingredients div
let ingredientsDiv = titleDiv.nextElementSibling;
console.log(ingredientsDiv);

// And its first child is a <ul> w/ the ingredients:
let ingredientList = ingredientsDiv.children[0];
console.log(ingredientList);

// Now we can get its children and iterate though them:
let allIngredients = ingredientList.children;
for(let i = 0; i < allIngredients.length; i++) {
    console.log('Ingredient', i, 'is', allIngredients[i].textContent);
}

// Parent of the main-div is <body>
console.log(main.parentNode);

// and its sibling is the footer-div
console.log(main.nextElementSibling);

// So we could combine all of these to get the footer text easily, even if it had no id/class
let footerText = main.parentNode.children[1].children[0].textContent;
console.log('Footer text is:', footerText);

// Of course, since it has an id, you can also do this to access it directly
footerText = document.getElementById('footer-div').children[0].textContent;
console.log('Footer text (alternative method) is:', footerText);




/*
let paragraphs = document.getElementsByTagName('p');

// All paragraphs
console.log('The HTMLCollection contains:', paragraphs);
console.log(paragraphs.item(2).textContent);
console.log(paragraphs[1].textContent);

// Iterate and print all their texts:
for(let i = 0; i < paragraphs.length; i++) {
    console.log('This is the', paragraphs[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", paragraphs[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", paragraphs.item(4).textContent);

// Get the specific paragraph, log its id attribute:
console.log('The specific paragraph has an id of:', paragraphs.namedItem('specific').id);
*/

/*
document.getElementById('innerWidth').innerHTML = window.innerWidth;
document.getElementById('innerHeight').innerHTML = window.innerHeight;
document.getElementById('outerWidth').innerHTML = window.outerWidth;
document.getElementById('outerHeight').innerHTML = window.outerHeight;

document.getElementById('title').innerHTML = document.title;

document.body.onload = function() {
    console.log('We can call various methods of the body object as well, such as this one, body.onload, which gets called when loading is complete! Now we know that the body has been loaded!');
}
*/

/*
setInterval(function(){ 
    let timerElement = document.getElementById('timer');
    let currentTime = timerElement.innerHTML;
    currentTime++;
    timerElement.innerHTML = currentTime;
}, 1000);
*/

