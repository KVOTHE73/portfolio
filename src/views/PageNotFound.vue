<template>
  <div class="error_page">
    <div
      class="hero bg-image"
      :style="{ backgroundImage: 'url(' + image404 + ')' }"
    >
      <div class="content">
        <h1>404!</h1>
        <p v-if="es">
          La página que estás buscando no existe o no puede ser encontrada.
        </p>
        <p v-if="en">
          The page you are looking for does not exist or cannot be found.
        </p>
        <div class="button">
          <router-link to="/"
            ><span v-if="es">REGRESA AL INICIO</span
            ><span v-if="en">BACK TO HOME</span></router-link
          >
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
  props: {
    spanish: Boolean,
    english: Boolean,
  },
  data() {
    return {
      es: this.spanish,
      en: this.english,
    };
  },
  setup() {
    return {
      image404: require(`@/assets/images/404.jpg`),
    };
  },
};
</script>

<style lang="scss" scoped></style>
