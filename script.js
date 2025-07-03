// //mainpage
// var mainPageContent = document.querySelector('.main-page-content')

// setTimeout(() => {
//   mainPageContent.style.visibility = 'visible'
// }, 3000)

// // Select all project cards
// var projectCards = document.querySelectorAll('.project-card')

// projectCards.forEach((projectCard) => {
//   var projectCardImg = projectCard.querySelector('img')
//   var projectCardH3 = projectCard.querySelector('h3')

//   projectCard.addEventListener('mouseover', () => {
//     projectCardImg.style.opacity = '0'
//     projectCardH3.style.opacity = '1'
//   })

//   projectCard.addEventListener('mouseout', () => {
//     projectCardImg.style.opacity = '1'
//     projectCardH3.style.opacity = '0'
//   })
// })
// mainpage
// mainpage
var mainPageContent = document.querySelector('.main-page-content')

setTimeout(() => {
  mainPageContent.style.visibility = 'visible'
}, 3000)

const cardContainer = document.querySelector('.card-container')
const cards = cardContainer.children
let scrollSpeed = 1 // Adjust speed (pixels per frame)

function animateSlider() {
  cardContainer.scrollLeft += scrollSpeed

  // Check if first card is completely out of view
  const firstCard = cards[0]
  const firstCardWidth = firstCard.offsetWidth + 20 // +gap between cards

  if (cardContainer.scrollLeft >= firstCardWidth) {
    // Move first card to the end
    cardContainer.appendChild(firstCard)
    // Adjust scrollLeft to account for moved card
    cardContainer.scrollLeft -= firstCardWidth
  }

  requestAnimationFrame(animateSlider)
}

// Start animation
animateSlider()
