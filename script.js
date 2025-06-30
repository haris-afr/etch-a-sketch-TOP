const gridContainer = document.querySelector(".grid-container");
const sliderValueDisplay = document.querySelector(".size-select-container p");
const slider = document.querySelector(".slider");
const randomRGBButton = document.querySelector(".random-rgb-button")

let randomRGB = 0;

function toggleColor(element){
    const bgColor = element.target.style.backgroundColor;
    
    if (bgColor == "rgb(241, 239, 236)"){
        element.target.style.backgroundColor = "rgb(212, 201, 190)";
    }
    else{
        element.target.style.backgroundColor = "rgb(241, 239, 236)";
    }
}

function randomizeColor(element){
    const val1 = Math.floor(Math.random() * 256);
    const val2 = Math.floor(Math.random() * 256);
    const val3 = Math.floor(Math.random() * 256);
    element.target.style.backgroundColor = "rgb(" + val1 + ", " + val2 + ", " + val3 + ")"; 
}

function createGrid(gridLen){
    for (i = 0; i < gridLen * gridLen; i++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");

        gridBox.setAttribute("style", "border: 1px solid rgb(3, 3, 3); background-color: rgb(241, 239, 236)");
        gridBox.style.width = (800 / gridLen) + "px";
        gridBox.style.height = (800 / gridLen) + "px";
        

        gridBox.addEventListener("mouseenter", (element) => {
            randomRGB ? randomizeColor(element) : toggleColor(element);
        });

        gridContainer.appendChild(gridBox);
    }
}

function destroyGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


slider.addEventListener("input", (evt) => {
    const sliderVal = evt.target.value;
    sliderValueDisplay.textContent = sliderVal;

    destroyGrid();
    createGrid(sliderVal);
})

randomRGBButton.addEventListener("input", () => {
    randomRGB = !(randomRGB);
})

createGrid(4);