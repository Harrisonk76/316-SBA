function handleNavClick(event) {
  event.preventDefault();
  alert(`Clicked on ${event.target.id}`);
}
const mainSection = (texts)
function updateText(mainSection) {

    
  const texts = {
    section1: "We love to help you get started with plants!",
    section2: "Our tips and guides will ensure your planting success!",
    section3: "Watch your garden thrive with our expert advice!",
  };

  function updateText() {
    document.getElementById('p1').textContent = texts.p1;
    document.getElementById('p2').textContent = texts.p2;
    document.getElementById('p3').textContent = texts.p3;
  };

//   document.getElementById('updateButton').addEventListener('click', updateText);

  

  const paragraph = document.getElementById(sectionId);
  if (paragraph) {
    paragraph.innerHTML = texts[sectionId] || "";
  }
}
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelectorAll(".error").forEach((el) => el.remove());

  const username = document.getElementById("uname").value.trim();
  const password = document.getElementById("pword").value;

  let isValid = true;

  if (password.length < 6) {
    createError("pword", "Password must be at least 6 characters long.");
    isValid = false;
  }

  if (isValid) {
    console.log("Username:", username);
    console.log("Password:", password);
  }
});

function createError(inputId, message) {
  const inputField = document.getElementById(inputId).parentNode;
  let error = inputField.querySelector(".error");

  if (error) {
    error.textContent = message;
  } else {
    error = document.createElement("div");
    error.textContent = message;
    error.className = "error";
    inputField.appendChild(error);
  }
}
const imageLinks = [
  { src: "succulent Small.jpeg", name: "A lovely succulent." },
  { src: "palm Small Small.jpeg", name: "A beautiful palm." },
  { src: "monstera Small.jpeg", name: "A gorgeous monstera." },
];

function flowerTemplate({ src, name }) {
  return `
        <div class="flower">
            <img class="flower-src" src="${src}" alt="${name}" style="width: 100px; margin: 10px;">
            <h4 class="flower-name">${name}</h4>
        </div>
    `;
}

document.getElementById("favoriteFlowerSection").innerHTML = `
    <h3 class="favoriteFlowerSection-title">Favorite Flowers (${
      imageLinks.length
    } results)</h3>
    ${imageLinks.map(flowerTemplate).join("")}
    <p class="flowerFooter">We love all flowers. Which is your favorite?</p>
`;
