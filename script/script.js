// get innerText by Id parameter
function getElementId(textId) {
  const element = document.getElementById(textId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function buyNowBtn() {
  const accessories1 = getElementId("accessories1");

  addToCalEntry("K-Accessories", accessories1);
}

function buyNowBtn2() {
  const accessories2 = getElementId("accessories2");
  addToCalEntry("K-Accessories", accessories2);
}

function buyNowBtn3() {
  const homeMaker = getElementId("home-maker");
  addToCalEntry("Home Cooker", homeMaker);
}
function buyNowBtn4() {
  const capPrice = getElementId("cap-price");
  addToCalEntry("Sports Back Cap", capPrice);
}
function buyNowBtn5() {
  const jerseyPrice = getElementId("jersey-price");
  addToCalEntry("Full Jersey Set", jerseyPrice);
}
function buyNowBtn6() {
  const catesPrice = getElementId("cates-price");
  addToCalEntry("Sports cates", catesPrice);
}

const makePurchase = document.getElementById("make-purchase");
makePurchase.disabled = true;

function addToCalEntry(typeOfName, value) {
  const dynamicName = document.getElementById("dynamic-name");
  const count = dynamicName.childElementCount;
  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${typeOfName}`;
  dynamicName.appendChild(p);
  //   get total price
  const totalPrice = document.getElementById("total-price");
  const prevPrice = totalPrice.innerText;
  const totalAmount = (parseFloat(prevPrice) + parseFloat(value)).toFixed(2);
  totalPrice.innerText = totalAmount;

  if (totalAmount > 0) {
    makePurchase.disabled = false;
  }

  if (totalAmount >= 200) {
    const discountTotalPrice = (totalAmount * (20 / 100)).toFixed(2);
    const disElement = document.getElementById("discount");
    const disElementString = disElement.innerText;
    const disValue = parseFloat(disElementString);
    disElement.innerText = discountTotalPrice;
    const totalSum = (totalAmount - discountTotalPrice).toFixed(2);
    const total = document.getElementById("total");
    total.innerText = totalSum;
  }
}
