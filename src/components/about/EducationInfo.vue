<template>
  <ul v-if="es">
    <li v-for="education in educationContentEsp" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
  <ul v-if="en">
    <li v-for="education in educationContentEng" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    spanish: Boolean,
    english: Boolean,
  }, 
  data() {
    return {
      es: this.spanish,
      en: this.english,
      educationContentEsp: [
        {
          id: 1,
          year: "2019",
          degree: "BOOTCAMP FULLSTACKS",
          institute: "HACKABOSS",
          details: `HTML, CSS, JavaScript, GIT, SQL, Vue.js, Node.js, presentación de proyecto final.`,
        },
        {
          id: 2,
          year: "2007",
          degree: "Curso de adaptación a nuevo plan contable",
          institute: "Grupo Montiño Noroeste, S.L.",
          details: `Curso de capacitación y adaptación al plan general de
          contabilidad vigente.`,
        },
        {
          id: 3,
          year: "2000",
          degree: "Programa Superior de Internacionalización",
          institute: "Zona Franca de Vigo",
          details: `Master en objetivos y técnicas de internacionalización
          para pymes realizado durante todo el año 2.000.`,
        },
        {
          id: 4,
          year: "1999",
          degree: "Economía",
          institute: "Escuela de Empresariales de la Universidad de Vigo",
          details: `Estudios de licenciarura de C.C. Económicas por la
          Universidad de Vigo. 1993 - 1999.`,
        },
      ],
      educationContentEng: [
        {
          id: 1,
          year: "2019",
          degree: "BOOTCAMP FULLSTACKS",
          institute: "HACKABOSS",
          details: `HTML, CSS, JavaScript, GIT, SQL, Vue.js, Node.js, final proyect.`,
        },
        {
          id: 2,
          year: "2007",
          degree: "Adaptation course to the new accounting plan",
          institute: "Grupo Montiño Noroeste, S.L.",
          details: `Training course and adaptation to the current general accounting plan.`,
        },
        {
          id: 3,
          year: "2000",
          degree: "Advanced Internationalization Program",
          institute: "Zona Franca de Vigo",
          details: `Master's in Internationalization Objectives and Techniques for SMEs completed throughout the year 2000.`,
        },
        {
          id: 4,
          year: "1999",
          degree: "Economic and Business Sciences",
          institute: "School of Business at the University of Vigo",
          details: `Bachelor's degree studies in Economic Sciences at the University of Vigo. 1993 - 1999.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
