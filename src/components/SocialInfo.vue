<template>
  <ul class="social list-unstyled pt-1 mb-5">
    <li v-for="social in SocialShare" :key="social.id">
      <a
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        :title="social.title"
      >
        <img :src="social.iconName" height="15" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      SocialShare: [
        {
          id: 1,
          iconName: require("@/assets/images/social/linkedin.png"),
          link: "https://www.linkedin.com/in/nacho-rodriguez-cuervo-desarrollo-web",
          title: "Linkedin"
        },
        {
          id: 2,
          iconName: require("@/assets/images/social/instagram.png"),
          link: "https://www.instagram.com/nacho_rodriguez_cuervo/",
          title: "Instagram"
        },
        {
          id: 3,
          iconName: require("@/assets/images/social/git.png"),
          link: "https://www.gitlab.com/KVOTHE73",
          title: "GitLab"
        },
        {
          id: 4,
          iconName: require("@/assets/images/social/youtube.png"),
          link: "https://www.youtube.com/",
          title: "YouTube"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
