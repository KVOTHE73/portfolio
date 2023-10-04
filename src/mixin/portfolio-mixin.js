export default {
  data() {
    return {
      portfolios: [
      // NOTA: LAS IMAGENES DEBEN SER DE 895x552px
        {
          id: 1,
          img: require(`@/assets/images/portfolio/oversea.jpg`),
          logo: require(`@/assets/images/portfolio/OverseaLogo.png`),
          title: "OVERSEA - APP DE GESTIÓN",
          project:
            "Aplicación web para gestión de compras y existencias de la empresa, con login y roles diversos, alta de usuarios, clientes, proveedores, artículos, etc., Tablas de consulta, edición y eliminación de registros, exportaciones a Excel, hojas dse detalle con gráficas y estadísticas diversas. Control de existencias de diferentes almacenes.",
          client: "Oversea Atlantic Fish, S.L. Empresa dedicada a la importación y exportación de productos del mar congelados.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "Oversea_AppDemo",
          previewLink: "https://oversea.siliconvalleyvigo.com/",
          // USUARIO: nacho@siliconvalleyvigo.com; CONTRASEÑA: 7777
          credentials: "Debido a las políticas de protección de datos el acceso a la aplicación está restringido. Puedes ",
          access: "enviarme un mensaje",
          credentials2: " y te facilitaré unas credenciales para acceder."
        },
        {
          id: 2,
          img: require(`@/assets/images/portfolio/imasp.jpg`),
          logo: require(`@/assets/images/portfolio/imaspLogo.png`),
          title: "IMASP - APP DE GESTIÓN",
          project: "Aplicación web de gestión de técnicos y contratos, con login y roles diversos, alta y mantenimiento de empleados y de contratos, formularios y gestión de gastos, cargas de trabajo, etc. App en español e inglés, pudiéndose cambiar de idioma en cualquier momento.",
          client: "Ingeniería y Prevención de Riesgos, S.L. Empresa dedicada al control de obras públicas y privadas, con técnicos que supervisan la observación de las normas de seguridad en los lugares de trabajo.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "IMASP_AppDemo",
          previewLink: "https://testingimasp.siliconvalleyvigo.com/",
          // USUARIO: master@siliconvalleyvigo.com; CONTRASEÑA: 7777
          credentials: "Debido a las políticas de protección de datos el acceso a la aplicación está restringido. Puedes ",
          access: "enviarme un mensaje",
          credentials2: " y te facilitaré unas credenciales para acceder."
        },
        {
          id: 3,
          img: require(`@/assets/images/portfolio/anem.jpg`),
          logo: require(`@/assets/images/portfolio/logoAnem.svg`),
          title: "ANEM - APP DE GESTIÓN",
          project: "Aplicación web para gestión de envíos postales certificados, con login y roles diversos, permite subir archivos EXCEL y SICER con las cartas a repartir, asignarlas a un repartidor y hacer un seguimiento. Existe también una parte de entrega en dónde dicho repartidor lista sus envíos y registra su firma y la del destinatario al entregar la carta. La aplicación está disponible también en formato PWA para ser descargada en dispositivos móviles.",         
          client: "NETCOM, empresa dedicada a los servicios informáticos",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "ANEM_AppDemo",
          previewLink: "https://anem.siliconvalleyvigo.com/",
          // USUARIO: info@siliconvalleyvigo.com; CONTRASEÑA: 7777
          credentials: "Debido a las políticas de protección de datos el acceso a la aplicación está restringido. Puedes ",
          access: "enviarme un mensaje",
          credentials2: " y te facilitaré unas credenciales para acceder."
        },
        {
          id: 4,
          img: require(`@/assets/images/portfolio/sofyweb.jpg`),
          logo: require(`@/assets/images/portfolio/logoSofyweb.png`),
          title: "SOFYWEB - MIGRACIÓN DE APP",
          project: "Migración de app de escritorio obsoleta a web. Aplicación totalmente nueva y adaptada a la nuevas tecnologías basada en una exitente de escritorio, clonando sus funcionalidades y creando otras nuevas.",
          client: "SOFYCOM, empresa dedicada al software y a las comunicaciones.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "SOFYWEB_AppDemo",
          previewLink: "https://sofyweb.sofygest.es",
          credentials: "USUARIO: jose; EMPRESA: sofyweb; CONTRASEÑA: jose"
        },
        {
          id: 5,
          img: require(`@/assets/images/portfolio/osnor.jpg`),
          logo: require(`@/assets/images/portfolio/osnorLogo.png`),
          title: "OSNOR - APP DE GESTIÓN",
          project: "App de gestión de obras portuarias que permite la importación de archivo Excel con datos de las obras y genera tablas y gráficas para el seguimiento de sus estados, pagos, etc.",
          client: "OSNOR, empresa dedicada a la realización de obras portuarias.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "OSNOR_AppDemo",
          previewLink: "https://osnor.siliconvalleyvigo.com/",
          // USUARIO: osnor@osnor.com; CONTRASEÑA: Osnor
          credentials: "USUARIO: osnor@osnor.com; CONTRASEÑA: Osnor"
        },
        {
          id: 6,
          img: require(`@/assets/images/portfolio/mandopro.jpg`),
          logo: require(`@/assets/images/portfolio/rodaproLogo.svg`),
          title: "RODAPRO - DEMO DE CUADRO DE MANDOS INTEGRAL",
          project: "Página web con demo funcional de cuadro de mandos para su presentación y comercialización.",
          client: "RODAPRO, empresa dedicada al desarrollo de software.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "MANDOPRO_Demo",
          previewLink: "https://cuadrodemandos.rodapro.es/",
          credentials: "No se requieren credenciales."
        },
        {
          id: 7,
          img: require(`@/assets/images/portfolio/AJP_LaRioja.jpg`),
          logo: require(`@/assets/images/portfolio/logo-ajp.png`),
          title: "AJP - PÁGINA WEB",
          project: "Página web sobre jornadas de prevención de riesgos, con programa, descarga de PDF y formulario de registro de asistentes.",
          client: "AJP, empresa dedicada a la asesoría jurídica en materia de prevención de riesgos laborales.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "AJP_JornadasPrevencionLaRioja",
          previewLink: "https://www.jornadas-prl-insst.es/larioja",
          credentials: "No se requieren credenciales."
        },
        {
          id: 8,
          img: require(`@/assets/images/portfolio/AJP_Murcia.jpg`),
          logo: require(`@/assets/images/portfolio/logo-ajp.png`),
          title: "AJP - PÁGINA WEB",
          project: "Página web sobre jornadas de prevención de riesgos, con programa, descarga de PDF y formulario de registro de asistentes.",
          client: "AJP, empresa dedicada a la asesoría jurídica en materia de prevención de riesgos laborales.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "AJP_JornadasPrevencionLaRioja",
          previewLink: "https://www.jornadas-prl-insst.es/murcia",
          credentials: "No se requieren credenciales."
        },
        {
          id: 9,
          img: require(`@/assets/images/portfolio/AJP_Blog.jpg`),
          logo: require(`@/assets/images/portfolio/logo-ajp.png`),
          title: "AJP - BLOG",
          project: "Blog para página web de AJP con sistema de roles de usuarios con diferentes permisos.",
          client: "AJP, empresa dedicada a la asesoría jurídica en materia de prevención de riesgos laborales.",
          language: "WordPress",
          preview: "AJP_Blog",
          previewLink: "https://www.blog.ajpre.net/",
          credentials: "No se requieren credenciales."
        },
        {
          id: 10,
          img: require(`@/assets/images/portfolio/rodamoto.jpg`),
          logo: require(`@/assets/images/portfolio/logoRodamoto.svg`),
          title: "RODAMOTO - CUADRO DE MANDOS INTEGRAL",
          project: "Cuadro de mandos en intranet y conectado a ClassicGes, sistema de gestión existente en la empresa.",
          client: "RODAMOTO, empresa dedicada a la venta y distribución de neumáticos de moto.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, ClassicGes, SQL, FoxPro",
          preview: "No accesible",
          previewLink: "#",
          credentials: "Al estar alojado en servidor de la empresa el acceso no es posible desde fuera de su intranet."
        },
        {
          id: 11,
          img: require(`@/assets/images/portfolio/kbo.jpg`),
          logo: require(`@/assets/images/portfolio/kbo_logo.png`),
          title: "KBO - PÁGINA WEB",
          project: "Página web informativa con diferentes accesos al programa de gestión de la empresa según roles.",
          client: "KBO, empresa dedicada a la gestión de flotas de taxis.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "KBO_web",
          previewLink: "https://kbo.nacho-rodriguez.com/",
          credentials: "No se requieren credenciales."
        },
        {
          id: 12,
          img: require(`@/assets/images/portfolio/alejandro-cuervo.jpg`),
          logo: require(`@/assets/images/portfolio/alejandro_logo.png`),
          title: "ALEJANDRO CUERVO - PÁGINA WEB",
          project: "Página web informativa con sistema de citas y bot de WhatsApp.",
          client: "ALEJANDRO CUERVO, clínica de fisioterápia y podología.",
          language: "WordPress",
          preview: "ALEJANDRO_CUERVO_web",
          previewLink: "https://alejandro-cuervo.com/",
          credentials: "No se requieren credenciales."
        },           
      ],
    };
  },
};
