<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "Nombre", metaInfo: "Nacho" },
        { id: 2, meta: "Apellidos", metaInfo: "Rodríguez Cuervo" },
        { id: 3, meta: "Age", metaInfo: "50 Años" },
        { id: 4, meta: "Nacionalidad", metaInfo: "Española" },
        { id: 5, meta: "Freelance", metaInfo: "Disponible" },
        { id: 6, meta: "Dirección", metaInfo: "Vigo (PO), España" },
        { id: 7, meta: "Teléfono", metaInfo: "+34 678-40-34-87" },
        { id: 8, meta: "Email", metaInfo: "info@nacho-rodriguez.com" },
        { id: 9, meta: "Linkedin", metaInfo: "Nacho Rodríguez" },
        { id: 10, meta: "Idiomas", metaInfo: "Español, Gallego, Inglés" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
