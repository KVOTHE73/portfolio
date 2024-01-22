export default {
  data() {
    return {
      blogsEsp: [
        {
          id: 1,
          img: require(`@/assets/images/blog/1579270413-soft-skills.png`),
          title: "La importancia de las soft-skills o habilidades blandas",
          commentor: "Santhan ",
          date: "14 January 2022",
          tag: `wordpress, business, economy, design`,
          description1:
            "Una queja frecuente en la actualidad es que las personas carecen de las habilidades necesarias para ocupar las vacantes laborales disponibles. A menudo, esas quejas se centran en la falta de habilidades técnicas. Sin embargo, las habilidades blandas son cada vez más importantes. Lo que puedes hacer a menudo es menos importante que la forma en que lo haces. Sin embargo, entre todas las habilidades blandas, una destaca por encima del resto: la comunicación.",
          description2:
            "La comunicación es fundamental para cómo interactúan las personas y, por lo tanto, es fundamental para cómo las personas hacen negocios de manera efectiva. Cualquier cosa que involucre a más de una persona depende de la comunicación.",
          description3:
            "La importancia de las habilidades blandas o soft-skills",
          description4:
            "La profesión médica ha sabido durante mucho tiempo que las habilidades blandas son casi tan importantes como las habilidades técnicas. La periodista de salud Patricia Chaney (@TRCWriter) explica: 'La empatía de todos los profesionales médicos es una parte crucial de la recuperación de sus pacientes. No solo afecta cómo se sienten los pacientes en el hospital, sino también cuánto aprenden sobre el cuidado de sí mismos en casa. Este elemento importante abarca todos los aspectos de la interacción con un paciente y su familiar, no solo lo que se dice, sino cómo se expresa'. Lindzon explica que la necesidad de habilidades interpersonales ahora se reconoce mucho más allá de los campos tradicionales donde estas habilidades han sido apreciadas durante mucho tiempo. Él escribe: 'Si bien la demanda de candidatos con habilidades de comunicación sólidas solía ser específica de industrias y roles orientados al público o al cliente, como comunicaciones corporativas o ventas, ahora hay un creciente reconocimiento de la importancia de las habilidades de comunicación en casi cualquier entorno corporativo'.",
          description5: "Los analistas de McKinsey & Company señalan: 'Acompañando a la adopción de tecnologías avanzadas en el lugar de trabajo, aumentará la necesidad de trabajadores con habilidades sociales y emocionales afinadas, habilidades que las máquinas están lejos de dominar... Mientras que algunas de estas habilidades, como la empatía, son innatas, otras, como la comunicación avanzada, se pueden perfeccionar y enseñar'. Nadia Chen, Directora de Compromiso de Talento en Kurrant Talent, agrega: 'La automatización y la inteligencia artificial resultarán en una mayor proporción de trabajos que dependen de habilidades blandas, pero su importancia a menudo se subestima en el lugar de trabajo'. Ella insiste: 'La demanda de habilidades blandas ya supera la oferta en hasta un 45 por ciento'. Y señala: 'Un estudio de Deloitte estima que dos tercios de todos los trabajos para 2030 dependerán de habilidades blandas.",
          description6:  "Las habilidades blandas más importantes",
          description7: "Como señaló Lindzon, la comunicación es actualmente la habilidad blanda más deseada por los empleadores; sin embargo, no es la única habilidad con una gran demanda. Jay Wright, Editor de Desarrollo en WikiJob, me indicó la lista de las diez principales habilidades blandas de WikiJob. No sorprendentemente, la comunicación encabeza la lista de WikiJob:",
          description8: "1. Comunicación: Dan Brodnitz, jefe de estrategia de contenido para LinkedIn Learning, le dijo a Lindzon: 'La comunicación es fundamental para cómo interactúan las personas y, por lo tanto, es fundamental para cómo las personas hacen negocios de manera efectiva. Cualquier cosa que involucre a más de una persona depende de la comunicación'. El equipo de WikiJob agrega: 'Los comunicadores habilidosos pueden ajustar su tono y estilo según su audiencia, comprender y actuar eficientemente según las instrucciones y explicar problemas complejos tanto a colegas como a clientes. Una habilidad de comunicación clave, a menudo olvidada, es la escucha.'",
          description9: "2. Auto-motivación: Con el aumento del trabajo remoto y híbrido, la auto-motivación es esencial. El equipo de WikiJob señala: 'Tener una actitud positiva y la iniciativa para trabajar bien sin supervisión las 24 horas del día es una habilidad blanda vital para cualquier empleado.'",
          description10: "3. Liderazgo: Un gran liderazgo requiere que una persona perfeccione todas las habilidades blandas. El equipo de WikiJob destaca: 'Aquellas personas con fuertes habilidades de liderazgo tendrán la capacidad de inspirar a otros y liderar equipos hacia el éxito. Por eso es una habilidad especialmente buscada.'",
          description11: "4. Responsabilidad: La responsabilidad es compañera de viaje de la auto-motivación. Según el equipo de WikiJob, una persona responsable abarca las siguientes cualidades: confiabilidad; disciplina; motivación; conciencia; responsabilidad; resiliencia; y adaptabilidad.",
          description12: "5. Trabajo en equipo: La mayoría de los negocios exitosos requieren trabajo en equipo. La cazatalentos Martha Heller, directora ejecutiva de Heller Search Associates, le dijo a Loten: 'El brillante desarrollador introvertido sigue estando en alta demanda, pero también estamos viendo un aumento en los requisitos de construcción de relaciones, conocimiento empresarial y comunicaciones en nuestras búsquedas'. En algún momento, incluso los introvertidos necesitan trabajar con otros. Por eso, los ejercicios de construcción de equipos continúan siendo fundamentales en el mundo empresarial.",
          description13: "6. Resolución de problemas: Francamente, me sorprende que la resolución de problemas esté tan baja en la lista. Una encuesta realizada por McKinsey & Company en 2018 encontró que la resolución de problemas, el pensamiento crítico, la innovación y la creatividad eran las principales habilidades deseadas por los empleadores. El siguiente conjunto de habilidades más deseado involucraba la capacidad para manejar la complejidad y la ambigüedad.",
          description14: "7. Decisión: El equipo de WikiJob señala: 'La decisión se caracteriza por la capacidad de tomar decisiones rápidas y efectivas. No significa imprudencia ni impulsividad'. Según Chen, la decisión también podría incluir 'flexibilidad cognitiva, empatía empresarial, toma de perspectiva o enfoque, y autocontrol, que a veces se percibe como ausente entre los millennials.'",
          description15: "8. Capacidad para Trabajar Bajo Presión y Gestión del Tiempo: El equipo de WikiJob escribe: 'Muchos trabajos vienen con plazos exigentes y, a veces, apuestas altas. Los reclutadores valoran a los candidatos que muestran una actitud decidida, una capacidad inquebrantable para pensar con claridad y la capacidad de compartimentar y dejar a un lado el estrés'. Sin embargo, dejar a un lado el estrés puede ser difícil. Lynda Gratton (@lyndagratton), profesora de práctica de gestión en la London Business School, explica: 'Resulta que el desarrollo y uso de habilidades blandas como la empatía y la creatividad son muy sensibles a cómo se siente una persona. Los estudios muestran que cuando las personas se sienten bajo presión, como si fueran tratadas injustamente, o sienten estrés, el hipocampo, la parte del sistema límbico del cerebro asociada con la emoción, es mucho menos capaz de participar en la escucha empática o apreciar el contexto de una situación. El cerebro, en cierto sentido, se cierra al aprendizaje o la ejecución de habilidades blandas. El desafío es que muchos lugares de trabajo tienen prácticas y procesos que, a menudo de manera no intencionada, resultan en niveles elevados de estrés. Además, los antídotos, como condiciones de trabajo más flexibles, culturas colaborativas, la institución de procesos justos, no se adoptan rápidamente'. En otras palabras, las empresas pueden socavar involuntariamente el desarrollo de las habilidades blandas que desean fomentar en sus empleados.",
          description16: "9. Flexibilidad: La teoría de la evolución de Charles Darwin afirma que las especies mejor capacitadas para adaptarse a circunstancias cambiantes tienen las mejores probabilidades de sobrevivir. En el mundo empresarial actual, en constante cambio, las empresas ágiles tienen la mejor oportunidad de sobrevivir. Sin embargo, las empresas ágiles dependen de tener empleados flexibles. El equipo de WikiJob señala: 'La flexibilidad es una habilidad blanda importante, ya que demuestra la capacidad y disposición para abrazar nuevas tareas y nuevos desafíos con calma y sin problemas. Los empleados flexibles están dispuestos a ayudar donde sea necesario, asumir responsabilidades adicionales y pueden adaptarse rápidamente cuando los planes cambian.'",
          description17: "10. Negociación y Resolución de Conflictos: Los conflictos dentro de una organización pueden crear un entorno tóxico. Es por eso que una persona que puede lidiar con el conflicto es tan valiosa. El equipo de WikiJob explica: 'Ser un negociador hábil es saber cómo ser persuasivo y ejercer influencia, mientras se busca de manera sensible una solución que beneficiará a todas las partes. De manera similar, la resolución de conflictos depende de fuertes habilidades interpersonales y la capacidad para establecer una relación con colegas y clientes por igual.'",
          description18: "Consideraciones finales:",
          description20: "Chen concluye: 'A diferencia de las habilidades técnicas que se aprenden, las habilidades blandas son similares a las emociones o percepciones y permiten a las personas interactuar de manera inteligente con los demás. No las aprendes en un aula típica y son mucho más difíciles de evaluar y medir'. Gratton está de acuerdo en que aún tenemos mucho que aprender sobre cómo enseñar a las personas las habilidades blandas que necesitarán para tener éxito en los próximos años. Ella escribe: 'El informe del Foro Económico Mundial sobre habilidades futuras argumentó que son las habilidades blandas humanas las que se volverán cada vez más valiosas, habilidades como la empatía, la percepción del contexto, la colaboración y el pensamiento creativo. Eso significa que millones de personas en todo el mundo tendrán que hacer la transición hacia ser mucho más competentes en estas habilidades blandas. Pero eso está lejos de ser fácil. La paradoja es que, mientras entendemos mucho sobre cómo desarrollar las habilidades duras de análisis, toma de decisiones y juicio analítico, sabemos mucho menos sobre el origen de las habilidades blandas'. Es por eso que las habilidades blandas son tan importantes en tiempos difíciles."
        },
        {
          id: 2,
          img: require(`@/assets/images/blog/vuecover-1200x735.jpg`),
          title: "Mejores tecnologías para desarrollo front-end",
          commentor: "Nacho Rodríguez",
          date: "23 Octubre 2023",
          tag: `frontend, techs, HTML, CSS, JavaScript, TypeScript, Vue`,
          description1:
            "Para empezar, recuerda que hay una estricta división entre el desarrollo del frontend y el backend para las aplicaciones web. Las tecnologías de backend están relacionadas con el lado del servidor de las aplicaciones. A su vez, el frontend se relaciona con el navegador y las interfaces/interacciones del usuario. Aunque ambos lados contribuyen de manera igual al éxito del proyecto, este artículo se centrará en las mejores opciones de frontend para tu proyecto.",
          description2:
            "Vue se considera una de las mejores opciones de framework frontend para aplicaciones web de una sola página y es un framework de JavaScript diseñado para crear interfaces de usuario que proporciona una experiencia de programación declarativa y basada en componentes, similar a React y Angular. Con millones de descargas semanales en npm, demuestra su popularidad en el mercado.",
          description3:
            "A menudo, las tecnologías “Top” se equiparan con las herramientas más “recientes”.",
          description4:
            "Las herramientas más recientes pueden carecer de un soporte adecuado, integración o documentación, y es importante tener en cuenta la popularidad y el éxito de una tecnología, como se ve en los casos de CSS y HTML, que, a pesar de no ser 'nuevos' o 'emergentes', siguen siendo fundamentales para el desarrollo frontend.",
          description5:
            "Esta publicación de blog presenta una mezcla de tecnologías bien establecidas, emergentes y de moda para ofrecer una visión integral del mercado actual.",
          description6: "1. HTML (HyperText Markup Language)",
          description7:
            "Comencemos con lo básico: HTML es la base del desarrollo frontend y su importancia es poco probable que disminuya en el corto plazo. Esta tecnología te permite crear la estructura o 'markup' de tu sitio web. Aunque no ofrece la interfaz de usuario más dinámica, los elementos HTML te proporcionan herramientas básicas para agregar botones, formularios, contenedores y otras características a la página web.",
          description8: "2. CSS (Cascading Style Sheets)",
          description9:
            "Otra tecnología fundamental para el frontend es CSS, que te permite agregar reglas de estilo adicionales a la estructura HTML que has creado, asegurando que tu aplicación web sea receptiva y visualmente atractiva con animaciones llamativas que la hacen interactiva y funcionan sin problemas en cualquier tamaño de pantalla o dispositivo.",
          description10: "3. JavaScript",
          description11:
            "JavaScript (JS) es un lenguaje de programación que siempre ha sido y seguirá siendo una de las tecnologías frontend más importantes para aplicaciones web y móviles. Permite a los desarrolladores modificar dinámicamente el contenido tanto de aplicaciones móviles como de escritorio e implementar diversas funciones como carritos de compras, animaciones complejas, calculadoras de impuestos, juegos para navegadores web, entre otras.",
          description12: "4. TypeScript",
          description13:
            "Todo aquel con experiencia en frontend sabe que JavaScript puede ser complicado y a veces incluso peligroso en cuanto a los tipos. Este ya no es el caso con TypeScript.",
          description14:
            "Permite escribir JS regular con una sintaxis adicional para definiciones de tipos. Esta tecnología se está convirtiendo en un estándar en el desarrollo moderno de frontend, ya que permite a los desarrolladores de TypeScript ahorrar tiempo al depurar problemas basados en tipos. Además, hace que el software final sea más estable.",
          description15:
            "TypeScript arroja un error cada vez que cometemos un error relacionado con los tipos de variables, lo que nos permite realizar ajustes adecuados antes de recibir informes de errores por parte de los clientes.",
          description16: "5. Vue",
          description17:
            "Vue se considera una de las mejores opciones de framework frontend para aplicaciones web de una sola página y es un framework de JavaScript diseñado para crear interfaces de usuario que proporciona una experiencia de programación declarativa y basada en componentes, similar a React y Angular. Con millones de descargas semanales en npm, demuestra su popularidad en el mercado.",
          description18:
            "Para más información sobre por que elegir Vue para tus aplicaciones web, recomiendo la lectura (en inglés) de ",
          description19: "éste artículo.",
          href1:
            "https://taglineinfotech.com/why-vue-js-is-the-future-of-front-end-development/",
        },        
        {
          id: 3,
          img: require(`@/assets/images/blog/backend-vs-frontend2.png`),
          title:
            "¿Cuál es la diferencia entre el front end y back end en el desarrollo de aplicaciones?",
          commentor: "Nacho Rodríguez",
          date: "23 October 2023",
          tag: `frontend, backend, technologias, DOM, interfaz`,
          description1:
            "Tanto el front end como el back end son aspectos críticos de cualquier aplicación. El front end es aquello que ven los usuarios e incluye elementos visuales, como botones, casillas de verificación, gráficos y mensajes de texto. Permite a los usuarios interactuar con la aplicación. El back-end son los datos y la infraestructura que permiten que la aplicación funcione. Almacena y procesa los datos de las aplicaciones para los usuarios.",
          description2:
            "El front end puede gestionar las interacciones (o solicitudes) fundamentales de los usuarios, como mostrar un calendario o comprobar si el usuario ha ingresado una dirección de correo electrónico válida. El front end transmite las solicitudes más complejas al back end.",
          description3: "¿Cómo funciona el front end de una aplicación?",
          description4:
            "El término front end hace referencia a la interfaz gráfica de usuario (GUI) con la que los usuarios pueden interactuar de forma directa, como los menús de navegación, los elementos de diseño, los botones, las imágenes y los gráficos. En términos técnicos, una página o pantalla que el usuario ve con varios componentes de la interfaz de usuario se denomina modelo de objetos del documento (DOM).",
          description5:
            "Hay tres lenguajes de computación principales que afectan a la forma en que los usuarios interactúan con el front end:",
          description6:
            "1. El lenguaje de marcado HTML define la estructura del front end y los diferentes elementos del DOM",
          description7:
            "2. Las hojas de estilo en cascada (CSS) definen el estilo de una aplicación web, incluido el diseño, las fuentes, los colores y el estilo visual",
          description8:
            "3. JavaScript agrega una capa de funcionalidad dinámica mediante la manipulación del DOM",
          description9:
            "JavaScript puede activar cambios en una página y mostrar información nueva. Esto significa que el front end puede gestionar las interacciones (o solicitudes) fundamentales de los usuarios, como mostrar un calendario o comprobar si el usuario ha ingresado una dirección de correo electrónico válida. El front end transmite las solicitudes más complejas al back end.",
          description10: "¿Cómo funciona el backend de una aplicación?",
          description11:
            "A veces denominado servidor, el back end de la aplicación administra la funcionalidad general de la aplicación web. Cuando el usuario interactúa con el front end, la interacción envía una solicitud al back end en formato HTTP. El backend procesa la solicitud y devuelve una respuesta.",
          description12:
            "Cuando el backend procesa una solicitud, normalmente interactúa con los siguiente elementos:",
          description13:
            "Servidores de bases de datos para recuperar o modificar datos relevantes.",
          description14:
            "Microservicios que realizan un subconjunto de las tareas solicitadas por el usuario.",
          description15:
            "API de terceros para recopilar información adicional o realizar funciones adicionales.",
          description16:
            "El backend utiliza varios protocolos y tecnologías de comunicación para completar una solicitud. Además, gestiona miles de solicitudes distintas de forma simultánea. El back end combina técnicas de concurrencia y paralelismo, como la distribución de solicitudes en muchos servidores, el almacenamiento en caché y la duplicación de datos.",
        },
      ],
      blogsEng: [
        {
          id: 1,
          img: require(`@/assets/images/blog/vuecover-1200x735.jpg`),
          title: "Best frontend technologies",
          commentor: "Nacho Rodríguez",
          date: "23 October 2023",
          tag: `frontend, techs, HTML, CSS, JavaScript, TypeScript, Vue`,
          description1:
            "An oft-heard lament nowadays is that people lack the skills to fill available job openings. Most often, those laments are about the lack of hard skills. However, companies are quickly learning that soft skills are becoming increasingly important. Even workers with hard skills can benefit from burnishing their soft skills. Tech writer Angus Loten (@angusloten) notes, “The surge in remote working and the rapid expansion of digital-business tools driven by the coronavirus pandemic are prompting employers to add a new qualification to enterprise-technology job postings: people skills.”[1] With the Delta variant raging and the Mu variant waiting in the wings, this situation is unlikely to change in the near-term. “In today’s job market,” Freelance journalist Jared Lindzon (@JLindzon) asserts, “what you can do is often less important than how you do it.”[2] Elaborating, Lindzon writes, “Employers may only hire candidates who meet the minimum requirements for technical competencies, but there is a growing appetite for candidates who can demonstrate more advanced soft skills, as those are often harder to teach. Among all the soft skills employers are seeking, however, one stands far above the rest in terms of employer demand.” That skill is communication.",
          description2:
            "Vue is considered one of the best frontend framework options for single-page web applications, and is a JavaScript framework designed for creating user interfaces that provides a declarative and component-based programming experience, similar to React and Angular, with millions of weekly downloads on npm, demonstrating its popularity in the market.",
          description3:
            "The Importance of Soft Skills",
          description4:
            "The medical profession has known for a long time that soft skills are nearly as important as hard skills. Healthcare journalist Patricia Chaney (@TRCWriter) explains, “Bedside manner among all medical professionals is a crucial part of their patients’ recovery. Not only does it affect how patients feel in the hospital, but also how much they learn about caring for themselves at home. This important element encompasses every aspect of one’s interaction with a patient and his or her family member — not only what is said, but how it’s expressed.”[3] Lindzon explains that the need for people skills is now being recognized far beyond traditional fields where such skills have long been appreciated. He writes, “While demand for candidates with strong communication skills was once specific to industries and roles that were public- or customer-facing — such as corporate communications or sales — there is now a growing recognition of the importance of communication skills in almost any corporate setting.",
          description5:
            "Analysts from McKinsey & Company note, “Accompanying the adoption of advanced technologies into the workplace will be an increase in the need for workers with finely tuned social and emotional skills — skills that machines are a long way from mastering. … While some of these skills, such as empathy, are innate, others, such as advanced communication, can be honed and taught.”[4] Nadia Chen, Talent Engagement Director at Kurrant Talent, adds, “Automation and artificial intelligence will result in a greater proportion of jobs relying on soft skills but their importance is often undervalued in the workplace.”[5] She insists, “Demand for soft skills already exceeds supply by up to 45 per cent.” And she notes, “A study by Deloitte estimates that two-thirds of all jobs by 2030 will depend on soft skills.”",
          description6: "The Most Important Soft Skills",
          description7:
            "As Lindzon noted, communication is currently the most desired soft skill being sought by employers; however, it’s not the only skill in high demand. Jay Wright, Developmental Editor at WikiJob, pointed me to WikiJob’s top ten list of soft skills.[6] Not surprisingly, communication tops the WikiJob list:",
          description8: "1. Communication: Dan Brodnitz, head of content strategy for LinkedIn Learning, told Lindzon, “Communication is core to how people interact, and therefore it’s core to how people do business effectively. Anything that involves more than one person depends on communications.” The WikiJob team adds, “Able communicators can adjust their tone and style according to their audience, comprehend and act efficiently on instructions, and explain complex issues to colleagues and clients alike. A key, often forgotten, communication skill is listening.”",
          description9:
            "2. Self-Motivation. With remote and hybrid work on the rise, self-motivation is essential. The WikiJob’s team notes, “Having a positive attitude and the initiative to work well without around-the-clock supervision is a vital soft skill for any employee.”",
          description10: "3. JavaScript",
          description11:
            "3. Leadership. Great leadership requires a person to hone all of the soft skills. The WikiJob’s team stresses, “Those with strong leadership skills will have the ability to inspire others and lead teams to success. This is why it is a particularly sought-after skill.”",
          description12: "4. Responsibility. Responsibility is a traveling companion of self-motivation. According to the WikiJob’s team, a responsible person embraces the following qualities: Trustworthiness; discipline; motivation; conscientiousness; accountability; resilience; and adaptability.",
          description13:
            "5. Teamwork. Most successful businesses require teamwork. Headhunter Martha Heller, Chief Executive Officer of Heller Search Associates, told Loten, “The brilliant, introverted developer continues to be in high demand, but we are also seeing an uptick in requirements for relationship building, business acumen and communications in our searches.” At some point, even introverts need to work with others. That’s why teambuilding exercises continue to be a staple in the business world.",
          description14:
            "6. Problem Solving. Frankly, I’m surprised problem solving is so low on the list. A survey conducted by McKinsey & Company back in 2018 found that problem solving, critical thinking, innovation, and creativity were the top skills desired by employers. The next most desirable skillset involved the ability to deal with complexity and ambiguity.",
          description15:
            "7. Decisiveness. The WikiJob’s team notes, “Decisiveness is characterized by the ability to make quick and effective decisions. It does not mean recklessness or impulsiveness.” According to Chen, decisiveness could also include “cognitive flexibility, business empathy, perspective-taking or focus, and self-control, which is sometime seen as missing among millennials.”",
          description16: "5. Vue",
          description17:
            "8. Ability to Work Under Pressure and Time Management. The WikiJob’s team writes, “Many jobs come with demanding deadlines and, sometimes, high stakes. Recruiters prize candidates who show a decisive attitude, an unfaltering ability to think clearly, and a capacity to compartmentalize and set stress aside.” Setting stress aside, however, can be difficult. Lynda Gratton (@lyndagratton), a professor of management practice at London Business School, explains, “It turns out that the development and use of soft skills such as empathy and creativity are highly sensitive to how a person is feeling. Studies show that when people feel under pressure, like they’re being treated unfairly, or otherwise feel under stress, the hippocampus — the part of the brain’s limbic system that is associated with emotion — is much less able to engage in empathic listening or appreciating the context of a situation. The brain, in a sense, closes down to learning or performing soft skills. The challenge is that many workplaces have practices and processes that, often unintentionally, result in high levels of stress. Moreover, the antidotes — such as more flexible working conditions, collaborative cultures, the institution of fair processes — are not adopted quickly.”[8] In other words, companies can unintentionally undermine the development of the soft skills they desire to foster in their employees.",
          description18:
            "9. Flexibility. Charles Darwin’s theory of evolution asserts that the species best able to adapt to changing circumstances have the best chances of survival. In today’s ever-changing business world, agile companies have the best chance of survival. Agile companies, however, depend on having flexible employees. The WikiJob’s team notes, “Flexibility is an important soft skill, since it demonstrates an ability and willingness to embrace new tasks and new challenges calmly and without fuss. Flexible employees are willing to help out where needed, take on extra responsibilities and can adapt quickly when plans change.”",
          description20: "10. Negotiation and Conflict Resolution. Conflict within an organization can create a toxic environment. That’s why a person who can deal with conflict is so valuable. The WikiJob’s team explains, “To be an adept negotiator is to know how to be persuasive and exert influence, while sensitively seeking a solution which will benefit all parties. Similarly, conflict resolution depends on strong interpersonal skills and the ability to establish a rapport with colleagues and clients alike.”",
          description21: "Concluding Thoughts",
          description22: "Chen concludes, “Unlike hard skills that are learned, soft skills are similar to emotions or insights and allow people to interact intelligently with others. You don’t learn them in a typical classroom setting and they are much tougher to evaluate and measure.” Gratton agrees we have a lot to learn about how to teach people the soft skills they will need to succeed in the years ahead. She writes, “The World Economic Forum report on future skills argued, it is human ‘soft skills’ that will become increasingly valuable — skills such as empathy, context sensing, collaboration, and creative thinking. That means that millions of people across the world will have to make the transition toward becoming a great deal better versed in these soft skills. But that’s far from easy. The paradox is that while we understand a lot about how to develop the ‘hard skills’ of analysis, decision-making, and analytical judgment, we know a great deal less about the genesis of soft skills.” That’s why, when an employer finds a person blessed with these soft skills, they are considered a business treasure; and, that’s why soft skills are so important for hard times."
        },
        {
          id: 2,
          img: require(`@/assets/images/blog/1579270413-soft-skills.png`),
          title: "Top 10 Toolkits for Deep Learning in 2022",
          commentor: "Santhan ",
          date: "14 January 2022",
          tag: `wordpress, business, economy, design`,
          description1:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          description2:
            "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine. ",
          description3:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          description4:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: require(`@/assets/images/blog/backend-vs-frontend2.png`),
          title: "What are frontend and backend technologies?",
          commentor: "Nacho Rodríguez",
          date: "23 October 2023",
          tag: `frontend, technologies, HTML, CSS, JavaScript, Vue`,
          description1:
            "To begin with — remember that there is a strict division between frontend and backend for web page development.Backend technologies are related to the server side of the applications. In turn, frontend relates to the browser and user interfaces/interactions. While both sides contribute equally to the project’s success, this article will focus on the top frontend options for your project.",
          description2:
            "Vue is considered one of the best frontend options for single-page web applications, and is a JavaScript framework designed for creating user interfaces that provides a declarative and component-based programming experience, similar to React and Angular, with millions of weekly downloads on npm, demonstrating its popularity in the market.",
          description3:
            "“Top” technologies are often equated with the “latest” tools.",
          description4:
            "The latest tools may lack proper support, integration, or documentation, and it's important to consider the popularity and success of a technology, as seen in the cases of CSS and HTML, which, despite not being “new” or “emerging”, remain fundamental to frontend development.",
          description5:
            "This blog post presents a mix of well-established, emerging, and trendy technologies to provide a comprehensive overview of the current market.",
          description6: "1. HTML (HyperText Markup Language)",
          description7:
            "Let's begin with the basics: HTML is the foundation of frontend development and its importance is unlikely to diminish anytime soon. This technology enables you to create the structure or 'markup' of your website, although it may not offer the most dynamic user interface, HTML elements provide you with basic tools to add buttons, forms, containers, and other features to web page.",
          description8: "2. CSS (Cascading Style Sheets)",
          description9:
            "Another core frontend technology, CSS allows you to add additional styling rules to the HTML structure you have created, ensuring that your web application is responsive and visually appealing with eye-catching animations that make it interactive and work seamlessly on any screen size or device.",
          description10: "3. JavaScript",
          description11:
            "JavaScript (JS) is a programming language that has always been and will continue to be one of the most important frontend technologies for web and mobile applications, allowing developers to dynamically modify the contents of both mobile and desktop apps and implement various features such as shopping carts, complex animations, tax calculators, web browser games, and more.",
          description12: "4. TypeScript",
          description13:
            "Everyone with some frontend experience knows that JavaScript can be tricky and sometimes even dangerous when it comes to types. This is no longer the case with TypeScript.",
          description14:
            "It allows you to write regular JS with some additional syntax for type definitions. This technology is becoming a standard in modern frontend development as it allows TypeScript developers to save time when debugging type-based issues. Additionally, it makes the final software more stable.",
          description15:
            "TypeScript throws an error anytime we make a mistake related to variable types, so we can make proper adjustments before we receive bug reports from customers.",
          description16: "5. Vue",
          description17:
            "Vue is considered one of the best frontend options for single-page web applications, and is a JavaScript framework designed for creating user interfaces that provides a declarative and component-based programming experience, similar to React and Angular, with millions of weekly downloads on npm, demonstrating its popularity in the market.",
        },
      ],      
    };
  },
};
