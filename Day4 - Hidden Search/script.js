const searchBtn = document.getElementById('search')
const container = document.querySelector('.container')

searchBtn.addEventListener('click', () => container.classList.toggle('hiddenSearch'))
