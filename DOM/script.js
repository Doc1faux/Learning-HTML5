var myDiv = document.getElementById('myDiv');
//alert(myDiv);

var divs = document.getElementsByTagName('div');
/*
for(var i = 0, c = divs.length ; i < c; i++) {
    alert('Element nº' + (i+1) + ': ' + divs[i]);
}
*/

// Use only on forms
// var imputs = form.getElementsByName('name');

// querySelector() and querySelectorAll() compatibility: https://developer.mozilla.org/en-US/docs/Web/API/Element.querySelector#Browser_compatibility
// Parameter: CSS selector as string

var link = document.getElementById('dynamicLink');
var href = link.getAttribute('href');

//alert(href);

link.setAttribute('href', 'http://fr.openclassrooms.com/');

myDiv.className = 'blue';

// Don't use innerHTML to add a script
// innerHTML allocation is slow, the less we update it, the faster is the page
var html = myDiv.innerHTML;
var text = myDiv.textContent;

var body = myDiv.parentNode;
var element = myDiv.nodeType; // 1: element node
var div = myDiv.nodeName.toLowerCase; // div
var text = myDiv.firstChild; // #text
var a = myDiv.lastChild; // a
a = myDiv.firstChildElement; // a
var value = text.nodeValue; // or .data
var childNodes = myDiv.childNodes; // #text, a
div = myDiv.nextSibling; // or nextElementSibling: div