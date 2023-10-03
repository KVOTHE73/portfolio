<template>
  <div
    class="col-6 col-md-3 mb-3 mb-sm-5"
    :key="skills.id"
    v-for="skills in skillsContent"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        { id: 1, skillClass: "p89", skillPercent: "89", skillName: "HTML" },
        {
          id: 2,
          skillClass: "p81",
          skillPercent: "81",
          skillName: "JAVASCRIPT",
        },
        { id: 3, skillClass: "p83", skillPercent: "83", skillName: "CSS" },
        { id: 4, skillClass: "p93", skillPercent: "93", skillName: "VUE" },
        {
          id: 5,
          skillClass: "p73",
          skillPercent: "73",
          skillName: "SASS",
        },
        { id: 6, skillClass: "p78", skillPercent: "78", skillName: "GIT" },
        { id: 7, skillClass: "p65", skillPercent: "65", skillName: "MYSQL" },
        { id: 8, skillClass: "p45", skillPercent: "45", skillName: "NODE" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
