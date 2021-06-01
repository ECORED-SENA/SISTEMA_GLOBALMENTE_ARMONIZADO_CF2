export default {
  global: {
    componenteFormativo:
      'Comunicación de peligros y riesgos según Sistema Globalmente Armonizado',
    descripcionCurso:
      'El Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos nace como una iniciativa global de armonización en la forma en que  se clasifican y comunican  los peligros que presenta un producto químico, pilar que es fundamental en el desarrollo de una estrategia de gestión segura de productos químicos entre países, nace como un  compromiso establecido por los países y organizaciones que hacen parte del Sistema de Naciones Unidas que participaron en el desarrollo de la agenda del Programa  21 de Río de Janeiro realizado en 1992, cuya primera edición sale en el año 2003, la versión del año 2019 corresponde a la versión octava y frente a lo cual Colombia adopta a través del decreto 1496 de 2018, la versión sexta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clases y categorías de peligros SGA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Peligros físicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Peligros para la salud humana',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Peligros para el medio ambiente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Etiquetas SGA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos de una etiqueta SGA',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Etiquetado de acuerdo con el tipo de embalaje',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Interpretación de la información de la ONU vs. SGA',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fichas de datos de seguridad (FDS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Formato y contenido',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Secciones relevantes e interpretación de la información contenida en dichas secciones',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Marta Lucía Hernández',
        cargo: 'Intructora',
        centro: 'Centro Textil y de Gestión Industrial',
      },
      {
        nombre: 'Luis Eugenio Ramírez Duarte',
        cargo: 'Experto técnico',
        centro: 'ONUDI',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Zuleidy María Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Maria Carolina Tamayo',
          'Andrés Herrera',
          'Carlos Eduardo Garavito Parada',
        ],
        cargo: 'Producción Audiovisual',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Concepto.de. (s.f.). Concepto de sustancias químicas.',
      link: 'https://concepto.de/sustancias-quimicas/',
    },
    {
      referencia:
        'Decreto 1609 de 2002. [Ministerio de Transporte]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002.',
    },
    {
      referencia:
        'Decreto 1496 de 2018. [Presidente de la República de Colombia]. Por el cual se adopta el Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos y se dictan otras disposiciones en materia de seguridad química. Agosto 6 de 2018.',
    },
    {
      referencia: 'Definicion.DE. (s.f). Definición de toxicidad.',
      link: 'https://definicion.de/?s=Toxicidad',
    },
    {
      referencia: 'Definicion.mx (s.f). Definición de gas.',
      link: 'https://definicion.mx/gas/',
    },
    {
      referencia:
        'Enembalajes Nicolás. (s.f). ¿Qué es el embalaje? características, funciones, materiales [Web log post]. Blog.',
      link: 'https://www.embalajesdemadera.net/que-es-el-embalaje/',
    },
    {
      referencia:
        'GQSP Colombia. (2020).  Guía para la elaboración de fichas de datos de seguridad (FDS). Según el Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA).',
      link:
        'https://gqspcolombia.org/wp-content/uploads/2020/03/Onudi-Colombia_Digital_02.pdf',
    },
    {
      referencia:
        'ICONTEC. (1998). Norma Técnica Colombiana NTC 4435. Transporte de mercancías. Hojas de seguridad para materiales. Preparación.',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC4435.pdf',
    },
    {
      referencia:
        'Instituto Sindical de Trabajo, Ambiente y Salud. (s.f). Dañinas para el medio ambiente.',
      link:
        'https://istas.net/istas/riesgo-quimico/agentes-quimicos-peligrosos/lista-negra-de-sustancias-quimicas/daninas-para-el#:~:text=Entre%20los%20peligros%20para%20el,la%20atm%C3%B3sfera%20o%20el%20suelo.&text=Contaminantes%20del%20agua%3A%20incluye%20las,(sustancias%20eutrofizantes)%2C%20Ej.',
    },
    {
      referencia: 'Naciones Unidas (2015). Parte 1 Introducción.',
      link:
        'http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/01sp_part1.pdf',
    },
    {
      referencia: 'Naciones Unidas (2017). Parte 2 Peligros físicos.',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev07/Spanish/02sp_part2.pdf',
    },
    {
      referencia: 'Naciones Unidas. (2015). Parte 3 Peligros para la salud.',
      link:
        'http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/02sp_part3.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Parte 4 Peligros para el medio ambiente.',
      link:
        'http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/04sp_part4.pdf',
    },
    {
      referencia: 'Thompson, I. (2009).  El empaque. Marketing-Free.com.',
      link: 'https://www.marketing-free.com/producto/empaques.html',
    },
    {
      referencia:
        'UNECE. (2012).  Comisión Económica de las Naciones Unidas para Europa.',
      link:
        'https://unece.org/DAM/trans/main/wp29/wp29wgs/wp29gen/wp29pub/WP29_Blue_Book_2012-1s_01.pdf',
    },
    {
      referencia: 'UNECE. (2015). Parte 2 Clasificación.',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/unrec/rev13/Spanish/02_Part2.pdf',
    },
    {
      referencia:
        'UNECE. (2015). Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA). Sexta edición revisada.  Naciones Unidas Nueva York y Ginebra.',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/ST-SG-AC10-30-Rev6sp.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Embalaje',
      significado:
        'El embalaje es todo el proceso que se lleva a cabo para proteger el producto o mercancía durante su manipulación, traslado y almacenamiento. Con este proceso se protege el producto desde el momento de su producción hasta el momento en que es consumido.',
    },
    {
      termino: 'Empaque',
      significado:
        'En la actualidad el "empaque" es una parte fundamental del producto porque además de contener, proteger y/o preservar el producto permitiendo que este llegue en óptimas condiciones al consumidor final, es una poderosa herramienta de promoción y venta.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Cualquier rótulo, marbete, inscripción, imagen u otra materia descriptiva o gráfica, escrita, impresa, marcada, grabada en alto o bajo relieve, adherida o sobrepuesta al producto, a su envase o, cuando no sea posible el embalaje por las características del producto o su envase.',
    },
    {
      termino: 'Ficha de datos de seguridad (FDS)',
      significado:
        'Es un documento que proporciona información completa sobre una sustancia o mezcla con miras al control y reglamentación de su utilización en el lugar de trabajo.',
    },
    {
      termino: 'Gases',
      significado:
        'Un gas es una sustancia que está en un estado en donde sus moléculas tienen una relación muy débil entre sí. En este sentido se diferencia de un líquido o un sólido, remitiendo estos dos casos a sustancias en las que las moléculas tienen una relación más estrecha.',
    },
    {
      termino: 'Sustancias químicas',
      significado:
        'Se entiende por sustancia química o especie química un tipo de materia que es químicamente homogénea y definida, es decir, que posee una composición química fija, dependiendo del contexto, pueden ser sinónimos de las sustancias simples (opuestas a sustancias compuestas), formadas por átomos de un único tipo.',
    },
    {
      termino: 'Toxicidad',
      significado:
        'Se denomina toxicidad al grado de efectividad que poseen las sustancias que, por su composición, se consideran tóxicas. Se trata de una medida que se emplea para identificar el nivel tóxico de diversos fluidos o elementos, afectando tanto a un organismo en su totalidad, por ejemplo, el cuerpo del ser humano, como sobre una subestructura (una célula)',
    },
  ],
  complementario: [
    {
      texto:
        'GQSP Colombia. (2020).  Guía para la elaboración de fichas de datos de seguridad (FDS). Según el Sistema Globalmente Armonizado de clasificación y etiquetado de productos',
      tipo: 'PDF',
      link:
        'https://gqspcolombia.org/wp-content/uploads/2020/03/Onudi-Colombia_Digital_02.pdf',
    },
    {
      texto:
        'ICONTEC. (1998). Norma Técnica Colombiana NTC 4435. Transporte de mercancías. Hojas de seguridad para materiales. Preparación.',
      tipo: 'PDF',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC4435.pdf',
    },
    {
      texto:
        'Instituto Sindical de Trabajo, Ambiente y Salud. (s.f). Dañinas para el medio ambiente.',
      tipo: 'Página web',
      link:
        'https://istas.net/istas/riesgo-quimico/agentes-quimicos-peligrosos/lista-negra-de-sustancias-quimicas/daninas-para-el#:~:text=Entre%20los%20peligros%20para%20el,la%20atm%C3%B3sfera%20o%20el%20suelo.&text=Contaminantes%20del%20agua%3A%20incluye%20las,(sustancias%20eutrofizantes)%2C%20Ej.',
    },
    {
      texto: 'Naciones Unidas (2015). Parte 1 Introducción.',
      tipo: 'PDF',
      link:
        'http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/01sp_part1.pdf',
    },
    {
      texto: 'Naciones Unidas (2017). Parte 2 Peligros físicos.',
      tipo: 'PDF',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev07/Spanish/02sp_part2.pdf',
    },
    {
      texto: 'Naciones Unidas (2017). Parte 3 Peligros para la salud.',
      tipo: 'PDF',
      link:
        'http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/02sp_part3.pdf',
    },
    {
      texto: 'Naciones Unidas (2017). Parte 4 Peligros para el medio ambiente.',
      tipo: 'PDF',
      link:
        'http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/04sp_part4.pdf',
    },
    {
      texto:
        'UNECE. (2012).  Comisión Económica de las Naciones Unidas para Europa.',
      tipo: 'PDF',
      link:
        'https://unece.org/DAM/trans/main/wp29/wp29wgs/wp29gen/wp29pub/WP29_Blue_Book_2012-1s_01.pdf',
    },
    {
      texto:
        'UNECE. (2015).  Comisión Económica de las Naciones Unidas para Europa.',
      tipo: 'Página web',
      link: 'https://unece.org/es/ghs-rev6-2015',
    },
    {
      texto: 'UNECE. (2015). Parte 2 Clasificación.',
      tipo: 'PDF',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/unrec/rev13/Spanish/02_Part2.pdf',
    },
    {
      texto:
        'UNECE. (2015). Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA). Sexta edición revisada.  Naciones Unidas Nueva York y Ginebra.',
      tipo: 'PDF',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/ST-SG-AC10-30-Rev6sp.pdf',
    },
  ],
}
