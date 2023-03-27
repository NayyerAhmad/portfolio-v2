// // open and close pop up

// let projects = document.querySelectorAll('.project-card');

// projects.forEach((card, index) => {

//     let closeBtn = card.querySelector('.close-btn');
//     closeBtn.addEventListener('click', () => {
//         projects.forEach((item, i) => {
//             item.classList.remove('blur')
//         })
//         card.classList.remove('active');
//     })

//     card.addEventListener('click', (e) => {
//         if(e.path[0] != closeBtn){
//             projects.forEach((item, i) => {
//                 if(i != index){
//                     item.classList.add('blur')
//                 }
//             })
//             card.classList.add('active')
//         }
//     })

// })

// // project filter function

// const tags = document.querySelectorAll('.filter-btn');

// tags.forEach(btn => {
//     btn.addEventListener('click', () => {
//         projects.forEach(card => {
//             if(btn.innerHTML.toLowerCase() == 'all'){
//                 card.style.display = 'block';
//             } else{
//                 if(card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())){
//                     card.style.display = 'block';
//                 } else{
//                     card.style.display = 'none';
//                 }
//             }
//         })

//         tags.forEach(item => item.classList.remove('active'));
//         btn.classList.add('active')
//     })
// })

/* Hiding the Navbar */

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Set the initial scroll position
let prevScrollpos = window.pageYOffset;

// Add an event listener to the window for scrolling
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Hide or show the navbar depending on the scroll direction
  if (prevScrollpos < currentScrollPos) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  // Set the previous scroll position to the current scroll position
  prevScrollpos = currentScrollPos;
});
