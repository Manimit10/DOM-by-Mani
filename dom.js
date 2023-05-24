// console.log('hi ')
// console.dir(document)

// console.log(document.URL)
// console.log(document.title)
// document.title = 'MANI '
// console.log(document.body)
// console.log(document.head)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.links[2].textContent)
// console.log(document.images)

//we have some selectors in JS
// we use them to select an specific element in the DOM
// 1- GETELEMENTBYID
// let headerTitle = document.getElementById('header-title')
// console.log(headerTitle)
// headerTitle.textContent = 'MiiiM'
// headerTitle.innerText = 'NiiiN'

//differences between innerText vs textContent:
// If you put another element inside header-title and give it display:none, the textContent will consider it but innerText will not! Interesting!!!

// headerTitle. innerHTML = '<h4>BiiiB</h4>'
// the innerHTML create the html tag inside the tag that you selected. 

// Now Let's see how we can change the style of the element that we select
// let navBar = document.getElementById('nav-bar')
// navBar.style.borderBottom = '2px solid black'

// 2- GETELEMENTSBYCLASSNAME
// let tableCells = document.getElementsByClassName('table-data')
// console.log(tableCells[3])
// tableCells[2].innerText = 'GiiiG'
// tableCells[2].style.fontWeight = 'bold'
// tableCells[2].style.backgroundColor = 'yellowgreen'

// You cannot assign a style to all of the table cells because the tableCells variable is HTMLCollection or in another word, it is array!
// for (const cell of tableCells) {
//     cell.style.backgroundColor = 'red'
// }
// for (let cell = 0; cell < tableCells.length; cell++) {
//     tableCells[cell].style.color = 'white'
    
// }
// forEach and for-in-loop doesn't work on HTMLCollection, becuase they are not exactly array, they have some extra elements that they are not iterable. But they works on NodeList

// 3- GETELEMENTSBYTAGNAME

// let listItems = document.getElementsByTagName('li')
// console.log(listItems[1].innerText)
// listItems[2].innerText = 'beer'
// for (const li of listItems) {
//     li.style.backgroundColor = 'gray'
//     li.style.marginTop = '2px'
// }

// 4- QUERYSELECTOR you can use . for class or # for id and just the name of tag
// let header = document.querySelector('#header-title')
// header.style.color = 'green'

// let submit = document.querySelector('input[type="submit"]')
// console.log(submit)
// submit.style.padding = '0.7rem 1.2rem'
// submit.style.backgroundColor = 'blue'
// submit.style.color = 'white'
// submit.value = 'Try!'

// let shoppingItems = document.querySelector('.shopping-items')
// console.log(shoppingItems)

// let li = document.querySelector('li:nth-child(2)')
// li.innerText = 'NOOOO'

// QUERYSELECTORALL
// let odds = document.querySelectorAll('li:nth-child(odd)')
// let evens = document.querySelectorAll('li:nth-child(even)')
// console.log(evens)

// querySelectorAll gives us a NodeList, the good point is we cab use it exactly like an array

// odds.forEach(odd => console.log(odd.textContent))
// odds.forEach(odd => odd.style.backgroundColor = '#f4f4f4')
// evens.forEach(even => even.style.backgroundColor = '#ccc')