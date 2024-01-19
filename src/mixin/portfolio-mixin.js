export default {
  data() {
    return {
      portfolios: [
        // NOTA: LAS IMAGENES DEBEN SER DE 895x552px
        {
          id: 1,
          img: require(`@/assets/images/portfolio/oversea.jpg`),
          logo: require(`@/assets/images/portfolio/OverseaLogo.png`),
          titleEsp: "OVERSEA - APP de gestión",
          titleEng: "OVERSEA - Management App",
          projectEsp:
            "Aplicación web para gestión de compras y existencias de la empresa, con login y roles diversos, alta de usuarios, clientes, proveedores, artículos, etc., Tablas de consulta, edición y eliminación de registros, exportaciones a Excel, hojas dse detalle con gráficas y estadísticas diversas. Control de existencias de diferentes almacenes.",
          projectEng:
            "Web application for the management of company purchases and inventory, featuring login with diverse roles, user registration, clients, suppliers, items, etc. It includes tables for querying, editing, and deleting records, exporting to Excel, detailed sheets with charts, and various statistics. It also provides inventory control for different warehouses.",
          clientEsp:
            "Oversea Atlantic Fish, S.L. Empresa dedicada a la importación y exportación de productos del mar congelados.",
          clientEng:
            "Oversea Atlantic Fish, S.L. Company dedicated to the import and export of frozen seafood products.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "Oversea_AppDemo",
          previewLink: "https://oversea.siliconvalleyvigo.com/",
          // USUARIO: nacho@siliconvalleyvigo.com; CONTRASEÑA: 7777
          credentialsEsp:
            "Debido a las políticas de protección de datos el acceso a la aplicación está restringido. Puedes ",
          credentialsEng:
            "Due to data protection policies, access to the application is restricted. You can ",
          accessEsp: "enviarme un mensaje",
          accessEng: "send me a message",
          credentials2Esp: " y te facilitaré unas credenciales para acceder.",
          credentials2Eng:
            " and I will provide you with credentials to access.",
        },
        {
          id: 2,
          img: require(`@/assets/images/portfolio/imasp.jpg`),
          logo: require(`@/assets/images/portfolio/imaspLogo.png`),
          titleEsp: "IMASP - APP de gestión",
          titleEng: "IMASP - Management App",
          projectEsp:
            "Aplicación web de gestión de técnicos y contratos, con login y roles diversos, alta y mantenimiento de empleados y de contratos, formularios y gestión de gastos, cargas de trabajo, etc. App en español e inglés, pudiéndose cambiar de idioma en cualquier momento.",
          projectEng:
            "Web application for the management of technicians and contracts, featuring login with diverse roles, employee registration and maintenance, contract management, expense forms, workload tracking, etc. The app is available in both Spanish and English, and the language can be changed at any time.",
          clientEsp:
            "Ingeniería y Prevención de Riesgos, S.L. Empresa dedicada al control de obras públicas y privadas, con técnicos que supervisan la observación de las normas de seguridad en los lugares de trabajo.",
          clientEng:
            "Engineering and Risk Prevention, Ltd. Company dedicated to the supervision of public and private construction projects, with technicians ensuring compliance with safety regulations at workplaces.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "IMASP_AppDemo",
          previewLink: "https://testingimasp.siliconvalleyvigo.com/",
          // USUARIO: master@siliconvalleyvigo.com; CONTRASEÑA: 7777
          credentialsEsp:
            "Debido a las políticas de protección de datos el acceso a la aplicación está restringido. Puedes ",
          credentialsEng:
            "Due to data protection policies, access to the application is restricted. You can ",
          accessEsp: "enviarme un mensaje",
          accessEng: "send me a message",
          credentials2Esp: " y te facilitaré unas credenciales para acceder.",
          credentials2Eng:
            " and I will provide you with credentials to access.",
        },
        {
          id: 3,
          img: require(`@/assets/images/portfolio/anem.jpg`),
          logo: require(`@/assets/images/portfolio/logoAnem.svg`),
          titleEsp: "ANEM - APP de gestión",
          titleEng: "ANEM - Management App",
          projectEsp:
            "Aplicación web para gestión de envíos postales certificados, con login y roles diversos, permite subir archivos EXCEL y SICER con las cartas a repartir, asignarlas a un repartidor y hacer un seguimiento. Existe también una parte de entrega en dónde dicho repartidor lista sus envíos y registra su firma y la del destinatario al entregar la carta. La aplicación está disponible también en formato PWA para ser descargada en dispositivos móviles.",
          projectEng:
            "Web application for certified postal shipments management, with login and various roles. It allows uploading Excel and SICER files with the letters to be distributed, assigning them to a courier, and tracking their progress. There is also a delivery section where the courier lists their shipments and records their signature and the recipient's upon delivering the letter. The application is also available in PWA format for download on mobile devices.",
          clientEsp: "NETCOM, empresa dedicada a los servicios informáticos",
          clientEng: "NETCOM, Company dedicated to IT services.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "ANEM_AppDemo",
          previewLink: "https://anem.siliconvalleyvigo.com/",
          // USUARIO: info@siliconvalleyvigo.com; CONTRASEÑA: 7777
          credentialsEsp:
            "Debido a las políticas de protección de datos el acceso a la aplicación está restringido. Puedes ",
          credentialsEng:
            "Due to data protection policies, access to the application is restricted. You can ",
          accessEsp: "enviarme un mensaje",
          accessEng: "send me a message",
          credentials2Esp: " y te facilitaré unas credenciales para acceder.",
          credentials2Eng:
            " and I will provide you with credentials to access.",
        },
        {
          id: 4,
          img: require(`@/assets/images/portfolio/sofyweb.jpg`),
          logo: require(`@/assets/images/portfolio/logoSofyweb.png`),
          titleEsp: "SOFYWEB - migración de APP",
          titleEng: "SOFYWEB - App migration",
          projectEsp:
            "Migración de app de escritorio obsoleta a web. Aplicación totalmente nueva y adaptada a la nuevas tecnologías basada en una exitente de escritorio, clonando sus funcionalidades y creando otras nuevas.",
          projectEng:
            "Migration of obsolete desktop app to web. Completely new application adapted to modern technologies based on an existing desktop one, cloning its functionalities and creating new ones.",
          clientEsp:
            "SOFYCOM, empresa dedicada al software y a las comunicaciones.",
          clientEng:
            "SOFYCOM, Company dedicated to software and communications.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "SOFYWEB_AppDemo",
          previewLink: "https://sofyweb.sofygest.es",
          credentialsEsp: "USUARIO: jose; EMPRESA: sofyweb; CONTRASEÑA: jose",
          credentialsEng: "USER: jose; EMPRESA: sofyweb; PASSWORD: jose",
        },
        {
          id: 5,
          img: require(`@/assets/images/portfolio/osnor.jpg`),
          logo: require(`@/assets/images/portfolio/osnorLogo.png`),
          titleEsp: "OSNOR - APP de gestión",
          titleEng: "OSNOR - Management App",
          projectEsp:
            "App de gestión de obras portuarias que permite la importación de archivo Excel con datos de las obras y genera tablas y gráficas para el seguimiento de sus estados, pagos, etc.",
          projectEng:
            "Port Works Management App that allows the import of an Excel file with data on the works and generates tables and charts to monitor their statuses, payments, etc.",
          clientEsp:
            "OSNOR, empresa dedicada a la realización de obras portuarias.",
          clientEng: "OSNOR, Company dedicated to the execution of port works.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js, C#, MySql",
          preview: "OSNOR_AppDemo",
          previewLink: "https://osnor.siliconvalleyvigo.com/",
          // USUARIO: osnor@osnor.com; CONTRASEÑA: Osnor
          credentialsEsp: "USUARIO: osnor@osnor.com; CONTRASEÑA: Osnor",
          credentialsEng: "USER: osnor@osnor.com; PASSWORD: Osnor",
        },
        {
          id: 6,
          img: require(`@/assets/images/portfolio/mandopro.jpg`),
          logo: require(`@/assets/images/portfolio/rodaproLogo.svg`),
          titleEsp: "RODAPRO - Demo de cuadro de mandos integral",
          titleEng: "RODAPRO - Comprehensive Dashboard Demo",
          projectEsp:
            "Página web con demo funcional de cuadro de mandos para su presentación y comercialización.",
          projectEng:
            "Website with a functional dashboard demo for presentation and marketing purposes.",
          clientEsp: "RODAPRO, empresa dedicada al desarrollo de software.",
          clientEng: "RODAPRO, Company dedicated to software development.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "MANDOPRO_Demo",
          previewLink: "https://cuadrodemandos.rodapro.es/",
          credentialsEsp: "No se requieren credenciales.",
          credentialsEng: "No credentials required",
        },
        {
          id: 7,
          img: require(`@/assets/images/portfolio/AJP_LaRioja.jpg`),
          logo: require(`@/assets/images/portfolio/logo-ajp.png`),
          titleEsp: "AJP - Página web",
          titleEng: "AJP - Website",
          projectEsp:
            "Página web sobre jornadas de prevención de riesgos, con programa, descarga de PDF y formulario de registro de asistentes.",
          projectEng:
            "Website about risk prevention workshops, featuring a schedule, PDF downloads, and attendee registration form.",
          clientEsp:
            "AJP, empresa dedicada a la asesoría jurídica en materia de prevención de riesgos laborales.",
          clientEng:
            "AJP, Company dedicated to legal consulting in the field of occupational risk prevention.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "AJP_JornadasPrevencionLaRioja",
          previewLink: "https://www.jornadas-prl-insst.es/larioja",
          credentialsEsp: "No se requieren credenciales.",
          credentialsEng: "No credentials required",
        },
        {
          id: 8,
          img: require(`@/assets/images/portfolio/AJP_Murcia.jpg`),
          logo: require(`@/assets/images/portfolio/logo-ajp.png`),
          titleEsp: "AJP - Página web",
          titleEng: "AJP - Website",
          projectEsp:
            "Página web sobre jornadas de prevención de riesgos, con programa, descarga de PDF y formulario de registro de asistentes.",
          projectEng:
            "Website about risk prevention workshops, featuring a schedule, PDF downloads, and attendee registration form.",
          clientEsp:
            "AJP, empresa dedicada a la asesoría jurídica en materia de prevención de riesgos laborales.",
          clientEng:
            "AJP, Company dedicated to legal consulting in the field of occupational risk prevention.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "AJP_JornadasPrevencionLaRioja",
          previewLink: "https://www.jornadas-prl-insst.es/murcia",
          credentialsEsp: "No se requieren credenciales.",
          credentialsEng: "No credentials required",
        },
        {
          id: 9,
          img: require(`@/assets/images/portfolio/AJP_Blog.jpg`),
          logo: require(`@/assets/images/portfolio/logo-ajp.png`),
          titleEsp: "AJP - Blog",
          titleEng: "AJP - Blog",
          projectEsp:
            "Blog para página web de AJP con sistema de roles de usuarios con diferentes permisos.",
          projectEng:
            "Blog for AJP website with a user role system featuring different permissions.",
          clientEsp:
            "AJP, empresa dedicada a la asesoría jurídica en materia de prevención de riesgos laborales.",
          clientEng:
            "AJP, Company dedicated to legal consulting in the field of occupational risk prevention.",
          language: "WordPress",
          preview: "AJP_Blog",
          previewLink: "https://www.blog.ajpre.net/",
          credentialsEsp: "No se requieren credenciales.",
          credentialsEng: "No credentials required",
        },
        {
          id: 10,
          img: require(`@/assets/images/portfolio/rodamoto.jpg`),
          logo: require(`@/assets/images/portfolio/logoRodamoto.svg`),
          titleEng: "RODAMOTO - Cuadro de mandos integral",
          titleEsp: "RODAMOTO - Comprehensive dashboard",
          projectEsp:
            "Cuadro de mandos en intranet y conectado a ClassicGes, sistema de gestión existente en la empresa.",
          projectEng:
            "Intranet dashboard connected to ClassicGes, the existing management system in the company.",
          clientEsp:
            "RODAMOTO, empresa dedicada a la venta y distribución de neumáticos de moto.",
          clientEng:
            "RODAMOTO, Company dedicated to the sale and distribution of motorcycle tires.",
          language:
            "HTML, CSS, SASS, JavaScript, Vue.js, C#, ClassicGes, SQL, FoxPro",
          preview: "No accesible",
          previewLink: "#",
          credentialsEsp:
            "Al estar alojado en servidor de la empresa el acceso no es posible desde fuera de su intranet.",
          credentialsEng:
            "As it is hosted on the company's server, access is not possible from outside its intranet.",
        },
        {
          id: 11,
          img: require(`@/assets/images/portfolio/kbo.jpg`),
          logo: require(`@/assets/images/portfolio/kbo_logo.png`),
          titleEsp: "KBO - Página web",
          titleEng: "KBO - Website",
          projectEsp:
            "Página web informativa con diferentes accesos al programa de gestión de la empresa según roles.",
          projectEng:
            "Informative website with different access points to the company's management program based on roles.",
          clientEsp: "KBO, empresa dedicada a la gestión de flotas de taxis.",
          clientEng: "KBO, Company dedicated to the management of taxi fleets.",
          language: "HTML, CSS, SASS, JavaScript, Vue.js",
          preview: "KBO_web",
          previewLink: "https://kbo.nacho-rodriguez.com/",
          credentialsEsp: "No se requieren credenciales.",
          credentialsEng: "No credentials required",
        },
        {
          id: 12,
          img: require(`@/assets/images/portfolio/alejandro-cuervo.jpg`),
          logo: require(`@/assets/images/portfolio/alejandro_logo.png`),
          titleEsp: "ALEJANDRO CUERVO - Página web",
          titleEng: "ALEJANDRO CUERVO - Website",
          projectEsp:
            "Página web informativa con sistema de citas y bot de WhatsApp.",
          projectEng:
            "Informative website with appointment system and WhatsApp bot.",
          clientEsp: "ALEJANDRO CUERVO, clínica de fisioterápia y podología.",
          clientEng: "ALEJANDRO CUERVO, Physiotherapy and podiatry clinic.",
          language: "WordPress",
          preview: "ALEJANDRO_CUERVO_web",
          previewLink: "https://alejandro-cuervo.com/",
          credentialsEsp: "No se requieren credenciales.",
          credentialsEng: "No credentials required",
        },
      ],
    };
  },
};
