<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .h3 Fichas de datos de seguridad (FDS)

    #t_3_1.titulo-segundo
      .h4 3.1 Formato y contenido

    img.mb-5(src='@/assets/curso/figure-91.svg', alt='Introduccion 1')

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
