<template>
  <div class="portfolio-main">
    <div class="container">
      <!-- Tab panes -->
      <div class="portfolio-tab-content">
        <ul class="row grid justify-content-center">
          <li v-for="item in portfolios" :key="item.id">
            <figure
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal"
              @click="handleBlogItem(item.id)"
            >
              <img :src="item.img" alt="Portolio" />
              <div class="hover-content-wrapper">
                <span class="content-title"
                  ><img :src="item.logo" alt="logo image"
                /></span>
              </div>
            </figure>
          </li>
          <!-- Portfolio Item Ends -->
        </ul>
        <!-- End ul grid -->

        <!-- {/* Start portfolioModal */} -->
        <div
          class="modal fade"
          id="portfolioModal"
          tabindex="-1"
          aria-labelledby="portfolioModal"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable portfolio-modal"
          >
            <div class="modal-content portfolio-modal">
              <button
                class="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="../../assets/images/cancel.svg" alt="close image" />
              </button>
              <!-- close modal -->
              <div class="modal-body">
                <div class="box_inner portfolio">
                  <div class="slideshow">
                    <figure>
                      <!-- {/* Project Details Starts */} -->
                      <figcaption>
                        <h3 v-if="es">{{ portfolio.titleEsp }}</h3>
                        <h3 v-if="en">{{ portfolio.titleEng }}</h3>
                        <div class="row open-sans-font">
                          <div class="col-12 mb-2">
                            <i class="fa fa-file-text-o pr-2"></i>
                            <span
                              v-if="es"
                              style="text-decoration: underline"
                              class="project-label"
                              >Proyecto</span
                            ><span v-if="es">:&nbsp;</span>
                            <span v-if="es" class="ft-wt-600 uppercase">
                              {{ portfolio.projectEsp }}</span
                            >
                            <span
                              v-if="en"
                              style="text-decoration: underline"
                              class="project-label"
                              >Proyect</span
                            ><span v-if="en">:&nbsp;</span>
                            <span v-if="en" class="ft-wt-600 uppercase">
                              {{ portfolio.projectEng }}</span
                            >
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 mb-2">
                            <i class="fa fa-user-o pr-2"></i>
                            <span
                              v-if="es"
                              style="text-decoration: underline"
                              class="project-label"
                              >Cliente</span
                            >
                            <span v-if="es">:&nbsp;</span>
                            <span v-if="es" class="ft-wt-600 uppercase">{{
                              portfolio.clientEsp
                            }}</span>
                            <span
                              v-if="en"
                              style="text-decoration: underline"
                              class="project-label"
                              >Client</span
                            ><span v-if="en">:&nbsp;</span>
                            <span v-if="en" class="ft-wt-600 uppercase">{{
                              portfolio.clientEng
                            }}</span>
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-external-link pr-2"></i>
                            <span
                              style="text-decoration: underline"
                              class="project-label"
                              >Demo</span
                            >:
                            <span class="ft-wt-600 uppercase">
                              <a
                                :href="portfolio.previewLink"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {{ portfolio.preview }}
                              </a>
                            </span>
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-code pr-2"></i>
                            <span
                              v-if="es"
                              style="text-decoration: underline"
                              class="project-label"
                              >Tecnologías</span
                            ><span v-if="es">:&nbsp;</span>
                            <span
                              v-if="en"
                              style="text-decoration: underline"
                              class="project-label"
                              >Technologies</span
                            ><span v-if="en">:&nbsp;</span>
                            <span class="ft-wt-600 uppercase">{{
                              portfolio.language
                            }}</span>
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 mb-2">
                            <i class="fa fa-sign-in pr-2"></i>
                            <span
                              v-if="es"
                              style="text-decoration: underline"
                              class="project-label"
                              >Acceso</span
                            ><span v-if="es">:&nbsp;</span>
                            <span v-if="es" class="ft-wt-600 uppercase">{{
                              portfolio.credentialsEsp
                            }}</span>
                            <span
                              v-if="en"
                              style="text-decoration: underline"
                              class="project-label"
                              >Log in</span
                            ><span v-if="en">:&nbsp;</span>
                            <span v-if="en" class="ft-wt-600 uppercase">{{
                              portfolio.credentialsEng
                            }}</span>
                            <span class="ft-wt-600 uppercase">
                              <a
                                v-if="es"
                                data-bs-toggle="modal"
                                data-bs-target="#contactModal"
                                data-bs-dismiss="modal"
                                style="cursor: pointer"
                                @click="handlePortfolioItem(portfolio.titleEsp)"
                              >
                                {{ portfolio.accessEsp }}
                              </a>
                              <a
                                v-if="en"
                                data-bs-toggle="modal"
                                data-bs-target="#contactModal"
                                data-bs-dismiss="modal"
                                style="cursor: pointer"
                                @click="handlePortfolioItem(portfolio.titleEng)"
                              >
                                {{ portfolio.accessEng }}
                              </a>
                            </span>
                            <span v-if="es" class="ft-wt-600 uppercase">{{
                              portfolio.credentials2Esp
                            }}</span>
                            <span v-if="en" class="ft-wt-600 uppercase">{{
                              portfolio.credentials2Eng
                            }}</span>
                          </div>
                          <!-- {/* End .col */} -->
                        </div>
                        <!-- {/* End .row */} -->
                      </figcaption>
                      <!-- {/* Project Details Ends */} -->

                      <!-- {/*  Main Project Content Starts */} -->
                      <img :src="portfolio.img" alt="Portolio" />
                      <!-- {/* Main Project Content Ends */} -->
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- {/* End  portfolioModal */} -->
        <!-- Modal -->
        <div
          class="modal fade"
          id="contactModal"
          aria-hidden="true"
          aria-labelledby="contactModalToggleLabel"
          tabindex="-1"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
          >
            <div class="modal-content dark">
              <button
                class="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="../../assets/images/cancel.svg" alt="close image" />
              </button>
              <div class="modal-body">
                <div class="box_inner contact">
                  <div class="title-section text-left text-sm-center">
                    <h1 v-if="es">envíame un <span>mensaje</span></h1>
                    <span v-if="es" class="title-bg">contacto</span>
                    <h1 v-if="en">send me a <span>message</span></h1>
                    <span v-if="en" class="title-bg">contact</span>
                  </div>
                  <!-- {/* End title */} -->
                  <div class="container">
                    <div class="row">
                      <!-- {/* Left Side Starts */} -->
                      <div class="col-12 col-lg-4">
                        <h3
                          v-if="es"
                          class="text-uppercase custom-title mb-0 ft-wt-600 pb-3"
                        >
                          Contacta conmigo !
                        </h3>
                        <h3
                          v-if="en"
                          class="text-uppercase custom-title mb-0 ft-wt-600 pb-3"
                        >
                          Keep in touch !
                        </h3>
                        <p v-if="es" class="open-sans-font mb-4">
                          Puedes encontrarme a través de los siguientes medios.
                          Siempre estoy abierto a discutir sobre nuevos
                          proyectos, ideas u oportunidades.
                        </p>
                        <p v-if="en" class="open-sans-font mb-4">
                          You can find me through the following channels. I am
                          always open to discussing new projects, ideas, or
                          opportunities.
                        </p>

                        <AddressInfo :spanish="spanish" :english="english" />
                        <!-- {/* End Address */} -->

                        <SocialInfo :spanish="spanish" :english="english" />
                        <!-- {/* End Social */} -->
                      </div>
                      <!-- {/* Left Side Ends */} -->

                      <!-- {/* Contact Form Starts */} -->
                      <div class="col-12 col-lg-8">
                        <ContactInfo
                          v-if="portfoliotitle"
                          :subjectTitle="portfoliotitle"
                          :spanish="spanish"
                          :english="english"
                          :key="contactKey"
                        />
                      </div>
                      <!-- {/* Contact Form Ends */} -->
                    </div>
                  </div>
                  <!-- {/* End .container */} -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Modal -->
      </div>
    </div>
  </div>
</template>

<script>
import portfolioMixin from "@/mixin/portfolio-mixin";
import AddressInfo from "@/components/AddressInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import SocialInfo from "@/components/SocialInfo.vue";

export default {
  name: "FancyPortfolio",
  components: {
    AddressInfo,
    ContactInfo,
    SocialInfo,
  },
  props: {
    spanish: Boolean,
    english: Boolean,
  },
  mixins: [portfolioMixin],
  data() {
    return {
      es: this.spanish,
      en: this.english,
      portfolio: {},
      portfoliotitle: "",
      contactKey: 0,
    };
  },
  methods: {
    handleBlogItem(id) {
      this.portfolio = this.portfolios.find((item) => item.id == id);
    },
    handlePortfolioItem(title) {
      if (this.es) {
        this.portfoliotitle =
          "Solicitud de credenciales de acceso para " + title;
        this.contactKey += 1;
      }
      if (this.en) {
        this.portfoliotitle = "Request for access credentials for " + title;
        this.contactKey += 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
