<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Industrialización: propiedades de pieza y atributos de marcada
    p La industrialización de las piezas corresponde a la marcada de las propiedades de cada una de ellas y los puntos de marcada internos (mencionados anteriormente), lo cual, en el sistema, se hace por la opción <b><span class='txt-1'>propiedades de pieza</span></b>, ver figura 53, que se activa haciendo doble clic sobre uno de los moldes.  

    .row.justify-content-around.align-items-center.mb-5
      .col-md-6.px-4
        p.r-n.mb-3 #[strong Figura 53] Propiedades de la pieza
        figure.fnd-5-.p-4
          img.img-450.img-c(src='@/assets/tema1/Figura 59 B.png')
        figcaption Nota. Optitex  (2020).
    
    p.mb-5 En el menú, se pueden modificar los siguientes ítems: 
    .row.justify-content-around.align-items-center
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-14.svg", alt="alt").class          
          .crd_01__txt
            h4 Nombre
            p El nombre hace referencia al nombre de la pieza, este se maneja en las empresas de manera abreviada para efectos de optimizar recursos (tiempo – tinta).
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-15.svg", alt="alt").class          
          .crd_01__txt
            h4 Cantidad
            p La cantidad se refiere al número de veces que se cortará la pieza, es importante tener en cuenta que si la pieza se requiere reflejada (frentes, mangas, perneras, puños) se debe dejar en cantidad 1 y se activa la opción par.		

    .row.justify-content-around.align-items-center
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-16.svg", alt="alt").class          
          .crd_01__txt
            h4 Código
            p El código se diligencia en los casos en que la empresa lo requiera y según su codificación.
      .col-lg-6.px-4.mb-5    
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema1/otras/img-17.svg", alt="alt").class          
          .crd_01__txt
            h4 Material
            p En este campo, se marca el material que se cortará, es muy importante que coincida con la nomenclatura marcada en la ficha técnica y según los requerimientos de la empresa.

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center 
          .col-lg-6.px-4.mb-5 
            .cajon.color-acento-contenido.p-5.mb-4
              p En el campo Descripción, se da información que el patronista considere importante para trazo y corte, o para las demás dependencias, como el número de veces que se corta la pieza, ej. 2xt
              p.r-n.mb-3 #[strong Figura 54] Propiedades principales de la pieza.
              figure.fnd-5-.p-4
                img.img-450.img-c(src='@/assets/tema1/Figura 54.png')
              figcaption Nota. Optitex  (2020). 
          .col-lg-6.px-4.mb-5 
            .cajon.color-acento-contenido.p-5.mb-4
              p En el grupo de opciones texto de descripción, se modifica el tamaño, ángulo y ubicación del texto descriptivo de la pieza.
              p.r-n.mb-3 #[strong Figura 55] Texto de descripción.
              figure.fnd-5-.p-4
                img.img-450.img-c(src='@/assets/tema1/Figura 55 A.png')
              figcaption Nota. Optitex  (2020). 

    separador
    #t_5_1.titulo-segundo
      h2 5.1 Atributos de trazo
    p.mb-5 En el conjunto <b><span class='txt-1'>atributos de trazo</span></b>, ver figura 56, se toman las decisiones sobre cómo se comportará la pieza al momento del trazo.
    .row.justify-content-around.align-items-center.mb-5
      .col-md-6.px-4
        p.r-n.mb-3 #[strong Figura 56] Atributos de trazo
        figure.fnd-5-.p-4
          img.img-450.img-c(src='@/assets/tema1/Figura 72.png')
        figcaption Nota. Optitex  (2020).
    p Tales atributos son los que se le presentan a continuación.


    .row.justify-content-around.align-items-center 
      .col-lg-6.px-4.mb-5
        figure.p-4
          img.img-450.img-c(src='@/assets/tema1/otras/img-18.png')
      .col-lg-6.px-4.mb-5
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul fnd-9")
          .row(titulo="Piezas opuestas")
            p Se refiere a la forma en que se reflejan las piezas cuando tienen pieza par. Por predeterminación, el sistema asigna <b><span class='txt-1'>arriba/abajo;</span></b>  se recomienda dejar esta opción ya que, en el trazo, las piezas se ubican de manera horizontal (línea de aplome horizontal), reflejándose las piezas de arriba a abajo.
          
          div(titulo="Orientación")
            p En este campo se define si la pieza que se está trabajando es la del lado derecho o el izquierdo, generalmente se deja en automático.
          div(titulo="Rotación")
            p Hace referencia a la forma en que la pieza se puede ubicar en el trazo con respecto a su ángulo, es decir:
            ul.lista-ul.px-3
              li 
                i.txt-1.fas.fa-check
                | 1 dirección: solamente se podrá trazar en un sentido, esta opción se utiliza en telas con brillo, peine o gráficos de un solo sentido, con el fin de que todas las piezas queden cortadas para al mismo lado. 
              li 
                i.txt-1.fas.fa-check
                | 2 direcciones: se utiliza cuando las piezas se pueden ubicar en ambos sentidos del aplome (hilo) de la tela, o sea, la urdimbre. 
              li 
                i.txt-1.fas.fa-check
                | 4 direcciones: las piezas se podrán cortar en ambas direcciones del aplome y en las dos direcciones de la trama. 
              li 
                i.txt-1.fas.fa-check
                | 8 direcciones: la pieza se traza en las dos direcciones del hilo, en las dos de trama y las cuatro direcciones diagonales (45°, 135°, 225°, 315°). Cualquier dirección: la pieza no tiene restricciones de dirección en el trazo. Ver figura:
          div(titulo="Inclinación de la pieza")
            p Esta opción, aunque no es muy común utilizarla, se emplea para darle inclinación a la pieza al momento de realizar el trazo, es muy útil cuando la tela presenta hilo virado (comúnmente conocido como pierna virada), se compensa el ángulo de virado hacia el lado contrario para que la prenda terminada quede con el hilo como debe ser. 
          div(titulo="Encogimiento")            
            p Se puede manejar el encogimiento desde estas opciones o desde escalizar.
    separador
    #t_5_2.titulo-segundo
      h2 5.2 Atributos del espaciado
    p Hablar de atributos del espaciado corresponde, por ejemplo, a que cuando se cortan algunas telas, es recomendable dejar cierto margen de corte o un espacio entre las piezas trazadas. En la opción Tamaño de espaciado, ver figuras 57 y 58, se asigna dicho espacio. 
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c  
        .row.justify-content-around.align-items-center.mb-5
          .col-md-6.px-4
            p.r-n.mb-3 #[strong Figura 57] Atributos de espaciado
            figure.fnd-5-.p-4
              img.img-450.img-c(src='@/assets/tema1/Figura 73.png')
            figcaption Nota. Optitex  (2020).
          .col-md-6.px-4
            p.r-n.mb-3 #[strong Figura 58] Información de tallas y reporte
            figure.fnd-5-.p-4
              img.img-450.img-c(src='@/assets/tema1/Figura 74.png')
            figcaption Nota. Optitex  (2020).
    p.mb-5 Otros de los principales atributos de espaciado son la información de las tallas y el reporte de la información de las tallas:

        .row
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema1/otras/img-19.svg' alt='AvatarTop')
              .tarjeta.fnd-4
                .p-5
                  h2.text-center Información tallas
                  p.text-center  En esta opción se visualiza la información de la pieza correspondiente a cada talla, como: perímetro, área, máximo en <b><span class='txt-11'>X</span></b> y máximo en <b><span class='txt-11'>Y.</span></b>
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema1/otras/img-20.svg' alt='AvatarTop')
              .tarjeta.fnd-4
                .p-5
                  h2.text-center Reporte
                  p.text-center Esta herramienta sirve para guardar o imprimir el reporte de la información de la talla. 
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema1/otras/img-21.svg' alt='AvatarTop')
              .tarjeta.fnd-4
                .p-5
                  h2.text-center Para tener en cuenta
                  p.text-center  A cada pieza se le debe completar la información de la industrialización, ya que es fundamental para el desarrollo del trazo, corte y confección.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Escalizar – aumento de holguras',
        texto:
          'Para el aumento de las holguras en el desarrollo de los modelos que así lo requieren, en el sistema Optitex se emplea la herramienta escalizar, la cual se encuentra en la siguiente ruta, ver las figuras 19, 20, 21 y 22: menú pieza / modificar / escalizar.',
        imagen: require('@/assets/tema1/Figura 35.png'),
        leyendaImagen: 'Figura 19. Herramienta escalizar',
      },
      {
        titulo: 'Modificación de la pieza',
        texto:
          'Al hacer clic se abre el menú emergente por medio del cual se modifica la pieza, con las siguientes opciones, se puede aumentar o disminuir tanto en el eje <b><span class="txt-1">X</span></b> como en el <b><span class="txt-1">Y,</span></b> por porcentaje, encogimiento, absoluto o diferencia. <b><span class="txt-1">Porcentaje y encogimiento</span></b> se utilizan cuando se conoce el porcentaje en el que se debe aumentar o disminuir la pieza. <b><span class="txt-1">Absoluto,</span></b> como su nombre lo indica, hace referencia al valor total de la pieza y se utiliza cuando se conoce la medida total a modificar. <b><span class="txt-1">Diferencia,</span></b> es el valor adicional o de sustracción con el cual se modificará la pieza.',
        imagen: require('@/assets/tema1/Figura 36.png'),
        leyendaImagen: 'Figura 20. Detalle herramienta escalizar',
      },
      {
        titulo: 'Aumento de holguras en el campo Diferencia',
        texto:
          'Para el caso del aumento de desahogos u holguras, comúnmente se emplea la <b><span class="txt-1">Diferencia</span></b>. Es fundamental conocer (según el cuadro de holguras) el valor a trabajar, tanto en <b><span class="txt-1">X</span></b> como en <b><span class="txt-1">Y</span></b>, y tener en cuenta si la pieza está por mitades o por cuartos; una vez se tiene claro el valor se ingresa en el campo <b><span class="txt-1">Diferencia</span></b>, en <b><span class="txt-1">X</span></b> y en <b><span class="txt-1">Y</span></b> (los valores absoluto y porcentaje se modificarán automáticamente).',
        imagen: require('@/assets/tema1/Figura 37.png'),
        leyendaImagen: 'Figura 21. Datos herramienta escalizar.',
      },
      {
        titulo: 'Importancia de definición de la pieza',
        texto:
          'Es importante definir a qué pieza o piezas se le va a aplicar esta modificación, por lo cual el sistema da la opción de aplicarla solo a la pieza seleccionada, a todas las piezas en el archivo o las piezas en el área de trabajo. Por lo cual el patronista definirá cómo proceder, según el desarrollo y la pieza que esté trabajando, en el ejemplo sólo se le aplicará a la pieza seleccionada, en la figura se presenta la pieza antes y después de la modificación.',
        imagen: require('@/assets/tema1/Figura 38.png'),
        leyendaImagen: 'Figura 22. Ejemplo herramienta escalizar aumento',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Herramienta Escalizar - elongación',
        texto:
          'Sin embargo, en el sistema se hace de manera automática escribiendo en términos negativos (en el campo encogimiento) el porcentaje de elongación e inmediatamente el sistema modifica los demás valores.',
        imagen: require('@/assets/tema1/Figura 39 A.png'),
        leyendaImagen: 'Figura 23. Ejemplo herramienta escalizar elongación',
      },
      {
        titulo: 'Propiedades materiales de la pieza',
        texto:
          'Cabe recordar, que el porcentaje de elongación dependerá de la tela o el material a trabajar y que el 25% empleado en esta unidad es un ejemplo. También es importante que el patronista preste atención a la pieza o piezas a las que aplica esta modificación, pues dependerá de los materiales empleados en cada una de las piezas de la prenda.',
        imagen: require('@/assets/tema1/Figura 39 B.png'),
        leyendaImagen: 'Figura 24. Ejemplo herramienta escalizar elongación',
      },
    ],
  }),
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
