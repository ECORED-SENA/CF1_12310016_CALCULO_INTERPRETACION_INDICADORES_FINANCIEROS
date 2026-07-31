<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del análisis financiero y marco normativo
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.mb-5.justify-content-center.align-items-center
                .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                  figure.mb-0.text-center
                    img(src='@/assets/curso/temas/t1/img1.png' style="width: 500px").m-auto
                .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-5(data-aos="fade-right")
                  p El análisis financiero estudia estados financieros para evaluar situación económica, resultados e indicadores. Requiere información confiable, ética y normativa, considerando en Colombia la Ley 1314 de 2009 y el Decreto 2420 de 2015 como referentes contables y financieros.
            Separador
            //- Inicio Tema1.1
            .row
              #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.1 Información financiera para la gestión empresarial
            p(data-aos="fade-left") La información financiera permite reconocer recursos, obligaciones, ingresos, costos, gastos y resultados. Su análisis ayuda a orientar decisiones relacionadas con operación, financiación, inversión y control empresarial. A continuación, se presentan los principales elementos de la información financiera y la forma en que cada uno aporta al análisis y a la toma de decisiones empresariales.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ventas  
                            p.text-start Permiten analizar el nivel de ingresos generados por la operación y orientar metas comerciales, precios y estrategias de mercado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Costos
                            p.text-start Ayudan a identificar los recursos consumidos para producir o vender, revisar márgenes, proveedores y eficiencia operativa.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gastos
                            p.text-start Permiten reconocer desembolsos administrativos, comerciales y financieros para controlar presupuestos y reducir gastos no necesarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Activos
                            p.text-start Muestran los recursos y derechos de la empresa, útiles para evaluar inversión, liquidez y uso de recursos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pasivos
                            p.text-start Representan obligaciones con terceros y permiten revisar capacidad de pago y nivel de endeudamiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Patrimonio
                            p.text-start Refleja recursos propios y resultados acumulados, necesarios para analizar respaldo financiero y evolución del negocio.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta01_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Utilidad
                            p.text-start Indica el resultado económico del periodo y permite evaluar rentabilidad y sostenibilidad financiera.
            //- Fin Carrusel
            p(data-aos="fade-left") El siguiente ejemplo permite comprender cómo el aumento de ventas puede afectar los resultados financieros de una empresa.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img2.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa comercial presenta ventas por $ 300.000.000 en el año 1 y $ 360.000.000 en el año 2. A primera vista, el crecimiento del 20 % parece positivo. Sin embargo, el costo de ventas pasó de $ 180.000.000 a $ 240.000.000, es decir, aumentó 33,3 %. Esto significa que las ventas crecieron, pero los costos aumentaron más rápido, afectando el margen de ganancia.
      p(data-aos="fade-left") La lectura financiera no debe quedarse en que “la empresa vendió más”. Debe preguntarse si ese crecimiento generó mejores resultados. En este caso, el análisis permite revisar precios, descuentos, costos de compra, proveedores y rentabilidad por producto.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Conceptos de contabilidad y finanzas aplicados al análisis financiero
      p(data-aos="fade-left") Los conceptos de contabilidad y finanzas permiten comprender los estados financieros y calcular indicadores. Cada concepto cumple una función específica dentro del análisis empresarial. A continuación, se presentan los principales conceptos financieros y su relación con el análisis de la situación económica de una empresa.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Activo  
                            p.text-start Representa los recursos y derechos controlados por la empresa. Permite analizar inversión, liquidez y uso de recursos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pasivo
                            p.text-start Corresponde a las obligaciones que la empresa debe pagar a terceros. Ayuda a evaluar endeudamiento y capacidad de pago.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Patrimonio
                            p.text-start Agrupa los recursos propios y resultados acumulados. Permite analizar respaldo financiero y participación de los socios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ingresos
                            p.text-start Son los valores generados por ventas o servicios. Ayudan a medir crecimiento y generación de recursos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Costos
                            p.text-start Representan los recursos consumidos para producir o vender. Permiten analizar margen y eficiencia operativa.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gastos
                            p.text-start Son desembolsos necesarios para operar, vender o financiar. Ayudan a evaluar el control administrativo y comercial.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Utilidad
                            p.text-start Es el resultado después de descontar costos y gastos. Sirve para evaluar rentabilidad y desempeño económico.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Liquidez
                            p.text-start Mide la capacidad de cumplir obligaciones de corto plazo. Se analiza con activos y pasivos corrientes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Endeudamiento
                            p.text-start Indica la participación de obligaciones frente a los recursos. Permite medir dependencia de terceros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_10.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Rentabilidad
                            p.text-start Expresa la capacidad de generar utilidad. Evalúa resultados frente a ventas, activos o patrimonio.
            //- Fin Carrusel
            p(data-aos="fade-left") El siguiente ejemplo permite relacionar conceptos contables básicos con la estructura financiera y la rentabilidad de una empresa.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa tiene activos por $ 200.000.000, pasivos por $ 120.000.000 y patrimonio por $ 80.000.000. Esta información permite observar cómo está financiada la empresa. Si el pasivo representa una proporción alta de los activos, el análisis de endeudamiento será importante para determinar el nivel de dependencia frente a terceros.
                p Si además la empresa presenta ventas por $ 250.000.000 y utilidad neta por $ 15.000.000, se puede calcular un margen neto del 6 %. Esto significa que por cada $ 100 vendidos, conserva $6 como utilidad final. La interpretación del resultado exige comparar ese porcentaje con periodos anteriores, metas internas o referencias del sector. 
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Estados financieros como fuente de análisis
      p(data-aos="fade-left") Los estados financieros organizan la información contable de la empresa y sirven como punto de partida para calcular indicadores de liquidez, actividad, endeudamiento y rentabilidad. Los principales estados financieros y el aporte de cada uno al análisis financiero empresarial son:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado de situación financiera   
                            p.text-start Presenta activos, pasivos y patrimonio. Permite calcular indicadores de liquidez, endeudamiento y estructura financiera.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado de resultados
                            p.text-start Muestra ingresos, costos, gastos y utilidad. Sirve para calcular indicadores de rentabilidad y evaluar resultados del periodo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado de flujos de efectivo
                            p.text-start Registra entradas y salidas de dinero. Ayuda a analizar la generación y el uso del efectivo en la empresa.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado de cambios en el patrimonio
                            p.text-start Explica variaciones en capital, reservas y utilidades. Permite revisar la evolución de los recursos propios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Notas a los estados financieros
                            p.text-start Amplían información sobre políticas, saldos y criterios utilizados. Ayudan a comprender hechos relevantes para el análisis.
            //- Fin Carrusel
            p(data-aos="fade-left") El siguiente ejemplo permite identificar qué estado financiero debe consultarse según el indicador que se desea calcular.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Si se desea calcular la razón corriente, se debe consultar el estado de situación financiera y tomar el activo corriente y el pasivo corriente. Si se desea calcular el margen neto, se debe consultar el estado de resultados y tomar la utilidad neta y las ventas. Si se desea analizar la recuperación de cartera, se requiere información de cuentas por cobrar y ventas a crédito.
                p Este ejemplo muestra que los indicadores no se calculan de manera aislada. Cada fórmula depende de cuentas específicas y de la calidad de la información presentada en los estados financieros.
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img4.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")      
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Indicadores financieros como instrumentos de medición de la organización
      p(data-aos="fade-left") Los indicadores financieros permiten transformar cifras contables en medidas útiles para analizar condiciones específicas de la empresa, como liquidez, actividad, endeudamiento y rentabilidad. Los indicadores como instrumentos de medición son:
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img5.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Liquidez")
                  p.mb-4 Mide la capacidad de pago de corto plazo de la empresa. Un ejemplo es la razón corriente, que permite responder si la empresa puede cubrir sus obligaciones próximas.
              .row(titulo="Actividad o gestión")
                  p.mb-4 Mide la eficiencia en el uso de los recursos. Un ejemplo es la rotación de cartera, que ayuda a identificar si los clientes pagan oportunamente.
              .row(titulo="Endeudamiento")
                  p.mb-4 Mide la participación de las obligaciones dentro de la financiación. Un ejemplo es el nivel de endeudamiento, que permite reconocer qué tanto depende la empresa de terceros.
              .row(titulo="Rentabilidad")
                  p.mb-4 Mide la capacidad de la empresa para generar utilidad. Un ejemplo es el margen neto, que ayuda a determinar si las ventas generan ganancia suficiente.
              .row(titulo="Análisis vertical")
                  p.mb-4 Mide la participación de una cuenta dentro de un total. Un ejemplo es la relación entre inventarios y total activo, que permite identificar el peso de una cuenta en la estructura financiera.
              .row(titulo="Análisis horizontal")
                  p.mb-4 Mide la variación de las cuentas entre periodos. Un ejemplo es la variación de ventas, que permite reconocer qué cambió frente al periodo anterior.
      //- Fin Accordion
      p(data-aos="fade-left") Para fortalecer la comprensión del tema, se presenta un caso breve que presenta cómo la relación entre activos y pasivos corrientes permite obtener una primera lectura sobre la capacidad de pago de la empresa.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta activo corriente por $ 90.000.000 y pasivo corriente por $ 60.000.000. Al calcular la razón corriente se obtiene:
                .row 
                  .col-12.bg-color-6.p-4.text-white.rounded-4
                    p Razón corriente = activo corriente / pasivo corriente
                    p Razón corriente = $ 90.000.000 / $ 60.000.000 <br><br>
                    p Razón corriente = 1,5
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img6.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p(data-aos="fade-left") La empresa cuenta con <b>$ 1,5 de activo corriente por cada $ 1 de deuda a corto plazo,</b> lo que indica capacidad general de pago, aunque debe complementarse con otros análisis sobre inventarios y cartera.
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.bg-color-2.p-3
          p El siguiente pódcast permite profundizar sobre la importancia de los indicadores financieros como herramientas que transforman los datos contables en información útil para analizar la situación de una empresa.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#000") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Indicadores financieros: cifras que hablan sobre la empresa
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/img7.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Función de los indicadores financieros en la gestión empresarial
      p(data-aos="fade-left") Los indicadores financieros convierten datos contables en información útil para analizar resultados, identificar alertas y apoyar decisiones. Sus funciones permiten medir, comparar, controlar y orientar la gestión financiera de la empresa, así:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Medir  
                            p.text-start Cuantifica una condición financiera específica. Ejemplo: la razón corriente mide la capacidad de pago de corto plazo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Comparar
                            p.text-start Contrasta resultados entre periodos, metas internas o referencias de gestión. Ejemplo: comparar el margen neto del año actual con el año anterior.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Controlar
                            p.text-start Ayuda a revisar comportamientos financieros que requieren seguimiento. Ejemplo: controlar el aumento de gastos operacionales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Alertar
                            p.text-start Identifica situaciones que pueden requerir atención o revisión. Ejemplo: endeudamiento creciente o cartera vencida.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Analizar
                            p.text-start Relaciona cuentas contables para interpretar resultados financieros. Ejemplo: comparar ventas frente a utilidad neta.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Preparar decisiones
                            p.text-start Aporta información para definir acciones posteriores. Ejemplo: revisar crédito, costos, pagos o inventarios.
            //- Fin Carrusel
            p(data-aos="fade-left") El siguiente ejemplo permite reconocer cómo el margen neto transforma la relación entre ventas y utilidad en una medida útil para evaluar resultados empresariales.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta ventas por $ 200.000.000 y utilidad neta por $ 10.000.000. A simple vista, se observa que obtuvo ganancia. Sin embargo, al calcular el margen neto se obtiene:
                .row.mb-4
                  .col-12.bg-color-6.p-4.text-white.rounded-4
                    p Margen neto = utilidad neta / ventas × 100
                    p Margen neto = $ 10.000.000 / $ 200.000.000 × 100
                    p Margen neto = 5 %
                p Este indicador muestra que por cada $ 100 vendidos, la empresa conserva $ 5 como utilidad final. Con esta medición, la gerencia puede revisar si el margen es suficiente frente a sus costos, gastos, metas internas o comportamiento de años anteriores.
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img8.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")      
      Separador
      //- Inicio Tema1.6
      .row
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6 Normas legales vigentes aplicables a la información financiera en Colombia
      p(data-aos="fade-left") El análisis financiero debe basarse en información normativa, técnica y verificable. En Colombia, el marco legal ha evolucionado hacia estándares de información financiera y aseguramiento. Esta línea de tiempo presenta antecedentes y primeras reformas de la información financiera en el país.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Accordeon Pasos
            .container.tarjeta.p-4.p-md-5
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-lg-0
                  LineaTiempoD.color-primario
                    .row(numero="1993" titulo="Decreto 2649")
                      .col-md-12.mb-4.mb-md-0
                        p Reglamentó la contabilidad general y los principios o normas de contabilidad generalmente aceptados en Colombia.
                    .row(numero="1993" titulo="Decreto 2650")
                      .col-md-12
                        p Estableció el Plan Único de Cuentas para comerciantes, facilitando la clasificación contable de las operaciones.
                    .row(numero="1998" titulo="Ley 488")
                      .col-md-12
                        p Introdujo cambios tributarios con efectos en registros contables, inventarios, ingresos, egresos y ajustes por inflación.
                    .row(numero="1999" titulo="Ley 550")
                      .col-md-12
                        p Incluyó disposiciones sobre intervención económica, reestructuración empresarial y armonización de normas contables con estándares internacionales.
                    .row(numero="2000" titulo="Ley 633")
                      .col-md-12
                        p Incorporó disposiciones tributarias con incidencia en obligaciones fiscales y tratamiento de algunos registros.
                    .row(numero="2001" titulo="Ley 716")
                      .col-md-12
                        p Incluyó disposiciones sobre saneamiento de información contable y tratamiento de saldos.
                    .row(numero="2002" titulo="Leyes 788 y 789")
                      .col-md-12
                        p Introdujeron cambios tributarios, laborales y empresariales con efectos en información contable y financiera.
          //- Fin Accordeon Pasos
      p(data-aos="fade-left") Estos antecedentes muestran cómo la información financiera en Colombia se ajustó a necesidades contables, fiscales y empresariales, antes de avanzar hacia la convergencia con normas de información financiera y aseguramiento.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Accordeon Pasos
            .container.tarjeta.p-4.p-md-5
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-lg-0
                  LineaTiempoD.color-primario
                    .row(numero="2004" titulo="Ley 992")
                      .col-md-12.mb-4.mb-md-0
                        p Prorrogó disposiciones relacionadas con estándares internacionales de contabilidad y su aplicación.
                    .row(numero="2006" titulo="Ley 1111")
                      .col-md-12
                        p Eliminó los ajustes integrales por inflación para efectos tributarios.
                    .row(numero="2007" titulo="Decreto 1536")
                      .col-md-12
                        p Eliminó los ajustes por inflación contables a partir del 1 de enero, según el marco aplicable.
                    .row(numero="2009" titulo="Ley 1314")
                      .col-md-12
                        p Reguló los principios y normas de contabilidad, información financiera y aseguramiento aceptados en Colombia, e impulsó la convergencia normativa.
                    .row(numero="2015" titulo="Decreto 2420")
                      .col-md-12
                        p Expidió el Decreto Único Reglamentario de las Normas de Contabilidad, Información Financiera y Aseguramiento de la Información.
                    .row(numero="2019" titulo="Decreto 2270")
                      .col-md-12
                        p Compiló y actualizó marcos técnicos de información financiera para Grupo 1 y normas de aseguramiento.
                    .row(numero="2021" titulo="Decreto 938")
                      .col-md-12
                        p Modificó el marco técnico de las Normas de Información Financiera para el Grupo 1 dentro del Decreto 2420 de 2015.
          //- Fin Accordeon Pasos
      p(data-aos="fade-left") Esta síntesis permite comprender por qué la normatividad contable y financiera es una condición necesaria para calcular indicadores confiables.
      Separador
      //- Inicio Tema1.7
      .row
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7 Ética profesional en el manejo de la información financiera
      p(data-aos="fade-left") La ética profesional asegura información financiera real, completa, verificable y sin manipulación. Su aplicación fortalece la confiabilidad de los indicadores y evita decisiones basadas en datos incorrectos durante el análisis empresarial.
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img9.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Usar información soportada")
                  p.mb-4 Consiste en verificar facturas, extractos, contratos y registros antes de calcular indicadores. Evita cálculos basados en datos inexistentes.
              .row(titulo="Mantener confidencialidad")
                  p.mb-4 Implica proteger la información de la empresa, clientes y terceros. Evita el uso indebido de datos financieros.
              .row(titulo="Presentar resultados completos")
                  p.mb-4 Requiere incluir cifras favorables y desfavorables en el análisis. Evita diagnósticos sesgados o incompletos.
              .row(titulo="Reconocer limitaciones")
                  p.mb-4 Consiste en informar si faltan datos, soportes o conciliaciones. Evita conclusiones no sustentadas.
              .row(titulo="Evitar manipulación de cifras")
                  p.mb-4 Implica no alterar saldos para mejorar resultados. Evita decisiones basadas en información falsa.
              .row(titulo="Aplicar criterios uniformes")
                  p.mb-4 Requiere mantener consistencia entre periodos. Evita comparaciones distorsionadas.
      p.mb-5(data-aos="fade-left") El siguiente caso permite comprender cómo la omisión de obligaciones puede alterar los indicadores financieros y afectar la toma de decisiones empresariales.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Si una empresa no registra todas sus obligaciones con proveedores, el pasivo aparece menor al real. Esto puede mejorar artificialmente algunos indicadores de endeudamiento o liquidez, pero el análisis sería incorrecto. La decisión de solicitar crédito, distribuir utilidades o ampliar operaciones se estaría tomando sobre información incompleta.
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img10.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p(data-aos="fade-left") La ética profesional hace parte de la calidad del análisis financiero, porque los indicadores calculados con cifras incompletas o manipuladas pierden validez.otros       
      Separador
      //- Inicio Tema1.8
      .row
        #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.8 Usuarios de la información financiera
      p(data-aos="fade-left") La información financiera permite a usuarios internos y externos evaluar resultados, capacidad de pago, rentabilidad, cumplimiento, riesgo y desempeño empresarial, según sus necesidades e intereses.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gerencia (usuario interno)
                            p.text-start Utiliza la información financiera para evaluar resultados, controlar gastos y tomar decisiones de gestión.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Propietarios o socios (usuario interno)
                            p.text-start Revisan la utilidad, la rentabilidad y el crecimiento para valorar el desempeño del negocio.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área contable y financiera (usuario interno)
                            p.text-start Prepara información, calcula indicadores y presenta informes para apoyar el análisis empresarial.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Áreas operativas (usuario interno)
                            p.text-start Revisan costos, inventarios, ventas y presupuestos para controlar la operación diaria.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Bancos (usuario externo)
                            p.text-start Analizan la capacidad de pago y el riesgo crediticio antes de otorgar financiación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proveedores (usuario externo)
                            p.text-start Evalúan cupos, plazos y condiciones de pago para conceder crédito comercial.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inversionistas (usuario externo)
                            p.text-start Inversionistas (usuario externo)
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado (usuario externo)
                            p.text-start Verifica el cumplimiento contable, tributario y legal de la organización.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta05_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Organismos de vigilancia (usuario externo)
                            p.text-start Revisan la información financiera según sus competencias de control y supervisión.                                                                                    
            //- Fin Carrusel
            p(data-aos="fade-left") El siguiente ejemplo permite comprender cómo un mismo indicador financiero puede tener interpretaciones diferentes según el usuario que lo analiza.            
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una misma empresa puede presentar una razón corriente de 1,2. Para la gerencia, ese dato puede ser una alerta para revisar el flujo de caja; para un banco, puede ser un elemento de análisis de riesgo crediticio; para un proveedor, puede influir en la decisión de otorgar crédito comercial; y para los socios, puede indicar necesidad de fortalecer capital de trabajo.
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img11.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p(data-aos="fade-left") Esto demuestra que un indicador financiero no tiene un único uso. Su interpretación depende del usuario, del propósito del análisis y de las condiciones reales de la empresa.
      Separador
      //- Inicio Tema1.9
      .row
        #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.9 Evidencia de aprendizaje: cuadro descriptivo
      p(data-aos="fade-left") La evidencia consiste en elaborar un cuadro descriptivo que relacione conceptos contables y financieros con su aplicación en la gestión y el análisis financiero. La tabla sirve como modelo para organizar conceptos como activo, pasivo, patrimonio, indicadores, análisis vertical, horizontal, liquidez, endeudamiento y rentabilidad.
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span  Modelo de cuadro descriptivo para la evidencia
          .tabla-a
            table
              thead
                tr
                  th(style="width: 10%") Concepto
                  th(style="width: 30%") Descripción aplicada
                  th(style="width: 30%") Uso en el análisis financiero
                  th(style="width: 30%") Ejemplo
              tbody
                tr
                  td Activo
                  td Recursos y derechos controlados por la empresa
                  td Analizar liquidez, inversión y uso de recursos
                  td Caja, bancos, inventarios
                tr
                  td Pasivo
                  td Obligaciones con terceros
                  td Evaluar endeudamiento y capacidad de pago
                  td Proveedores, créditos
                tr
                  td Patrimonio
                  td Recursos propios y resultados acumulados
                  td Analizar respaldo financiero
                  td Capital, reservas
                tr
                  td Ingresos
                  td Valores generados por ventas o servicios
                  td Medir generación de recursos
                  td Ventas del periodo
                tr
                  td Costos
                  td Recursos consumidos para producir o vender
                  td Evaluar margen de ganancia
                  td Costo de ventas
                tr
                  td Gastos
                  td Desembolsos necesarios para operar
                  td Controlar administración y ventas
                  td Arriendo, nómina
                tr
                  td Utilidad
                  td Resultado después de costos y gastos
                  td Evaluar rentabilidad
                  td Utilidad neta
                tr
                  td Indicador financiero
                  td Relación entre cifras contables
                  td Medir liquidez, gestión, deuda o rentabilidad
                  td Razón corriente
                tr
                  td Análisis vertical
                  td Participación de una cuenta en un total
                  td Evaluar estructura financiera
                  td Inventarios / activo total
                tr
                  td Análisis horizontal
                  td Comparación entre periodos
                  td Evaluar variaciones y tendencias
                  td Cambio en ventas
      //- FinTabla
      Separador
      //- Inicio Tema1.10
      .row
        #t_1_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.10 Síntesis del capítulo: indicadores financieros como instrumentos de medición                    
      p(data-aos="fade-left") Los indicadores financieros convierten datos contables en información útil para analizar liquidez, actividad, endeudamiento y rentabilidad. Esta síntesis integra estados financieros, métodos de análisis e indicadores para apoyar la interpretación de resultados y la toma de decisiones empresariales.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta06_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Punto de partida: estados financieros
                p Los estados financieros reúnen la información contable necesaria para el análisis. En ellos se identifican activos, pasivos, patrimonio, ingresos, costos, gastos y utilidades.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Métodos básicos de análisis
                p El análisis vertical permite calcular la participación de las cuentas dentro de un total. El análisis horizontal facilita comparar cifras entre periodos e identificar variaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Indicadores financieros
                p Los indicadores relacionan cuentas contables para medir condiciones específicas de la empresa, como liquidez, actividad, endeudamiento y rentabilidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Función en la gestión empresarial
                p Los indicadores permiten medir, comparar, controlar, alertar y preparar información para decisiones relacionadas con operación, financiación, inversión y control.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Interpretación de resultados
                p El análisis financiero no se limita al cálculo de fórmulas. Requiere interpretar los resultados según la calidad de la información, el contexto empresarial y el propósito del análisis.                                              
      //- Fin Slideshow
      p(data-aos="fade-left") Los indicadores financieros requieren estados financieros, métodos básicos de análisis e interpretación responsable para comprender la situación financiera de la empresa y orientar decisiones de gestión.

</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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

<style lang="sass"></style>

