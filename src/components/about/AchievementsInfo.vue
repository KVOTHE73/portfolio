<template>
  <div class="row">
    <div
      class="col-6"
      v-for="achievement in achievementsContent"
      :key="achievement.id"
    >
      <div class="box-stats with-margin">
        <h3 class="poppins-font position-relative">
          {{ achievement.title }}
        </h3>
        <p class="open-sans-font m-0 position-relative text-uppercase">
          {{ achievement.subTitle1 }}
          <span class="d-block">{{ achievement.subTitle2 }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementsContent: [
        { id: 1, title: "20", subTitle1: "años de", subTitle2: "experiencia" },
        { id: 2, title: "17", subTitle1: "proyectos", subTitle2: "completados" },
        { id: 3, title: "5", subTitle1: "años", subTitle2: "programando" },
        { id: 4, title: "3", subTitle1: "idiomas", subTitle2: "hablados" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
