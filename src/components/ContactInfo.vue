<template>
  <form ref="form" class="contactform" @submit.prevent="sendEmail">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="text"
            name="name"
            :placeholder="namePlaceholder"
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
            name="email"
            :placeholder="emailPlaceholder"
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
            :placeholder="subjectPlaceholder"
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
            :placeholder="messagePlaceholder"
            required
            v-model="message"
          ></textarea>
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <button type="submit" class="button">
          <span v-if="es" class="button-text">Enviar mensaje</span>
          <span v-if="en" class="button-text">Send message</span>
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
  name: "ContactInfo",
  props: {
    subjectTitle: {
      type: String,
      default: "",
    },
    spanish: Boolean,
    english: Boolean,
  },
  data() {
    return {
      es: this.spanish,
      en: this.english,
      namePlaceholder: null,
      emailPlaceholder: null,
      subjectPlaceholder: null,
      messagePlaceholder: null,
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
          "service_bcofpei",
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
  mounted() {
    if(this.subjectTitle !== "") {
      this.subject = this.subjectTitle;
    }
    if (this.es) {
      this.namePlaceholder = "TU NOMBRE";
      this.emailPlaceholder = "TU EMAIL";
      this.subjectPlaceholder = "ASUNTO";
      this.messagePlaceholder = "TU MENSAJE";
    }
    if (this.en) {
      this.namePlaceholder = "YOUR NAME";
      this.emailPlaceholder = "YOUR EMAIL";
      this.subjectPlaceholder = "YOUR SUBJECT";
      this.messagePlaceholder = "YOUR MESSAGE";
    }
  },
};
</script>
