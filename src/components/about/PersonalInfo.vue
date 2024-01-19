<template>
  <ul v-if="es" class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContentEsp" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        v-if="!personalInfo.href"
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
      <span
        v-if="personalInfo.href"
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        <a
          :href="personalInfo.href"
          style="text-decoration: underline; color: white;"
          target="_blank"
          rel="noreferrer"
          >{{ personalInfo.metaInfo }}</a
        >
      </span>
    </li>
  </ul>
    <ul v-if="en" class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContentEng" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        v-if="!personalInfo.href"
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
      <span
        v-if="personalInfo.href"
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        <a
          :href="personalInfo.href"
          style="text-decoration: underline; color: white;"
          target="_blank"
          rel="noreferrer"
          >{{ personalInfo.metaInfo }}</a
        >
      </span>
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
      personalInfoContentEsp: [
        { id: 1, meta: "Nombre", metaInfo: "Nacho" },
        { id: 2, meta: "Apellidos", metaInfo: "Rodríguez Cuervo" },
        { id: 3, meta: "Edad", metaInfo: "50 Años" },
        { id: 4, meta: "Nacionalidad", metaInfo: "Española" },
        { id: 5, meta: "Freelance", metaInfo: "Disponible" },
        { id: 6, meta: "Dirección", metaInfo: "Vigo (PO), España" },
        { id: 7, meta: "Teléfono", metaInfo: "+34 678-40-34-87" },
        { id: 8, meta: "Email", metaInfo: "info@nacho-rodriguez.com", href:"mailto:info@nacho-rodriguez.com" },
        {
          id: 9,
          meta: "Linkedin",
          metaInfo: "Nacho Rodríguez",
          href: "https://www.linkedin.com/in/nacho-rodriguez-cuervo-desarrollo-web",
        },
        { id: 10, meta: "Idiomas", metaInfo: "Español, Gallego, Inglés" },
      ],
      personalInfoContentEng: [
        { id: 1, meta: "Name", metaInfo: "Nacho" },
        { id: 2, meta: "Surname", metaInfo: "Rodríguez Cuervo" },
        { id: 3, meta: "Age", metaInfo: "50 Years old" },
        { id: 4, meta: "Country", metaInfo: "Spanish" },
        { id: 5, meta: "Freelance", metaInfo: "Available" },
        { id: 6, meta: "Address", metaInfo: "Vigo (PO), Spain" },
        { id: 7, meta: "Phone", metaInfo: "+34 678-40-34-87" },
        { id: 8, meta: "Email", metaInfo: "info@nacho-rodriguez.com", href:"mailto:info@nacho-rodriguez.com" },
        {
          id: 9,
          meta: "Linkedin",
          metaInfo: "Nacho Rodríguez",
          href: "https://www.linkedin.com/in/nacho-rodriguez-cuervo-desarrollo-web",
        },
        { id: 10, meta: "Languages", metaInfo: "Spanish, Galician, English" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
