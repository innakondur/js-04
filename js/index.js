const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
para.appendChild(text);

const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

const infoBlock = document.querySelector('.info-block');
for (let i = 0; i < 10; i++) {
    let info = document.createElement('p');
    info.innerText = 'Item no: ' + i;
    infoBlock.appendChild(info);
    info.style.color = 'white';
    info.style.backgroundColor = 'red';
    info.style.padding = '10px';
    info.style.width = '250px';
    info.style.textAlign = 'center';
};

let counter = 0;
    document.querySelector('.counter-button').addEventListener('click', function() {
        document.querySelector('.click-count').textContent = ++counter;
    });