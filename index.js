
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

  // Handle form submission with validation
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    document.querySelectorAll(".error").forEach(el => el.remove());
  
    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pword").value;
  
    if (password.length < 6) {
      showError("pword", "Password must be at least 6 characters long.");
      return; 
    }
  
    console.log("Username:", username);
    console.log("Password:", password);
  });
  
  function showError(inputId, message) {
    const inputField = document.getElementById(inputId).parentNode;
    let error = inputField.querySelector(".error");
  
    if (!error) {
      error = document.createElement("div");
      error.className = "error";
      inputField.appendChild(error);
    }
    
    error.textContent = message;
  }
  
  const imageLinks = [
    { src: "sba folder/succulent Small.jpeg", name: "A lovely succulent." },
    { src: "sba folder/friendship plant Small.jpeg", name: "A cute friendship pl." },
    { src: "sba folder/hosta Small.jpeg", name: "A gorgeous hosta." },
  ];
  
  function flowerTemplate({ src, name }) {
    return `
      <div class="flower">
        <img class="flower-src" src="${src}" alt="${name}">
        <h4 class="flower-name">${name}</h4>
      </div>
    `;
  }
  
  document.getElementById("favoriteFlowerSection").innerHTML = `
    <h3 class="favoriteFlowerSection-title">Favorite Flowers (${imageLinks.length} results)</h3>
    ${imageLinks.map(flowerTemplate).join("")}
    <p class="flowerFooter">We love all flowers. Which is your favorite?</p>
  `;
  