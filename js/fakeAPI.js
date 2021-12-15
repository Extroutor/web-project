function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

window.addEventListener('load', () => {

    let id = 1;
    const preloader = document.getElementById("preloader");
    const cards = document.getElementById("cards");

    const button = document.getElementById("add-card");
    button.addEventListener('click', async function (e) {
        button.disabled = true;
        const card_t = document.getElementById("one-card");
        const card = card_t.content.cloneNode(true);
        const card_title_h2 = card.querySelector("h2");
        const card_body = card.getElementById("card-body");
        preloader.classList.remove('disabled');
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
            if (response.ok) {
                let json = await response.json();
                console.log(json);
                if (Object.keys(json).length) {
                    card_title_h2.innerHTML = json.title;
                    card_body.setAttribute('id', id);
                    card_body.innerHTML = json.body;
                    id = id + 1;
                } else {
                    alert("⚠ Что-то пошло не так");
                }
                sleep(2000);
                preloader.classList.add('disabled');
                cards.insertBefore(card, preloader);
            } else {
                alert("⚠ Что-то пошло не так");
            }
            button.disabled = false;
        } catch (error) {
            alert("⚠ Что-то пошло не так");
            preloader.classList.add('disabled');
            button.disabled = false;
        }
    });
})



