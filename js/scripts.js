const gridContainer = document.querySelector(".grid-container");
let i = 0;
while (i<16){
    const grid = document.createElement('div');
    grid.className = "grid-item";
    gridContainer.append(grid);
    i++; 
}