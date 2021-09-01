<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3.text-in Introducción

    .row
      .col-auto
        img(src="@/assets/curso/figure-101.svg")
      .col
        p El Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos nace como una iniciativa global de armonización en la forma en que  se clasifican y comunican  los peligros que presenta un producto químico, pilar que es fundamental en el desarrollo de una estrategia de gestión segura de productos químicos entre países, nace como un  compromiso establecido por los países y organizaciones que hacen parte del Sistema de Naciones Unidas que participaron en el desarrollo de la agenda del Programa  21 de Río de Janeiro realizado en 1992, cuya primera edición sale en el año 2003, la versión del año 2019 corresponde a la versión octava y frente a lo cual Colombia adopta a través del decreto 1496 de 2018, la versión sexta.
          br
          br
          | Este sistema de clasificación y etiquetado de peligros de un producto químico comprende los siguientes elementos:
          br
          br
          | 1. Criterios armonizados para clasificar peligros de productos químicos con relación a sus peligros físicos para la salud y para el medio ambiente.
          br
          br
          | 2. Establece elementos armonizados de comunicación de peligros en etiquetas y fichas de datos de seguridad (FDS) de los productos químicos.
          br
          br
          | En este componente formativo se presenta el SGA desde una perspectiva práctica, de uso en el puesto de trabajo, en la que encuentra los fundamentos necesarios para comprender la información comunicada a través de FDS y etiquetas requeridas para la correcta gestión de los productos químicos durante su ciclo de vida, sobre todo en lo que corresponde a sus etapas de manufactura, manipulación y almacenamiento.
          br
          br
          | En otras etapas del ciclo complementa la información solicitada por otros referentes, por ejemplo, a nivel de transporte la información y orientaciones establecidas por el Reglamento Modelo de Naciones Unidas para el transporte de mercancías peligrosas (conocido como libro naranja) y los marcos internacionales y nacionales aplicables a la gestión de residuos peligrosos.

    .background-primario(style="height: 80px")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
