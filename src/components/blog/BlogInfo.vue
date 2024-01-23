<template>
  <template v-if="es">
    <div
      class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
      v-for="item in blogsEsp"
      :key="item.id"
    >
      <article
        class="post-container"
        data-bs-toggle="modal"
        data-bs-target="#blogModal"
        @click="handleBlogItem(item.id)"
      >
        <div class="post-thumb">
          <div class="d-block position-relative overflow-hidden">
            <img :src="item.img" class="img-fluid" alt="item.title" />
          </div>
        </div>
        <!-- {/* End .thumb */} -->
        <div class="post-content">
          <div class="entry-header">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="entry-content open-sans-font">
            <p>
              {{ item.description1.slice(0, 1000) }}
            </p>
          </div>
        </div>
        <!-- {/* End .post-content */} -->
      </article>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="blogModal"
      tabindex="-1"
      aria-labelledby="blogModal"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg blog-modal"
      >
        <div class="modal-content">
          <button
            class="close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="../../assets/images/cancel.svg" alt="close image" />
          </button>
          <!-- close modal -->
          <div class="modal-body">
            <div class="box_inner about">
              <div class="box_inner blog-post">
                <!-- {/* Article Starts */} -->
                <article>
                  <div class="title-section text-left text-sm-center">
                    <h1>Detalles <span>del Post</span></h1>
                    <span class="title-bg">posts</span>
                  </div>
                  <!-- {/* Meta Starts */} -->

                  <div class="meta open-sans-font">
                    <span>
                      <i class="fa fa-user"></i> {{ blog.commentor }}
                    </span>
                    <span class="date">
                      <i class="fa fa-calendar"></i> {{ blog.date }}
                    </span>
                    <span> <i class="fa fa-tags"></i> {{ blog.tag }} </span>
                  </div>
                  <!-- {/* Meta Ends */} -->

                  <!-- {/* Article Content Starts */} -->
                  <h1>{{ blog.title }}</h1>
                  <img :src="blog.img" class="img-fluid" alt="Blog" />
                  <div class="blog-excerpt open-sans-font pb-5">
                    <p>
                      {{ blog.description1 }}
                    </p>
                    <div class="quotebox">
                      <div class="icon">
                        <img :src="blogQuote" alt="blog quote" />
                      </div>
                      <p>
                        {{ blog.description2 }}
                      </p>
                    </div>
                    <p>
                      {{ blog.description3 }}
                    </p>
                    <p>
                      {{ blog.description4 }}
                    </p>
                    <p>
                      {{ blog.description5 }}
                    </p>
                    <p>
                      {{ blog.description6 }}
                    </p>
                    <p>
                      {{ blog.description7 }}
                    </p>
                    <p>
                      {{ blog.description8 }}
                    </p>
                    <p>
                      {{ blog.description9 }}
                    </p>
                    <p>
                      {{ blog.description10 }}
                    </p>
                    <p>
                      {{ blog.description11 }}
                    </p>
                    <p>
                      {{ blog.description12 }}
                    </p>
                    <p>
                      {{ blog.description13 }}
                    </p>
                    <p>
                      {{ blog.description14 }}
                    </p>
                    <p>
                      {{ blog.description15 }}
                    </p>
                    <p>
                      {{ blog.description16 }}
                    </p>
                    <p>
                      {{ blog.description17 }}
                    </p>
                    <p>
                      {{ blog.description18 }}
                      <a :href="blog.href1" target="_blank" rel="noreferrer">
                        {{ blog.description19 }}
                      </a>
                    </p>
                    <p>
                      {{ blog.description20 }}
                    </p>
                    <p>
                      {{ blog.description21 }}
                    </p>
                    <p>
                      {{ blog.description22 }}
                    </p>
                  </div>
                  <!-- {/* Article Content Ends */} -->
                </article>
                <!-- {/* Article Ends */} -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </template>
  <template v-if="en">
    <div
      class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
      v-for="item in blogsEng"
      :key="item.id"
    >
      <article
        class="post-container"
        data-bs-toggle="modal"
        data-bs-target="#blogModal"
        @click="handleBlogItem(item.id)"
      >
        <div class="post-thumb">
          <div class="d-block position-relative overflow-hidden">
            <img :src="item.img" class="img-fluid" alt="item.title" />
          </div>
        </div>
        <!-- {/* End .thumb */} -->
        <div class="post-content">
          <div class="entry-header">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="entry-content open-sans-font">
            <p>
              {{ item.description1.slice(0, 1000) }}
            </p>
          </div>
        </div>
        <!-- {/* End .post-content */} -->
      </article>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="blogModal"
      tabindex="-1"
      aria-labelledby="blogModal"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg blog-modal"
      >
        <div class="modal-content">
          <button
            class="close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="../../assets/images/cancel.svg" alt="close image" />
          </button>
          <!-- close modal -->
          <div class="modal-body">
            <div class="box_inner about">
              <div class="box_inner blog-post">
                <!-- {/* Article Starts */} -->
                <article>
                  <div class="title-section text-left text-sm-center">
                    <h1>Post <span>Details</span></h1>
                    <span class="title-bg">posts</span>
                  </div>
                  <!-- {/* Meta Starts */} -->

                  <div class="meta open-sans-font">
                    <span>
                      <i class="fa fa-user"></i> {{ blog.commentor }}
                    </span>
                    <span class="date">
                      <i class="fa fa-calendar"></i> {{ blog.date }}
                    </span>
                    <span> <i class="fa fa-tags"></i> {{ blog.tag }} </span>
                  </div>
                  <!-- {/* Meta Ends */} -->

                  <!-- {/* Article Content Starts */} -->
                  <h1>{{ blog.title }}</h1>
                  <img :src="blog.img" class="img-fluid" alt="Blog" />
                  <div class="blog-excerpt open-sans-font pb-5">
                    <p>
                      {{ blog.description1 }}
                    </p>
                    <div class="quotebox">
                      <div class="icon">
                        <img :src="blogQuote" alt="blog quote" />
                      </div>
                      <p>
                        {{ blog.description2 }}
                      </p>
                    </div>
                    <p>
                      {{ blog.description3 }}
                    </p>
                    <p>
                      {{ blog.description4 }}
                    </p>
                    <p>
                      {{ blog.description5 }}
                    </p>
                    <p>
                      {{ blog.description6 }}
                    </p>
                    <p>
                      {{ blog.description7 }}
                    </p>
                    <p>
                      {{ blog.description8 }}
                    </p>
                    <p>
                      {{ blog.description9 }}
                    </p>
                    <p>
                      {{ blog.description10 }}
                    </p>
                    <p>
                      {{ blog.description11 }}
                    </p>
                    <p>
                      {{ blog.description12 }}
                    </p>
                    <p>
                      {{ blog.description13 }}
                    </p>
                    <p>
                      {{ blog.description14 }}
                    </p>
                    <p>
                      {{ blog.description15 }}
                    </p>
                    <p>
                      {{ blog.description16 }}
                    </p>
                    <p>
                      {{ blog.description17 }}
                    </p>
                    <p>
                      {{ blog.description18 }}
                      <a :href="blog.href1" target="_blank" rel="noreferrer">
                        {{ blog.description19 }}
                      </a>
                    </p>
                    <p>
                      {{ blog.description20 }}
                    </p>
                    <p>
                      {{ blog.description21 }}
                    </p>
                    <p>
                      {{ blog.description22 }}
                    </p>
                  </div>
                  <!-- {/* Article Content Ends */} -->
                </article>
                <!-- {/* Article Ends */} -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </template>
</template>

<script>
import blogMixin from "@/mixin/blog-mixin";

export default {
  name: "FancyBlogs",
  mixins: [blogMixin],
  props: {
    spanish: Boolean,
    english: Boolean,
  },
  data() {
    return {
      es: this.spanish,
      en: this.english,
      blogQuote: require(`@/assets/images/blog/quote.svg`),
      blog: {},
    };
  },
  methods: {
    handleBlogItem(id) {
      if(this.es) {
      this.blog = this.blogsEsp.find((item) => item.id == id);
      }
      if(this.en) {
      this.blog = this.blogsEng.find((item) => item.id == id);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
