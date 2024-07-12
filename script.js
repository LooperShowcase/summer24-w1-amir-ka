function realpic(){
    const id = Math.floor((Math.random() * 6 + 1) * 10000);
    return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
}
console.log(realpic());

const fakepic = "https://thispersondoesnotexist.com/"

// showin the images 
const imgcontainer = document.getElementById("images")
const resContainer = document.getElementById("result");

function draw() {
    // real image
    imgcontainer.innerHTML = "";
    resContainer.innerHTML = "";

    const randomBool = Math.random() >0.5;
    const arr = [randomBool , !randomBool];
    const again = document.createElement("button");
    again.innerHTML = "Play again";
    again.onclick = draw;
    for (const isReal of arr) {
 const img = document.createElement("img");
 img.src = isReal ? realpic(): fakepic;

 img.onclick = function (){
    if (isReal){
        resContainer.innerHTML = "nice guess :)";
    } else {
        resContainer.innerHTML = "ya lost bud.... ";
    }
    resContainer.appendChild(again);
}
 imgcontainer.appendChild(img); 
}
}
draw();