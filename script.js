const navigation = document.querySelector('.navigation')
const ulNav = document.querySelector('.ul-nav')
const barBtn = document.querySelector('.bar-nav')
const showBlockText = document.querySelectorAll('.show-block-text')
const readMoreBtn = document.querySelectorAll('.read-more-btn')
const closeBtn = document.querySelectorAll('.btn-close')
const homeBtn = document.querySelector('.home-btn')


barBtn.addEventListener('click', function() {
    ulNav.classList.toggle('active')
})

window.onscroll = function() {
    var top = window.scrollY

    if(top >= 30) {
        navigation.classList.add('nav-active')
    } else {
        navigation.classList.remove('nav-active')
    }
}

for (let i = 0; i < readMoreBtn.length; i++) {
    readMoreBtn[i].addEventListener('click', function() {
        showBlockText[i].classList.add('show-block-active')
    })
}
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function() {
        showBlockText[i].classList.remove('show-block-active')
    })
}


// home btn 
homeBtn.addEventListener('click', function(){
    homeBtn.innerText = '+436608550424'
    setTimeout(function() {
        homeBtn.innerText = 'Rufen Sie uns an'
    },5000)
})
// home btn end


// faq-section
const moreBtn = document.querySelectorAll('.more-btn')
const answer = document.querySelectorAll('.answer')
for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener('click', function() {
        answer[i].classList.toggle ('active-faq')
        moreBtn[i].classList.toggle ('active-faq-btn')
    })
}
// endfaq



