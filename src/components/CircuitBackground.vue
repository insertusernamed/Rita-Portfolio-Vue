<template>
  <a class="header"></a>
</template>

<script setup lang="ts"></script>

<style scoped>
html,
body,
.header,
.header:before {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

body {
  margin: 0;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: ms-autohiding-scrollbar;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  -moz-overflow-scrolling: touch;
  -ms-overflow-scrolling: touch;
  -o-overflow-scrolling: touch;
  -webkit-overscroll-behavior: none;
  -moz-overscroll-behavior: none;
  -ms-overscroll-behavior: none;
  -o-overscroll-behavior: none;
  overscroll-behavior: none;
  -webkit-overscroll-behavior-y: contain;
  -moz-overscroll-behavior-y: contain;
  -ms-overscroll-behavior-y: contain;
  -o-overscroll-behavior-y: contain;
  overscroll-behavior-y: contain;
}

.header,
.header:before {
  image-rendering: -webkit-pixelated;
  image-rendering: -moz-pixelated;
  image-rendering: -ms-pixelated;
  image-rendering: -o-pixelated;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;
  overflow: hidden;
  -webkit-contain: strict;
  -moz-contain: strict;
  -ms-contain: strict;
  -o-contain: strict;
  contain: strict;
}

a.header {
  text-decoration: none;
}

.header {
  position: relative;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  background-color: #404040;
  background-image: url("../assets/Background2.png");
  -webkit-background-size: 25rem 25rem;
  -moz-background-size: 25rem 25rem;
  -ms-background-size: 25rem 25rem;
  -o-background-size: 25rem 25rem;
  background-size: 25rem 25rem;
  -webkit-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  min-height: 31.25rem;
}

.header:before {
  position: absolute;
  content: " ";
  background-image: url("../assets/animation2.svg");
  filter: opacity(0.2);
  -webkit-background-size: 75rem 50rem;
  -moz-background-size: 75rem 50rem;
  -ms-background-size: 75rem 50rem;
  -o-background-size: 75rem 50rem;
  background-size: 75rem 50rem;
}
</style>
