window.onload = () => {
    document.querySelector('.button').addEventListener('click', ()=>{
        var el = document.getElementById('.Button');
        if(el){
            el.addEventListener('click', swapper, false)
        }
        let data = document.querySelector('.feature-1').value;


        if (document.querySelector('.feature-1').checked && document.querySelector('.feature-2').checked) {
            document.querySelector('.total__price').innerHTML = 'Выберите корректно вид сайта';
        }
        else if(document.querySelector('.feature-3').checked && document.querySelector('.feature-4').checked) {
            document.querySelector('.total__price').innerHTML = 'Выберите корректно дизайн';
        } 
        else if(document.querySelector('.feature-1').checked) {
            if(document.querySelector('.feature-3').checked) {
                document.querySelector('.total__price').innerHTML = '30 000 рублей';
            } 
            else {
                document.querySelector('.total__price').innerHTML = '50 000 рублей';
            }
        } else {
            if(document.querySelector('.feature-3').checked) {
                document.querySelector('.total__price').innerHTML = '15 000 рублей';
            } 
            else {
                document.querySelector('.total__price').innerHTML = '25 000 рублей';
            }
        }
        if (document.querySelector('.feature-1').checked && (!document.querySelector('.feature-3').checked || !document.querySelector('.feature-4').checked)) {
            document.querySelector('.total__price').innerHTML = 'Выберите еще дизайн';
        }
        if (document.querySelector('.feature-2').checked && (!document.querySelector('.feature-3').checked || !document.querySelector('.feature-4').checked)) {
            document.querySelector('.total__price').innerHTML = 'Выберите еще дизайн';
        }
        if (document.querySelector('.feature-3').checked && (!document.querySelector('.feature-1').checked || !document.querySelector('.feature-2').checked)) {
            document.querySelector('.total__price').innerHTML = 'Выберите еще вид сайта';
        }
        if (document.querySelector('.feature-4').checked && (!document.querySelector('.feature-1').checked || !document.querySelector('.feature-2').checked)) {
            document.querySelector('.total__price').innerHTML = 'Выберите еще вид сайта';
        }
    })
};
