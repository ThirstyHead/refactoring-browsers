// get a NodeList of every HTML element in the document
let allElements = document.querySelectorAll('*');

// convert the NodeList to an Array using Spread Operator
let elementsArray = [...allElements];

// create a Set to get a unique list of HTML elements using Array.map
let uniqueElements = new Set(elementsArray.map(element => element.nodeName));

// Magic one-liner that combines all three steps
// (BTW, yuck! Could this BE less readable/maintainable?)
let myElements = new Set([...document.querySelectorAll('*')].map(element => element.nodeName));

// https://caniuse.com/#feat=mdn-html_elements_img
// https://caniuse.com/#feat=mdn-html_elements_p
// https://caniuse.com/#feat=mdn-html_elements_h1
// https://www.npmjs.com/package/caniuse-api
