<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Sistema de ploteo
       
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        .cajon-b.fnd-3-.p-3
          p El plotter es un dispositivo periférico de salida, por medio del cual se imprimen los patrones; se emplea tanto para prendas unitarias (muestras), como para los sets de tallas o lotes de producción. Funciona por medio de un cabezal de impresión, el cual se desliza de un lado al otro sobre la superficie de impresión, se caracteriza por ser de gran formato, lo que significa que las dimensiones de ancho son de entre 1,6 m y 2.2 m. Se alimenta de un rollo de papel (generalmente bond) que se desplaza (enrollándose) para lograr impresiones del largo deseado (el cual dependerá de la mesa de corte a emplear).
      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-27.png') 

    p.mb-5 A continuación, se mostrarán algunos aspectos que se deben tener en cuenta, referentes a las funcionalidades y beneficios del uso del plotter en los procesos de patronaje, ver figuras 76, 77, 78 y 79.

  .container.tarjeta.tarjeta--blanca
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10.align-self-center.img-c
        br
        .row.justify-content-around.align-items-center  
          TabsC.color-primario.mb-5
            .py-3.py-md-4.fnd-6(titulo="Varios tipos de patrones")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Varios tipos de patrones
                  p En el plotter se logra imprimir patrones individuales, nidos de tallas (para verificación de medidas o del escalado) y trazos para producción. Para imprimir un patrón desde el <em>software</em>, se va al menú archivo / plotear (o el atajo Ctrl + l).
                .col-md-6.px-5
                  p.r-n.mb-3 #[strong Figura 76.] Plotear
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 90 A.png')
                  figcaption Nota. Optitex  (2020).

            .py-3.py-md-4.fnd-6(titulo="Instalación requerida")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Instalación requerida
                  p Cabe resaltar lo importante y necesario de tener el plotter instalado en el equipo a trabajar.
              
                .col-md-6.px-5
                  p.r-n.mb-3 #[strong Figura 77.] Plotear
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 90 B.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Selección autónoma de piezas por plotear")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Selección autónoma de piezas por plotear
                  p Se puede plotear la totalidad de las piezas o las piezas seleccionadas. De igual manera el cuadro de dialogo presenta la opción de plotear el nido, el cual es una impresión de todas las tallas en posición del escalado.
              
                .col-md-6.px-5
                  p.r-n.mb-3 #[strong Figura 78.] Nido
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 91.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Trazo del lote")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Trazo del lote
                  p O desde el módulo de <b>marker</b> (trazo), se puede imprimir el trazo del lote.
              
                .col-md-6.px-5
                  p.r-n.mb-3 #[strong Figura 79.] Ejemplo de trazo
                  figure
                    img.img-450.img-c(src='@/assets/tema1/otras/img-28.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Para no olvidar")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Para no olvidar
                  p Con el uso del ploter o cualquiera de las herramientas posibles en el proceso de patronaje, se podría decir que el desarrollo de modelos no tiene límites, pues la exploración del patronista le lleva donde su imaginación y creatividad le permitan.
              
                .col-md-6.px-5
                  figure
                    img.img-450.img-c(src='@/assets/tema1/otras/img-29.svg')


  .container.tarjeta.tarjeta--blanca.p-4.p-md-5                    
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center 
          .cajon.color-secundario.ttb1.p-3.mb-5
            .row.justify-content-around.align-items-center.px-4
              .col-2
                figure.mb-2
                    img.img-c.img-130(src='@/assets/tema1/otras/img-30.svg')        
              .col-10         
                p.mb-2 Para profundizar aspectos importantes de los diferentes procesos abordados en este componente formativo, se le sugiere visitar los vídeos publicados en:
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/channel/UClYOLBi73tla3Civb2SE5MA" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.mb-0 #[strong Enlace web.] Canal de Lizandro: 
                    p Patronaje sistematizado
                  

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
