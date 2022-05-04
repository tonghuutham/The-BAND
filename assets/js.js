const buyBtns = document.querySelectorAll('.js-buy-ticker')
const modal = document.querySelector('.modal')
const modalclose = document.querySelector('.modal-close')
const modalConTaiNer = document.querySelector('.modal-container')

//show
function showBuyTicker() {
    modal.classList.add('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicker)
}

//ấn vào nút x
function closeBuyTicker() {
    modal.classList.remove('open')
}

modalclose.addEventListener('click', closeBuyTicker)

//ấn toàn màn hình
modal.addEventListener('click', closeBuyTicker)
modalConTaiNer.addEventListener('click', function(event) {
    event.stopPropagation() //ngăn sự nổi bọt
})