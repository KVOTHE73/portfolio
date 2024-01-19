<template>
  <main class="yellow">
    <!-- Languages -->
    <div className="demo-sticker" :title="spLanguage" style="cursor: pointer">
      <img
        @click="toSpanish()"
        src="@/assets/images/flags/es.svg"
        height="15"
      />
    </div>
    <div
      className="demo-sticker"
      style="margin-top: 4rem; cursor: pointer"
      :title="enLanguage"
    >
      <img
        @click="toEnglish()"
        src="@/assets/images/flags/en.svg"
        height="15"
      />
    </div>
    <div className="demo-sticker" style="margin-top: 8rem" title="Modo claro">
      <a
        ><router-link :to="{ name: 'HomeLight' }" rel="noreferrer">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i></router-link
      ></a>
    </div>
    <!-- End Sticker -->

    <header class="header">
      <ul
        class="nav nav-tabs icon-menu d-lg-block revealator-slideup revealator-once revealator-delay1"
        id="myTab"
        role="tablist"
      >
        <li class="icon-box" role="presentation">
          <button class="active" data-bs-toggle="tab" data-bs-target="#home">
            <i class="fa fa-home"></i>
            <h2 v-if="es">Inicio</h2>
            <h2 v-if="en">Home</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#about">
            <i class="fa fa-user"></i>
            <h2>Info</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#portfolio">
            <i class="fa fa-briefcase"></i>
            <h2>Portfolio</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#contact">
            <i class="fa fa-envelope-open"></i>
            <h2 v-if="es">Contacto</h2>
            <h2 v-if="en">Contact</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#blog">
            <i class="fa fa-comments"></i>
            <h2>Blog</h2>
          </button>
        </li>
        <!-- End icon-box -->
      </ul>
    </header>
    <!-- End header -->

    <div class="tab-content tab-panel_list home" id="myTabContent">
      <!-- Start Hero content tabs -->
      <div class="tab-pane home fade show active" id="home">
        <div class="container-fluid main-container container-home p-0">
          <div class="color-block d-none d-lg-block"></div>
          <HeroBanner
            :spanish="spanish"
            :english="english"
            :key="languageKey"
          />
        </div>
      </div>
      <!-- End Hero content tabs -->

      <div class="tab-pane fade about" id="about">
        <div>
          <div class="title-section text-left text-sm-center">
            <h1 v-if="es">SOBRE <span>MÍ</span></h1>
            <h1 v-if="en">ABOUT <span>ME</span></h1>
            <span v-if="es" class="title-bg">Información</span>
            <span v-if="en" class="title-bg">Information</span>
          </div>
          <!-- {/* End title */} -->
          <IndexMain :spanish="spanish" :english="english" :key="languageKey" />
        </div>
      </div>
      <!-- End about content tabs -->

      <div class="tab-pane fade portfolio professional" id="portfolio">
        <div
          class="title-section text-left text-sm-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 v-if="es">proyectos</h1>
          <h1 v-if="en">proyects</h1>
          <span class="title-bg">portfolio</span>
        </div>
        <!-- {/* End title */} -->
        <PortfolioInfo :spanish="spanish" :english="english" :key="languageKey" />
      </div>
      <!-- End portfolio content tabs -->

      <div class="tab-pane fade contact" id="contact">
        <div class="title-section text-left text-sm-center">
          <h1 v-if="es">envíame un <span>mensaje</span></h1>
          <span v-if="es" class="title-bg">contacto</span>
          <h1 v-if="en">send me a <span>message</span></h1>
          <span v-if="en" class="title-bg">contact</span>
        </div>
        <div class="container">
          <div class="row">
            <!-- {/* Left Side Starts */} -->
            <div class="col-12 col-lg-4">
              <h3 v-if="es" class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Contacta conmigo !
              </h3>
              <h3 v-if="en" class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Keep in touch !
              </h3>
              <p v-if="es" class="open-sans-font mb-4">
                Puedes encontrarme a través de los siguientes medios. Siempre
                estoy abierto a discutir sobre nuevos proyectos, ideas u
                oportunidades.
              </p>
              <p v-if="en" class="open-sans-font mb-4">
                You can find me through the following channels. I am always open to discussing new projects, ideas, or opportunities.
              </p>

              <AddressInfo :spanish="spanish" :english="english" :key="languageKey" />
              <!-- {/* End Address */} -->

              <SocialInfo :spanish="spanish" :english="english" :key="languageKey" />
              <!-- {/* End Social */} -->
            </div>
            <!-- {/* Left Side Ends */} -->

            <!-- {/* Contact Form Starts */} -->
            <div class="col-12 col-lg-8">
              <ContactInfo :spanish="spanish" :english="english" :key="languageKey" />
            </div>
            <!-- {/* Contact Form Ends */} -->
          </div>
        </div>
        <!-- {/* End .container */} -->
      </div>
      <!-- End contact content tabs -->

      <div class="tab-pane fade blog" id="blog">
        <div class="title-section text-left text-sm-center">
          <h1 v-if="es">mi <span>blog</span></h1>
          <h1 v-if="en">my <span>blog</span></h1>
          <span class="title-bg">posts</span>
        </div>
        <div class="container">
          <!-- {/* Articles Starts */} -->
          <div class="row pb-50">
            <BlogInfo />
          </div>
          <!-- {/* Articles Ends */} -->
        </div>
      </div>
      <!-- End blog content tabs -->
    </div>
  </main>
</template>

<script>
import HeroBanner from "@/components/hero/HeroBanner.vue";
import IndexMain from "@/components/about/IndexMain.vue";
import AddressInfo from "@/components/AddressInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import SocialInfo from "@/components/SocialInfo.vue";

import BlogInfo from "@/components/blog/BlogInfo.vue";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo.vue";

export default {
  name: "HomeDark",
  meta: {
    title: "Nacho Rodríguez || Portfolio",
  },
  components: {
    HeroBanner,
    IndexMain,
    AddressInfo,
    ContactInfo,
    SocialInfo,
    BlogInfo,
    PortfolioInfo,
  },
  props: {
    spanish: Boolean,
    english: Boolean,
  },
  data() {
    return {
      es: this.spanish,
      en: this.english,
      languageKey: 0,
      spLanguage: null,
      enLanguage: null,
    };
  },
  methods: {
    toSpanish() {
      this.es = true;
      this.en = false;
      this.spLanguage = "Cambiar a español";
      this.enLanguage = "Cambiar a inglés";
      this.languageKey += 1;
      this.$emit("language-changed", { es: this.es, en: this.en });
    },
    toEnglish() {
      this.es = false;
      this.en = true;
      this.spLanguage = "Change to spanish";
      this.enLanguage = "Change to english";
      this.languageKey += 1;
      this.$emit("language-changed", { es: this.es, en: this.en });
    },
  },
  mounted() {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    if (this.es) {
      this.spLanguage = "Cambiar a español";
      this.enLanguage = "Cambiar a inglés";
    }
    if (this.en) {
      this.spLanguage = "Change to spanish";
      this.enLanguage = "Change to english";
    }
  },
  unmounted() {
    document.body.classList.remove("light");
  },
};
</script>
