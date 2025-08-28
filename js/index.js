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
