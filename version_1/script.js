let popupBg = document.querySelector('.ques')
let popup = document.querySelector('.que')
let openPopupButtons = document.querySelectorAll('.btnstart')
let closePopupButton = document.querySelector('.startbtn')
let inputOne = document.querySelector('.inputOne')
let inputTwo = document.querySelector('.inputTwo')

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popupBg.classList.add('active')
        popup.classList.add('active')
    })
})

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active')
    popup.classList.remove('active')
    localStorage.setItem('name', inputOne.value)
    localStorage.setItem('dream', inputTwo.value)
    window.location.href = 'app.html'
})

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active')
        popup.classList.remove('active')
    }
})

//app.html