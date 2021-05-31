<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Etiquetas SGA

    img.mb-5(src='@/assets/curso/figure-74.svg', alt='Introduccion 1')

    p.mb-5 Uno de los principales propósitos del SGA es comunicar los peligros de los productos químicos y para eso utiliza medios a través de los cuales los manifiesta a los usuarios de los productos químicos, esta información es importante tenerla en cuenta en su manipulación, almacenamiento, transporte y eliminación, con la identificación de los peligros que presenta, los datos de proveedor, los componentes peligrosos que lo constituyen y las medidas primarias a seguir en caso de un accidente, además de otros datos de utilidad.

    .row.mb-5
      .col-12.col-md-6
        img(src="@/assets/curso/figure-75.svg")
      .col-12.col-md-6
        p Los medios de comunicación de peligro que utiliza el SGA son dos: la etiqueta, que es un conjunto de elementos de información escritos, impresos o gráficos relativos a un producto peligroso, elegidos debido a su pertinencia para el sector o sectores de los que se trate, que se encuentra en el recipiente del producto químico, en el embalaje exterior (SGA, revisión sexta).
          br
          br
          | El otro medio de comunicación es la ficha de datos de seguridad (FDS), que es un documento que contiene la información más detallada sobre el producto químico, y que debe cumplir una normatividad específica (MinAmbiente, 2017).

    #t_2_1.titulo-segundo
      .h4 2.1 Elementos de una etiqueta SGA

    .row.mb-5
      .col-12.col-md-6
        p.mb-4 Las etiquetas juegan un papel importante en la comunicación de peligros y en la información para el uso seguro del producto químico, por ser el método de mayor accesibilidad para los usuarios y porque está presente en todas las fases del ciclo de vida de los productos químicos.
          br
          br
          | El Sistema Globalmente Armonizado (SGA) en el capítulo 1.4 presenta los requerimientos mínimos recomendados en el diseño de etiquetas, buscando la optimización en la comunicación de peligros para cada producto químico.
          br
          br
          | Los elementos de comunicación dentro de la etiqueta SGA son los siguientes:
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Pictograma.
          li
            i.fas.fa-check
            | Palabra de advertencia.
          li
            i.fas.fa-check
            | Indicación de peligro.
          li
            i.fas.fa-check
            | Consejos de prudencia.
          li
            i.fas.fa-check
            | Identificador del producto.
          li
            i.fas.fa-check
            | Información sobre la identificación del proveedor.
          li
            i.fas.fa-check
            | Información complementaria.
      .col-12.col-md-6
        img.mb-4(src="@/assets/curso/figure-76.svg")
        .p-3.rounded.color-acento-contenido-p.text-white.fw-bold(style="font-size: 14px")
          | Modelo de etiqueta SGA. Fuente: Comisión Económica de las Naciones Unidad para Europa (UNECE), (2015). Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA). Sexta edición revisada. Naciones Unidas. Nueva York y Ginebra.

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.px-4(titulo="Identificación del producto químico")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 En toda etiqueta de un producto químico debe aparecer el nombre del producto, que debe corresponder al establecido en la FDS.
            br
            br
            | Cuando el producto químico se encuentre incluido en la reglamentación modelo de Naciones Unidas para el transporte de mercancía peligrosa, su recipiente debe presentar la comunicación de los peligros para el transporte, según la información oficial de la Organización de Naciones Unidas (ONU) establecida para los productos químicos.

          img.px-5.mb-3(src='@/assets/curso/figure-77.svg', alt='Texto que describa la imagen')

      .row.px-4(titulo="Pictograma")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 Es el elemento gráfico que representa los peligros asociados a un producto químico. En la etiqueta aparecerán tantos pictogramas como sean necesarios de acuerdo con los peligros identificados, clasificados para el producto químico.

      .row.px-4(titulo="Palabras de advertencia")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 Las palabras de advertencia consideradas en el SGA para indicar el grado relativo de gravedad de un peligro son:
            br
            br
            | Peligro. Utilizada en las categorías más graves de peligro (por lo general 1 y 2).
            br
            br
            | Atención. Utilizada en las categorías de peligro de menor gravedad como mecanismo de advertencia para el usuario del producto.
            br
            br
            | En caso de existir más de un peligro para el mismo producto químico se indica siempre la palabra advertencia, que comunica el mayor grado de peligro en el producto.


      .row.px-4(titulo="Indicaciones de peligro")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 Estas indicaciones son frases que describen los peligros según su clasificación; las etiquetas de los productos que tengan más de un peligro deben contener una indicación adecuada para cada categoría de peligro.
            br
            br
            | El orden y ubicación dentro de la etiqueta de esta información se recomienda que esté agrupada como un solo bloque junto con la palabra advertencia y pictograma; la posición es definida por el fabricante, garantizando su adecuada lectura y, las dimensiones de los textos y las posiciones están abiertas para ser definidas por la autoridad competente.


      .row.px-4(titulo="Consejos de prudencia (frases de precaución)")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 Es una frase que describe las medidas destinadas a minimizar o evitar los efectos adversos de los peligros físicos para la salud y el ambiente.
            br
            | El objetivo de los consejos de prudencia es promover el uso correcto de los productos químicos peligrosos.
            br
            | En el anexo 3 del SGA se puede encontrar una relación detallada de los consejos de prudencia recomendados dentro de la etiqueta para cada categoría de peligro.


      .row.px-4(titulo="Identificación del fabricante o proveedor")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 En la etiqueta debe figurar como mínimo el nombre, la dirección, ciudad y el número de contacto del fabricante o proveedor del producto químico.

      .row.px-4(titulo="Información complementaria")
        .col-12.mb-4.mb-md-0
          p.justify-text.mb-4 La información complementaria es aquella que figura en un envase de un producto químico, pero que no está armonizada, no es obligatoria ni está especificada en el SGA. En algunos casos puede tratarse de información requerida por una autoridad competente o de información complementaria que se facilita a discreción del fabricante/ proveedor.
            br
            br
            | La información complementaria no puede ir en contra de la información normalizada sobre los peligros del producto químico. Se permite el uso de logos institucionales o el uso de colores, siempre y cuando deje suficientemente espacio y visibilidad a la información mínima requerida por el SGA (MinAmbiente, 2017).

    #t_2_2.titulo-segundo
      .h4 2.2 Etiquetado de acuerdo con el tipo de embalaje

    img.mb-5(src='@/assets/curso/figure-78.svg', alt='Introduccion 1')

    p.mb-5 Aunque el Sistema Globalmente Armonizado (SGA) no reglamente un formato o estilo para la elaboración de las etiquetas, si hace sugerencias sobre la disposición de algunos de sus elementos, tales como la ubicación en bloque de pictogramas de peligro, la palabra advertencia y las indicaciones de peligro, que deberán estar lo más cerca posibles entre sí dentro de la etiqueta. Por lo demás, estará a disposición del fabricante el diseño de la etiqueta, con excepción de ciertos productos químicos que puedan estar reglamentados por autoridades competentes.

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/figure-79.svg', alt='Simbolos')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Para Colombia se considera en el proyecto reglamentario del SGA en puestos de trabajo (resolución en proceso de aprobación por el Ministerio del Trabajo y el Ministerio de Salud y Protección Social en el momento de desarrollo de este material), que establece las dimensiones de la etiqueta y textos, información contenida en la tabla 4 de dicho reglamento sobre el tamaño de la etiqueta para envases con productos químicos con clasificación de peligros. En cualquier caso, se debe probar la legibilidad de la información, de acuerdo con el tamaño, cantidad de información y calidad de la impresión.

    .cajon.color-primario.p-4.mb-4
        p En dicha resolución se establece que en etiquetas para envases pequeños de menos de 30 mililitros, el envase registrará como mínimo el nombre del producto y se podrán usar métodos alternativos de etiquetado en el lugar de trabajo (uso y almacenamiento), insertos o cualquier otra alternativa que garantice que, de manera permanente la información quede en un medio impreso, para que el personal tenga acceso a la información de la etiqueta de todos los productos que cuentan con la misma composición (Artículo 11 del proyecto reglamentario de normatividad del SGA en puestos de trabajo).

    .row.justify-content-center
      .col-10
        .tabla-a.color-acento-contenido.mb-5
          table
            caption
            thead
              tr
                th Capacidad del envase
                th Dimensiones de la etiqueta (en milímetros)
                th Dimensiones del pictograma (en milimetros)
            tbody
              tr
                td Hasta 3 litros
                td Si es posible, al menos 52x74
                td No menos de 10 x 10. Si es posible, al menos 16x 16
              tr
                td Más de 3 litros, pero sin exceder de 50 litros
                td Al menos 74 x 105
                td al menos 23 x 23
              tr
                td Más de 50 litros, pero sin exceder de 500 litros
                td Al menos 105 x 148
                td al menos 32 x 32
              tr
                td Más de  500 litros
                td Al menos 148 x 210
                td al menos 46 x 46

    SlyderB.mb-5(:datos="datosSlyder")

    #t_2_3.titulo-segundo
      .h4 2.3 Interpretación de la información de la ONU vs. SGA

    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        p.justify-text (Comunicación de peligros reglamentación modelo Naciones Unidas para el transporte de mercancía peligrosa y SGA).
          br
          br
          | Las etiquetas de los productos químicos peligrosos deben comunicar información relevante y asociada a los peligros que presenta el producto químico durante su ciclo de vida incluido el transporte, en este último frente al reglamento modelo de Naciones Unidas para el transporte de mercancía peligrosa, también conocido como libro naranja, establece los criterios para la clasificación y comunicación de peligros para el transporte  y, complementa la información de los productos químicos que se comunica en la etiqueta por parte del SGA.
          br
          br
          | Dado que Colombia ha adoptado ambos modelos SGA (Decreto 1496 de 2018) y reglamento modelo para el transporte de mercancías peligrosas (Decreto 1609 de 2002) se deben considerar ambos sistemas en la elaboración de la etiqueta de un producto químico, según corresponda.
          br
          br
          | Los dos sistemas de clasificación y comunicación de peligros (libro naranja y libro púrpura) aunque son complementarios, presentan ciertas particularidades propias, relacionadas con la información que suministran y con el público al que va dirigido dicha información.
      .col-md-4
        img.px-4(src='@/assets/curso/figure-82.svg', alt='Nota. MinAmbiente (s.f.)')

    .row.mb-5
      .col-md-4
        img.px-4(src='@/assets/curso/figure-83.svg', alt='Nota. MinAmbiente (s.f.)')
      .col-md-8.mb-4.mb-md-0
        p.justify-text En el caso del transporte de mercancías peligrosas (libro naranja) se debe comunicar información clave para la atención de una emergencia generada durante el transporte, por lo que los peligros relacionados con efectos adversos por exposición crónica no son relevantes en este sistema. Por el contrario, dicha información sí debe ser considerada cuando la exposición es continua a un producto químico (libro púrpura), como ocurre en el SGA.
          br
          br
          | La comunicación de los peligros para el transporte de mercancías peligrosas, tanto a nivel de etiquetado como de marcado, debe siempre ser visible durante el transporte (cumpliendo las orientaciones presentes en el “Transporte de mercancías peligrosas, reglamentación modelo”, Ginebra, diciembre de 2005, Organización de las Naciones Unidas).
          br
          br
          | En el caso de un embalaje/envase combinado, la unidad de embalaje es la que debe presentar dicho marcado y etiquetado, y en el caso de un producto químico contenido en un envase simple, esta información debe incluirse en la etiqueta del envase, junto con las consideraciones establecidas por el SGA.

    .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center.mb-5
      .h4.justify-text.px-4.pt-4 Con respecto al uso de pictogramas para aquellas categorías de peligro que presentan tanto pictograma para transporte como pictograma SGA se colocará en la etiqueta el primero, lo que permitirá comunicar el peligro que presenta para el transporte (igual que la otra información clave solicitada en el marcado y etiquetado dentro del libro naranja como la designación oficial y el número ONU).

    .h5 A continuación, se presentan algunos ejemplos

    TabsA.color-acento-contenido.mb-5
      .tarjeta(titulo="Ejemplo 1")
        .p-3.color-tarjeta-rojo-claro.mb-4
          .p-3(style="border: 2px solid white")
            .row.mb-5
              .col-12.col-md-6
                p.mb-4.fw-bold Ejemplo 1: embalaje/envase combinado para un líquido inflamable de categoría 2.
                ul.lista-ul--color.mb-4
                  li
                    i.fas.fa-check
                    | Embalaje/envase exterior: caja con una etiqueta de transporte para líquidos inflamables*.
                  li
                    i.fas.fa-check
                    | Embalaje/envase interior: botellas de plástico con una etiqueta SGA, advirtiendo el peligro**.
                .row.justify-content-end
                  .col-4
                    img(src='@/assets/curso/figure-85.svg', alt='Texto que describa la imagen')
              .col-12.col-md-6
                img(src='@/assets/curso/figure-84.svg', alt='Texto que describa la imagen')

        .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center
          .h5.justify-text.px-4.pt-4 En los embalajes/envases exteriores solo se requieren las marcas y etiquetas de las Naciones Unidas para el transporte.
            br
            br
            | ** En lugar del pictograma del SGA que figura en la etiqueta de los embalajes/envases interiores puede usarse un pictograma de líquido inflamable del modo indicado en las “Recomendaciones relativas al transporte de mercancías peligrosas, reglamentación modelo”.

      .tarjeta(titulo="Ejemplo 2")
        .p-3.color-tarjeta-rojo-claro.mb-4
          .p-3(style="border: 2px solid white")
            .row.mb-5
              .col-12.col-md-6
                p.mb-4.fw-bold Ejemplo 2: embalaje/envase combinado para un producto con toxicidad específica de órganos diana categoría 1 y que es un líquido inflamable de categoría 2.
                ul.lista-ul--color.mb-4
                  li
                    i.fas.fa-check
                    | Embalaje/envase exterior: caja con una etiqueta de transporte para líquidos inflamables*.
                  li
                    i.fas.fa-check
                    | Embalaje/envase interior: botellas de plástico con una etiqueta SGA, advirtiendo el peligro**.
                .row.justify-content-end
                  .col-4
                    img(src='@/assets/curso/figure-85.svg', alt='Texto que describa la imagen')
              .col-12.col-md-6
                img(src='@/assets/curso/figure-86.svg', alt='Texto que describa la imagen')

        .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center
          .h5.justify-text.px-4.pt-4 * En los embalajes/envases exteriores solo se requieren las marcas y etiquetas de las Naciones Unidas para el transporte.
            br
            br
            | ** En lugar del pictograma del SGA que figura en la etiqueta de los embalajes/envases interiores puede usarse un pictograma de líquido inflamable del modo indicado en las “Recomendaciones relativas al transporte de mercancías peligrosas, reglamentación modelo”.


      .tarjeta(titulo="Ejemplo 3")
        .p-3.color-tarjeta-rojo-claro.mb-4
          .p-3(style="border: 2px solid white")
            .row.mb-5
              .col-12.col-md-6
                p.mb-4.fw-bold Ejemplo 3: embalaje/envase combinado para un producto irritante cutáneo de categoría 2 e irritante ocular de categoría 2A.
                ul.lista-ul--color.mb-4
                  li
                    i.fas.fa-check
                    | Embalaje/envase exterior: caja que no necesita etiqueta para el transporte.
                  li
                    i.fas.fa-check
                    | Embalaje/envase interior: botellas de plástico con una etiqueta SGA, advirtiendo el peligro.
                .row.justify-content-end
                  .col-4
                    img(src='@/assets/curso/figure-85.svg', alt='Texto que describa la imagen')
              .col-12.col-md-6
                img(src='@/assets/curso/figure-87.svg', alt='Texto que describa la imagen')

        .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center
          .h5.justify-text.px-4.pt-4 Algunas autoridades competentes pueden requerir una etiqueta SGA en el embalaje/envase exterior a falta de una etiqueta para el transporte.

      .tarjeta(titulo="Ejemplo 4")
        .p-3.color-tarjeta-rojo-claro.mb-4
          .p-3(style="border: 2px solid white")
            .row.mb-5
              .col-12.col-md-6
                p.mb-4.fw-bold Ejemplo 4: embalaje/envase simple (bidones de 200 litros) para un líquido inflamable de categoría 2.
            img(src='@/assets/curso/figure-88.svg', alt='Texto que describa la imagen')

        .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center
          .h5.justify-text.px-4.pt-4 Nota:	la etiqueta SGA, el pictograma y las marcas del líquido inflamable requeridos por las “Recomendaciones relativas al transporte de mercancías peligrosas, reglamentación modelo” pueden presentarse también de forma combinada.


      .tarjeta(titulo="Ejemplo 5")
        .p-3.color-tarjeta-rojo-claro.mb-4
          .p-3(style="border: 2px solid white")
            .row.mb-5
              .col-12.col-md-6
                p.mb-4.fw-bold Ejemplo 5: embalaje/envase simple para un producto con toxicidad específica de órganos diana categoría 1 y que es un líquido inflamable de categoría 2.
            img(src='@/assets/curso/figure-89.svg', alt='Texto que describa la imagen')

        .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center
          .h5.justify-text.px-4.pt-4 Nota:	la etiqueta SGA, el pictograma y las marcas del líquido inflamable requeridos por las “Recomendaciones relativas al transporte de mercancías peligrosas, reglamentación modelo” pueden presentarse también de forma combinada.

      .tarjeta(titulo="Ejemplo 6")
        .p-3.color-tarjeta-rojo-claro.mb-4
          .p-3(style="border: 2px solid white")
            .row.mb-5
              .col-12.col-md-6
                p.mb-4.fw-bold Ejemplo 6: embalaje/envasado simple para un producto irritante cutáneo de categoría 2 e irritante ocular de categoría 2A.
            img(src='@/assets/curso/figure-90.svg', alt='Texto que describa la imagen')

        .cajon.cajon_with_square_red.color-primario.p-4.d-flex.align-items-center.justify-content-center
          .h5.justify-text.px-4.pt-4 Nota:	la etiqueta SGA, el pictograma y las marcas del líquido inflamable requeridos por las “Recomendaciones relativas al transporte de mercancías peligrosas, reglamentación modelo” pueden presentarse también de forma combinada.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Envases y embalajes',
        texto:
          'Dado que en el tema de etiquetado se recurre frecuentemente a hablar de envases y embalajes, es necesario establecer una diferencia entre estos dos.<br><br>Se define como envase o empaque primario un contenedor que está en contacto directo con un producto químico y que sirve para contenerlo, almacenarlo, dosificarlo, etc.<br><br>Un embalaje es un empaque que puede contener uno o varios envases y tiene como propósito proteger el envase y su contenido durante procesos de almacenamiento y transporte. Este sistema es también conocido como sistema de embalaje/envase combinado.',
        imagen: require('@/assets/curso/figure-80.svg'),
      },
      {
        titulo: 'Envases y embalajes',
        texto:
          'Un ejemplo de este sistema es una caja con botellas de acetonitrilo (solvente utilizado en laboratorios de ensayo), el envase será cada botella que contiene acetonitrilo y el empaque corresponderá a la caja.<br><br>Se presentan casos en los que el envase cumple funciones de embalaje de producto, por ejemplo, un bidón de producto químico de 200 litros, en el cual no es factible el uso de un embalaje adicional aparte, este sistema se considera de embalaje/envase simple.',
        imagen: require('@/assets/curso/figure-81.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
