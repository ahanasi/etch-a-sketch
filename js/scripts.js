const gridContainer = document.querySelector(".grid-container");
const boxes = document.getElementById("sketchpad").childNodes;
const reset = document.getElementById("reset");

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

    boxes.forEach(box => {
        colorGrid(box);
    });
    

}

function colorGrid(box){     
    boxEvents(box, generateRandomColor());
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

function boxEvents(gridBox, color){

    let brightVal = 1.1;
    
    gridBox.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = color;
        e.target.style.filter = `brightness(${(brightVal)})`;
    });

    gridBox.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = color;
        e.target.style.filter = `brightness(${(brightVal-=0.1)})`;
    }); 
        
}


//Initialize Grid
let gridSize = 16;
createGrid();

reset.addEventListener('click', () => {
    
    clearGrid();

    do {
        gridSize = +prompt("How many squares per side for the new grid?", "16");
    }
    while(gridSize == "" || isNaN(gridSize));
    
    createGrid();
});




    
















    




