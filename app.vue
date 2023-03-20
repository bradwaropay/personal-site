<script>
function speckle(target) {
  const canvas = document.getElementById(target);
  const ctx = canvas.getContext("2d");

  let nb = 0;
  let speckArray = [];
  let speckColor = "239, 239, 239";
  let speckConnectColor = "0, 255, 240";
  let speckConnectWidth = 0.1;
  let speckConnectRadius = 200;
  let speckConnectDistance = 100;
  let mouseX;
  let mouseY;

  const animate = animateSpecks();
  createSpecks(animate);
  detectMouse();
  detectResize();

  function Speck(radius, x, y, vx, vy) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  Speck.prototype.update = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(" + speckColor + ")";
    ctx.fill();

    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

    this.x += this.vx;
    this.y += this.vy;

    for (let i = 0; i < nb; i++) {
      const that = speckArray[i];
      const location = Math.sqrt(
        Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2)
      );
      const distance = Math.sqrt(
        Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2)
      );
      const connectOpacity = 1 - distance / speckConnectDistance;

      if (location <= speckConnectRadius && distance <= speckConnectDistance) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(that.x, that.y);
        ctx.strokeStyle =
          "rgba(" + speckConnectColor + "," + connectOpacity + ")";
        ctx.lineWidth = speckConnectWidth;
        ctx.stroke();
      }
    }
  };

  function createSpecks(animate) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    nb = Math.round(canvas.width * canvas.height * (2 / 10000));
    speckArray = [];

    for (let i = 0; i < nb; i++) {
      const radius = Math.random();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = -0.5 + Math.random();
      const vy = -0.5 + Math.random();

      const createSpeck = new Speck(radius, x, y, vx, vy);
      speckArray.push(createSpeck);
    }

    if (animate) animate;
  }

  function drawSpecks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nb; i++) {
      let speck = speckArray[i];
      speck.update();
    }

    window.requestAnimationFrame(() => {
      drawSpecks();
    });
  }

  function animateSpecks() {
    window.requestAnimationFrame(() => {
      drawSpecks();
    });
  }

  function detectMouse() {
    canvas.addEventListener("mousemove", (canvasPosition) => {
      mouseX = canvasPosition.pageX;
      mouseY = canvasPosition.pageY - window.scrollY;
    });
  }

  function detectResize() {
    let documentWidth = document.body.clientWidth;
    let documentHeight = document.body.clientHeight;

    console.log(documentWidth);
    console.log(documentHeight);
    window.addEventListener("resize", () => {
      if (
        documentWidth !== document.body.clientWidth ||
        documentHeight !== document.body.clientHeight
      ) {
        documentWidth = document.width;
        documentHeight = document.height;
        createSpecks();
      }
    });
  }
}

export default {
  mounted() {
    speckle("speckle");
  },
};
</script>

<template>
  <canvas id="speckle" />
  <main class="container">
    <article class="intro">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 89.01"
        aria-labelledby="logo-title"
      >
        <title id="logo-title">Brad Waropay Logo</title>
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#7a5fff">
              <animate
                attributeName="stop-color"
                values="#7a5fff; #01ff89; #7a5fff"
                dur="10s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="100%" stop-color="#01ff89">
              <animate
                attributeName="stop-color"
                values="#01ff89; #7a5fff; #01ff89"
                dur="10s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <g fill="url('#logo-gradient')">
          <path
            d="m14.84,58.52c0,8.63,7.02,15.66,15.66,15.66s15.66-7.02,15.66-15.66-7.02-15.66-15.66-15.66v7.14c4.7,0,8.52,3.82,8.52,8.52s-3.82,8.52-8.52,8.52-8.52-3.82-8.52-8.52V0h-7.14v58.52Z"
          />
          <path
            d="m53.85,58.52c0,8.63,7.02,15.66,15.66,15.66s15.66-7.02,15.66-15.66v-15.66h-15.66v7.14h8.52v8.52c0,4.7-3.82,8.52-8.52,8.52s-8.52-3.82-8.52-8.52c0-16.81-13.68-30.49-30.49-30.49v7.14c12.88,0,23.35,10.48,23.35,23.35Z"
          />
          <path
            d="m69.51,28.02v7.14h23.35v23.35c0,12.88-10.48,23.35-23.35,23.35-8.15,0-15.33-4.19-19.51-10.53-4.18,6.34-11.36,10.53-19.51,10.53-6.02,0-11.51-2.29-15.66-6.04v2.2h-7.69V0H0v78.02h7.08c5.6,6.71,14.02,10.99,23.42,10.99,7.41,0,14.21-2.66,19.51-7.08,5.29,4.41,12.09,7.08,19.51,7.08,16.81,0,30.49-13.68,30.49-30.49v-30.49h-30.49Z"
          />
        </g>
      </svg>
      <section class="copy">
        <h1 class="heading">Hi, I'm Brad Waropay</h1>
        <p class="paragraph">
          I'm a developer and designer with a passion for problem solving and an
          obsession with craftsmanship. I specialize in front-end architecture
          and design systems that not only establish a consistent visual
          language, intuitive accessible UI patterns, and enjoyable interactions
          for your users, but also lay a solid foundation for your product,
          making iteration faster, easier, and enjoyable for developers and
          designers too.
        </p>
        <footer class="footer">
          <ul class="link-list">
            <li class="link-list__item">
              <a
                class="link"
                target="_blank"
                href="Brad_Waropay-Resume-2023.pdf"
                >Resume</a
              >
            </li>
            <li class="link-list__item">
              <a
                class="link"
                target="_blank"
                href="https://www.linkedin.com/in/bradwaropay/"
                >LinkedIn</a
              >
            </li>
            <li class="link-list__item">
              <a
                class="link"
                target="_blank"
                href="https://github.com/bradwaropay"
                >GitHub</a
              >
            </li>
            <li class="link-list__item">
              <a
                class="link"
                target="_blank"
                href="https://codepen.io/bradwaropay"
                >CodePen</a
              >
            </li>
          </ul>
        </footer>
      </section>
    </article>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Inconsolata&display=swap");

#speckle {
  background-color: #0d1b27;
  min-height: 100vh;
  position: fixed;
  width: 100vw;
}
.container {
  align-items: center;
  background: linear-gradient(
    0deg,
    #281726 0%,
    transparent 75%,
    transparent 100%
  );
  color: #efefef;
  display: flex;
  font-family: "Inconsolata", monospace;
  height: 100%;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem;
  pointer-events: none;
  position: relative;
  width: 100vw;
}
.intro {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 50rem;
  text-align: center;
}

@media screen and (min-width: 78rem) {
  .intro {
    flex-direction: row;
    max-width: 70rem;
    text-align: justify;
  }
}

.logo,
.copy {
  pointer-events: all;
}

.logo {
  min-width: 20rem;
  width: 20rem;
}
.copy {
  position: relative;
}

.heading,
.paragraph {
  position: relative;
}

.heading {
  display: inline-block;
  font-size: 3rem;
  line-height: 1;
}

@media screen and (min-width: 50rem) {
  .heading {
    font-size: 4rem;
  }
}

.paragraph {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-top: 1rem;
}
.footer {
  margin-top: 1.5rem;
}

.link-list {
  display: inline-flex;
  gap: 1rem;
}

.link-list__item::after {
  content: "/";
  margin-left: 1rem;
}

.link-list__item:last-child::after {
  display: none;
}

.link {
  color: #f1511a;
}

.link:hover {
  text-decoration: underline;
}
</style>