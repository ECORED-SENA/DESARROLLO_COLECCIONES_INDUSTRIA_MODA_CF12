<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Tableta digitalizadora: digitalización de piezas
    p La tableta digitalizadora o tablero digitalizador, es un dispositivo periférico de entrada, ver figura 75, por medio del cual se pueden digitalizar (ingresar al sistema) los patrones previamente realizados en papel.
    figure.mb-5
      img(src='@/assets/tema1/otras/img-26.png', alt='Tableta digitalizadora: digitalización de piezas')
    p.mb-5 Se pueden conocer algunos aspectos importantes sobre la herramienta digitalizar. Se debe tener presente que, en la actualidad, los procesos de diseño, corte, confección y patronaje, se tecnifican más y más, como respuesta a las necesidades emergentes del mundo de la moda y las nuevas costumbres de las sociedades.
    .row.justify-content-around.align-items-center
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-35.svg", alt="alt").class          
          .crd_01__txt
            h4 Seguir la línea de contorno del patrón
            p Para digitalizar los patrones, se fijan a la superficie de la mesa y con el cursor del ratón (mouse) se va siguiendo la línea de contorno del patrón, y según el requerimiento de entrada se hace clic sobre las teclas del mouse.
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-36.svg", alt="alt").class          
          .crd_01__txt
            h4 Digitalizar: requerimientos de entrada
            p Si se requiere un punto recto se marca el 1, si se requiere curvo se marca el 3, si es escalado se marca el número 4 y así sucesivamente para cada comando que se indica en el cuadro de diálogo de la herramienta digitalizar.  
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-37.svg", alt="alt").class          
          .crd_01__txt
            h4 Ubicación de la herramienta
            p Esta herramienta digitalizar se encuentra en la caja de herramientas/herramientas de Windows/digitalizar, en el recuadro del cuadro de diálogo, se va visualizando el patrón digitalizado.
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-38.svg", alt="alt").class          
          .crd_01__txt
            h4 Método confiable para patronistas productivos
            p Este método de digitalización es confiable y preciso, permite a los patronistas que tienen patrones preexistentes en papel, poder digitalizarlos y optimizar el espacio físico, al igual que conservar el histórico de la empresa.
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-39.svg", alt="alt").class          
          .crd_01__txt
            h4 Otros usos de la herramienta
            p También se emplea cuando se desarrolla el patrón sobre el cuerpo humano (moulage) o sobre una forma de drapeado, se marca y se digitaliza para la producción industrial.
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center  
          .cajon.color-acento-contenido.p-5.mb-4
            .row.justify-content-around.align-items-center.mb-5
              .col-lg-6.px-4
                p Identifique la ubicación de la herramienta Digitalizar y el patrón digitalizado que se visualiza en el cuadro de diálogo emergente durante el proceso.
              .col-lg-6.px-4
                p.r-n.mb-3 #[strong Figura 75.] Digitalizar
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 87.jpg')
                figcaption Nota. Optitex  (2020).


      



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
