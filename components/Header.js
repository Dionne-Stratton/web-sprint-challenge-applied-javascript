// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');
const headerContent = Header();

headerContainer.appendChild(headerContent);

function Header() {
    // create elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    // append to header div (these elements are all siblings)
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    // add classes
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // add attributes (text in this case) to elements
    headerDate.textContent = 'MARCH 28, 2020';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    // console.log(header);

    return header;
}