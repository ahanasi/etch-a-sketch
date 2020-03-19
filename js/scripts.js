const gridContainer = document.querySelector(".grid-container");
const boxes = document.getElementById("sketchpad").childNodes;
const reset = document.getElementById("reset");


let gridSize = 10;
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
    box.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "pink";
    });
    box.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "pink";
    });
    
});

reset.addEventListener('click', (e) => {
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
      }

    gridSize = +prompt("How many squares per side for the new grid?", "16");
    document.documentElement.style.setProperty("--colNum", gridSize);
    document.documentElement.style.setProperty("--rowNum", gridSize);

    let i = 0;
    while (i<Math.pow(gridSize,2)){
    const grid = document.createElement('div');
    grid.className = "grid-item";
    gridContainer.append(grid);
    i++; 

    boxes.forEach(box => {
        box.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = "pink";
        });
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "pink";
        });
        
    });
}
    
})








    




