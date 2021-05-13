<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Clases y categorías de peligros SGA

    img.mb-5(src='@/assets/curso/figure-1.svg', alt='Introduccion 1')

    .h4 Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA).
    p.mb-4  El Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA, también conocido como GHS por sus siglas en inglés), establece criterios armonizados para clasificar sustancias y mezclas con respecto a sus peligros físicos para la salud y para el medio ambiente. Incluye además elementos armonizados para la comunicación de peligros, con requisitos sobre etiquetas, pictogramas y fichas de seguridad.
    .row
      .col-md-7.mb-4.mb-md-0
        p Es así como el SGA se aplica a todos los productos químicos, excepto a productos farmacéuticos, aditivos alimentarios, artículos cosméticos y residuos de plaguicidas en alimentos.
        br
        | El desarrollo del SGA fue impulsado por la firma del mandato internacional aprobado y que aparece reflejado en el párrafo 19.27 del Programa 21 (Desarrollo Sostenible en el Siglo XXI) durante la Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo (CNUMAD) que se celebró en 1992:

      .col-md-5.ph-4
        img(src='@/assets/curso/figure-2.svg', alt='Nota. MinAmbiente (s.f.)')
        p(style='text-align: center') <strong>Nota. MinAmbiente (s.f). </strong>

    .bloque-texto-c.color-primario.p-4.mb-5
        i.fas.fa-quote-right
        .h4.mb-2.px-5 Para el año 2000 debería disponerse, dentro de lo posible, de un sistema de clasificación y etiquetado armonizado mundialmente, que contenga fichas de datos sobre la seguridad de distintos productos químicos y símbolos de fácil comprensión
        span - (Hoyos, 2017, p.13)

    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        p Los productos químicos están presentes en las actividades humanas, sean estas industriales, comerciales o domésticas, en las que su uso busca mejorar la calidad de vida tanto de los individuos como de la sociedad; sin embargo, la exposición a estos productos a veces conlleva la generación de efectos adversos para la salud, así como afecta la seguridad de las condiciones de trabajo, generando por un mal manejo, daños a las personas, al entorno y al medio ambiente.
        br
        p Esta exposición de no ser controlada genera accidentes de trabajo, accidentes que incluso pueden y han comprometido la vida de individuos y de la comunidad en general, los activos de las empresas y gravemente el ecosistema.
        br
        p De ahí la importancia de las iniciativas realizadas alrededor del mundo para identificar, clasificar y comunicar los peligros de un producto químico. Esfuerzos que han llevado a la elaboración de diferentes sistemas de clasificación y comunicación de peligros.
      .col-md-4
        img.px-4(src='@/assets/curso/figure-3.svg', alt='Nota. MinAmbiente (s.f.)')
    .row.mb-5
      .col-md-4
        img.px-4(src='@/assets/curso/figure-4.svg', alt='Nota. MinAmbiente (s.f.)')
      .col-md-8.mb-4.mb-md-0
        p Algunos de estos sistemas presentan propósitos particulares y enfoques que pueden ser considerados como parciales en la dimensión de los peligros de un producto químico y que no son reconocidos por otros países, por ejemplo, la información presentada por NFPA a los bomberos de Estados Unidos para la comunicación de peligros de un producto químico en caso de incendios.
        br
        | Es así como el mismo producto químico podría estar considerado como un líquido inflamable para un sistema de clasificación y cancerígeno para otro. Por otra parte, los mecanismos de clasificación de peligros y sus elementos de comunicación difieren entre un sistema y otro, generando confusión en la interpretación de la información. Aunque algunos de estos sistemas pueden tener semejanzas en cuanto a su contenido y enfoque, otros son suficientemente diferentes como para que un mismo producto requiriese de múltiples clasificaciones, contenidas en etiquetas y fichas de datos de seguridad, lo cual dificulta la comercialización en distintos países e incluso, confunde al usuario del producto químico sobre los cuidados y recomendaciones a tener en cuenta para su manejo, almacenamiento y disposición.

    p.mb-5 Disponer de manera fácil y con certeza de información sobre la peligrosidad de los productos químicos y sobre las medidas de control recomendadas da la capacidad a los países de gestionar con seguridad la producción, el transporte, el uso y la eliminación de los productos químicos.  La gestión segura de los productos químicos debe incluir sistemas a través de los cuales se comuniquen los peligros a todas aquellas personas que pudieran estar expuestas, entre estas: los trabajadores, los consumidores, el personal de los servicios de emergencia y en general el público y la sociedad.

    img.mb-5(src='@/assets/curso/figure-5.svg', alt='Simbolos')

    p.mb-5 Por todo lo anterior, era necesario acordar un sistema que reuniera la información y criterios pertinentes para la clasificación de los peligros que presenta un producto químico, basado en información veraz y pertinente, con soportes técnicos reconocidos y con la capacidad de ser comunicados adecuadamente. Es así como surge el Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA).

    .row.mb-5
      .col-lg-6.mb-5.mb-lg-0
        p El Sistema Globalmente Armonizado ha establecido criterios y requisitos que permiten manejar un lenguaje común a nivel mundial para la clasificación y comunicación de los peligros de un producto químico a través de dos elementos claves: las etiquetas y las fichas de datos de seguridad.
        br
        | La “clasificación de peligro” en el SGA se fundamenta en la consideración de las propiedades intrínsecas peligrosas de las sustancias químicas o de sus mezclas, es decir, las cualidades o características de peligrosidad de una sustancia que permiten clasificarla y diferenciarla de otras.

      .col-lg-6
        //- .bloque-texto-c debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          .h4.mb-2 En términos del SGA, un producto químico peligroso es aquel que presenta peligro físico para la salud y/o para el medio ambiente
          span (Hoyos 2017)

    img.mb-5(src='@/assets/curso/figure-6.svg', alt='Simbolos')

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Peligros físicos")
        .h3 Peligros físicos
        p.mb-4 Los peligros físicos son aquellas características intrínsecas de los productos químicos que están fundamentadas en sus propiedades físicas y químicas, cuyos efectos adversos pueden afectar directamente el entorno y a las personas que se encuentren en él.
          br
          br
          | En la siguiente figura se puede observar un listado de peligros físicos y los pictogramas correspondientes al grupo.

        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/figure-7.svg', alt='Simbolos')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p El Sistema Globalmente Armonizado establece 17 clases de peligros físicos, que son: explosivos, gases inflamables, aerosoles, gases comburentes, gases a presión, líquidos inflamables, sólidos inflamables, sustancias y mezclas que reaccionan espontáneamente, líquidos pirofóricos, sólidos pirofóricos, sustancias y mezclas que experimentan calentamiento espontáneo, sustancias que en contacto con el agua desprenden gases inflamables, líquidos comburentes, sólidos comburentes, peróxidos orgánicos, sustancias y mezclas corrosivas para los metales, y explosivos insensibilizados
                p.h4(style="text-weigth: 800; text-align: right;") (Hoyos, 2017).

      .py-3.py-md-4(titulo="Peligros para la salud")
        .h3 Peligros para la salud
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Las clases de peligro clasificadas dentro de los peligros para la salud corresponden a aquellas cuyos efectos adversos son generados directamente sobre las personas, afectando el correcto desempeño del cuerpo, ya sea a corto plazo (efecto agudo) o a largo plazo (efecto crónico) sobre la salud de los individuos expuestos.
              br
              br
              | Las clases de peligros para la salud establecidos en el SGA son las siguientes:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Toxicidad aguda (según vía de exposición).
              li
                i.fas.fa-check
                | Corrosión/irritación cutánea.
              li
                i.fas.fa-check
                | Lesiones oculares graves / irritación ocular.
              li
                i.fas.fa-check
                | Sensibilización respiratoria o cutánea.
              li
                i.fas.fa-check
                | Mutagenicidad en células germinales.
              li
                i.fas.fa-check
                | Carcinogenicidad.
              li
                i.fas.fa-check
                | Toxicidad para la reproducción.
              li
                i.fas.fa-check
                | Toxicidad específica de en órganos diana (exposición única).
              li
                i.fas.fa-check
                | Toxicidad específica de órganos diana (exposiciones repetidas).
              li
                i.fas.fa-check
                | Peligro por aspiración.
          .col-md-6
            .cajon.color-primario.p-4.mb-4
              p La siguiente figura muestra un listado de peligros para la salud y los pictogramas correspondientes al grupo.
            img(src='@/assets/curso/figure-8.svg', alt='Simbolos')

      .py-3.py-md-4(titulo="Peligros para el medio ambiente")
        .h3.mb-5 Peligros para el medio ambiente
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Las clases de peligro agrupadas como peligros para el medio ambiente son aquellos presentes en un producto químico y cuyos efectos adversos se dan sobre los ecosistemas, afectando la fauna y flora.
              br
              br
              | En el SGA (revisión sexta) las clases de peligro para el medio ambiente son:
            ul.mb-4.lista-ul--color
              li
                i.fas.fa-check
                | Peligros para el medio ambiente acuático (a corto y largo plazo).
              li
                i.fas.fa-check
                | Peligros para la capa de ozono.
            a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. Comisión Económica de las Naciones Unidas para Europa (UNECE), (2015). Parte 4 Peligros para el medio ambiente

          .col-md-6
            .cajon.color-primario.p-4.mb-4
              p La siguiente figura presenta un listado de peligros para el medio ambiente y los pictogramas correspondientes al grupo.
            img(src='@/assets/curso/figure-9.svg', alt='Simbolos')
    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        p Una vez establecida las clases de peligro que presenta un producto químico es necesario identificar su nivel o grado de peligrosidad, el cual es igualmente intrínseco a la naturaleza del producto químico y corresponde a un elemento importante en la clasificación y comunicación de peligros.
          br
          br
          | La categorización de cada clase de peligro permite comparar y jerarquizar la gravedad de los peligros presentes en el producto químico, así como comparar los diferentes fines del producto con otros productos químicos, según la clase y categoría de los peligros que presenta (dentro de los usos de esta información se encuentra establecer la compatibilidad en el almacenamiento).
          br
          br
          | Las categorías de peligro se expresan en el SGA a través de una escala numérica que va del 1 y generalmente al 4 o 5 (dependiendo de la clase de peligro considerado). El número 1 siempre corresponderá a la categoría de mayor severidad dentro de la clase e irá disminuyendo a medida que sea mayor el número. Existen algunas clases de peligro, por ejemplo, carcinogenicidad en la cual, para la misma categoría, aparte del número, se puede abrir y desglosar aún más la categorización en diferentes agrupaciones, incluyendo agrupaciones como A y B.
      .col-md-4
        img.px-4(src='@/assets/curso/figure-10.svg', alt='Nota. MinAmbiente (s.f.)')

    p.mb-5 También existe en el SGA algunas clases de peligros físicos en el que la escala no está establecida numéricamente sino a través de una escala alfabética, como es el caso de Sustancias y mezclas que reaccionan espontáneamente y los peróxidos orgánicos.
      br
      br
      | Según SGA revisión sexta, en el capítulo 1.2 definiciones y abreviaturas, la clasificación del peligro de un producto químico parte de:

    .row.mb-5
      .col-md-4.mb-4.mb-md-0
        img.mb-4(src='@/assets/curso/figure-11.svg', alt='Nota. MinAmbiente (s.f.)')
        p La identificación de los datos confiables y relevantes acorde a metodologías internacionalmente reconocidas sobre los peligros del producto químico.
      .col-md-4.mb-4.mb-md-0
        img.mb-4(src='@/assets/curso/figure-12.svg', alt='Nota. MinAmbiente (s.f.)')
        p El examen posterior de estos datos para identificar los peligros asociados al producto químico.
      .col-md-4.mb-4.mb-md-0
        img.mb-4(src='@/assets/curso/figure-13.svg', alt='Nota. MinAmbiente (s.f.)')
        p Decidir si el producto químico se clasificará como un producto químico peligroso y determinar su grado de peligrosidad (categoría).

    .tabla-a.color-acento-contenido.mb-5
      table
        caption
        thead
          tr
            th(colspan="2") Clasificacion
            th(colspan="4") Etiquetado
            th Codigo de indicación de peligro
        tbody
          tr
            td(rowspan="2" style="text-align: center;") Clase de peligro
            td(rowspan="2" style="text-align: center;") Categoria de peligro
            td(colspan="2" style="text-align: center;") Pictograma
            td(rowspan="2" style="text-align: center;") Palabra de advertencia
            td(rowspan="2" style="text-align: center;") Indicacion de peligro
            td(rowspan="2")
          tr
            td(style="text-align: center;") SGA
            td(style="text-align: center;") Reglamentacion Modelo de las Naciones Unidas
          tr
            td(rowspan="4" style="text-align: center;") Líquidos infamables
            td 1
            td
              img(src='@/assets/curso/figure-14.svg', alt='Señal SGA', style="height: 60%;")
            td
              img(src='@/assets/curso/figure-15.svg', alt='Señal SGA', style="height: 60%;")
            td Peligro
            td Líquido y vapores extremadamente inflamables
            td H224
          tr
            td 2
            td
              img(src='@/assets/curso/figure-14.svg', alt='Señal SGA', style="height: 60%;")
            td
              img(src='@/assets/curso/figure-15.svg', alt='Señal SGA', style="height: 60%;")
            td Peligro
            td Líquido y vapores muy inflamables
            td H225
          tr
            td 3
            td
              img(src='@/assets/curso/figure-14.svg', alt='Señal SGA', style="height: 60%;")
            td
              img(src='@/assets/curso/figure-15.svg', alt='Señal SGA', style="height: 60%;")
            td Atención
            td Líquido y vapores inflamables
            td H226
          tr
            td 4
            td Sin pictograma
            td No se requiere
            td Atención
            td Líquido combustible
            td H227

    .cajon.color-primario.p-4.mb-5
      .row.align-items-center
        .col-md-10.d-flex
          p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
        .col-md-2
          img(src='@/assets/curso/figure-16.svg', alt='Logo de las naciones unidas')

    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        p Los datos obtenidos en ensayos para otros sistemas de comunicación de peligros de productos químicos son aceptados como referencia de clasificación en el SGA. Este principio general ha permitido clasificar productos químicos que contaban con información y ensayos previos, sin necesidad de hacer ensayos adicionales y en especial, sin experimentar con animales.
          br
          br
          | Teniendo en cuenta que las categorías de peligro, dentro de una misma clase de peligro establecen el grado de peligrosidad, a cada categoría se le asigna sus elementos de comunicación que deben ser claros y deben resaltar dicha peligrosidad.
          br
          br
          | Dentro de estos elementos se encuentra la “palabra de advertencia”, esta palabra comunica al usuario del producto químico el grado relativo de peligrosidad de la sustancia química o mezcla y se utiliza para señalar la existencia de un peligro potencial al lector.
      .col-md-4
        img.px-4(src='@/assets/curso/figure-17.svg', alt='Nota. MinAmbiente (s.f.)')

    .px-md-5
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            h4 En el SGA las palabras de advertencia aceptadas son:
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p “peligro” (en inglés “danger”) y “atención” (en inglés “warning”). Jamás para el mismo producto químico se deben colocar juntas ambas palabras de advertencia. (Hoyos, 2017).

    .row.mb-5
      .col-md-6.mb-4.mb-md-0
        p.mb-4 Los tres elementos importantes en la comunicación del peligro de un producto químico en la etiqueta y en las FDS son:
          | De manera general, un pictograma se define como una composición
        ul.mb-4.lista-ul--color
          li
            i.fas.fa-check
            | Los pictogramas.
            br
          li
            i.fas.fa-check
            | La palabra de advertencia.
            br
          li
            i.fas.fa-check
            | Las indicaciones de peligro.
        p De manera general, un pictograma se define como una composición gráfica que contiene un símbolo, así como otros elementos gráficos, tales como un borde, un motivo en un color de fondo, que sirven para comunicar informaciones específicas.

      .col-md-6
        img.px-4(src='@/assets/curso/figure-18.svg', alt='Nota. MinAmbiente (s.f.)')

    .row.mb-5
      .col-md-6.mb-4.mb-md-0.d-flex
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/figure-19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            p.mb-3 Los pictogramas en el SGA presentan rombos de borde rojo, fondo blanco y un dibujo en color negro en el centro del rombo.
            .mb-3(style="text-align: center")
              .text-rounded-white
                span PELIGRO O ATENCIÓN
            p <strong>Nota:</strong> nunca se presentan en la misma etiqueta o FDS las dos palabras de advertencia.

      .col-md-6.d-flex
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/figure-20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            p.mb-3 La palabra de advertencia corresponde a un vocablo que indica la gravedad o el grado relativo del peligro intrínseco presente en el producto químico. En el SGA las palabras de advertencia son “peligro” y “atención”.
            .mb-3(style="text-align: center")
              .text-rounded-white
                span Líquido y vapores
                  br
                  | extremadamente inflamables
    .px-5
      .px-5
        .cajon.color-acento-contenido.p-4.mb-5
          p Está indicación de peligro es una frase asignada a una clase o categoría de peligro, describe la naturaleza del peligro que presenta un producto y cuando corresponda el grado de peligro, además enuncia la forma como este se materializa. (Hoyos, 2017).

    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        p.mb-4 Es así como en el pictograma la palabra de advertencia y la indicación de peligro son los elementos mínimos de la comunicación de peligros en el SGA, cada uno de ellos tiene una función específica y son complementarios para la comunicación de un peligro:
        ul.mb-4.lista-ul--color
          li
            i.fas.fa-check
            | El pictograma indica el peligro intrínseco.
            br
            br
          li
            i.fas.fa-check
            | La palabra de advertencia da una idea de la magnitud del peligro.
            br
            br
          li
            i.fas.fa-check
            | La indicación de peligro describe la naturaleza del peligro y enuncia la forma como se presenta.

      .col-md-4
        img.px-4(src='@/assets/curso/figure-21.svg', alt='Nota. MinAmbiente (s.f.)')

    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            .h6.mb-0 ELEMENTOS / DESCRIPCION
          table
            tr
              th(rowspan="3") PICTOGRAMA
              td Símbolo NEGRO
            tr
              td Fondo BLANCO
            tr
              td Marco ROJO
            tr
              th(rowspan="2") PALABRA DE ADVERTENCIA
              td Peligro (Mayor severidad)
            tr
              td Atención (Menor severidad)
            tr
              th INDICACIÓN DE PELIGRO
              td Describe la naturaleza del peligro y enuncia la forma como se materializa.
      .col-md-4
        img.px-4(src='@/assets/curso/figure-22.svg', alt='Nota. MinAmbiente (s.f.)')

    .titulo-segundo
      .h4 1.1  Peligros físicos

    img.mb-5(src='@/assets/curso/figure-24.svg', alt='Nota. MinAmbiente (s.f.)')

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.px-4(titulo="Explosivos")
        .col-md-8.mb-4.mb-md-0
          p El pictograma que se observa en la figura representa las sustancias o productos explosivos. Esto es una sustancia sólida o líquida (o mezcla de sustancias) que, de manera espontánea o por reacción química, puede desprender gases a una temperatura, presión y velocidad tales que puedan ocasionar daños en su entorno.
            br
            br
            | Los explosivos se clasifican en seis divisiones (categorías), estas se tienen en cuenta de acuerdo con las características del tipo de peligro de explosión, y se clasifican en: 1.1, 1.2, 1.3, 1.4, 1.5 y 1.6.  El pictograma de explosividad se presenta en las cuatros primeras divisiones y en la correspondiente a explosivos inestables.
            br
            br
            | El pictograma corresponde a una esfera que proyecta partículas radialmente, representando una explosión.
            br
            br
            | Algunos ejemplos de productos explosivos son la dinamita, el TNT, la pólvora negra, la nitroglicerina y el nitrato de pentaeritritol.

        .col-md-4
          img.mb-3(src='@/assets/curso/figure-25.svg', alt='Texto que describa la imagen')
          a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. Para ampliar la información se recomienda consultar en el material complementario:
                br
                | Comisión Económica de las Naciones Unidas para Europa (UNECE), (2015). Parte 2 Clasificación, página 57.

      .row.px-4(titulo="Gases a presión")
        .col-md-8.mb-4.mb-md-0
          p Aunque todos los peligros deben ser considerados en la implementación de medidas preventivas, en este apartado se mencionan los gases que pueden generar incendios.
            br
            br
            | Los gases a presión son gases que se encuentran en un recipiente a una presión (manométrica) superior o igual a 200 kPa a 20ºC, o como gases licuados, o como gases licuados refrigerados. Según el numeral 2.5.1 del SGA revisión sexta, se incluyen los gases comprimidos, licuados y licuados refrigerados.
            br
            br
            |Los gases bajo presión presentan comportamientos específicos que pueden generar efectos adversos al entorno, por ejemplo, pueden explotar por calentamiento o provocar quemaduras o lesiones criogénicas cuando corresponde a gases licuados refrigerados.

        .col-md-4
          img.mb-3(src='@/assets/curso/figure-26.svg', alt='Texto que describa la imagen')

      .row.px-4(titulo="Gases inflamables ")
        .col-md-8.mb-4.mb-md-0
          p Dentro de esta clase de peligro se consideran tanto los gases inflamables, como pirofóricos y los químicamente inestables.
            br
            br
            | Un gas inflamable es un gas que se inflama a 20°C y a una presión de referencia de 101,3 kPa.
            br
            br
            | Un gas pirofórico es un gas inflamable que puede inflamarse espontáneamente en el aire a una temperatura igual o inferior a 54°C.
            br
            br
            | Un gas químicamente inestable es un gas inflamable que se puede explotar incluso en ausencia de aire u oxígeno.
            br
            br
            | Estos gases se deben manejar con precaución porque pueden producir y alimentar el fuego solo con la presencia de chispas en el ambiente de trabajo e incluso, los gases pirofóricos no requieren fuentes de calor externas para iniciar una conflagración.
            br
            br
            | La categorización de la severidad del efecto se establece de acuerdo con la proporción en la mezcla aire/gas que genera la inflamabilidad del producto.
            br
            br
            | Su pictograma corresponde al dibujo de color negro de una llama sobre una línea horizontal dentro de un rombo con borde rojo, sostenido por una de sus esquinas.
            | El uso de este pictograma es considerado para gases inflamables categoría 1 y gases pirofóricos, según el SGA revisión sexta.

        .col-md-4
          img.mb-3(src='@/assets/curso/figure-26.svg', alt='Texto que describa la imagen')
          a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. Para ampliar la información se recomienda consultar en el material complementario:
                br
                | Comisión Económica de las Naciones Unidas para Europa (UNECE), (2015). Parte 1 Introducción.

      .row.px-4(titulo="Productos químicos inflamables")
        .col-md-8.mb-4.mb-md-0
          p Los productos químicos inflamables son sustancias o mezclas líquidas, sólidas o gaseosas que se inflaman con facilidad, generando un incendio en presencia de una chispa o fuente de calor y de una sustancia comburente.
            br
            br
            | Se consideran gases inflamables cuando se inflaman a 20°C y a una presión de 101,3 kPa. En los líquidos, cuando los productos químicos presentan puntos de inflamación menores a 92°C, y en el caso de sólidos cuando estos inflaman con facilidad o cuando por frotamiento pueden provocar o activar un incendio.
            br
            br
            | Existe una clase de peligro diferente, los así llamados aerosoles, que corresponden a un gas comprimido, licuado o disuelto a presión con un líquido, pasta o polvo contenido dentro de un recipiente de metal, vidrio o plástico que a través de un dispositivo de descarga dispersa finas partículas del soluto disuelto en el gas sobre el entorno.
            br
            br
            | El pictograma relacionado con productos químicos inflamables es fácil de interpretar, puesto que la llama en el dibujo indica la capacidad de los productos químicos a producir y a mantener el fuego.

        .col-md-4
          img.mb-3(src='@/assets/curso/figure-27.svg', alt='Texto que describa la imagen')
          a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. Para ampliar la información se recomienda consultar en el material complementario:
                br
                | Comisión Económica de las Naciones Unidas para Europa (UNECE), (2015). Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA). Sexta edición revisada. Naciones Unidas. Nueva York y Ginebra, páginas 71- 90.

      .row.px-4(titulo="Productos químicos inflamables")
        .col-md-8.mb-4.mb-md-0
          p Los productos químicos comburentes pueden ser gases, líquidos o sólidos comburentes o peróxidos orgánicos.
            br
            br
            | El pictograma que aplica para los productos químicos comburentes y peróxidos orgánicos es el que se presenta en la figura.
            br
            br
            | Son productos que generalmente contienen y aportan oxígeno en una reacción química, provocando o favoreciendo la combustión de otra sustancia, por ejemplo, oxígeno gaseoso, peróxido de hidrógeno, nitrato de amonio.
            br
            br
            | Los peróxidos orgánicos son productos químicos que contienen la estructura bivalente -O-O- y pueden considerarse derivados del peróxido de hidrógeno, en el que uno o ambos átomos de hidrógeno han sido sustituido(s) por radical(es) orgánico(s). Los peróxidos orgánicos son sustancias térmicamente inestables que pueden sufrir una descomposición exotérmica auto-acelerada, es decir, que liberan calor al reaccionar. Además, pueden tener una o varias de las siguientes propiedades:

        .col-md-4
          img.mb-3(src='@/assets/curso/figure-28.svg', alt='Texto que describa la imagen')
          a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. Para ampliar la información se recomienda consultar en el material complementario:
                br
                br
                | Comisión Económica de las Naciones Unidas para Europa (UNECE), (2015). Parte 2 Peligros físicos.

        .tabla-a.mt-4.color-acento-contenido.mb-5
          table
            caption
            thead
              tr
                th(colspan="2") Clasificacion
                th(colspan="4") Etiquetado
                th Codigo de indicación de peligro
            tbody
              tr
                td(rowspan="2" style="text-align: center;") Clase de peligro
                td(rowspan="2" style="text-align: center;") Categoria de peligro
                td(colspan="2" style="text-align: center;") Pictograma
                td(rowspan="2" style="text-align: center;") Palabra de advertencia
                td(rowspan="2" style="text-align: center;") Indicacion de peligro
                td(rowspan="2")
              tr
                td(style="text-align: center;") SGA
                td(style="text-align: center;") Reglamentacion Modelo de las Naciones Unidas
              tr
                td(rowspan="5" style="text-align: center;") Líquidos infamables
                td Tipo A
                td
                  img(src='@/assets/curso/figure-29.svg', alt='Señal SGA', style="height: 60%;")
                td (puede que no este permitido el transporte)
                td Peligro
                td Puede incendiarse o explotar al calentarse
                td H240
              tr
                td Tipo B
                td
                  img(src='@/assets/curso/figure-29.svg', alt='Señal SGA', style="height: 60%;")
                td
                  img(src='@/assets/curso/figure-30.svg', alt='Señal SGA', style="height: 60%;")
                td Peligro
                td Puede incendiarse o explotar al calentarse
                td H241
              tr
                td Tipo C y D
                td
                  img(src='@/assets/curso/figure-31.svg', alt='Señal SGA', style="height: 60%;")
                td
                  img(src='@/assets/curso/figure-32.svg', alt='Señal SGA', style="height: 60%;")
                td Peligro
                td Puede incendiarse o explotar al calentarse
                td H242
              tr
                td Tipo D y F
                td
                  img(src='@/assets/curso/figure-31.svg', alt='Señal SGA', style="height: 60%;")
                td
                  img(src='@/assets/curso/figure-32.svg', alt='Señal SGA', style="height: 60%;")
                td Peligro
                td Puede incendiarse o explotar al calentarse
                td H242
              tr
                td Tipo G
                td Sin pictograma
                td No se requiere
                td Sin palabra de advertencia
                td Sin indicacion de peligro
                td Ninguno
        .px-5
          .px-5
            .cajon.color-acento-contenido.p-4.mb-5
              p Criterios de clasificación para líquidos inflamables.  Fuente: Naciones Unidas, 2017. Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA). Sexta edición. Naciones Unidas. Nueva York y Ginebra 2017, p. 272.

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
