<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramienta escalizar
       

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        p En el desarrollo de modelos es muy importante tener en cuenta las transformaciones necesarias a realizar, según el tipo de tela, es decir, si la tela es completamente rígida se hace necesario dar un aumento que se conoce como desahogo u holgura; si por el contrario la tela tiene elongación se requiere disminuir la medida para lograr que la prenda se ajuste al cuerpo.
        .cajon.color-acento-contenido.p-5.mb-4
          p.mb-0 Del mismo modo, cuando la prenda va a procesos posteriores a su confección (lavandería, tintorería o estampación) en los que se somete, por ejemplo, a temperaturas extremas, produciendo su encogimiento tanto de contornos como de largos, se hace indispensable aumentar ese porcentaje de encogimiento para compensar las medidas y así tener la talla correcta luego de su proceso.
      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-1.png') 

    #t_3_1.titulo-segundo
      h2 3.1 Desahogos
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6
        p También conocidos como holguras, los desahogos hacen referencia al aumento, amplitud o soltura que se debe añadir al patrón de la prenda de vestir para que, aparte de la comodidad, facilite su postura o el movimiento que se haga con ella (performance).
        .cajon.color-acento-contenido.p-5.mb-4
          p.mb-0 Los desahogos u holguras se dan en centímetros o pulgadas según el sistema métrico que se utilice en la empresa a trabajar. Dependen directamente del tejido y el desarrollo del modelo a realizar, se añaden luego de tener el patrón listo, tanto por contornos, como en los largos.         
      .col-lg-6             
        figure.mb-5
          img(src='@/assets/tema1/otras/img-2.png') 
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        p.r-n #[strong Tabla 1] Tabla de desahogos
        table.mb-5
          tr.lii
            td(colspan='2')
              .row.justify-content-around.align-items-center.px-4
                .col-lg-2
                  figure.p-3
                      img.img-c.img-130(src='@/assets/tema1/otras/img-3.svg')        
                .col-lg-10.p-sm-4.ttb         
                  p.mb-1 #[strong DESAHOGOS  U HOLGURAS]
                  p.mb-1 Por tallas
                  p.mb-1 Adaptables a sobre medidas
                  p.mb-1 Las holguras o desahogos son las cantidades dadas al patr&oacute;n desarrollado para   brindarle la amplitud necesaria. Estudiando el tipo de tela o tejido a   utilizar, as&iacute; como la moda, para saber la medida necesaria a dejar.
          tr
            td.ttb1.p-2
              .row.justify-content-around.align-items-center.px-4
                .col-2
                  figure.mb-2
                      img.img-c.img-130(src='@/assets/tema1/otras/img-4.svg')        
                .col-10         
                  p.mb-0 #[strong BUSTO]
            td.ttb1.p-2
              .row.justify-content-around.align-items-center.px-4
                .col-2
                  figure.mb-2
                      img.img-c.img-130(src='@/assets/tema1/otras/img-5.svg')        
                .col-10         
                  p.mb-0 #[strong CENTRO LARGO DELANTERO Y/O ESPALDA]
        
          tr
            td.pann 
              
              p 4-6/XXS-XS/32-34 = 0,5 mm
              p 8-10/S-M/36-38 = 1 cm
              p 12-14/L-XL/40-42 = 1,5 cm
              p 16-18/XXL/44-46 =2 cm
              p 20-22/XXXL/48-50 = 2,5 cm
            td.pann 
              p 4-6/XXS-XS/34-34   = 1 cm
              p 8-10/S-M/36-38 = 1,5 cm - 2 cm
              p 12-14/L-XL/40-42 = 2,5 cm
              p 16-18/XXL/44-46 = 3 cm - 3,5 cm
              p 20-22/XXXL/48-50 = 3,5 cm - 4 cm
        
          tr
            td.ttb1.p-2
              .row.justify-content-around.align-items-center.px-4
                .col-2
                  figure.mb-2
                      img.img-c.img-130(src='@/assets/tema1/otras/img-6.svg')        
                .col-10         
                  p.mb-0 #[strong CINTURA]
            td.ttb2(rowspan='4')
                  
              .cajon.color-acento-contenido.p-5.mb-4
                figure.mb-2
                  img.img-c.img-130(src='@/assets/tema1/otras/img-8.svg')
                p.mb-0 Se da un aumento en el   centro delantero y/o espalda al largo total para personas con vientre   pronunciado y/o derriere grande.
          tr
            td.pann 
              p 4-6/XXS-XS/32-34 = 0,8 mm
              p 8-10/S-M/36-38 = 1 cm - 1,5 cm
              p 12-14/L-XL/40-42 = 2 cm
              p 16-18/XXL/44-46 = 2,5 cm
              p 20-22/XXXL/48-50 = 3 cm
    
          tr
            td.ttb1.p-2
              .row.justify-content-around.align-items-center.px-4
                .col-2
                  figure.mb-2
                      img.img-c.img-130(src='@/assets/tema1/otras/img-7.svg')        
                .col-10         
                  p.mb-0 #[strong CADERA]
        
          tr
            td.pann 
              p 4-6/XXS-XS/32-34 =1 cm
              p 8-10/S-M/36-38 = 1,5 cm - 2 cm
              p 12-14/L-XL/40-42 = 2 cm - 2,5 cm
              p 16-18/XXL/44-46 = 2,5 cm - 3 cm
              p 20-22/XXXL/48-50 = 3 cm - 3,5 cm
            
        .cajon.color-secundario.ttb1.p-5.mb-5
          .row.justify-content-around.align-items-center.px-4
            .col-2
              figure.mb-2
                  img.img-c.img-130(src='@/assets/tema1/otras/img-9.svg')        
            .col-10         
              p.mb-0 Es importante establecer el tipo de prenda a la que se le añadirán las holguras, si es interior o exterior, si es línea masculina – femenina – infantil, el tipo de tejido usado y los puntos en que se ajustará o sujetará en el cuerpo humano.
        .cajon.color-secundario.ttb1.p-5.mb-4
          .row.justify-content-around.align-items-center.px-4
            .col-2
              figure.mb-2
                  img.img-c.img-130(src='@/assets/tema1/otras/img-10.svg')        
            .col-10         
              p Las prendas se pueden clasificar en tres pieles o capas así: 
              ul.lista-ul.px-3
                li 
                  i.fas.fa-check
                  | Primera piel: están totalmente en contacto con la piel (prendas íntimas o ropa interior).
                li 
                  i.fas.fa-check
                  | Segunda piel: van sobre las anteriores y corresponden a las prendas exteriores.
                li 
                  i.fas.fa-check
                  | Tercera piel: corresponden a los abrigos y chaquetas, van sobre las prendas exteriores.
    separador
    #t_3_2.titulo-segundo
      h2 3.2 Asignación de holguras o desahogos 

    .row.justify-content-around.align-items-center.px-4.mb-5
      .col-4
        figure.mb-2
            img.img-c.img-450(src='@/assets/tema1/otras/img-11.svg')        
      .col-8         
        p Los procesos de diseño y confección no son ajenos a las realidades sociales, por el contrario, los patronistas han de tener en cuenta que, según el tipo de lugar o país en el que se viva y sus variaciones climáticas, culturales o políticas, pueden existir más capas de vestir o pieles. Cada una de las capas tendrá mayor capacidad o desahogo que la anterior, con el fin de poder cubrir cómodamente el cuerpo de las personas.
        br
        p En la siguiente tabla 2, se conocerán los valores estimados de holgura que se procuran para los variados tipos de prendas y los volúmenes deseados, expresados en centímetros. Se debe tomar nota de ello y registrarlo en la libreta de apuntes personal.

    p.r-n #[strong Tabla 2] Valores de desahogo estimados, según tipo de prenda
    .tabla-a.color-primario.mb-5 
      table.centa
        caption Nota. Goyes (s.f.).
        thead
          tr
            th Prenda 
            th.fnd-5-1  Estrecho 
            th.fnd-3   Ajustado 
            th  Normal 
            th.fnd-5-1  Ancho 
            th.fnd-3   Muy ancho 
        tbody
          tr 
            td.text-bold  Blusa 
            td  2  
            td  4  
            td  6  
            td  8 
            td  10  
          tr
            td.text-bold  Vestido 
            td  4 
            td  6 
            td  8 
            td  10 
            td  12 
          tr
            td.text-bold  Falda 
            td  0 
            td  1 
            td  2 
            td  6 
            td  8 
          tr
            td.text-bold  Pantal&oacute;n 
            td  0 
            td  1 
            td  2 
            td  4 
            td  6 
          tr
            td.text-bold  Chaqueta 
            td  4 
            td  6 
            td  8 
            td  10 
            td  12 
          tr
            td.text-bold  Chaquet&oacute;n  
            td  6 
            td  8 
            td  10 
            td  12 
            td  14 
          tr
            td.text-bold  Abrigo 
            td  8 
            td  10 
            td  12 
            td  14 
            td  16 

    p.mb-5 Se presenta, entonces, el proceso que Optitex permite, en la asignación de holguras o desahogos a diferentes prendas y tipos de prendas. Es un ejemplo a través del cual, se podrá comprender y afianzar en el manejo y uso del software.
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center  
          SlyderB(:datos="datosSlyder")

    separador
    #t_3_3.titulo-segundo
      h2 3.3 Elongación
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center  
          .col-lg-6
            p A las prendas de vestir que se desarrollan en tejido de punto con elongación y son ajustadas sobre el cuerpo, no se les aplica desahogo, por el contrario, se les aplica una reducción de medida, ver tabla 3, conocida como <b><span class='txt-1'>Porcentaje de elongación</span></b>, el cual dependerá de cuán elástico sea el material textil, información que se encuentra consignada en la ficha técnica de la materia prima o del insumo y que se expresa en términos de porcentaje de elongación.
          .col-lg-6
            p.r-n #[strong Tabla 3] Reducción de medidas tejido de punto, porcentaje de elongación 25 %
            .color-primario.mb-5 
              table.centa
                caption Nota. Goyes (s.f.).
                tbody
                  tr
                    td.text-bold.fnd-5-1 1. Pecho 44
                    td.text-bold.fnd-3  44/1.25 = 35.2                
                  tr 
                    td.text-bold.text-bold Busto 48
                    td.text-bold  48/1.25 = 36.8             
                  tr
                    td.text-bold  Cintura 36 
                    td.text-bold  36/1.25 = 28.8 
                  tr
                    td.text-bold  Cadera 48 
                    td.text-bold  48/1.25 = 38.4 
    p.mb-5 A continuación en las figuras 23 y 24, se presenta un ejemplo de aplicación de la fórmula de porcentaje de elongación para un material con 25 %.             

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.img-c
        .row.justify-content-around.align-items-center  
          SlyderB.mb-5(:datos="datosSlyder2")

    separador
    #t_3_4.titulo-segundo
      h2 3.4 Encogimientos
    .row.justify-content-around.align-items-center.mb-5
        .col-md-6
          p Cuando una prenda o alguna de sus partes requiere procesos textiles que involucran calor, esta se encoge, por lo cual hay que adicionarle la medida o porcentaje de encogimiento al patrón. Para determinar el porcentaje de encogimiento de la tela se corta un cuadrado de la tela a emplear en la producción de 1.2 m x 1.2 m (120 cm), el cual se filetea (sin cortar para no reducir medida) por los cuatro bordes. Se marca con un marcador de vinilo o un rotulador textil indeleble el hilo o aplome, las esquinas, centros, centros laterales, diagonales de un cuadrado de 100 cm x 100 cm (el cual equivaldrá al 100 %), ver la figura 25.
          p Para realizar la adición de la medida o porcentaje de encogimiento al patrón de las prendas, se tienen en cuenta los aspectos siguientes:
        .col-md-6
          .spam.fnd-8.py-4.px-5
            p.r-n.mb-3 #[strong Figura 25] Ejemplo marcado de la muestra para prueba de encogimiento
            figure.ttb2  
              img.img-290.img-c(src='@/assets/tema1/Figura 40.png')
            figcaption  Nota. Optitex  (2020).
  
  .container.tarjeta.tarjeta--blanca
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10.align-self-center.img-c
        br
        .row.justify-content-around.align-items-center  
          TabsC.color-primario.mb-5
            .py-3.py-md-4.fnd-6(titulo="Envío de muestra a proceso posterior")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Envío de muestra a proceso posterior
                  p Esta muestra es enviada al proceso exacto de lavandería, tintorería, sublimación o estampación al que se someterá la producción, con el fin de determinar el porcentaje de encogimiento en los ejes “x” (ancho de la tela o trama) y “y” (largo de la tela o urdimbre).
              
                .col-md-6
                  figure
                    img.img-290.img-c(src='@/assets/tema1/otras/img-31.svg')
                   
            .py-3.py-md-4.fnd-6(titulo="Porcentaje de encogimiento")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Porcentaje de encogimiento
                  p Una vez llega la pieza del proceso se toman las medidas, la resta entre la medida inicial (100 cm) y la medida final, corresponde al porcentaje de encogimiento, el cual se deberá aumentar a la prenda para que cuando se achique en el proceso quede con las medidas requeridas. 
              
                .col-md-6
                  figure
                    img.img-290.img-c(src='@/assets/tema1/otras/img-32.svg')
                    
            .py-3.py-md-4.fnd-6(titulo="Ejemplo propuesto")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Ejemplo propuesto
                  p Para efectos del ejemplo de la figura 26, se supondrá que la tela llegó con las medidas 89 cm de ancho (eje x) y 92 cm de largo (eje y). Se realizan las respectivas restas así:
                  ul.lista-ul.px-3
                    li 
                      i.txt-1.fas.fa-check
                      | Eje x: 100 - 89 = 11, por lo tanto, se debe aumentar un 11 % a lo ancho (para el ejemplo), como se muestra en la figura.
                    li 
                      i.txt-1.fas.fa-check
                      | Eje y: 100 - 92 = 8, por lo tanto, se debe aumentar un 8 % a lo largo (para el ejemplo), como se muestra en la figura.
                  
              
                .col-md-6.px-4
                  p.r-n.mb-3 #[strong Figura 26] Ejemplo prueba de encogimiento
                  figure.fnd-5-.p-4
                    img.img-290.img-c(src='@/assets/tema1/Figura 41.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Acción de escalizar para encogimiento")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Acción de escalizar para encogimiento
                  p Para continuar con el ejemplo, se trabaja en el sistema con el 11 % en "x" y el 8 % en "y", y en este caso se hace en todas las piezas del área de trabajo (que para el ejemplo son en la misma tela), ver figura 27.
              
                .col-md-6
                  p.r-n.mb-3 #[strong Figura 27] Ejemplo herramienta escalizar para encogimiento
                  figure.fnd-5-.p-4
                    img.img-290.img-c(src='@/assets/tema1/Figura 42 A.png')
                  figcaption Nota. Optitex  (2020).
            .py-3.py-md-4.fnd-6(titulo="Validación de los resultados")
              .row
                .col-md-6.mb-4.mb-md-0.pann
                  h4 Validación de los resultados
                  p Es fundamental que el patronista explore las posibilidades de la herramienta y, como en todos los desarrollos, realice un prototipo de prueba para validar los resultados, ver figura 28.
              
                .col-md-6
                  p.r-n.mb-3 #[strong Figura 28] Ejemplo herramienta escalizar para encogimiento
                  figure.fnd-5-.p-4
                    img.img-290.img-c(src='@/assets/tema1/Figura 42 B.png')
                  figcaption  Nota. Optitex  (2020).                                                          


   

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Escalizar – aumento de holguras',
        texto:
          'Para el aumento de las holguras en el desarrollo de los modelos que así lo requieren, en el sistema Optitex se emplea la herramienta escalizar, la cual se encuentra en la siguiente ruta, ver las figuras 19, 20, 21 y 22: menú pieza/modificar/escalizar.',
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
          'Cabe recordar, que el porcentaje de elongación dependerá de la tela o el material a trabajar y que el 25 % empleado en esta unidad es un ejemplo. También es importante que el patronista preste atención a la pieza o piezas a las que aplica esta modificación, pues dependerá de los materiales empleados en cada una de las piezas de la prenda.',
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
