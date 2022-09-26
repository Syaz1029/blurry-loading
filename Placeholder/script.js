// all id
const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

//class
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

//dont want to imidiately display img n text so this is the loading
//controll, load for 2 n 1/2 sec
setTimeout (getData, 2500)

function getData () {
    header.innerHTML = '<img src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/304rmk1jejbq9a1s_1647877254.jpeg" alt="bts ptd on-stage" />'
    title.innerHTML = 'Ending Ment PTD ON-STAGE Concert'
    excerpt.innerHTML = 'Ive been feeling myself pushed to limits, trying to remember what I did, who I was. But I knew I had be able to remember when I came here. And although V had to sit out and you guys arent here, I realized I wont need any motivation if I could just hold a concert.'
    profile_img.innerHTML = '<img src="https://img.wattpad.com/c57f4c0a0d94c9662a80589392448879ad83dc75/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b684b4d54427463435253735a413d3d2d3533363539343334342e313531343236653737313931623838653831303532303631303137362e6a7067?s=fit&w=720&h=720" alt="namjoon" />'
    name.innerHTML = 'Namjoon'
    date.innerHTML = ' 24 Oct 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg')
    )
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text')
    )
}