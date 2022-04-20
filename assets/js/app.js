const NotificatioButton = document.getElementById('notification')
const ButtonMore = document.getElementById('more');
const UserButton = document.getElementById('userIcon')

const NotificationModal = document.querySelector(".box-modal")
const OptionsModal = document.querySelector(".OptionModal")

const openModal = () => {NotificationModal.style.display = "initial"}
const closeModal = () => {NotificationModal.style.display = "none"}

const openModalOptions = () => {OptionsModal.style.display = "initial";}
const closeModalOptions = () => {OptionsModal.style.display = "none"}

NotificatioButton.addEventListener('click', () => {
    if(NotificationModal.style.display === 'none') {
        openModal()
    } else {
        closeModal()
    }
})

ButtonMore.addEventListener('click', () => {
    if(OptionsModal.style.display === 'none') {
        openModalOptions()
    } else {
        closeModalOptions()
    }
})

let valueData = document.querySelectorAll('[data-name]')
let alienFieldName = document.querySelectorAll('.user-content, strong')

console.log(alienFieldName + '' + valueData)