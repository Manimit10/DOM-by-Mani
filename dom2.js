// console.log('test')

// Traversing the DOM
let shoppingItem = document.querySelector('.shopping-items')
// parentNode
// console.log(shoppingItem)
// console.log(shoppingItem.parentNode.parentNode)
// shoppingItem.parentNode.style.border = '2px solid red'

// parentElement
// console.log(shoppingItem)
// console.log(shoppingItem.parentElement.parentElement.parentElement)
// shoppingItem.parentNode.style.backgroundColor = 'red'

// childNodes
// console.log(shoppingItem.childNodes)
// childNode will grab the white spaces between each element. So maybe it is not very good for many cases. It is better to use children

// console.log(shoppingItem.children)
shoppingItem.children[2].style.color = 'red'

// childElementCount show you how many html elements are exist in specific tag
// console.log(shoppingItem.childElementCount)

// firstChild 
// console.log(shoppingItem.firstChild)
// firstChild like childNodes consider the whitespace between tags as a element, therefore it is not so much useful.

// instead, firstelementChild gives you the html tag that is the child of element
// console.log(shoppingItem.firstElementChild)
// shoppingItem.firstElementChild.style.backgroundColor = 'yellow'

// we also have lastChild and lastElementChild whic exactly do the same.
// console.log(shoppingItem.lastChild)
// console.log(shoppingItem.lastElementChild)
shoppingItem.lastElementChild.innerText = 'changed by JS'

// Sibilings are the elements that are in the 
// nextSibiling consider the white space between elements as the sibiling which is not very useful.
const textInput = document.querySelector('input[name="shopping-add"]')
// console.log(textInput.nextSibling)
// the other option is nextElementSibiling
// console.log(textInput.nextElementSibling)

// console.log(shoppingItem.nextElementSibling) // this doesn't work becuase there is no other element in html after this, therefore, it returns null

// ofcourse you can chain by combination of all of them
// console.log(shoppingItem.firstElementChild.nextElementSibling)
shoppingItem.firstElementChild.nextElementSibling.style.color = 'yellowgreen'

// we can use previousSibiling and previouselementSibiling
// previoussibiling consider the white space as the result which normallt we do not want it.
// console.log(shoppingItem.previousSibling)
// But previouselementSibiling gives us the element
// console.log(shoppingItem.previousElementSibling)
shoppingItem.previousElementSibling.textContent = 'Wohaa'


// Now let's talk about how we can create elements in Html by JS
// CreateElement
// STEP1 createElement
let newDiv = document.createElement('div')
// STEP 1.1 You can use className to add a class to any element
newDiv.className = 'bold-text'
// STEP 1.2 You can add id to it
newDiv.id = 'test-text'
// STEP 1.3 also you can add attribute to it
newDiv.setAttribute('title','This is a div')

// STEP 2 create text inside the div that you create
let newDivText = document.createTextNode('I am the content')
// STEP 3 then you should append the text to the div
newDiv.appendChild(newDivText)
// STEP 4 Now we can insert it to the DOM
// STEP 4.1 select the parent element
let container = document.querySelector('.container')
// STEP 4.2 select the element that you want tot put it before (Sibiling)
let h3 = document.querySelector('h3')
console.log(container)
// Step 4.3 select the parent put the element first then put the sibiling
container.insertBefore(newDiv,h3)
console.log(newDiv)
// you still can add class to the content
newDiv.style.fontSize = '3rem'



