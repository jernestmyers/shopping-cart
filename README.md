# shopping cart

this is the [third react project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/shopping-cart) from the odin project's full stack javascript curriculum.

![gif demonstrating the app's features](./memory-game-demo.gif)

## live version

[click here](https://jernestmyers.github.io/shopping-cart/) for a live version!

## project objective

1. build a mock e-commerce app with react and utilize react routing.

## technologies used

<p align="left"> 
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
</p>

## app features

1. utilizes [the metropolitan museum of art's public API](https://metmuseum.github.io/) to fetch data for 19 works of art across several mediums.
2. each work of art in the Shop component routes to the ItemDetails component and renders the artwork's data from the API.
3. users can filter by medium in the Shop route.
4. the ItemDetails component renders the AddToCart component which includes an input for quantity, conditional rendering for framing options, and confirmation for items added to the shopping cart.
5. a shopping cart in the navigation menu dynamically displays and updates the quantity of items added to the shopping cart.
6. the ViewCart component renders a summary of the items in the cart, the total cost, and functionality to remove items and/or edit the quantity of items.
7. the ViewCart component combines all duplicated additions to the shopping cart to ensure an item is displayed once and only the quantity of said item changes.

## areas for improvement

1. make app responsive across browsers and devices.
