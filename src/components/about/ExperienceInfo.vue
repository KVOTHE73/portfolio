<template>
  <ul v-if="es">
    <li v-for="experience in experienceContentEsp" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font">{{ experience.details }}</p>
    </li>
  </ul>
  <ul v-if="en">
    <li v-for="experience in experienceContentEng" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font">{{ experience.details }}</p>
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
      experienceContentEsp: [
        {
          id: 1,
          year: "   2023 - Presente",
          position: "Desarrollador front-end",
          compnayName: "SiliconValleyVigo",
          details: `Desarrollo y mantenimiento de aplicaciones de gestión empresarial via web.`,
        },
        {
          id: 2,
          year: "2020 - 2023",
          position: "Desarrollador front-end",
          compnayName: "Rodapro, S.L.",
          details: `Desarrollo y mantenimiento de aplicaciones de gestión empresarial via web.`,
        },
        {
          id: 3,
          year: "2018 - Presente",
          position: "Freelance",
          compnayName: "Autónomo",
          details: `Diseño y desarrollo de páginas web.`,
        },
        {
          id: 3,
          year: "1996 - 2018",
          position: "Jefe de Contabilidad",
          compnayName: "DICARVI, S.A.",
          details: `Contabilidad financiera y de costes, impuestos, cierres mensuales y anuales, tesorería, personal, bancos, etc.`,
        },
      ],
      experienceContentEng: [
        {
          id: 1,
          year: "   2023 - Present",
          position: "Front-end developer",
          compnayName: "SiliconValleyVigo",
          details: `Development and maintenance of web-based business management applications.`,
        },
        {
          id: 2,
          year: "2020 - 2023",
          position: "Front-end developer",
          compnayName: "Rodapro, S.L.",
          details: `Development and maintenance of web-based business management applications.`,
        },
        {
          id: 3,
          year: "2018 - Present",
          position: "Freelance",
          compnayName: "Self-employed",
          details: `Design and development of websites.`,
        },
        {
          id: 3,
          year: "1996 - 2018",
          position: "Head of Accounting",
          compnayName: "DICARVI, S.A.",
          details: `Financial and cost accounting, taxes, monthly and annual closings, treasury, personnel, banks, etc.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
