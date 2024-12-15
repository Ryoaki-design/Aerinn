// Navigation links
const homeLink = document.getElementById("home-link");
const exploreLink = document.getElementById("explore-link");
const loginLink = document.getElementById("login-link");
const aboutLink = document.getElementById("about-link");

// Content container
const content = document.getElementById("content");

// Event Listeners
homeLink.addEventListener("click", loadHome);
exploreLink.addEventListener("click", loadExplore);
loginLink.addEventListener("click", loadLogin);
aboutLink.addEventListener("click", loadAbout);

// Load Home Page
function loadHome() {
  content.innerHTML = `
    <section class="hero">
      <h1>Elevate Your Style</h1>
      <p>Unleash your creativity with fashion inspiration tailored just for you.</p>
      <button onclick="loadExplore()">Explore Now</button>
    </section>
  `;
}

// Load Explore Page
function loadExplore() {
  content.innerHTML = `
    <section class="gallery">
      <h2>Explore Collections</h2>
      <div class="grid">
        <div class="grid-item"><img src="WomanStyles.jpg" alt="Women Styling"></div>
        <div class="grid-item"><img src="ManStyles.jpg" alt="Men Styling"></div>
        <div class="grid-item"><img src="Womanhairstyle.jpg" alt="Women Hairstyles"></div>
        <div class="grid-item"><img src="Manhairstyle.jpg" alt="Men Hairstyles"></div>
      </div>
    </section>
  `;
}

// Load Login Page
function loadLogin() {
  content.innerHTML = `
    <section class="login classy-login">
      <div class="login-container">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>
        <form>
          <input type="text" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
        <div class="login-footer">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </section>
  `;
}

// Load About Page
function loadAbout() {
  content.innerHTML = `
    <section class="about">
      <h2>About Us</h2>
      <p>About Aerin  

Aerin brings together the timeless elegance of Paris, the bold trends of Korea, and the minimalist charm of the Netherlands to create globally inspired fashion for everyday life.  

More than just a clothing brand, we’re here to help you elevate your style. Through versatile designs and expert fashion tips, Aerin empowers you to express your individuality and discover your best-dressed self.  

Explore Aerin and redefine your wardrobe with global flair..</p>
    </section>
  `;
}
