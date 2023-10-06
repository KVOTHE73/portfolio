<template>
  <div>
    <section class="text-center footer_copyright">
      <div class="content">
        <h1>Nacho Rodríguez</h1>
        <h2>Portfolio personal</h2>
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
                <router-link
                  :to="preview.routerPath"
                  rel="noreferrer"
                >
                  <img
                    :src="preview.img"
                    alt="demo"
                    class="img-responsive screenshot"
                  />
                </router-link>
              </div>
              <h2 class="demo-title">{{ preview.title }}</h2>
              <div class="anchor">
                <h6>
                  <router-link
                    class="btn"
                    :to="preview.routerPath"
                    rel="noreferrer"
                  >
                    Elegir
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
        <h6>Este portfolio está desarrollado utilizando HTML, CSS, SASS, JavaScript y Vue3.js</h6>
        <h5>
          &copy; {{ new Date().getFullYear() }} Diseñado con
          <span class="heart">&#10084;</span> por
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
  setup() {
    return {
      previewDemo: [
        {
          id: 1,
          img: require(`@/assets/images/intro/dark.jpg`),
          title: "Portfolio fondo oscuro",
          routerPath: "/home-dark",
          delayAnimation: "0",
        },
        {
          id: 2,
          img: require(`@/assets/images/intro/light.jpg`),
          title: "Portfolio fondo claro",
          routerPath: "/home-light",
          delayAnimation: "50",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
