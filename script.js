let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let parag = document.getElementById("p-div");
let imge = document.getElementById("img-div");
let backColor = document.querySelectorAll("body");






function addImg() {
    console.log("addImg function called"); // Debugging line
    imge.style.display = "block";
    parag.style.display = "none";
    let newImg = document.createElement("img");
    newImg.src = "rasil.png";
    console.log("Image element created with src:", newImg.src); // Debugging line
    imge.appendChild(newImg);
    console.log("Image appended to div"); // Debugging line
}

imgButton.addEventListener("click", addImg);



function addPara() {

    let newPara = document.createElement("p");
    newPara.textContent = "Lmao My Opp is Towaf";
    parag.appendChild(newPara);
    imge.style.display = "none";
    parag.style.display = "block";

}

pButton.addEventListener("click", addPara)