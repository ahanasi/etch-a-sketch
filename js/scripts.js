const gridContainer = document.querySelector(".grid-container");
const boxes = document.getElementById("sketchpad").childNodes;

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




    




