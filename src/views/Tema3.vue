<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Fichas de datos de seguridad (FDS)

    img.mb-5(src='@/assets/curso/figure-91.svg', alt='Introduccion 1')

    #t_3_1.titulo-segundo
      .h4 3.1 Formato y contenido

    p.mb-5 A través del Decreto 1496 del 6 de agosto de 2018, Colombia ha adoptado el SGA, orientado, entre otros propósitos a comunicar los peligros y el manejo seguro de productos químicos por medio de las FDS y etiquetado de acuerdo con lo indicado en el Artículo 6º de esta regulación. A su vez, en los artículos 8º y 9º asigna a los fabricantes e importadores la responsabilidad de elaborar, revisar y actualizar las FDS.

    .row.p-5.mb-5.justify-content-between(style="background-color: #B3EFE4")
      .col-12.col-md-5
        p Cabe resaltar que la FDS es un documento que compila información técnica confiable de  la clasificación de peligros realizada en el producto químico, estableciendo orientaciones claras sobre su manejo, almacenamiento, transporte, eliminación, atención  en caso de incendios,  fugas y vertimientos, de primeros auxilios, uso de elementos de protección personal  y mecanismos de protección requeridos en áreas de trabajo, así como información relevante de las propiedades físicas y químicas, toxicológicas, eco toxicológicas, de reactividad, estabilidad y compatibilidad del producto, a través de un lenguaje claro, veraz y pertinente, de tal manera que se convierte en un referente de consulta obligatorio para el lector interesado en  entender e implementar medidas de mitigación y eliminación del riesgo de exposición indebida a un producto químico peligroso.
          br
          br
          | Es muy importante anotar que las FDS de los productos químicos son el insumo fundamental para que:
      .col-12.col-md-6
        img(src="@/assets/curso/figure-92.svg")

    .row.mb-4.d-flex
      .col-12.col-md-4
        img.w-25.mx-auto.mmbn4.img-height(src='@/assets/curso/figure-93.svg' alt='AvatarTop')
        p.px-5.py-4.color-primario-mas-claro.border-radius-c.mb-4.text-center
          span Empleadores y encargados de la seguridad y de la salud ocupacional cuenten con la información necesaria para adoptar las medidas de prevención y protección, que tienen por objeto minimizar los riesgos de los productos químicos en todas las etapas de su ciclo de vida.

      .col-12.col-md-4
        img.w-25.mx-auto.mmbn4.img-height(src='@/assets/curso/figure-94.svg' alt='AvatarTop')
        p.px-5.py-4.color-primario-mas-claro.border-radius-c.mb-4.text-center
          span Los servicios de emergencia puedan actuar de manera más eficaz en caso de accidentes.

      .col-12.col-md-4
        img.w-25.mx-auto.mmbn4.img-height(src='@/assets/curso/figure-95.svg' alt='AvatarTop')
        p.px-5.py-4.color-primario-mas-claro.border-radius-c.mb-4.text-center
          span Los trabajadores y consumidores manipulen los productos químicos de forma segura y responsable con el medio ambiente.

    a.mb-5.anexo(href="https://gqspcolombia.org/wp-content/uploads/2020/03/Onudi-Colombia_Digital_02.pdf" target="_blank")
      .anexo__icono
        img(src="@/assets/template/icono-link.svg")
      .anexo__texto
        p.text-size-14
          strong Enlace web. Para ampliar la información se recomienda
          | GQSP Colombia, (2017). Guía para la elaboración de fichas de datos de seguridad. Bogotá, Colombia. Hoyos Martha. Guía de comunicación de peligros basada en los criterios del Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos – SGA. Ministerio de Ambiente y Desarrollo Sostenible.

    .row.mb-4
      .col-12.col-md-6
        img(src="@/assets/curso/figure-100.svg")
      .col-12.col-md-6
        p.mb-4 Por otra parte, la información que contiene la FDS se ajusta a las recomendaciones establecidas en el SGA para la elaboración de la FDS, garantiza que el fabricante/ proveedor cuente con muchos de los soportes técnicos que son solicitados como evidencia para el registro, aprobación previa y comercialización de los productos químicos, requisito existente en la comercialización de productos químicos para algunos mercados internacionales (ONUDI, 2020).
          br
          br
          | La FDS es un documento compuesto por dieciséis secciones, según lo establece el anexo 4 del SGA, así:
        ul.lista-ul
          li
            i.lista-ul__vineta
            | Identificación del producto.
          li
            i.lista-ul__vineta
            | Identificación del peligro o peligros.
          li
            i.lista-ul__vineta
            | Composición/información sobre los componentes.
          li
            i.lista-ul__vineta
            | Primeros auxilios.
          li
            i.lista-ul__vineta
            | Medidas de lucha contra incendios.
          li
            i.lista-ul__vineta
            | Medidas que deben tomarse en caso de vertido accidental.
          li
            i.lista-ul__vineta
            | Manipulación y almacenamiento.
          li
            i.lista-ul__vineta
            | Controles de exposición/protección personal.
          li
            i.lista-ul__vineta
            | Propiedades físicas y químicas.
          li
            i.lista-ul__vineta
            | Estabilidad y reactividad.
          li
            i.lista-ul__vineta
            | Información toxicológica.
          li
            i.lista-ul__vineta
            | Información eco-toxicológica.
          li
            i.lista-ul__vineta
            | Información relativa a la eliminación de los productos.
          li
            i.lista-ul__vineta
            | Información relativa al transporte.
          li
            i.lista-ul__vineta
            | Información sobre la reglamentación.
          li
            i.lista-ul__vineta
            | Otras informaciones.

    p.mb-5 A continuación, se presenta una descripción general del contenido que debe tener cada numeral de las fichas de datos de seguridad.

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.px-4(titulo="Sección 1. Identificación del producto")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En esta sección puede consultar la siguiente información:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Identificador del SGA del producto.
            li
              i.lista-ul__vineta
              | Identificación del peligro o peligros.
            li
              i.lista-ul__vineta
              | Uso recomendado del producto químico y restricciones.
            li
              i.lista-ul__vineta
              | Datos del proveedor.
            li
              i.lista-ul__vineta
              | Número de teléfono para emergencias.

      .row.px-4(titulo="Sección 2. Identificación del peligro o peligros")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong Esta sección de consulta es crítica y, las conclusiones que aparecen allí deben ser coherentes con el resto de información presente en la FDS.

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Clasificación de la sustancia o mezcla (clases de peligros, categorías y subcategorías de peligros).
            li
              i.lista-ul__vineta
              | Elementos de etiqueta SGA: pictograma según SGA, palabra de advertencia, indicaciones de peligro y consejos de prudencia.
            li
              i.lista-ul__vineta
              | Otros peligros que no conducen a una clasificación o que no están cubiertos por el SGA. Cualquier información sobre peligros que no se tenga en cuenta en el SGA, por ejemplo, producto tóxico para abejas.

      .row.px-4(titulo="Sección 3. Composición e información sobre los componentes")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En esta sección es posible confirmar si el producto químico se trata de una sustancia pura o mezcla, adicionalmente conocer el número de componentes que aportan al peligro del producto químico y el rango en el que se presenta. Esta sección se encuentra compuesta por los siguientes numerales:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Sustancias puras: encontrará el nombre químico común o identificador SGA, indicando sección 1 número CAS, así como impurezas que aportan a la clasificación de peligros de la sustancia.
            li
              i.lista-ul__vineta
              | Mezcla: la mayoría de las veces encontrará los nombres de los componentes que aportan a los peligros que presenta el producto químico, sus números CAS y porcentaje de acuerdo con la fórmula peso/peso.

          p.justify-text Sin embargo, es permitido que exista una declaración escrita de que es información comercial confidencial (ICC), en este caso podrá constatar en la FDS el número de componentes peligrosos en fórmula, su porcentaje o rango de porcentaje.
            br
            br
            strong Los proveedores o fabricantes son responsables de   garantizar que la información consignada sea clara y coherente en todo el documento y, que indique dónde detallar la información sobre los peligros de cada uno de los componentes peligrosos relacionados en esta sección.

      .row.px-4(titulo="Sección 4. Primeros auxilios")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 En esta sección se describen los primeros auxilios que se deben realizar en el caso de presentarse un accidente en el que una persona quede lesionada, sin utilizar ni equipo médico ni administración de medicamentos (en algunos casos se puede referenciar el uso de antídotos o tratamientos especiales, pero esta información solo se relaciona dentro de las medidas a considerar durante la atención por el médico en el centro de urgencias).

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Descripción de primeros auxilios necesarios desglosados de acuerdo con la exposición del producto químico: inhalación, contacto con la piel, contacto con los ojos e ingestión.
            li
              i.lista-ul__vineta
              | Síntomas o efectos más importantes, agudos o retardados, en esta sección se relacionan los principales síntomas presentados durante la exposición del producto químico.
            li
              i.lista-ul__vineta
              | Indicación de la necesidad de recibir atención médica inmediata o tratamiento especial.

      .row.px-4(titulo="Sección 5. Medidas contra incendios")
        .col-12.mb-4.mb-md-0

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Medios de extinción apropiados y no apropiados.
            li
              i.lista-ul__vineta
              | Peligros específicos del producto químico.
            li
              i.lista-ul__vineta
              | Medidas especiales que deben tomar los equipos de lucha contra incendios: equipo protector especial y precauciones especiales para el personal de lucha contra incendios.

      .row.px-4(titulo="Sección 6. Medidas que deben tomarse en caso de vertido accidental")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En este apartado se consultan las medidas recomendadas para la atención de un derrame, fuga o pérdida de producto con el fin de prevenir o reducir al máximo las consecuencias en la búsqueda de protección de las personas, bienes, instalaciones y del medio ambiente; las cuales se componen por:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Precauciones personales, equipo protector y procedimiento de emergencia.
            li
              i.lista-ul__vineta
              | Precauciones relativas al medio ambiente.
            li
              i.lista-ul__vineta
              | Métodos y materiales para la contención y limpieza de vertidos.

      .row.px-4(titulo="Sección 7. Manipulación y almacenamiento")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong La consulta de esta sección brinda información muy importante sobre orientaciones y medidas de precaución a tener en cuenta durante la manipulación del producto químico y su almacenamiento. Esta sección se conforma por:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Precauciones que se deben tomar para garantizar una manipulación segura del producto.
            li
              i.lista-ul__vineta
              | Condiciones de almacenamiento seguro, incluidas la relación de cualquier incompatibilidad.

      .row.px-4(titulo="Sección 8. Controles de exposición y protección personal")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En esta sección se presentan medidas técnicas de control apropiadas para minimizar el riesgo de exposición a los peligros que presenta un producto químico tanto a trabajadores como al medio ambiente. Las conforman la descripción de:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Parámetros de control: se establecen límites de exposición a agentes biológicos.
            li
              i.lista-ul__vineta
              | Controles técnicos apropiados.
            li
              i.lista-ul__vineta
              | Medidas de protección individual, por ejemplo, elementos de protección personal.

      .row.px-4(titulo="Sección 9.  Propiedades físicas y químicas")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong Los datos de esta sección corresponden a la relación de propiedades físicas y químicas que presenta el producto químico; en el caso que la información presentada corresponda a componentes individuales de una mezcla, esto se debe indicar claramente. Las propiedades que pueden ser consultadas en esta sección son las siguientes:

          ol.lista-ol
            li
              span.text-bold a.
              | Estado físico.
            li
              span.text-bold b.
              | Color.
            li
              span.text-bold c.
              | Olor.
            li
              span.text-bold d.
              | Punto de fusión.
            li
              span.text-bold e.
              | Punto de ebullición.
            li
              span.text-bold f.
              | Infamabilidad.
            li
              span.text-bold g.
              | Límite de explosión, inferior.
            li
              span.text-bold h.
              | Límite de explosión, superior.
            li
              span.text-bold i.
              | Punto de inflamación.
            li
              span.text-bold j.
              | Temperatura de ignición espontánea.
            li
              span.text-bold k.
              | Temperatura de descomposición.
            li
              span.text-bold l.
              | pH.
            li
              span.text-bold m.
              | Viscosidad cinemática.
            li
              span.text-bold n.
              | Solubilidad en agua.
            li
              span.text-bold o.
              | Tasa de evaporación.
            li
              span.text-bold p.
              | Coeficiente de reparto n-octanol-agua.
            li
              span.text-bold q.
              | Presión de vapor.
            li
              span.text-bold r.
              | Densidad relativa.
            li
              span.text-bold s.
              | Densidad relativa del vapor.
            li
              span.text-bold t.
              | Características de las partículas.


      .row.px-4(titulo="Sección 10.   Estabilidad y reactividad")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En esta sección encontrará información del producto químico asociado a:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Reactividad.
            li
              i.lista-ul__vineta
              | Estabilidad química.
            li
              i.lista-ul__vineta
              | Posibilidad de reacciones peligrosas.
            li
              i.lista-ul__vineta
              | Condiciones que deben evitarse.
            li
              i.lista-ul__vineta
              | Materiales incompatibles.
            li
              i.lista-ul__vineta
              | Prodcutos de descomposición peligrosos.

      .row.px-4(titulo="Sección 11.  Información toxicológica")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong Esta sección es utilizada especialmente por profesionales de la salud, especialistas de higiene, salud y toxicólogos.

          a.mb-4.anexo(href="https://gqspcolombia.org/wp-content/uploads/2020/03/Onudi-Colombia_Digital_02.pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.text-size-14
                strong Para ampliar la información se recomienda consultar en el material complementario:
                br
                br
                | GQSP Colombia, (2017). Guía para la elaboración de fichas de datos de seguridad. Bogotá, Colombia. Hoyos Martha. Guía de comunicación de peligros basada en los criterios del Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos – SGA. Ministerio de Ambiente y Desarrollo Sostenible, p. 34.

          p.justify-text.mb-4
            strong Está compuesta por una subsección de:

          ul.lista-ul.mb-4
            li
              i.lista-ul__vineta
              | Información y datos toxicológicos:
              | En la que se presenta información toxicológica relevante para las diez clases de peligros para la salud, establecidos en el SGA:
          ol.lista-ol.mb-4
            li
              span.text-bold a.
              | Toxicidad aguda (para las tres vías de exposición: oral, dérmica y por inhalación).
            li
              span.text-bold b.
              | Corrosión/irritación cutánea.
            li
              span.text-bold c.
              | Lesiones oculares graves/ irritación ocular.
            li
              span.text-bold d.
              | Sensibilización respiratoria y cutánea.
            li
              span.text-bold e.
              | Mutagenicidad en células germinativas.
            li
              span.text-bold f.
              | Carcinogenicidad.
            li
              span.text-bold g.
              | Toxicidad para la reproducción.
            li
              span.text-bold h.
              | Toxicidad sistemática específica de órganos diana-exposición única.
            li
              span.text-bold i.
              | Toxicidad sistemática específica de órganos diana-exposición repetida.
            li
              span.text-bold j.
              | Peligros por aspiración.
          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Información sobre las vías probables de exposición (inhalación, ingestión, contacto con la piel y los ojos).

      .row.px-4(titulo="Sección 12.  Información eco-toxicológica")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong Esta sección sirve para evaluar los impactos ambientales en caso de que el producto químico sea liberado. Sirve para evaluar los mecanismos de tratamiento en caso de vertimiento o generación de desechos entre otras consideraciones. Incluye:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Ecotoxicidad (acuática y terrestre, cuando se disponga de información).
            li
              i.lista-ul__vineta
              | Persistencia y degradabilidad.
            li
              i.lista-ul__vineta
              | Potencial de bioacumulación.
            li
              i.lista-ul__vineta
              | Movilidad en suelo.
            li
              i.lista-ul__vineta
              | Otros efectos adversos.

      .row.px-4(titulo="Sección 13.  Información relativa a la eliminación de los productos")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong Esta sección proporciona información sobre los mecanismos de eliminación, el reciclado o la recuperación que son adecuados para el producto químico y su recipiente, para así evitar la liberación del producto químico en el medio ambiente. Está compuesto por la subsección denominada métodos de eliminación.

      .row.px-4(titulo="Sección 14.  Información relativa al transporte")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En esta sección se puede consultar información básica sobre la clasificación para el transporte del producto químico, dentro de la cual se encuentra:

          ul.lista-ul.mb-5
            li
              i.lista-ul__vineta
              | Número ONU.
            li
              i.lista-ul__vineta
              | Designación oficial de transporte de las Naciones Unidas.
            li
              i.lista-ul__vineta
              | Clase(s) relativas al transporte.
            li
              i.lista-ul__vineta
              | Grupo de embalaje o de envasado (si aplica).
            li
              i.lista-ul__vineta
              | Riesgos ambientales.
            li
              i.lista-ul__vineta
              | Transporte a granel con arreglo al anexo II de MARPOL 73/789 y al código IBC10.
            li
              i.lista-ul__vineta
              | Precauciones especiales para el usuario e información sobre cualquier precaución que ha de conocer o adoptar un usuario en relación con el transporte.

      .row.px-4(titulo="Sección 15.  Información sobre la reglamentación")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong En esta sección se puede consultar información relevante del producto químico no incluida previamente en la FDS, por ejemplo, si el producto químico o sus componentes están incluidos en el listado de control en alguno de los protocolos y convenios internacionales reconocidos (Protocolo de Montreal, Convenio de Rotterdam, Convenio de Estocolmo, solo por citar algunos ejemplos).

      .row.px-4(titulo="Sección 16.  Otras informaciones ")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4
            strong Proporcionar en esta sección cualquier información pertinente del producto químico no referenciado en alguna de las quince secciones anteriores, incluye información sobre las versiones y cambios que ha presentado la FDS, puede incluirse en esta sección el listado de aclaración de abreviaturas utilizadas, códigos de indicaciones de peligro y consejos de prudencia, rombos de seguridad de otros sistemas no reconocidos por el SGA, disclaimer de descargo de la responsabilidad del fabricante/ proveedor.
            br
            br
            strong La ficha de datos de seguridad es un documento vivo dentro de las organizaciones, su accesibilidad debe estar garantizada a todo el personal que dentro de la empresa está en contacto con el producto químico.
            br
            br
            strong El documento debe corresponder a una versión actual y vigente; los cambios que presente deben ser debidamente comunicados, con el fin de garantizar que se realicen los ajustes correspondientes en los procesos.
            br
            br
            strong Es deber de los empresarios establecer los mecanismos requeridos para su acceso y consulta libre y, de los empleados conocer su contenido y seguir las recomendaciones presentes en ella, para así encaminar acciones en pro de un ambiente de trabajo seguro.

    #t_3_2.titulo-segundo
      .h4 3.2 Secciones relevantes e interpretación de la información contenida en dichas secciones

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/figure-96.svg', alt='Simbolos')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Los beneficios que ofrece tener una ficha de datos de seguridad en el SGA son variados y pueden evidenciarse desde varios puntos de vista; en función del cumplimiento de estándares de calidad y regulatorios, también en el comercio de productos químicos y para la protección de la salud humana y el medio ambiente. Este último punto de vista es el que se destacará en este curso, que está orientado a la aplicación del SGA en los puestos de trabajo.   Por lo anterior, se presentan como secciones con información más relevante las siguientes:

    .row.mb-5
      .col-12.col-md-4.d-flex
        .cajon.color-primario.p-4.mb-4
          p
            strong Identificación del producto
            br
            br
            | Resulta de innegable importancia conocer tanto el nombre del producto químico como sus sinónimos dadas las variaciones que se presentan al identificar un mismo producto, estos datos son presentados en la sección 1 de las FDS.
            br
            br
            | De otro lado, en esta sección también se encuentra la recomendación sobre el uso del producto químico y sus restricciones, y finalmente, también se halla en esta el nombre y contacto del proveedor.

      .col-12.col-md-8.d-flex
        img(src="@/assets/curso/figure-97.svg")

    .h5 Identificación del peligro o peligros

    .row.mb-5
      .col-12.col-md-7.d-flex
        p En la sección 2 de las FDS se encuentra la clasificación de la sustancia o mezcla, elementos de la etiqueta SGA y otros peligros que no conducen a una clasificación o que no están cubiertos por el SGA. La información presentada en este numeral es sintética y muy concreta, lo cual permite obtener una visión general y rápida tanto de las características del producto químico como de las principales recomendaciones para su uso seguro.
          br
          br
          | Otros aspectos como primeros auxilios y medidas de lucha contra incendios
          br
          | Medidas que deben tomarse en caso de vertido accidental
          br
          br
          | Las secciones 4, 5 y 6 de las FDS muestran los procedimientos recomendados para intervenir en casos de emergencias con productos químicos. En estas secciones se da información de manera clara y sencilla, a fin de que un manipulador promedio pueda prestar la ayuda inicial en caso de ser requeridos los primeros auxilios, la contención de conatos de incendio y las acciones a tomar en caso de un vertimiento accidental.

      .col-12.col-md-5.d-flex
        img(src="@/assets/curso/figure-98.svg")

    .row.mb-5
      .col-12.col-md-5.d-flex
        img(src="@/assets/curso/figure-99.svg")
      .col-12.col-md-7.d-flex
        p
          strong Manipulación y almacenamiento
          br
          br
          | La sección 7 es específica en recomendar a los manipuladores de productos químicos, las condiciones especiales en el uso del producto e informa sobre las características requeridas en el almacenamiento del producto (temperatura, humedad, presencia de luz solar, etc.) así como las posibles incompatibilidades con otros productos químicos.
          br
          br
          strong Controles de exposición/protección persona
          br
          br
          | La sección 8 hace recomendaciones sobre el uso de elementos de protección personal y otras medidas de protección para los usuarios de los productos químicos, de acuerdo con los peligros identificados.
          br
          br
          strong Información relativa a la eliminación de los productos
          br
          br
          | En la sección 13 de las FDS se dan las recomendaciones referentes a la eliminación de residuos de productos químicos, incluyendo los envases de estos. Esta información cobra gran importancia en el ciclo de vida de los productos debido a la susceptibilidad que se genera, tanto a los usuarios como al medio ambiente, porque las medidas de manejo seguro suelen relajarse, pensando (equivocadamente) que se ha terminado de usar el producto.

    .h5.mb-4 Información relativa al transporte
    p La sección 14 ofrece información a transportistas, encargados de despachar y recibir productos químicos, y a los encargados de almacenes de productos químicos, dado que relaciona el tipo de rotulación de los vehículos y de la misma carga en embalajes.
      br
      br
      | A pesar de haber resaltado las secciones descritas en este apartado como relevantes en la información contenida en las FDS, debe aclararse que cada una de las secciones de las FDS son de alta utilidad, dependiendo de la circunstancia y de la etapa en el ciclo de vida de los productos químicos. Por lo cual, se debe considerar que las FDS son documentos fundamentales que deben estar disponibles en los puestos de trabajo y deben ser consultadas frecuentemente durante todo el ciclo de vida de los productos químicos, incluyendo las etapas previas al uso de cada producto químico.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
