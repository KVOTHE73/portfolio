<template>
  <p class="open-sans-font custom-span-contact position-relative">
    <i class="fa fa-map position-absolute"></i>
    <span v-if="es" class="d-block">Dirección</span
    ><span v-if="en" class="d-block">Address</span>C/. Extremadura, 37 - 3º;
    C.P.: 36206 VIGO (Pontevedra) - <span v-if="es">España</span
    ><span v-if="en">Spain</span>
  </p>
  <!-- {/* End .custom-span-contact */} -->

  <p class="open-sans-font custom-span-contact position-relative">
    <i class="fa fa-envelope-open position-absolute"></i>
    <span class="d-block">Email</span>
    <a href="mailto:steve@mail.com">info@nacho-rodriguez.com</a>
  </p>
  <!-- {/* End .custom-span-contact */} -->

  <p class="open-sans-font custom-span-contact position-relative">
    <i class="fa fa-phone-square position-absolute"></i>
    <span v-if="es" class="d-block">Teléfono</span><span v-if="en" class="d-block">Phone</span>
    <a href="Tel: +216 21 184 010">+34 678 40 34 87</a>
  </p>
  <!-- {/* End .custom-span-contact */} -->
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
    };
  },
};
</script>
