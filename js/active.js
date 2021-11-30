document.querySelector('.button').addEventListener('click', ()=>{
    let data = document.querySelector('.feature-1').value;
    if (document.querySelector('.feature-1').checked) {
        document.querySelector('.total__price').innerHTML = data;
    }
    else {
        document.querySelector('.total__price').innerHTML = '';
    }
})