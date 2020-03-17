const gridContainer = document.querySelector(".grid-container");
let i = 0;
let gridSize = 10;
document.documentElement.style.setProperty("--colNum", gridSize);
document.documentElement.style.setProperty("--rowNum", gridSize);


while (i<Math.pow(gridSize,2)){
    const grid = document.createElement('div');
    grid.className = "grid-item";
    gridContainer.append(grid);
    i++; 
}