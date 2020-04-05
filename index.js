const gridContainer = document.querySelector('#gridContainer');
const resetButton = document.querySelector('#reset');
const gridButton = document.querySelector('#size');


gridButton.addEventListener('click', () => {

    let size = prompt("What size of board do you want?(Max 100x100)");

    while (size > 100){
        size = prompt("Too Big, choose something smaller than 101");
    }
    for (let index = 0; index < size * size; index++) {
        //set the rows and cols based on the size chose by the user
        gridContainer.style.setProperty("grid-template-rows", `repeat(${size}, 1fr)`)
        gridContainer.style.setProperty("grid-template-columns", `repeat(${size}, 1fr)`)
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        gridContainer.appendChild(content);
        content.addEventListener("mouseover", () => {
            content.setAttribute('style', 'background-color: #a89b8c;')
        });
    } 
    
    const gridReset = document.querySelectorAll('#content');
    for(var i = 0; i < gridReset.length;i++){
    gridReset[i].setAttribute('style', 'background-color: none')
    }

});



resetButton.addEventListener('click', () => {
    const gridReset = document.querySelectorAll('#content');

    for(var i = 0; i < gridReset.length;i++){
    gridReset[i].setAttribute('style', 'background-color: none')
    }
});



