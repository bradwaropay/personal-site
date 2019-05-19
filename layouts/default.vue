<template>
  <main class="app">
    <canvas id="particles" />
    <nuxt />
  </main>
</template>

<script>
import particles from "~/assets/particles.js"

export default {
  mounted() {
    let settings = {
      target: "particles",
      particleColor: "#333333",
      particleConnectColor: "#00a99d",
      particleConnectWidth: 0.1,
      particleConnectRadius: 200,
      particleConnectDistance: 100
    }
    particles(settings)
  }
}
</script>

<style lang="postcss">
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.app {
  color: #333333;
  align-items: center;
  display: grid;
  height: 100%;
  justify-content: center;
}

#particles {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
