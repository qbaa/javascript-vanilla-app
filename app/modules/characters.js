class Characters
{
    fetch() {
        fetch('https://api.got.show/api/characters/')
            .then((response) => response.json())
            .then((result) => {
                this.draw(result);
            })
            .catch(error => console.error(error));
    }

    draw(result) {
        const container = document.querySelector('#container');
    
        let tpl = `<ul>`;

        result.forEach((item) => {
            tpl += `
                <li data-character="${item._id}">${item.name}</li>
            `;
        });

        tpl += `</ul>`;

        container.insertAdjacentHTML('afterbegin', tpl);

        container.querySelectorAll('li').forEach((item) => {
            item.addEventListener('click', (e) => {
                this.getDetails(e.target);
            });
        });
    }

    getDetails(element) {
        const character = document.querySelector('.character');
        
        fetch('https://api.got.show/api/characters/byId/' + element.getAttribute('data-character'))
            .then((response) => response.json())
            .then((result) => {
                character.innerHTML = "";

                let tpl = `
                    <div class="name">${result.data.name}</div>
                `;

                if(result.data.hasOwnProperty('imageLink')) {
                    tpl += `<img src="https://api.got.show/${result.data.imageLink}" />`;
                }

                character.insertAdjacentHTML('afterbegin', tpl);
            })
            .catch(error => console.error(error));
    }
}

module.exports = Characters;