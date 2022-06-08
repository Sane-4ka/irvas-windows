

const callWorkerBtn = document.getElementById('callWorker');
const popupEngeneerWindow = document.querySelector('.popup_engineer');

const useEngeneerWindow = (style) => {
    popupEngeneerWindow.style.display = style
}

callWorkerBtn.addEventListener('click', () => useEngeneerWindow(`block`))

popupEngeneerWindow.addEventListener('click', (e) => {
    const event = e.target
    if (event.classList.contains('popup_engineer') || event.parentNode.classList.contains('popup_close')) {
        useEngeneerWindow(`none`)
    }
})



