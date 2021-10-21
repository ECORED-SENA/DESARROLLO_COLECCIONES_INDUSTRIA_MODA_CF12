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
      p.mb-5 Optitex es un software muy amplio, con múltiples opciones para que los patronistas exploren, avancen y desplieguen todo su potencial creativo en los procesos de patronaje. Dentro de las múltiples herramientas y opciones que ofrece, se halla el conjunto principal de herramientas para el desarrollo y transformación de patrones; todas ellas, al combinarlas entre sí y con las vistas hasta este punto, aumentan las posibilidades de operación, creación, patronaje, desarrollo de modelos, optimización de tiempos, espacios, materiales, entre otros beneficios.   

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

                    p Se invita a visualizar el anexo "Herramientas de Optitex para el desarrollo de patrones" y estudiarlo responsablemente. En este se podrán reconocer y asimilar las amplias posibilidades y herramientas que Optitex tiene para patronistas y emprendedores de la confección. Se debe tener presente que el análisis serio de este documento, favorecerá el recorrido por los puntos siguientes de este componente formativo.
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/moda - CF12 anexo.pdf')" target="_blank")
                      span Ver más
                      i.fas.fa-file-download

      



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
