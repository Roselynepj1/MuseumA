const trigger = document.getElementById('menu-trigger')
const menu = document.getElementById('mobile-menu')
let state = false

trigger.addEventListener('click', (event) => {
  const { currentTarget: targetElement } = event
  if (state) {
    targetElement.classList.toggle('fa-xmark')
    menu.classList.toggle('menu-active')
    // menu.style.display = 'none'
    return (state = false)
  }
  menu.classList.toggle('menu-active')
  targetElement.classList.toggle('fa-xmark')
  return (state = true)
})
