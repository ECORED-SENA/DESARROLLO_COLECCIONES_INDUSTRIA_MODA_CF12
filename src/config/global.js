export default {
  global: {
    componenteFormativo:
      'Desarrollo de modelos digitales: masculino & femenino',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará en capacidad de reconocer la constante renovación del sistema de moda, la oferta de productos, los mercados, tendencias, avances tecnológicos y necesidades del público objetivo. Se afianzará en el desarrollo de patrones acordes a cada línea y consumidor, mediante técnicas de patronaje, para las cuales se emplea el patronaje sistematizado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de interpretación de modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Softwares especializados y procesos de patronaje',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Los sets de tallas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Herramientas de transformación y desarrollo de patrones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaboración de pinzas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Pinzas por pivote',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pinzas múltiples o pliegues',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Apertura automática de pliegues en Optitex',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramienta escalizar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Desahogos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Asignación de holguras o desahogos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Elongación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Encogimientos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas para el desarrollo de patrones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Industrialización: propiedades de pieza y atributos de marcada',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Atributos de trazo',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Atributos del espaciado',
            hash: 't_5_2',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Escalado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Asignación de tallas inferiores y superiores',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Aplicar el escalado',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Intervenir el escalado',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Escalado múltiple',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Pegar escalado',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Tableta digitalizadora: digitalización de piezas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Sistema de ploteo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Mujer. ',
      link:
        'Http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docid=4184903',
    },
    {
      referencia:
        'Celestecielo. (s.f.). El rincón de celestecielo: desahogos, holguras o flojos y costuras en los patrones para tejido plano. [Web log post]. El rincón de celestecielo. ',
      link:
        'https://elrincondecelestecielo.blogspot.com/2012/08/desahogos-o-flojos-y-costuras-en-los.html',
    },
    {
      referencia:
        'García, M. (2016). Cuánto se deja para el margen de costura. [Web log post]. El baúl de la costurera. ',
      link:
        'Https://www.elbauldelacosturera.com/2016/08/cuanto-se-deja-para-el-margen-de-costura.html',
    },
    {
      referencia:
        'Gaviria, F. (2016, Diciembre 05-06). Análisis de resultados antropométricos tomados con body scanner, Tercer Simposio Nacional de Formación con calidad y pertinencia. ',
      link:
        'Simposio dirigido por el Servicio Nacional de Aprendizaje. Http://sinafocape.wixsite.com/tercersimposio',
    },
    {
      referencia:
        'Goyes, H. (s.f.). Valores de desahogo estimados según el tipo de prenda y volumen deseado. ',
      link:
        'Https://www.scribd.com/doc/187465705/valores-de-desahogo-estimados-segun-el-tipo-de-prenda-y-volumen-deseado-2',
    },
    {
      referencia:
        'Handbox. (2016). Añadir márgenes de costura. [Web log post]. Handbox. ',
      link: 'Https://handbox.es/anadir-margenes-de-costura',
    },
    {
      referencia: 'L, L. (s.f.). Patronaje sistematizado [Video]. YouTube. ',
      link: 'https://www.youtube.com/channel/uclyolbi73tla3civb2se5ma',
    },
    {
      referencia:
        'Ministerio de Educción del Estado Plurinacional de Bolivia (2014). Texto guía del participante. Confección textil. ',
      link:
        'https://www.confecciontextil-istt.com/biblioteca/CONFECCIO%CC%81N%20TEXTIL%20DEL%20PARTICIPANTE%20FAUTAPO.pdf',
    },
    {
      referencia: 'Prucomercialre.com. (s.f.). ¿Qué es un margen de costura? ',
      link: 'Https://www.prucommercialre.com/que-es-un-margen-de-costura/',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). Diccionario de la lengua española. ',
      link: 'https://dle.rae.es/ ',
    },
    {
      referencia:
        'Skarlett costura. (s.f.). Métodos para añadir el margen de costura a tus patrones. [Web log post] Skarlett. ',
      link: 'https://skarlett.es/anadir-margen-de-costura-patron/',
    },
  ],
  glosario: [
    {
      termino: 'Almilla',
      significado:
        'Del dim. De alma1, por su unión íntima con el cuerpo. 1. F. Especie de jubón, con mangas o sin ellas, ajustado al cuerpo. 2. F. Jubón cerrado, escotado y de manga corta que se ponía debajo de la armadura (Real Academia Española, s.f.).',
    },
    {
      termino: 'Canesú',
      significado:
        '2. M. Pieza superior de la camisa o blusa a la que se pegan el cuello, las mangas y el resto de la prenda (Real Academia Española, s.f.).',
    },
    {
      termino: 'Bitácora',
      significado:
        '2. M. Libro pequeño o conjunto de papel en que se lleva la cuenta y razón, o en que se escriben algunas noticias, ordenanzas o instrucciones. El cuaderno de millones, de la mesta (Real Academia Española, s.f.).',
    },
    {
      termino: 'Canesú',
      significado:
        'Del fr. Canezou. 1. M. Cuerpo de vestido de mujer corto y sin mangas. 2. M. Pieza superior de la camisa o blusa a la que se pegan el cuello, las mangas y el resto de la prenda (Real Academia Española, s.f.).',
    },
    {
      termino: 'Desahogo',
      significado:
        '3. M. Ensanche, dilatación, esparcimiento (Real Academia Española, s.f.).',
    },
    {
      termino: 'Derrotero',
      significado:
        '1. M. Camino, rumbo, medio tomado para llegar al fin propuesto. 2. M. Conjunto de datos que indican el camino para llegar a un lugar determinado (Real Academia Española, s.f.).',
    },
    {
      termino: 'Elongación',
      significado:
        '1. F. Alargamiento. 3. F. Mec. Alargamiento de una pieza sometida a tracción (Real Academia Española, s.f.).',
    },
    {
      termino: 'Holgura',
      significado:
        '1. F. Espacio suficiente para que pase, quepa o se mueva dentro algo. 2. F. Anchura sobrada. 3. F. Espacio vacío entre dos piezas que han de encajar una en otra. 4. F. Desahogo, bienestar, disfrute de recursos suficientes (Real Academia Española, s.f.).',
    },
    {
      termino: 'Industrialización',
      significado: '1. F. Acción y efecto de industrializar.',
    },
    {
      termino: 'Industrializar',
      significado:
        '1. Tr. Hacer que algo sea objeto de industria o elaboración (Real Academia Española, s.f.).',
    },
    {
      termino: 'Onda',
      significado:
        '2. F. Cada una de las curvas, a manera de eses, que se forman natural o artificialmente en algunas cosas flexibles, como el pelo, las telas, etc. U. M. En pl. 3. F. Cada uno de los recortes semicirculares con que se adornan los bordes de vestidos u otras prendas (Real Academia Española, s.f.).',
    },
    {
      termino: 'Performance',
      significado:
        '1. F. Rendimiento (‖ proporción entre el resultado obtenido y los medios utilizados) (Real Academia Española, s.f.).',
    },
    {
      termino: 'Pinza',
      significado:
        '3. F. Pliegue que se cose en la tela para darle una forma determinada (Real Academia Española, s.f.).',
    },
    {
      termino: 'Pliegue',
      significado:
        '1. M. Doblez, especie de surco o desigualdad que resulta en cualquiera de aquellas partes en que una tela o cosa flexible deja de estar lisa o extendida. 2. M. Doblez hecho artificialmente por adorno o para otro fin en la ropa o en cualquier cosa flexible (Real Academia Española, s.f.).',
    },
    {
      termino: 'Silueta',
      significado:
        '1. F. Dibujo sacado siguiendo los contornos de la sombra de un objeto. 2. F. Forma que presenta a la vista la masa de un objeto más oscuro que el fondo sobre el cual se proyecta. 3. F. Perfil (‖ contorno de la figura) (Real Academia Española, s.f.).',
    },
    {
      termino: 'Slim fit',
      significado:
        'Del inglés: silueta delgada o silueta ajustada, hace referencia a las prendas ajustadas al cuerpo.',
    },
    {
      termino: 'Software',
      significado:
        '1. M. Inform. Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
  ],
  complementario: [
    {
      texto: 'Sistema de ploteo - L. L. (s.f.). Patronaje Sistematizado Home ',
      tipo: 'Video',
      link: 'https://www.youtube.com/channel/uclyolbi73tla3civb2se5ma ',
    },
    {
      texto: 'Sistema de ploteo - Galeano, K. (s.f.).  Koraline Home ',
      tipo: 'Video',
      link: 'https://www.youtube.com/c/krogaleanojaramillo/videos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
