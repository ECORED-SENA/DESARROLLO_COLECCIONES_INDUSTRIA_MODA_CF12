<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Escalado
       

    .row.mb-5.d-flex
      .col-lg-6.mb-5
        P.mb-5 Es el proceso mediante el cual, el patronista realiza las tallas menores y mayores, a partir de la talla base. Este proceso se logra moviendo los puntos principales en las coordenadas de los ejes <b><span class='txt-1'>X</span></b> y <b><span class='txt-1'>Y</span></b>. En el sistema se hace fundamental configurar esta información previamente al escalado, para lo cual se determina la tabla de tallas, que se encuentra en el menú <b><span class='txt-1'>escalado / tabla de tallas</span></b> o por medio del atajo de teclado <b><span class='txt-1'>shift + f4</span></b>, ver figura 59.

        p.r-n.mb-3 #[strong Figura 59] Tabla de medidas
        figure.fnd-5-2.p-4
          img.img-450.img-c(src='@/assets/tema1/Figura 75.png')
        figcaption Nota. Optitex  (2020).

      .col-lg-6
        .cajon.color-acento-contenido.p-5.mb-4
          p.mb-5 Una vez en la tabla de medidas se comienza a configurar el escalado, la talla inicialmente aparece como base, ésta se debe cambiar por el número o letra correspondiente a la talla en la que se elaboró, ver figura 60.

          p.r-n.mb-3 #[strong Figura 60] Asignación talla base
          figure.fnd-5-3.p-4
            img.img-450.img-c(src='@/assets/tema1/Figura 76.png')
          figcaption Nota. Optitex  (2020).   


    #t_6_1.titulo-segundo
      h2 6.1 Asignación de tallas inferiores y superiores
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        .cajon-b.fnd-3-.p-3
          p Luego de la asignación de la talla base, se procede a la creación o asignación de las tallas inferiores y superiores, para lo cual se emplean dos botones de la herramienta: el<b><span class='txt-1'> botón insertar tallas</span></b>, para las tallas menores que la base y el<b><span class='txt-1'> botón agregar tallas</span></b>, para las tallas mayores que la base. Frente a cada botón se encuentra un campo en el que se indica el número de tallas a insertar o agregar.
          p.mb-5 Analizar, en detalle, el ejemplo que se muestra en el siguiente recurso:
       
      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-22.png') 

          
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
         
    separador
    #t_6_2.titulo-segundo
      h2 6.2 Aplicar el escalado
    p.mb-5 Para aplicar el escalado, primero se selecciona el punto (recordar que debe ser escalado) y se abre la ventana, la cual se encuentra en el menú <b><span class='txt-1'>ver / tabla de escalado</span></b> o por medio de la tecla “<b><span class='txt-1'>2</span></b>” (sobre la q y la w), la cual se abre con los valores en blanco, ver figura 61.
    .row.justify-content-around.align-items-center.mb-5
      .col-md-6.px-4    
        p.r-n.mb-3 #[strong Figura 61] Tabla de escalado
          figure.fnd-5-2.p-4
            img.img-450.img-c(src='@/assets/tema1/Figura 79.png')
          figcaption Nota. Optitex  (2020).

    p.mb-5 Profundizar, atentamente, en el paso a paso de este procedimiento:
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c    
        SlyderB.mb-5(:datos="datosSlyder")

    separador
    #t_6_3.titulo-segundo
      h2 6.3 Intervenir el escalado
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        .cajon-b.fnd-3-.p-3
          p Si se requiere invertir el escalado (negativo a positivo o viceversa), se procede haciendo clic sobre la dimensión <b><span class='txt-1'>(dx, dy)</span></b> y luego clic derecho, seleccionar <b><span class='txt-1'>“voltear”</span></b> y listo. Si se requiere voltear ambas dimensiones se hace clic sostenido sobre ambas dimensiones (se selecciona todo), clic derecho y se selecciona <b><span class='txt-1'>“voltear”</span></b>.
          p En el siguiente recurso, se puede conocer qué hacer cuando se requiere intervenir el escalado de positivo a negativo o viceversa.
      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-23.png') 

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center
          SlyderC.mb-5.fnd-5-3(:datos="datosSlyder2")

    separador
    #t_6_4.titulo-segundo
      h2 6.4 Escalado múltiple
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        .cajon-b.fnd-3-.p-3
          p Para una mayor optimización del tiempo existe la herramienta <b><span class='txt-1'>escalado múltiple,</span></b> con la cual se ingresan los mismos valores en todas las tallas.
          p Los siguientes son los pasos para el uso apropiado de la herramienta de <b><span class='txt-1'>Escalado múltiple,</span></b>, ver figuras 66, 67, 68 y 69. Recuerde tomar nota atenta, en su libreta personal de apuntes, de los aspectos más importantes y destacados de este punto.
      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-24.png') 

  .container.tarjeta.tarjeta--blanca
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10.align-self-center.img-c
        br
        .row.justify-content-around.align-items-center  
          TabsC.color-primario.mb-5
            .py-3.py-md-4.fnd-6(titulo="Barra de botones de escalado")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Barra de botones de escalado
                  p Se entra en la barra de botones del escalado.
              
                .col-md-6.px-5
                  p.r-n2.mb-3 #[strong Figura 66.] Barra botones escalado
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 84 A.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Escalar")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Escalar
                  p una vez seleccionada se hace clic sobre el punto a escalar.
              
                .col-md-6.px-5
                  p.r-n2.mb-3 #[strong Figura 67.] Escalar
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 84 B.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Ingreso de valores de X y de Y")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Ingreso de valores de X y de Y
                  p Luego se abre un cuadro de diálogo, en el que se ingresa el valor de x y el valor de y.
              
                .col-md-6.px-5
                  p.r-n2.mb-3 #[strong Figura 68.] Valores de X Y
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 84 C.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Resultado")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Resultado
                  p Finalmente, al dar clic en aplicar, se visualiza el escalado del punto.
              
                .col-md-6.px-5
                  p.r-n2.mb-3 #[strong Figura 69.] Resultado de escalado
                  figure
                    img.img-450.img-c(src='@/assets/tema1/Figura 84 D.png')
                  figcaption Nota. Optitex  (2020).                                    

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    separador
    #t_6_5.titulo-segundo
      h2 6.5 Pegar escalado
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        .cajon-b.fnd-3-.p-3
          p Una vez se tienen todos los puntos de una pieza escalados (incluir los puntos internos y vértices de pinzas), se puede copiar y pegar el escalado de un punto al otro. Para ello, se señala (herramienta selección) el punto con atributos de escalado, haciendo clic en el botón <b><span class='txt-1'>copiar escalado</span></b> (o usando el atajo shift + c). Luego, se hace clic en el punto al cual se le copiará el escalado y, finalmente, se hace clic en el botón <b><span class='txt-1'>pegar escalado</span></b> o usando el atajo de teclado<b><span class='txt-1'> shift + v.</span></b>

      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-25.png') 

  .container.tarjeta.tarjeta--blanca
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center.my-5
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Paso 1
                p Señalar el punto con atributos de escalado
              .col-md-6
                p.r-n.mb-3 #[strong Figura 70] Atributos escalado
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 85 A.png')
                figcaption Nota. Optitex (2020).          
            .row
              .col-md-6
                p.r-n.mb-3 #[strong Figura 71] Copiar escalado
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 85 B.png')
                figcaption Nota. Optitex (2020).              
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Paso 2
                p Clicar botón Copiar escalado
            .row
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Paso 3
                p Clic sobre el punto al cual se le copiará el escalado
              .col-md-6
                p.r-n.mb-3 #[strong Figura 72] Punto copia de escalado
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 85 C.png')
                figcaption Nota. Optitex (2020).          
            .row
              .col-md-6
                p.r-n.mb-3 #[strong Figura 73] Botón pegar escalado
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 85 D.png')
                figcaption Nota. Optitex (2020).              
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Paso 4
                p Clic sobre el botón Pegar escalado
            .row
              .col-md-6.mb-4.mb-md-0.align-self-center
                h3 Paso 5
                p Resultado de pegar escalado
              .col-md-6
                p.r-n.mb-3 #[strong Figura 74] Resultado escalado
                figure.fnd-5-.p-4
                  img.img-450.img-c(src='@/assets/tema1/Figura 85 E.png')
                figcaption Nota. Optitex (2020). 

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        .cajon.color-secundario.ttb1.p-3.mb-5
          .row.justify-content-around.align-items-center.px-4
            .col-2
              figure.mb-2
                  img.img-c.img-130(src='@/assets/tema1/otras/img-33-.svg')        
            .col-10         
              p.mb-0 En caso de requerir pegar una sola de las coordenadas, se procede copiando (de igual manera) el escalado y señalando (herramienta selección) el punto al cual se le va a pegar el escalado. Entonces se hace clic en el botón pegar en X o en el botón pegar en Y (según el caso).
        .cajon.color-secundario.ttb1.p-3.mb-5
          .row.justify-content-around.align-items-center.px-4
            .col-2
              figure.mb-2
                  img.img-c.img-130(src='@/assets/tema1/otras/img-34-.svg')        
            .col-10         
              p.mb-0 Se debe revisar muy bien que todas las piezas del patrón estén debidamente escaladas. Una de las herramientas útiles para verificar, es la herramienta “Caminar”. Con ella se puede recorrer las piezas con el escalado activo y revisar si los puntos de las demás tallas coinciden.




              

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Valores de escalado',
        texto:
          'En este punto se hace imperante entender hacia qué lado decrecen o crecen las tallas, para ingresar los valores en la tabla de escalado (positivos o negativos), ver figura 62.',
        imagen: require('@/assets/tema1/Figura 80 A.png'),
        leyendaImagen: 'Figura 62. Registro de valores de escalado.',
      },
      {
        titulo: 'Ingreso de valores de escalado',
        texto:
          'Se deben ingresar los valores de cada punto en cada una de las dimensiones (dx y dy) para cada talla. Si al ingresar los valores no se ve el escalado, se debe activar con f4 <b><span class="txt-1">(activar / desactivar escalado)</span></b> , ver figura 63.',
        imagen: require('@/assets/tema1/Figura 80 B.png'),
        leyendaImagen: 'Figura 63. Registro de valores de escalado',
      },
      {
        titulo: 'Igualar todos',
        texto:
          'Si el escalado es regular, es decir que todas las tallas presentan el mismo incremento, sin rompimiento de tallas, se puede proceder a igualar todo, haciendo clic derecho sobre la dimensión deseada (dx, dy) y luego clic sobre <b><span class="txt-1">“igual todos”</span></b>, ver figura 64.',
        imagen: require('@/assets/tema1/Figura 81 A.png'),
        leyendaImagen: 'Figura 64. Igual todos.',
      },
      {
        titulo: 'Replicar valor en las demás tallas',
        texto:
          'La acción de <b><span class="txt-1">igualar todos</span></b>, ver figura 65, replicará el valor en las demás tallas, proceso que ahorra tiempo y garantiza presión del escalado.',
        imagen: require('@/assets/tema1/Figura 81 B.png'),
        leyendaImagen: 'Figura 65. Ejemplo herramienta escalizar aumento',
      },
    ],

    datosSlyder2: [
      {
        titulo: 'Aplicación en punto',
        texto: 'Hace parte de la acción “Voltear escalado a una dimensión”.',
        imagen: require('@/assets/tema1/Figura 82 A.png'),
      },
      {
        titulo: 'dx',
        texto: 'Hace parte de la acción “Voltear escalado a una dimensión”.',
        imagen: require('@/assets/tema1/Figura 82 B.png'),
      },
      {
        titulo: 'Voltear',
        texto: 'Hace parte de la acción “Voltear escalado a una dimensión”.',
        imagen: require('@/assets/tema1/Figura 82 C.png'),
      },
      {
        titulo: 'Resultado',
        texto: 'de “Voltear escalado a una dimensión”.',
        imagen: require('@/assets/tema1/Figura 82 D.png'),
      },
      {
        titulo: 'dy',
        texto: 'Hace parte de la acción “Voltear escalado ambas dimensiones”.',
        imagen: require('@/assets/tema1/Figura 83 A.png'),
      },
      {
        titulo: 'Voltear',
        texto: 'Hace parte de la acción “Voltear escalado ambas dimensiones”.',
        imagen: require('@/assets/tema1/Figura 83 B.png'),
      },
      {
        titulo: 'Resultado',
        texto: 'de “Voltear escalado a una dimensión”.',
        imagen: require('@/assets/tema1/Figura 82 D.png'),
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
