export function Header(){
    const headerHTML = 
    `<header class="header">
      <i class = "bx bx-menu" id="menu-icon"></i>

      <a href="index.html#home" class="logo">
        <img src="images/example-imgs/Test-logos2.svg" alt="">
      </a>

      <a href="https://secure.anedot.com/sacred-heart-byzantine-catholic-church/shbcc" target="_blank">
          <button class="main-btn">DONATE</button>
      </a>

      <!--Navagation Bar-->
      <nav class= "navbar">
        <a href = "visit.html">Visit</a>
        <a href = "relics.html">Relics</a>
        <a href = "about.html">ABOUT</a>
        <a href = "index.html#schedule">SCHEDULE</a>
        <a href = "shrine.html">ALL SAINTS SHRINE</a>
        <a href = "hall.html">BANQUET HALL</a>
        <a href = "index.html#contact">CONTACT & LOCATION</a>
      </nav>
    </header>`;

    document.getElementById("header").innerHTML = headerHTML;
    
}

