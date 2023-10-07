<template>
    <main class="yellow">
      <div className="demo-sticker" title="Swich Light">
        <a href="/home-light">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>
      </div>
      <!-- End Sticker --> 
  
        <div class="tab-pane fade contact active show" id="contact">
          <div class="title-section text-left text-sm-center">
            <h1>envíame un <span>mensaje</span></h1>
            <span class="title-bg">contacto</span>
          </div>
          <div class="container">
            <div class="row">
              <!-- {/* Left Side Starts */} -->
              <div class="col-12 col-lg-4">
                <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                  Contacta conmigo !
                </h3>
                <p class="open-sans-font mb-4">
                  Puedes encontrarme a través de los siguientes medios. Siempre estoy abierto
                  a discutir sobre nuevos proyectos, ideas u oportunidades.
                </p>
                <AddressInfo />
                <!-- {/* End Address */} -->
  
                <SocialInfo />
                <!-- {/* End Social */} -->
              </div>
              <!-- {/* Left Side Ends */} -->
  
              <!-- {/* Contact Form Starts */} -->
              <div class="col-12 col-lg-8">
                <ContactInfo />
              </div>
              <!-- {/* Contact Form Ends */} -->
            </div>
          </div>
          <!-- {/* End .container */} -->
        </div>
        <!-- End contact content tabs -->
  
        
    </main>
  </template>
  
  <script>
  import AddressInfo from "@/components/AddressInfo.vue";
  import ContactInfo from "@/components/ContactInfo.vue";
  import SocialInfo from "@/components/SocialInfo.vue";
  
  export default {
    name: "ContactForm",
    components: {
      AddressInfo,
      ContactInfo,
      SocialInfo
    },
    data() {
      return {};
    },
  };
  </script>
  