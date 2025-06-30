const gridContainer = document.querySelector(".grid-container");

for (i = 0; i < 16; i++){
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridbox")
    gridBox.setAttribute("style", "border: 5px solid black; width: 200px; height: 200px");
    gridContainer.appendChild(gridBox);
}