const gridContainer = document.querySelector(".grid-container");
const boxes = document.getElementById("sketchpad").childNodes;
const reset = document.getElementById("reset");


let gridSize = 10;

createGrid();

reset.addEventListener('click', () => {
    
    clearGrid();
    gridSize = +prompt("How many squares per side for the new grid?", "16");
    createGrid();
})

function createGrid(){

    document.documentElement.style.setProperty("--colNum", gridSize);
    document.documentElement.style.setProperty("--rowNum", gridSize);

    let i = 0;
    while (i<Math.pow(gridSize,2)){
        const grid = document.createElement('div');
        grid.className = "grid-item";
        gridContainer.append(grid);
        i++; 
    }

    colorGrid();

}

function colorGrid(){

    

    boxes.forEach(box => {

        let randomCol = generateRandomColor();

        box.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = randomCol;
        });
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = randomCol;
        });
    });
}

function clearGrid(){
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
      }
}

function generateRandomColor(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}













    




