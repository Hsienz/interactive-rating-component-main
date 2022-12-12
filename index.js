const setRatingBtn = (idx)=>{
    const temp = document.getElementsByClassName('ratingBtnActive')
    console.log(temp)
    if( temp.length ) {
        const activeRatingBtn = temp[0]
        activeRatingBtn.classList.remove( 'ratingBtnActive')
    }
    
    document.getElementById(`ratingBtn${idx}`).classList.add( 'ratingBtnActive' )
}

for( let i = 1; i <= 5; i ++ ) {
    const elem = document.getElementById(`ratingBtn${i}`) 
    elem.addEventListener('click', (e) => setRatingBtn(i) )
}

let elem = document.getElementById('ratingSubmitBtn');
elem.addEventListener('click', (e)=>{
    const temp = document.getElementsByClassName('ratingBtnActive')
    if( !temp.length ) {
        alert('Please rating first!')
        return
    }
    const activeRatingBtn = temp[0]
    let page = document.getElementById('ratingPage')
    page.style.display = 'none'
    page = document.getElementById('thankPage')
    page.style.display = 'flex'
    document.getElementById('ratingSpan').innerHTML = activeRatingBtn.textContent
})