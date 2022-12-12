let prevElem;
let prevBackgroundColor;
for( let i = 1; i <= 5; i ++ ) {
    console.log(1)
    console.log(`ratingBtn${i}`)
    const elem = document.getElementById(`ratingBtn${i}`)
    console.log(elem)
    elem.addEventListener('click', (e) => {
        if( prevElem ) {
            prevElem.style.backgroundColor = prevBackgroundColor;
        }
        prevBackgroundColor = elem.style.backgroundColor
        elem.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--Orange');
        prevElem = elem;
    })
}

let elem = document.getElementById('ratingSubmitBtn');
elem.addEventListener('click', (e)=>{
    if( !prevElem ) {
        alert('Rate first!')
        return
    }
    let page = document.getElementById('ratingPage')
    page.style.display = 'none'
    page = document.getElementById('thankPage')
    page.style.display = 'flex'
    document.getElementById('ratingSpan').innerHTML = prevElem.textContent
})