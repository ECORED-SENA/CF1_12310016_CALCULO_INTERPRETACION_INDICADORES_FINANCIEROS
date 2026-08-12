export default {
  global: {
    Name: 'Fundamentos e indicadores para análisis financiero',
    Description:
      'Fundamentos e indicadores para análisis financiero presenta los conceptos, normas y herramientas para calcular y aplicar indicadores financieros en empresas colombianas. Incluye análisis vertical y horizontal, liquidez, actividad, endeudamiento y rentabilidad, además del uso de hoja electrónica para organizar fórmulas, analizar estados financieros y preparar información confiable para la toma de decisiones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del análisis financiero y marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Información financiera para la gestión empresarial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Conceptos de contabilidad y finanzas aplicados al análisis financiero',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estados financieros como fuente de análisis',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Indicadores financieros como instrumentos de medición de la organización',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Función de los indicadores financieros en la gestión empresarial',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Normas legales vigentes aplicables a la información financiera en Colombia',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Ética profesional en el manejo de la información financiera',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Usuarios de la información financiera',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Evidencia de aprendizaje: cuadro descriptivo',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo:
              'Síntesis del capítulo: indicadores financieros como instrumentos de medición',
            hash: 't_1_10',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos básicos de análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de análisis financiero',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis vertical',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cálculo de participaciones de las cuentas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Análisis horizontal',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cálculo de variaciones absolutas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Cálculo de variaciones relativas',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Interpretación inicial de participaciones y variaciones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Indicadores financieros de liquidez, actividad, endeudamiento y rentabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y utilidad de los indicadores financieros',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Indicadores de liquidez',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores de actividad o gestión',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Indicadores de endeudamiento',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Indicadores de rentabilidad',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Parámetros para comparar indicadores financieros',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Hoja electrónica aplicada al cálculo financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Organización de datos financieros en hoja electrónica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Construcción de fórmulas para análisis vertical y horizontal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Construcción de fórmulas para indicadores financieros',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Validación de resultados y revisión de errores',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Presentación de resultados en tablas y gráficos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aplicación de indicadores en resultados contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Preparación de la información financiera para el análisis',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Aplicación de indicadores en el estado de situación financiera',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicación de indicadores en el estado de resultados',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Lectura comparativa de resultados financieros',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Identificación de alertas financieras iniciales',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12310016_CF01_DU.pdf',
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
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Recursos y derechos controlados por la empresa que pueden generar beneficios económicos.',
    },
    {
      termino: 'Análisis financiero',
      significado:
        'Proceso de revisión y comparación de información contable para comprender la situación de una empresa.',
    },
    {
      termino: 'Análisis horizontal',
      significado:
        'Método que compara cuentas entre periodos para identificar aumentos, disminuciones y tendencias.',
    },
    {
      termino: 'Análisis vertical',
      significado:
        'Método que calcula la participación de cada cuenta dentro de un total de referencia.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'Diferencia entre activo corriente y pasivo corriente. Permite observar recursos disponibles de corto plazo.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'Nivel de obligaciones que tiene la empresa frente a sus activos o patrimonio.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Informe financiero que presenta ingresos, costos, gastos y utilidad o pérdida de un periodo.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'Informe que muestra activos, pasivos y patrimonio en una fecha determinada.',
    },
    {
      termino: 'Indicador financiero',
      significado:
        'Relación entre cifras contables que permite medir liquidez, actividad, endeudamiento o rentabilidad.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de la empresa para cumplir obligaciones de corto plazo.',
    },
    {
      termino: 'Participación',
      significado:
        'Porcentaje que representa una cuenta dentro de un total financiero.',
    },
    {
      termino: 'Pasivo',
      significado:
        'Obligaciones presentes que la empresa debe pagar a terceros.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Capacidad de la empresa para generar utilidad a partir de sus ventas, activos o patrimonio.',
    },
    {
      termino: 'Rotación',
      significado:
        'Medida que indica qué tan rápido se recuperan o utilizan recursos como cartera, inventarios o activos.',
    },
    {
      termino: 'Variación',
      significado:
        'Cambio en el valor de una cuenta entre un periodo y otro, expresado en pesos o porcentaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2009). Ley 1314. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833&utm',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Decreto 2420. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745&utm',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública. (2026). Ministerio de Comercio, Industria y Turismo.',
      link: '',
    },
    {
      referencia:
        'González, I. C. (2020, octubre 20). Aulas Virtuales. Universidad del Quindío.',
      link: 'https://aulasvirtuales.uniquindio.edu.co/RecDigital/AnalisisFinanciero/recursos/unidad2/Descargable_EA1.pdf?utm',
    },
    {
      referencia: 'Rueda, H. M. (2008, marzo 10). Web del Profesor.',
      link: 'https://webdelprofesor.ula.ve/economia/mendezm/analisis%20I/IndicadoresFinancieros.pdf?utm',
    },
    {
      referencia:
        'Superintendencia de Sociedades. (s.f.). Tips de Consolidación y Combinación de Estados Financieros.',
      link: 'https://www.supersociedades.gov.co/documents/20122/460525/cartilla%2Bestados%2Bfinancieros.pdf/db72fb58-5ecd-407f-343c-b8d4de1bd376?t=1742506942235&utm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
