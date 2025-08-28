const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("menu-open");
const closeIcon = document.getElementById("menu-close");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

function getTextInNumber(id) {
  const text = document.getElementById(id).innerText;
  const convertInNumber = parseInt(text);
  return convertInNumber;
}
function setTextInNumber(text, id) {
  const TextId = document.getElementById(id);
  TextId.innerText = text;
}
// heart count start
const whiteHeart = document.getElementsByClassName("white-heart");
for (const heart of whiteHeart) {
  const item = heart.addEventListener("click", function () {
    const availableHeart = getTextInNumber("available-heart");
    const newHeart = availableHeart + 1;
    setTextInNumber(newHeart, "available-heart");
  });
}
// heart count end

function getText(id) {
  const text = document.getElementById(id).innerText;
  return text;
}

// //call button start:
// const btnNationalCall = document
//   .getElementById("btn-national-call")
//   .addEventListener("click", function () {
//     const nationalServiceName = getText("national-service");
//     const nationalNumber = getText("national-number");
//     const coin = getTextInNumber("coin");
//     if (coin < 20) {
//       alert("You do not have sufficient coin for call");
//       return;
//     }
//     alert(`${nationalServiceName} ${nationalNumber}`);

//     const restCoin = coin - 20;
//     setTextInNumber(restCoin, "coin");
//   });

const callBtn = document.getElementsByClassName("btn-call");
for (const call of callBtn) {
  call.addEventListener("click", function () {
    const serviceName = call.getAttribute("data-service");
    const serviceNumber = call.getAttribute("data-number");
    const coin = getTextInNumber("coin");
    if (coin < 20) {
      alert(
        "You do not have sufficient coin for call. Please refresh and get 100 coin for free!!"
      );
      return;
    }
    alert(`You are calling ${serviceName} by ${serviceNumber}`);
    const restCoin = coin - 20;
    setTextInNumber(restCoin, "coin");
    const time = new Date();
    const rightTime = time.toLocaleTimeString();

    const history = document.getElementById("history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `<div
              class="flex items-center justify-between bg-[#FAFAFA] rounded-lg p-4 my-4"
            >
              <div>
                <h1 class="font-semibold">${serviceName}</h1>
                <p>${serviceNumber}</p>
              </div>
              <p>${rightTime}</p>
            </div>`;
    history.appendChild(newHistory);
  });
}

//history clear
document.getElementById("btn-clear").addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerText = "";
});

// copy button active;
const copyBtns = document.getElementsByClassName("btn-copy");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const number = copyBtn.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    const availableCopy = getTextInNumber("available-copy");
    const totalCopy = availableCopy + 1;
    setTextInNumber(totalCopy, "available-copy");
    const span = copyBtn.querySelector("span");
    span.innerText = "Copied";
  });
}
