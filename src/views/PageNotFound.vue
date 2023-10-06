<template>
  <div class="error_page">
    <div
      class="hero bg-image"
      :style="{ backgroundImage: 'url(' + image404 + ')' }"
    >
      <div class="content">
        <h1>404!</h1>
        <p>La página que estás buscando no existe o no puede ser encontrada.</p>

        <div class="button">
          <router-link to="/">REGRESA AL INICIO</router-link>
        </div>
        <!-- {/* End purchase_button */} -->
      </div>
    </div>
    <!-- {/* End .hero */} -->
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  meta: {
      title: "Nacho Rodríguez || Portfolio",
    },
  setup() {
    return {
      image404: require(`@/assets/images/404.jpg`),
    };
  },
};
</script>

<style lang="scss" scoped></style>
