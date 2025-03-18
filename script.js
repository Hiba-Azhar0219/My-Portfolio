//mainpage
var mainPageContent = document.querySelector('.main-page-content')

setTimeout(() => {
  mainPageContent.style.visibility = 'visible'
}, 3000)

// Select all project cards
var projectCards = document.querySelectorAll('.project-card')

projectCards.forEach((projectCard) => {
  var projectCardImg = projectCard.querySelector('img')
  var projectCardH3 = projectCard.querySelector('h3')

  projectCard.addEventListener('mouseover', () => {
    projectCardImg.style.opacity = '0'
    projectCardH3.style.opacity = '1'
  })

  projectCard.addEventListener('mouseout', () => {
    projectCardImg.style.opacity = '1'
    projectCardH3.style.opacity = '0'
  })
})
