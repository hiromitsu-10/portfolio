const toggleBtn = document.getElementById('js-toggleMenu')

const menu = document.querySelector('.spMenu')

toggleBtn.addEventListener('click', () => {

    menu.classList.toggle('active')
})
