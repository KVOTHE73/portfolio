<template>
  <div>
    <section class="text-center footer_copyright">
      <!-- Languages -->
      <div class="d-flex" style="float: right">
        <img
          @click="toSpanish()"
          src="@/assets/images/flags/es.svg"
          height="15"
          style="cursor: pointer; margin-right: 0.3rem"
        />
        <img
          @click="toEnglish()"
          src="@/assets/images/flags/en.svg"
          height="15"
          style="cursor: pointer"
        />
      </div>
      <!-- title -->
      <div v-if="es" class="content">
        <h1>Nacho Rodríguez</h1>
        <h2>Portfolio personal</h2>
      </div>
      <div v-if="en" class="content">
        <h1>Nacho Rodríguez</h1>
        <h2>Personal portfolio</h2>
      </div>
    </section>
    <!-- {/* End .banner */} -->

    <section class="demo dark">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-6"
            v-for="preview in previewDemo"
            :key="preview.id"
            data-aos="fade-up"
            data-aos-duration="1200"
            :data-aos-delay="preview.delayAnimation"
          >
            <div class="content text-center">
              <div class="bg_container">
                <router-link :to="preview.routerPath" rel="noreferrer">
                  <img
                    :src="preview.img"
                    alt="demo"
                    class="img-responsive screenshot"
                  />
                </router-link>
              </div>
              <h2 v-if="es" class="demo-title">{{ preview.titleSpanish }}</h2>
              <h2 v-if="en" class="demo-title">{{ preview.titleEnglish }}</h2>
              <div class="anchor">
                <h6>
                  <router-link
                    class="btn"
                    rel="noreferrer"
                    :to="preview.routerPath"
                  >
                    <span v-if="es">Elegir</span>
                    <span v-if="en">Choose</span>
                  </router-link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- {/* End .Demo */} -->

    <footer>
      <div class="text-center footer_copyright">
        <h6 v-if="es">
          Este portfolio está desarrollado utilizando HTML, CSS, SASS,
          JavaScript y Vue3.js
        </h6>
        <h6 v-if="en">
          This portfolio is developed using HTML, CSS, SASS, JavaScript and
          Vue3.js
        </h6>
        <h5>
          &copy; {{ new Date().getFullYear() }}
          <span v-if="es">Diseñado con&nbsp;</span
          ><span v-if="en">Designed with&nbsp;</span>
          <span class="heart">&#10084;</span> <span v-if="es">por</span
          ><span v-if="en">by</span>
          <a
            href="https://nacho-rodriguez.com"
            target="_blank"
            rel="noreferrer"
          >
            nacho rodríguez.
          </a>
        </h5>
      </div>
    </footer>
    <!-- {/* End footer */} -->
  </div>
</template>

<script>

export default {
  name: "MainPreview",
  meta: {
    title: "Nacho Rodríguez || Portfolio",
  },
  data() {
    return {
      es: false,
      en: false,
    };
  },
  setup() {
    return {
      previewDemo: [
        {
          id: 1,
          img: require(`@/assets/images/intro/dark.jpg`),
          titleSpanish: "Portfolio fondo oscuro",
          titleEnglish: "Dark portfolio",
          routerPath: "/home-dark",
          name: "HomeDark",
          delayAnimation: "0",
        },
        {
          id: 2,
          img: require(`@/assets/images/intro/light.jpg`),
          titleSpanish: "Portfolio fondo claro",
          titleEnglish: "Light portfolio",
          routerPath: "/home-light",
          name: "HomeLight",
          delayAnimation: "50",
        },
      ],
    };
  },
  methods: {
    toSpanish() {
      this.es = true;
      this.en = false;
      this.$emit("language-changed", { es: this.es, en: this.en });
    },
    toEnglish() {
      this.es = false;
      this.en = true;
      this.$emit("language-changed", { es: this.es, en: this.en });
    },
  },
  created() {
    // se busca el idioma del navegador del usurio
    function getUserBrowserLanguage() {
      return navigator.language || navigator.userLanguage || navigator.languages;
      // mayoria de navegadores      IE: idioma del SO       soporte para HTML 5.1: "navigator.languages"
    }
    // se almacena el resultado
    var userLanguage = getUserBrowserLanguage();
    // se elimina el "-ES"
    userLanguage = userLanguage.substring(0, 2);
    //console.log("userLanguage", userLanguage, typeof userLanguage);
    // si el resultado es español (es) se carga la página en español, para otro resultado se cargará en inglés
    if (userLanguage == "es") {
      this.es = true;
      this.en = false;
      this.$emit("language-changed", { es: this.es, en: this.en });
    }
    if (userLanguage !== "es") {
      this.es = false;
      this.en = true;
      this.$emit("language-changed", { es: this.es, en: this.en });
    }
  },
};
</script>

<style lang="scss" scoped></style>
