// create variable for functional part in html, the part
// that require movement
const tagsEl = document.getElementById('tags') //div tags tu
const textarea = document.getElementById('textarea')

// once load the page, cursor straight go there that
// is to textarea

textarea.focus()

//addEventListener is what read the movement to create another
// movement, here is press key n let go
// e is event parameter, press key = e
// input this => process into smthg
// e.target.value is whatever we type in
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    //if e event is ENter key
    // if detect key Enter pressed
    if(e.key === 'Enter') {
        
        //wait few sec to clear input, set to nothing ' '
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

// console.log(input) is we display input
// for we to see the input
// function createTags (input) {
//     console.log(input)
// }

// input.split(',') is split the word by coma
// filter whitespace
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    // clear all previous input
    tagsEl.innerHTML = ''

    tags.forEach(tag => { //for each tag we do => ...
        const tagEl = document.createElement('span') //seperate each tag
        tagEl.classList.add('tag') //put each tag into a list
        tagEl.innerText = tag //innerText return just the text
        // content of the element n its childen, no css
        tagsEl.appendChild(tagEl)  //appendChild method append
        // element as last child of an element
    })
}

function randomSelect() {

    // how many time highlight before choose
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
        if (randomTag !== undefined) {
            highlightTag(randomTag)
            // this will highlight for infinity
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);
    // highlightTag n this setTimeout will highlight n unhighlighting
    // for amt of time

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
    //this setTimeout stop the highlight n unlighting
}

function pickRandomTag() {
    //take all node/tag element in document
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

//remove highligh from classList
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}