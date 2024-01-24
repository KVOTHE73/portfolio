<template>
  <section class="main-content">
    <div class="container">
      <div class="row">
        <!-- {/* Personal Info Starts */} -->

        <div class="col-xl-6 col-lg-5 col-12">
          <div class="row">
            <div class="col-12">
              <h3 v-if="es" class="text-uppercase custom-title mb-0 ft-wt-600">
                información personal
              </h3>
              <h3 v-if="en" class="text-uppercase custom-title mb-0 ft-wt-600">
                personal info
              </h3>
            </div>
            <!-- {/* End .col */} -->

            <div class="col-12 d-block d-sm-none">
              <img
                :src="imgMobile"
                class="img-fluid main-img-mobile"
                alt="about avatar"
              />
            </div>
            <!-- {/* image for mobile menu */} -->

            <div class="col-12">
              <PersonalInfo :spanish="spanish" :english="english" />
            </div>
            <!-- {/* End personal info */} -->

            <div class="col-12 mt-1">
              <a class="button" href="https://drive.google.com/file/d/1-Eh9VZP_gYMOOH05MiG3Cua69D3-fx6Z/view?usp=sharing" target="_blank" download>
                <span v-if="es" class="button-text">Descargar CV</span>
                <span v-if="en" class="button-text">Download resume</span>
                <span class="button-icon fa fa-download"></span>
              </a>
            </div>
            <!-- {/* End download button */} -->
          </div>
        </div>
        <!-- {/*  Personal Info Ends */} -->

        <!-- {/*  Boxes Starts */} -->
        <div class="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
          <AchievementsInfo :spanish="spanish" :english="english" />
        </div>
        <!-- {/* Achievements Ends */} -->
      </div>
      <!-- {/* End .row */} -->

      <hr class="separator" />

      <!-- {/* Skills Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3  v-if="es"
            class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600"
          >
            Competencias técnicas
          </h3>
          <h3  v-if="en"
            class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600"
          >
          Technical skills
          </h3>
        </div>
        <SkillInfo />
      </div>
      <!-- {/* Skills Ends */} -->

      <hr class="separator mt-1" />

      <!-- {/* Experience & Education Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
          v-if="es" class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600"
          >
            Experiencia <span>&</span> Educación
          </h3>
          <h3
          v-if="en" class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600"
          >
          Experience <span>&</span> Education
          </h3>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <ExperienceInfo :spanish="spanish" :english="english" />
          </div>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <EducationInfo :spanish="spanish" :english="english" />
          </div>
        </div>
      </div>
      <!-- {/*  Experience & Education Ends */} -->
    </div>
  </section>
</template>

<script>
import AchievementsInfo from "./AchievementsInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";
import SkillInfo from "./SkillInfo";

export default {
  components: {
    AchievementsInfo,
    EducationInfo,
    ExperienceInfo,
    PersonalInfo,
    SkillInfo,
  },
  props: {
    spanish: Boolean,
    english: Boolean,
  },  
  data() {
    return {
      es: this.spanish,
      en: this.english,
      imgMobile: require(`@/assets/images/hero/nacho_746X746.jpg`),
      //cv: require(`@/assets/images/cv.webp`),
    };
  },
};
</script>
