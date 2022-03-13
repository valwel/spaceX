document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.mobile-nav')
    
    myButton.addEventListener('click', () => {
        mobileNav.classList.toggle('visible')
    })
}) 