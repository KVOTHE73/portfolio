<template>
  <div class="row home-details-container align-items-center">
    <div
      class="col-lg-4 bg position-fixed d-none d-lg-block hero-img"
      :style="{ backgroundImage: 'url(' + heroContent.heroImage + ')' }"
    ></div>
    <div
      class="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start"
    >
      <div>
        <img
          :src="heroContent.heroMobileImage"
          class="img-fluid main-img-mobile d-sm-block d-lg-none"
          alt="hero man"
        />
        <h1 class="text-uppercase poppins-font">
          {{ heroContent.heroTitleName }}.
          <span v-if="es" style="font-size: 2.2rem;">{{ heroContent.heroDesignationEsp }}</span>
          <span v-if="en" style="font-size: 2.2rem;">{{ heroContent.heroDesignationEng }}</span>
        </h1>
        <p v-if="es" class="open-sans-font">{{ heroContent.heroDescriptionsEsp }}</p>
        <p v-if="en" class="open-sans-font">{{ heroContent.heroDescriptionsEng }}</p>
        <button
          class="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span v-if="es" class="button-text">{{ heroContent.heroBtnEsp }}</span>
          <span v-if="en" class="button-text">{{ heroContent.heroBtnEng }}</span>
          <span class="button-icon fa fa-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
  <!-- {/* End home-details-container */} -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content dark">
        <button class="close-modal" data-bs-dismiss="modal" aria-label="Close">
          <img src="../../assets/images/cancel.svg" alt="close image" />
        </button>
        <div class="modal-body">
          <div class="box_inner about">
            <div class="title-section text-left text-sm-center">
              <h1 v-if="es">SOBRE <span>MÍ</span></h1>
            <h1 v-if="en">ABOUT <span>ME</span></h1>
            <span v-if="es" class="title-bg">Información</span>
            <span v-if="en" class="title-bg">Information</span>
            </div>
            <!-- {/* End title */} -->
            <IndexMain :spanish="spanish" :english="english" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import IndexMain from "../about/IndexMain.vue";
export default {
  props: {
    spanish: Boolean,
    english: Boolean,
  },  
  data() {
    return {
      es: this.spanish,
      en: this.english,
      heroContent: {
        heroImage: require(`@/assets/images/hero/nacho_746X1020.jpeg`),
        heroMobileImage: require(`@/assets/images/hero/nacho2_300x300.jpg`),
        heroTitleName: "nacho rodríguez",
        heroDesignationEsp: "desarrollador web",
        heroDesignationEng: "web developer",
        heroDescriptionsEsp: `Soy un desarrollador fullstack con orientación front‑end enfocado en
        construir aplicaciones de gestión empresarial robustas y eficaces utilizando las últimas tecnologías que ofrece la web.`,
        heroDescriptionsEng: `I am a full-stack developer with a front-end focus, dedicated to building robust and effective business management applications using the latest web technologies.`,
        heroBtnEsp: "más sobre mi",
        heroBtnEng: "more info",
      },  
    };
  },
  components: { IndexMain },
};
</script>

<style lang="scss" scoped></style>
