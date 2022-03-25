// =================Task 01
const menuListRef = document.querySelector('#categories');
const countMenuItemRef = menuListRef.children.length;
console.log(`Number of categories: ${countMenuItemRef}`);


// =================Task 02
const subMenuItemRef = document.querySelectorAll('.item');

subMenuItemRef.forEach(item => {
    const titleSubMenuItemRef = item.querySelector('h2');
    console.log(`Category: ${titleSubMenuItemRef.textContent}`);
    
    const countCategorySubMenuItemRef = item.querySelector('.item ul').children.length;
    console.log(`Elements: ${countCategorySubMenuItemRef}`);
});