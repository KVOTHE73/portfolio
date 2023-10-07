<template>
  <div class="about">
    <vue-headful title="About | Nacho Rodriguez" />

    <!--BODY-->
    <div class="banner">
      <img
        id="nacho"
        class="n_fondo"
        src="./../assets/images/hero/logo_grande_transp.png"
      />
      <div class="container">
        <div class="banner-txt">
          <h1>
            <small> NACHO RODRIGUEZ </small>
          </h1>
          <h2>DESARROLLADOR WEB FULLSTACKS</h2>
          <h3>www.nacho-rodriguez.com</h3>
        </div>
        <div class="about_me">
          <article id="text">
            <span class="function">function</span
            ><span class="functionName"> sobre_mí()</span
            ><span class="BracketLeft">&nbsp;{</span><br />
            <span class="p_teg h1_1">{{ abrirH1 }}</span>
            <span class="sobre p-2">A qué me dedico</span>
            <span class="p_teg h1_2">{{ cerrarH1 }}</span
            ><br />
            <span class="p_teg">{{ abrirP }}</span>
            <span class="descripcion"
              ><b>Desarrollador web Full Stacks orientado al Front End</b></span
            >
            <span class="p_teg p_f">{{ cerrarP }}</span>
          </article>

          <article id="text">
            <span class="p_teg h1_3">{{ abrirH1 }}</span>
            <span class="sobre p-2">Tecnologías</span>
            <span class="p_teg h1_4">{{ cerrarH1 }}</span
            ><br />
            <span class="p_teg p_1">{{ abrirP }}</span>
            <span class="descripcion"
              ><b>HTML, CSS, JavaScript, Vue.js, SASS, Worpress, etc</b></span
            >
            <span class="p_teg p_f">{{ cerrarP }}</span>
          </article>

          <article id="text">
            <span class="p_teg h1_5">{{ abrirH1 }}</span>
            <span class="sobre p-2">Qué busco</span>
            <span class="p_teg h1_6">{{ cerrarH1 }}</span
            ><br />
            <span class="p_teg">{{ abrirP }}</span>
            <span class="descripcion"
              ><b
                >Aportar, aprender, sumar, trabajar en algo que em apasiona</b
              ></span
            >
            <span class="p_teg p_f">{{ cerrarP }}</span>
          </article>

          <article id="text">
            <span class="p_teg h1_7">{{ abrirH1 }}</span>
            <span class="sobre p-2">Qué me gusta</span>
            <span class="p_teg h1_8">{{ cerrarH1 }}</span
            ><br />
            <span class="p_teg">{{ abrirP }}</span>
            <span class="descripcion"
              ><b
                >Viajar, leer, el cine, la música, la tecnología, conducir...</b
              ></span
            >
            <span class="p_teg p_f">{{ cerrarP }}</span>
          </article>
          <span class="BracketRight">}</span>
        </div>
      </div>
    </div>
    <!--BODY END-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      abrirH1: "<h1>",
      cerrarH1: "</h1>",
      abrirP: "<p>",
      cerrarP: "</p>",
    };
  },
};
</script>

<style scoped>
.sinborde {
  outline: none;
}
/*BANNER*/
.banner .container {
  height: 100%;
}
.banner {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  background: linear-gradient(115deg, rgb(0, 0, 0.589) 50%, transparent 50%)
      center center / 100% 100%,
    linear-gradient(295deg, #fa0 50%, transparent 50%) right center / auto 100%;
  overflow: hidden;
}
.n_fondo {
  position: absolute;
  height: 100%;
  margin-top: -5rem;
  margin-left: 25rem;
  opacity: 0.15;
  border: none;
}
.banner-txt {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  margin-left: 53rem;
  margin-right: -20rem;
  margin-top: -6rem;
}
/*TITULO DEL BANNER (VACIO)*/
.banner-txt h1 {
  font-size: 50px;
  border-bottom: 1px solid #fff;
  font-weight: 900;
  padding-bottom: 0.3em;
  margin-bottom: 0.3em;
}
/*SUBTITULO DEL BANNER (NACHO RODRIGUEZ)*/
.banner-txt h1 {
  display: block;
  font-size: 50px;
  font-weight: 700;
  border-top: none;
  border-left: none;
  border-right: none;
}
.banner-txt h1 small {
    margin-left: -1.2rem;
}
/*DESCRIPCION DEL BANNER (PROGRAMADOR WEB)*/
.banner-txt h2 {
  font-size: 30px;
  font-weight: 700;
}
.banner-txt h3 {
  font-size: 20px;
  font-weight: 700;
}
.about_me {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  margin-top: -48rem;
  text-align: center;
  align-items: flex-start;
}
.function {
  margin-left: -32rem;
  color: #cc7832;
}
.functionName {
  color: #e7a84b;
}
.BracketLeft {
  color: #bababa;
}
.BracketRight {
  display: block;
  color: #bababa;
  margin-left: -3rem;
}
.h1_1 {
  margin-left: -23rem;
}
.h1_2 {
  margin-left: -1rem;
}
.h1_3 {
  margin-left: -24.7rem;
}
.h1_4 {
  margin-left: -1rem;
}
.h1_5 {
  margin-left: -30.3rem;
}
.h1_6 {
  margin-left: -1rem;
}
.h1_7 {
  margin-left: -29.1rem;
}
.h1_8 {
  margin-left: -1rem;
}
.p_teg {
  word-spacing: -8px;
  padding-left: 15px;
  color: #e7be5f;
}
.p_f {
  margin-left: -0.9rem;
}
.text {
  font-size: 16px;
  color: #fff;
}
.sobre {
  color: rgb(161, 187, 155);
  font-size: 20px;
}
.descripcion {
  color: whitesmoke;
}
</style>
