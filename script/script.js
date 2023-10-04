// get innerText by Id parameter
function getElementId(textId) {
  const element = document.getElementById(textId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function buyNowBtn() {
  const accessories1 = getElementId("accessories1");
  
  addToCalEntry("K-Accessories",accessories1)
}

function buyNowBtn2() {
  const accessories2 = getElementId("accessories2");
  addToCalEntry("K-Accessories",accessories2)

}

function buyNowBtn3() {
  const homeMaker = getElementId("home-maker");
  addToCalEntry("Home Cooker",homeMaker)
  
}
function buyNowBtn4() {
  const capPrice = getElementId("cap-price");
  addToCalEntry("Sports Back Cap",capPrice)
  
}
function buyNowBtn5() {
  const jerseyPrice = getElementId("jersey-price");
  addToCalEntry("Full Jersey Set",jerseyPrice)
  
}
function buyNowBtn6() {
  const catesPrice = getElementId("cates-price");
  addToCalEntry("Sports cates",catesPrice)
  
}

function addToCalEntry (typeOfName){
        const dynamicName = document.getElementById('dynamic-name');
        const count = dynamicName.childElementCount;
        const p = document.createElement('p');
        p.innerHTML = `${count+1}. ${typeOfName}`;
        dynamicName.appendChild(p);  
}



// const valueSpan = document.getElementById('value');
// const addButton = document.getElementById('addButton');
// let counter = 0;
// addButton.addEventListener('click', () => {
//     counter++;
//     valueSpan.textContent = counter;
// });

