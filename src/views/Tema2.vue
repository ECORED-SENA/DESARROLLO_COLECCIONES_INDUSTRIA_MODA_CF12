<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Elaboración de pinzas
    figure.mb-5
      img(src='@/assets/tema1/img-7.png', alt='Técnicas de interpretación de modelos')
    p.mb-5 Para la elaboración de patrones (generalmente en tejido plano), de prendas ceñidas al cuerpo o entalladas, se emplean las pinzas, siendo estas las que cierran o recogen la tela hacia el interior del producto, logrando generar volúmenes hacía su vértice y entallar en sus extremos. Los patrones en los que más se emplean las pinzas son aquellos en los que se resalta la silueta de la persona que los usará, por ejemplo: el corpiño y la blusa básica o camisa femenina, la falda femenina, el vestido básico y algunas prendas masculinas, como la camisa slim fit, de las cuales se parte como básico para diferentes desarrollos.  

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center   
          .bloque-texto-a.color-acento-contenido.ld-a.p-4.p-md-5.mb-5 
            .row.m-0.justify-content-between
              p.r-n.mb-3 #[strong Figura 3] Herramienta pinza 
              .col-lg-6.mb-4.mb-lg-0
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 6.png') 
                figcaption Nota. Optitex  (2020).
              .col-lg-6.fnd-6.med
                .row.align-self-center
                  .col-lg-12.align-self-center|
                    .bloque-texto-a__texto.p-4
                      p En el software de patronaje Optitex, las pinzas que van hasta el contorno de una pieza, se realizan con el comando pinza como se muestra en la figura 3, el cual se encuentra en la ruta: <b><span class='txt-1'> caja de herramientas / pinzas y pliegues / pinza,</span></b> o por medio del atajo de teclas Ctrl+alt+d.

    p A continuación, se muestran imágenes de las figuras 4, 5, 6, 7 y 8, el patronaje de uso de pinzas en Optitex; se debe observar y analizar atentamente cada una de ellas para una mejor comprensión del paso a paso de este proceso.

  .container.tarjeta.tarjeta--blanca
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center.my-5
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Primer punto de la pinza
                p Al seguir las instrucciones indicadas por el sistema en la barra de estado (barra inferior izquierda), se procede sobre el contorno a crear el primer punto de la pinza.
              .col-md-6
                p.r-n.mb-3 #[strong Figura 4] Pasos pinza: primer punto
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 6.png', alt='Primer punto de la pinza')
                figcaption Nota. Optitex (2020).          
            .row
              .col-md-6
                p.r-n.mb-3 #[strong Figura 5] Pasos pinza: segundo punto
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 7.png', alt='Texto que describa la imagen')
                figcaption Nota. Optitex (2020).              
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Segundo punto de la pinza
                p Una vez que se ha creado el primer punto de pinza sobre el contorno, es momento de crear el segundo punto (sobre el contorno o segmento). Observe con atención la gráfica que ilustra este paso.

            .row
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Profundidad de la pinza
                p El paso por seguir es la creación del punto de vértice o profundidad de pinza; estúdielo atentamente en la imagen que corresponde a este paso.
              .col-md-6
                p.r-n.mb-3 #[strong Figura 6] Pasos pinza: profundidad de pinza
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 8.png', alt='Texto que describa la imagen')
                figcaption Nota. Optitex (2020).  
            .row
              .col-md-6
                p.r-n.mb-3 #[strong Figura 7] Pasos pinza: propiedades de la pinza, profundidad
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 9.png', alt='Pasos pinza: propiedades de la pinza')
                figcaption Nota. Optitex (2020).                   
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Caja de propiedades
                p Una vez creada la pinza, automáticamente se abre la caja de propiedades de la pinza, en la que se puede modificar el valor de la profundidad de pinza, es decir, el largo de la misma.
                           
            .row
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Descargue, diseño y sentido de la pinza
                p En este punto, se puede procesar el tipo de descargue (sobrepuesta) que se desea, o sea, elegir el diseño de la pinza y el sentido (ninguna, ccw o cw) en el que se distribuirá el pliegue (tela interna de la pinza), entre otros valores.
              .col-md-6
                p.r-n.mb-3 #[strong Figura 8] Pasos pinza: propiedades de la pinza, sobrepuesta
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 10.png', alt='Texto que describa la imagen')
                figcaption Nota. Optitex (2020).  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      p En el siguiente recurso, se conocerán los pasos que deben seguirse para realizar <b><span class='txt-1'>traslados de pinzas</span></b>, utilizando la misma herramienta <b><span class='txt-1'>“Pinza”</span></b>, en el aplicativo. Se debe prestar atención a cada uno de ellos y registrar, en la libreta de apuntes personales, los aspectos más importantes de este proceso.

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video     
    #t_2_1.titulo-segundo
      h2 2.1 Pinzas por pivote
    p Si lo que se requiere para elaborar el diseño es abrir un volumen hasta cierta parte de la pieza, es decir, que no llegue hasta el otro extremo del contorno, se utilizará la herramienta <b><span class='txt-1'> pinza por pivote</span></b> como se muestra en la figura 9, con la siguiente ruta:<b><span class='txt-1'> caja de herramientas / pinzas y pliegues / pinza por pivote</span></b> (esta herramienta no cuenta con atajo de teclado).

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        p.r-n.mb-3 #[strong Figura 9] Herramienta pinza por pivote
        .row.justify-content-around.align-items-center.my-5.fnd-5-
          .row.p-4
            .col-lg-6
              figure
                img.img-450.img-c(src='@/assets/tema1/Figura 24.png')             
            .col-lg-6 
              figure
                img.img-450.img-c(src='@/assets/tema1/Figura 25.png')
          figcaption Nota. Optitex  (2020). 

    .row.justify-content-around.align-items-center
      .col-lg-6.mb-5
        p Para el uso de esta herramienta es fundamental seguir las instrucciones:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta.lii
              span 1
            | Punto por el cual se va a abrir el flojo o a dar amplitud.
          li 
            .lista-ol--cuadro__vineta.lii
              span 2
            | Profundidad de la pinza, hasta donde va a darse amplitud.
          li 
            .lista-ol--cuadro__vineta.lii
              span 3
            | Punto pivote en el contorno hacia donde se va a llevar o distribuir el volumen (importante tener en cuenta el sentido horario).
          li 
            .lista-ol--cuadro__vineta.lii
              span 4
            | Punto pivote en el contorno hacia donde se va a llevar o distribuir el volumen (importante tener en cuenta el sentido horario).
          li 
            .lista-ol--cuadro__vineta.lii
              span 5
            | Mover el cursor para abrir la pieza.      
          li 
            .lista-ol--cuadro__vineta.lii
              span 6
            | Escribir el valor deseado (en centímetros) del ancho de pinza en el cuadro de diálogo, aceptar.             
      .col-lg-6.med 
        figure
          img.img-450.img-c(src='@/assets/tema1/img-8.svg')             

    p En el siguiente recurso, se mostrará un ejemplo del uso de la herramienta <b><span class='txt-1'> Pinza,</span></b> con la apertura de una manga hasta el codo. Se debe seguir atentamente el paso a paso que se muestra y tomar nota de los aspectos más importantes, registrándolos en la libreta personal de apuntes.
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center
          SlyderC(:datos="datosSlyder")

    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Pinzas múltiples o pliegues

    .row.justify-content-between.mb-5
      .col-lg-6
          p Cuando se requiere hacer múltiples pinzas o pliegues en una pieza, como, por ejemplo, realizar un plisado en una prenda, una falda de tablas o prenses, alforzas en una blusa, entre otras aplicaciones, se procede con la herramienta <b><span class='txt-1'>Pliegues</span></b> visible en la figura 10, dispuesta en la ruta: <b><span class='txt-1'>caja de herramientas / pinzas y pliegues / pliegues</span></b> o por medio de la tecla <b><span class='txt-1'>L</span></b> como atajo del teclado.   
          p A continuación, se presentan algunos de los aspectos más relevantes del uso de la herramienta<b><span class='txt-1'> Pliegues </span></b>en las figuras 11, 12, 13, 14 y 15:      
      .col-lg-6.mb-4.mb-lg-0
        p.r-n.mb-3 #[strong Figura 10] Herramienta pliegues
        figure.fnd-5-.p-4
          img.img-450.img-c(src='@/assets/tema1/Figura 27.png') 
        figcaption Nota. Optitex  (2020).


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-7")
      .row.fnd-7.mx-5(titulo="Contorno")
        p Al igual que con la herramienta pinza, para emplear #[strong pliegue] se comienza marcando un extremo (contorno) en el cual se abrirá el primer pliegue.

        .col-md-8
          .spam.fnd-8.py-4.px-5
            p.r-n2.mb-3 #[strong Figura 11] Pasos herramienta pliegues
            figure
              img(src='@/assets/tema1/Figura 28 A.png')
          figcaption  Nota. Optitex  (2020).

      div(titulo="Contorno opuesto ")
        .row.fnd-7.mx-5
          p Luego, marcar el segundo punto en el contorno opuesto, es decir, el punto al que llegarán los pliegues.
          .col-md-8
            .spam.fnd-8.py-4.px-5
              p.r-n2.mb-3 #[strong Figura 12] Pasos herramienta pliegues
              figure
                img(src='@/assets/tema1/Figura 28 B.png')
            figcaption  Nota. Optitex  (2020).

      div(titulo="Información de los pliegues")
        .row.fnd-7.mx-5
          p Una vez marcado el primero de los pliegues, se abre un cuadro de dialogo en el que se ingresa la información sobre los pliegues.
          .col-md-8
            .spam.fnd-8.py-4.px-5
              p.r-n2.mb-3 #[strong Figura 13] Pasos herramienta pliegues
              figure
                img(src='@/assets/tema1/Figura 29.png')
            figcaption  Nota. Optitex  (2020).

      div(titulo="Datos que pueden ingresarse en el cuadro")
        .row.fnd-7.mx-5
          ul.lista-ul.px-3
            li 
              i.txt-1.fas.fa-check
              | Tipo de pliegue: se especifica el tipo de pliegue, o sea, hacia qué lado o lados se descargará el pliegue, las posibilidades son: sentido horario, sentido anti horario y pliegue rectangular (se abre por mitad a cada lado).
            li 
              i.txt-1.fas.fa-check
              | Profundidad: es la cantidad (en centímetros) que se abrirá la pinza o el pliegue.
            li 
              i.txt-1.fas.fa-check
              | Variable: esta herramienta permite variar la profundidad y la distancia de los pliegues, en el caso de que se requiera, se podrá activar esta casilla y el software habilitará los campos de variable, que serán diligenciados con la información del segundo punto o punto extremo de los pliegues, por ejemplo, si se requiere hacer pliegues que comiencen con una profundidad de 1 cm y terminen con profundidad de 2,5 cm.
          .col-md-8
            .spam.fnd-8.py-4.px-5
              p.r-n2.mb-3 #[strong Figura 14] Pasos herramienta pliegues
              figure
                img(src='@/assets/tema1/Figura 29.png')
            figcaption  Nota. Optitex  (2020).
      div(titulo="Otros datos importantes sobre los pliegues")
        .row.fnd-7.mx-5
          ul.lista-ul.px-3
            li 
              i.txt-1.fas.fa-check
              | Número de pliegues: se refiere al número total de pliegues a marcar, cuando se indican dos o más se activan los campos correspondientes al número de pliegues.
            li 
              i.txt-1.fas.fa-check
              | Distancia: es la separación (en centímetros) que habrá entre pliegues, cuando se marca el campo variable se activa la posibilidad de indicar la distancia variable, se refiere a la variación entre la distancia del pliegue entre sus puntos iniciales y a la distancia (variable) entre los puntos finales de los pliegues. 
            li 
              i.txt-1.fas.fa-check
              | Dirección de la distribución: indica hacia qué lado se distribuirán los pliegues, si en sentido horario, anti horario o a ambos lados, dependiendo de lo que se requiera, ver figura:

          .col-md-8
            .spam.fnd-8.py-4.px-5
              p.r-n2.mb-3 #[strong Figura 15] Pasos herramienta pliegues
              figure
                img(src='@/assets/tema1/Figura 29.png')
            figcaption  Nota. Optitex  (2020).

    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Apertura automática de pliegues en Optitex
  .container.tarjeta.tarjeta--blanca
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center   
          .col-lg-9.p-sm-4         
            p Al igual que todas las herramientas de Optitex, la herramienta <b><span class='txt-1'>pliegues</span></b>  se puede emplear con variados propósitos. Se recomienda que, cada uno de los patronistas, explore sus posibilidades y logre los resultados esperados de creación, diseño e innovación.
            p A continuación en las figuras 16, 17 y 18, se muestra cómo, una vez marcada la información sobre los pliegues, el sistema automáticamente abre los pliegues y marca los piquetes para su reconocimiento.
          .col-lg-3
            figure.p-3
                img.img-c.img-290(src='@/assets/tema1/img-9.svg')     

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center.mx-4 
          SlyderC.mb-5(:datos="datosSlyder2")




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder2: [
      {
        titulo: 'Pliegues uniformes',
        texto:
          'Cuando se ha ingresado (marcado) la información sobre los pliegues en Optitex, el sistema abre de manera automática los pliegues y hace una marcación de los piquetes para su reconocimiento.',
        imagen: require('@/assets/tema1/img-11.png'),
      },
      {
        titulo: 'Pliegues variables',
        texto:
          'Esta es la manera en que el sistema abre los pliegues cuando estos son variables.',
        imagen: require('@/assets/tema1/img-12.png'),
      },
      {
        titulo: 'Pliegues tipo tablas',
        texto:
          'Y esta es la forma en que abre los pliegues y hace marcación de los piquetes cuando los pliegues son tipo tabla.',
        imagen: require('@/assets/tema1/img-13.png'),
      },
    ],

    datosSlyder: [
      {
        titulo:
          '</h3><p> <span class="text-small">Apertura de una manga hasta el codo, paso 1 / herramienta <b><span class="txt-1"> pinza</span></b></p></span><h3>',
        imagen: require('@/assets/tema1/img-13.png'),
      },
      {
        titulo:
          '</h3><p> <span class="text-small">Apertura de una manga hasta el codo, paso 2.</p></span><h3>',
        imagen: require('@/assets/tema1/Figura 26 B.png'),
      },
      {
        titulo:
          '</h3><p> <span class="text-small">Apertura de una manga hasta el codo, paso 3 / esta herramienta también puede usarse para abrir nesgas a una falda, por ejemplo.</p></span><h3>',
        imagen: require('@/assets/tema1/Figura 26 C.png'),
      },
      {
        titulo:
          '</h3><p> <span class="text-small">Apertura de una manga hasta el codo, paso 4 / la herramienta <b><span class="txt-1"> pinza</span></b> también puede usarse para dar vuelo de bota acampanada a un pantalón</p></span><h3>',
        imagen: require('@/assets/tema1/Figura 26 D.png'),
      },
      {
        titulo:
          '</h3><p> <span class="text-small">Apertura de una manga hasta el codo, paso 5</p></span><h3>',
        imagen: require('@/assets/tema1/Figura 26 E.png'),
      },
      {
        titulo:
          '</h3><p> <span class="text-small">Apertura de una manga hasta el codo, paso 6 / Recuerde que explorar la herramienta favorece la creación innovadora de modelos </p></span><h3>',
        imagen: require('@/assets/tema1/Figura 26 F.png'),
      },
      {
        titulo:
          '</h3><p> <span class="text-small">Resultado / Al igual que en la herramienta <b><span class="txt-1">añadir flojos,</span></b>se rectifica el segmento donde se abrió la pinza y, si no la va a llevar, borrar la pinza que el sistema pone por defecto.</p></span><h3>',
        imagen: require('@/assets/tema1/Figura 26 G.png'),
      },
    ],
    // variables de vue
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
