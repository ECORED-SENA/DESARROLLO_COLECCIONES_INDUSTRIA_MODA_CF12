<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas para el desarrollo de patrones
    figure.mb-5
      img(src='@/assets/tema1/otras/img-12.png', alt='Técnicas de interpretación de modelos')

    .cajon-b.fnd-3-.p-3
      p.mb-5 Para la elaboración de patrones (generalmente en tejido plano), de prendas ceñidas al cuerpo o entalladas, se emplean las pinzas, siendo estas las que cierran o recogen la tela hacia el interior del producto, logrando generar volúmenes hacía su vértice y entallar en sus extremos. Los patrones en los que más se emplean las pinzas son aquellos en los que se resalta la silueta de la persona que los usará, por ejemplo: el corpiño y la blusa básica o camisa femenina, la falda femenina, el vestido básico y algunas prendas masculinas, como la camisa slim fit, de las cuales se parte como básico para diferentes desarrollos.   

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center  
          .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/tema1/otras/img-13.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0

                    p Se invita a visualizar el Anexo_1_HerramientasDesarrolloPatrones y estudiarlo responsablemente. En este se podrán reconocer y asimilar las amplias posibilidades y herramientas que Optitex tiene para patronistas y emprendedores de la confección. Se debe tener presente que el análisis serio de este documento, favorecerá el recorrido por los puntos siguientes de este componente formativo.
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_HerramientasDesarrollo Patrones.docx')" target="_blank")
                      span Ver más
                      i.fas.fa-link

      



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
