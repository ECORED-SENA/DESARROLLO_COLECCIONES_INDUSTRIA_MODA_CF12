<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-around.align-items-center.align-self-center
      .col-lg-3.col-md-4
        figure.mb-5.img-c
          img.img-c.img-290(src="@/assets/tema1/img-intro.svg", alt="Introducción")

      .col-lg-9.col-md-8
        p El mundo de la confección y la creación de innovadores modelos en las prendas de vestido es siempre cambiante, pero hay un elemento que, por más cambios que el mercado, las épocas y las dinámicas sociales impongan, siempre será vigente: la tecnificación de los procesos de creación y diseño, acompañada de la visión creativa de los patronistas. 
        p.mb-5 Los talentos de los patronistas se ven apoyados y potenciados, cada vez más, por herramientas tecnológicas que dan fuerza a sus creaciones y les ayudan a responder a las demandas crecientes del medio. A través del estudio de este componente, el patronista y cualquier emprendedor de las confecciones y la moda, tendrán un elemento más de acercamiento al éxito que, en este campo, está reservado para pocos.


    
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
