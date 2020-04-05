const gridContainer = document.querySelector('#gridContainer');


for (let index = 0; index < 16*16; index++) {
    const content = document.createElement('div');
    gridContainer.appendChild(content);
    content.addEventListener("mouseover", () => {
        content.setAttribute('style', 'background-color: darkkhaki;')
    });
}    

