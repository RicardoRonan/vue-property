<template>
  <section id="landing">
    <div class="title-container d-flex justify-content-center">
      <h1 id="title" class="text-light shadow">WELCOME TO FYE HOUSES</h1>
    </div>
    <p id="sub-title" class="text-light fs-2">
      Everyone is welcome at FYE HOUSES
    </p>
  </section>
</template>

<script>
// export default {
//   name: "Landing",
//   props: {
//     Landing,
//   },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#section {
  min-height: 100vh;
}
@font-face {
  font-family: new-font;
  src: url(../assets/fonts/Finlandica-Italic-VariableFont_wght.ttf);
}
#title {
  font-weight: 100;
  font-size: 5rem;
  text-shadow: 4px 4px 4px black;
  margin-top: 15rem;
}
#sub-title {
  text-shadow: 4px 4px 4px black;
}
#title-container {
  margin-top: 3rem;
}
#landing {
  background-image: url(../assets/image/pexels-dom-j-303059\ .jpg);
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  background-attachment: fixed;
  font-family: new-font;
}
@media only screen and (max-width: 600px) {
  #title {
    font-weight: 100;
    font-size: 2.5rem;
    text-shadow: 4px 4px 4px black;
    margin-top: 10rem;
  }
  #title-container {
    margin-top: 1rem;
  }
}
</style>
