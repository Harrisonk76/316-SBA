
// Handle navigation link clicks
function handleNavClick(event) {
    event.preventDefault();
    alert(`Clicked on ${event.target.id}`);
  };
  
  const texts = {
    p1: "We love to help you get started with plants!",
    p2: "Our tips and guides will ensure your planting success!",
    p3: "Watch your garden thrive with our expert advice!",
  }

  function updateTextFromButton(event){ 
  const button = event.target;
  const sectionId = button.dataset.section;
  const paragraph = document.getElementById(sectionId);
  if (paragraph) {
    paragraph.textContent = texts[sectionId] || "";
  }
}

document.querySelectorAll('.update-text-button').forEach(button => {
    button.addEventListener('click', updateTextFromButton);
  });
  
  
//   function updateText(pSection) {

//   document.getElementById('clickMe1').addEventListener('click', () => updateText('p1'));
//   document.getElementById('clickMe2').addEventListener('click', () => updateText('p2'));
//   document.getElementById('clickMe3').addEventListener('click', () => updateText('p3'));
  
// //   function updateText(pSection) {
//     const button = document.getElementById(pSection);
//     if (paragraph) {
//       paragraph.textContent = texts[pSection] || "";
//     }
// }
  
  
//   function changeContent() {
//     const button = document.getElementById(pSection);
//      if (paragraph) {
//       paragraph.textContent = texts[pSection] || "";

    // }
    // }


  // Handle form submission with validation
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
  
  // Function to create and display error messages
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
  
  // Define image links for favorite flowers
  const imageLinks = [
    { src: "succulent Small.jpeg", name: "A lovely succulent." },
    { src: "palm Small Small.jpeg", name: "A beautiful palm." },
    { src: "monstera Small.jpeg", name: "A gorgeous monstera." },
  ];
  
  // Function to generate HTML for each flower
  function flowerTemplate({ src, name }) {
    return `
      <div class="flower">
        <img class="flower-src" src="${src}" alt="${name}">
        <h4 class="flower-name">${name}</h4>
      </div>
    `;
  }
  
  // Populate the favoriteFlowerSection with flower information
  document.getElementById("favoriteFlowerSection").innerHTML = `
    <h3 class="favoriteFlowerSection-title">Favorite Flowers (${imageLinks.length} results)</h3>
    ${imageLinks.map(flowerTemplate).join("")}
    <p class="flowerFooter">We love all flowers. Which is your favorite?</p>
  `;
  