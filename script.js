const gridContainer = document.querySelector(".grid-container");

function toggleColor(element){
    const bgColor = element.target.style.backgroundColor;
    console.log(bgColor);
    if (bgColor == "rgb(241, 239, 236)"){
        element.target.style.backgroundColor = "rgb(212, 201, 190)";
    }
    else if (bgColor == "rgb(212, 201, 190)"){
        element.target.style.backgroundColor = "rgb(241, 239, 236)";
    }
}

// creates, styles and appends grid boxes to the container element
for (i = 0; i < 16; i++){
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridBox.setAttribute("style", "border: 5px solid rgb(3, 3, 3); width: 200px; height: 200px; background-color: rgb(241, 239, 236)");

    gridBox.addEventListener("mouseenter", (element) => toggleColor(element));

    gridContainer.appendChild(gridBox);
}

