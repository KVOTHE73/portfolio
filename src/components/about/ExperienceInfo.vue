<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
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
  data() {
    return {
      experienceContent: [
        {
          id: 1,
          year: "   2023 - Presente",
          position: "Desarrollador front-end",
          compnayName: "SiliconValleyVigo",
          details: `Desarrollo y mantenimiento de aplicaciones de gestión empresarial via web`,
        },
        {
          id: 2,
          year: "2020 - 2023",
          position: "Desarrollador front-end",
          compnayName: "Rodapro, S.L.",
          details: `Desarrollo y mantenimiento de aplicaciones de gestión empresarial via web`,
        },
        {
          id: 3,
          year: "2018 - 2020",
          position: "Freelance",
          compnayName: "Autónomo",
          details: `Diseño y desarrollo de páginas web`,
        },
        {
          id: 3,
          year: "1996 - 2018",
          position: "Jefe de Contabilidad",
          compnayName: "DICARVI, S.A.",
          details: `Contabilidad financiera y de costes, impuestos, cierres mensuales y anuales, tesorería, personal, bancos, etc`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
