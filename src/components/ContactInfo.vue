<template>
  <form ref="form" class="contactform" @submit.prevent="sendEmail">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="text"
            name="name"
            placeholder="TU NOMBRE"
            v-model="name"
            required
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="TU EMAIL"
            required
            v-model="email"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-12">
        <div class="form-group">
          <input
            type="text"
            name="subject"
            placeholder="ASUNTO"
            required
            v-model="subject"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <div class="form-group">
          <textarea
            name="message"
            placeholder="TU MENSAJE"
            required
            v-model="message"
          ></textarea>
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <button type="submit" class="button">
          <span class="button-text">Enviar mensaje</span>
          <span class="button-icon fa fa-send"></span>
        </button>
      </div>
      <!-- {/* End .col */} -->
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_cen2905",
          "template_yvyifwa",
          this.$refs.form,
          "yuIhn3WTJ28RGw9hG",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Mensaje enviado!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Mensaje no enviado", error);
          }
        );
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
