<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Indicadores financieros de liquidez, actividad, endeudamiento y rentabilidad
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t3/img1.png' style="width: 500px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-2.p-4(data-aos="fade-right")
            p Los indicadores financieros miden liquidez, actividad, endeudamiento y rentabilidad a partir de los estados financieros. Complementan el análisis vertical y horizontal al profundizar en participaciones, variaciones, capacidad de pago, gestión de recursos y generación de utilidad.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Concepto y utilidad de los indicadores financieros
      p(data-aos="fade-left") Los indicadores financieros convierten datos contables en medidas útiles para analizar resultados, comparar periodos, controlar comportamientos y apoyar decisiones empresariales. Sus funciones son:
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
                              img(src='@/assets/curso/temas/t3/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Medir
                            p Permite cuantificar una condición financiera específica.
                            p <b>Ejemplo:</b> calcular la razón corriente para medir liquidez.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Comparar
                            p Permite revisar resultados entre periodos, metas internas o referencias de gestión.
                            p <b>Ejemplo:</b> comparar el margen neto del año 1 y año 2.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Controlar
                            p Permite hacer seguimiento a comportamientos financieros que requieren revisión.
                            p <b>Ejemplo:</b> verificar el aumento de gastos o endeudamiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Alertar
                            p Permite identificar situaciones que requieren atención.
                            p <b>Ejemplo:</b> detectar cartera alta o bajo efectivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Analizar
                            p Permite relacionar cuentas para interpretar resultados.
                            p <b>Ejemplo:</b> comparar utilidad frente a ventas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta01_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Preparar decisiones
                            p Permite aportar información para acciones posteriores.  
                            p <b>Ejemplo:</b> revisar crédito, compras, pagos o costos.
            //- Fin Carrusel
            p Este caso aplica el margen neto para medir qué porcentaje de las ventas se convierte en utilidad final.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t3/img2.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta ventas por $ 400.000.000 y utilidad neta por $ 20.000.000. Si se observa solo la utilidad, podría afirmarse que la empresa obtuvo ganancia. Sin embargo, al calcular el margen neto se obtiene:
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Margen neto = utilidad neta / ventas × 100
                    p Margen neto = $ 20.000.000 / $ 400.000.000 × 100
                    p Margen neto = 5 %
                p Este resultado indica que por cada $ 100 vendidos, la empresa conserva $ 5 como utilidad final. La lectura financiera permite revisar si ese margen es suficiente frente a sus costos, gastos, metas internas o resultados de años anteriores.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5        
            Separador
            //- Inicio Tema3.2
            .row
              #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 3.2 Indicadores de liquidez
            p(data-aos="fade-left") Los indicadores de liquidez evalúan la capacidad de pago a corto plazo usando activo corriente y pasivo corriente. Cada uno aporta una lectura específica sobre los recursos disponibles y las obligaciones próximas, así:          
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t3/img3.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Razón corriente")
                        p.mb-4 Se calcula dividiendo el activo corriente entre el pasivo corriente. Mide el respaldo general de corto plazo e indica cuántos pesos de activo corriente respaldan cada peso de deuda corriente. La fórmula es:
                        p.fw-bold Razón corriente = activo corriente / pasivo corriente
                    .row(titulo="Prueba ácida")
                        p.mb-4 Se calcula restando los inventarios al activo corriente y dividiendo el resultado entre el pasivo corriente. Mide la capacidad de pago sin depender de la venta de inventarios. Su es fórmula es:
                        p.fw-bold Prueba ácida = (activo corriente - inventarios) / pasivo corriente
                    .row(titulo="Capital de trabajo neto")
                        p.mb-4 Se calcula restando el pasivo corriente al activo corriente. Mide el excedente o déficit de recursos corrientes después de cubrir obligaciones de corto plazo. La fórmula se escribe a continuación:
                        p.fw-bold Capital de trabajo neto = activo corriente - pasivo corriente
              p(data-aos="fade-left") Con los datos del activo corriente, inventarios y pasivo corriente, en el siguiente ejemplo se calculan indicadores que permiten evaluar la liquidez empresarial:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t3/img4.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa tiene activo corriente por $ 120.000.000, inventarios por $ 45.000.000 y pasivo corriente por $ 80.000.000.
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Razón corriente = $ 120.000.000 / $ 80.000.000 = 1,50
                    p Prueba ácida = ($ 120.000.000 - $ 45.000.000) / $ 80.000.000 = 0,94
                    p Capital de trabajo neto = $ 120.000.000 - $ 80.000.000 = $ 40.000.000
                p La razón corriente indica que la empresa tiene $ 1,50 de activo corriente por cada $ 1 de obligación corriente. Sin embargo, la prueba ácida baja a 0,94 al excluir inventarios, lo que muestra que la liquidez depende parcialmente de la venta de mercancía. El capital de trabajo es positivo, pero debe revisarse la calidad de la cartera y la rotación de inventarios.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Indicadores de actividad o gestión
      p Los indicadores de actividad evalúan la eficiencia en el uso de cartera, inventarios, proveedores y activos, para reconocer su conversión en efectivo, ventas o resultados. Estos son:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rotación de cartera
                p Mide cuántas veces se recupera la cartera durante un periodo. Una mayor rotación indica recaudo más frecuente. Su fórmula es:
                p.bg-color-2.p-2.d-inline-block Rotación de cartera = ventas a crédito / cuentas por cobrar promedio
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Días de cartera
                p Mide el tiempo promedio que tarda la empresa en recuperar sus cuentas por cobrar. Menos días suelen indicar mejor recuperación. La fórmula es:
                p.bg-color-2.p-2.d-inline-block Días de cartera = 360 / rotación de cartera
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rotación de inventarios
                p Mide cuántas veces se renueva el inventario durante un periodo. Una mayor rotación indica salida más rápida de mercancía. La fórmula es:
                p.bg-color-2.p-2.d-inline-block Rotación de inventarios = costo de ventas / inventario promedio
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Días de inventario
                p Mide el tiempo promedio que permanece el inventario en la empresa. Más días pueden indicar acumulación de mercancía. La fórmula es:
                p.bg-color-2.p-2.d-inline-block Días de inventario = 360 / rotación de inventarios
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rotación de proveedores
                p Mide cuántas veces se pagan las obligaciones con proveedores durante un periodo. Permite revisar los plazos de pago. Su fórmula es:
                p.bg-color-2.p-2.d-inline-block Rotación de proveedores = compras a crédito / proveedores promedio
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rotación de activos
                p Mide la capacidad de los activos para generar ventas. Una mayor rotación indica un uso más productivo de los activos. La fórmula es:
                p.bg-color-2.p-2.d-inline-block Rotación de activos = ventas / total activos
      //- Fin Slideshow
      p.mb-5 Con los datos de ventas a crédito y cuentas por cobrar, en el siguiente ejemplo se analiza la recuperación de cartera de la empresa.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t3/img5.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta ventas a crédito por $ 180.000.000 y cuentas por cobrar promedio por $ 30.000.000.
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Rotación de cartera = $ 180.000.000 / $ 30.000.000 = 6 veces
                    p Días de cartera = 360 / 6 = 60 días
                p El resultado indica que la empresa recupera su cartera aproximadamente cada 60 días. Si su política de crédito es de 30 días, existe una demora que puede afectar el flujo de caja. En ese caso, se debe revisar seguimiento a clientes, condiciones de crédito, cartera vencida y estrategias de recaudo.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Indicadores de endeudamiento
      p(data-aos="fade-left") Los indicadores de endeudamiento evalúan qué parte de los recursos de la empresa está financiada con obligaciones. Ayudan a reconocer la dependencia de terceros y la presión que las deudas pueden generar sobre la estabilidad financiera. Consulte cada indicador para analizar la financiación con deuda, la dependencia de terceros y la capacidad de cubrir intereses.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t3/img6.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row.g-0(titulo="Nivel de endeudamiento")
                        p.mb-4 Mide el porcentaje de activos financiados con deuda. Un mayor porcentaje indica mayor dependencia de terceros.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> total pasivo / total activo × 100
                    .row(titulo="Concentración del endeudamiento")
                        p.mb-4 Mide la proporción de deudas exigibles en el corto plazo. Una mayor concentración aumenta la presión de pagos próximos.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> pasivo corriente / total pasivo × 100
                    .row(titulo="Relación deuda-patrimonio")
                        p.mb-4 Compara los recursos financiados por terceros con los recursos propios. Muestra cuánta deuda existe por cada peso de patrimonio.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> total pasivo / patrimonio
                    .row(titulo="Cobertura de intereses")
                        p.mb-4 Mide la capacidad de la utilidad operacional para cubrir los gastos financieros. Una mayor cobertura indica mejor capacidad para pagar intereses.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> utilidad operacional / gastos financieros
            //- Fin Accordion
      p(data-aos="fade-left") Con los datos de pasivo, activo y patrimonio, en el siguiente ejemplo se analiza qué proporción de los recursos está financiada con obligaciones y cómo se relaciona la deuda con el patrimonio.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t3/img7.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa tiene total pasivo por $ 150.000.000, total activo por $ 300.000.000 y patrimonio por $ 150.000.000.
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Nivel de endeudamiento = $ 150.000.000 / $ 300.000.000 × 100 = 50 %
                    p Relación deuda-patrimonio = $ 150.000.000 / $ 150.000.000 = 1,0
                p El nivel de endeudamiento del 50 % indica que la mitad de los activos está financiada con obligaciones. La relación deuda-patrimonio de 1,0 muestra que por cada peso de patrimonio existe un peso de deuda. Esta estructura puede ser manejable si la empresa mantiene utilidad, flujo de caja y control sobre sus obligaciones.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Indicadores de rentabilidad
      p(data-aos="fade-left") Los indicadores de rentabilidad evalúan la capacidad de la empresa para generar utilidad a partir de sus ventas, activos y patrimonio. Permiten analizar si los recursos se usan eficientemente y si los resultados son suficientes frente a la operación. Estos son:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t3/img8.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Margen bruto")
                        p.mb-4 Mide la ganancia que queda después de cubrir el costo de ventas. Indica cuánto queda para cubrir gastos y generar utilidad.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> utilidad bruta / ventas × 100.
                    .row(titulo="Margen operacional")
                        p.mb-4 Mide el resultado de la actividad principal de la empresa. Permite evaluar la eficiencia operativa.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> utilidad operacional / ventas × 100.
                    .row(titulo="Margen neto")
                        p.mb-4 Mide la utilidad final obtenida sobre las ventas. Indica cuánto queda como ganancia después de costos, gastos e impuestos.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> utilidad neta / ventas × 100.
                    .row(titulo="ROA")
                        p.mb-4 Mide la rentabilidad generada por los activos. Permite evaluar la capacidad de los activos para producir utilidad.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> utilidad neta / total activos × 100.
                    .row(titulo="ROE")
                        p.mb-4 Mide la rentabilidad del patrimonio. Permite analizar el rendimiento obtenido por los propietarios.
                          div.mt-3
                            span.bg-color-2.p-2.d-inline-block <b>Fórmula:</b> utilidad neta / patrimonio × 100.
      p.mb-5 El siguiente ejemplo aplica indicadores de rentabilidad para analizar cuánto generan las ventas, los activos y el patrimonio en términos de utilidad.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t3/img9.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta ventas por $ 500.000.000, utilidad bruta por $ 180.000.000, utilidad operacional por $ 90.000.000, utilidad neta por $ 45.000.000, total activos por $ 350.000.000 y patrimonio por $ 180.000.000.
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Margen bruto = $ 180.000.000 / $ 500.000.000 × 100 = 36 %
                    p Margen operacional = $ 90.000.000 / $ 500.000.000 × 100 = 18 %
                    p Margen neto = $ 45.000.000 / $ 500.000.000 × 100 = 9 %
                    p ROA = $ 45.000.000 / $ 350.000.000 × 100 = 12,9 %
                    p ROE = $ 45.000.000 / $ 180.000.000 × 100 = 25 %
                p La empresa conserva $ 9 de utilidad neta por cada $ 100 vendidos. Además, los activos generan una rentabilidad del 12,9 % y el patrimonio una rentabilidad del 25 %. Estos resultados deben compararse con periodos anteriores o metas internas para establecer si muestran mejora, estabilidad o deterioro.
      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Parámetros para comparar indicadores financieros
      p Los indicadores financieros necesitan referencias de comparación para interpretarse correctamente. Un resultado aislado puede llevar a conclusiones incompletas, por eso debe analizarse frente a periodos anteriores, metas, presupuesto, sector económico, políticas internas y condiciones del negocio. Los parámetros son:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t3/img3.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Periodos anteriores")
                        p.mb-4 Permiten revisar la evolución o deterioro del resultado.
                        p <b>Ejemplo: comparar el margen neto del año actual con el año anterior.</b>
                    .row(titulo="Metas internas")
                        p.mb-4 Permiten verificar el cumplimiento de objetivos financieros definidos por la empresa.
                        p <b>Ejemplo: revisar si la liquidez alcanzó la meta establecida.</b>
                    .row(titulo="Presupuesto")
                        p.mb-4 Permite comparar lo planeado con lo ejecutado.
                        p <b>Ejemplo: contrastar gastos reales con gastos presupuestados.</b>
                    .row(titulo="Sector económico")
                        p.mb-4 Permite analizar el comportamiento frente a empresas. similares.
                        p <b>Ejemplo: comparar rentabilidad con empresas comerciales similares.</b>
                    .row(titulo="Políticas internas")
                        p.mb-4 Permiten revisar la coherencia entre el indicador y las decisiones de la empresa.
                        p <b>Ejemplo: comparar días de cartera con la política de crédito.</b>
                    .row(titulo="Tamaño y ciclo operativo")
                        p.mb-4 Permiten considerar las condiciones propias del negocio.
                        p <b>Ejemplo: analizar inventarios según el tipo de actividad económica.</b>
            //- Fin Accordion
      p.mb-5(data-aos="fade-left") Para mayor comprensión del tema, se desarrolla el siguiente ejemplo:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t3/img11.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa tiene días de cartera de 75 días. Este resultado no puede calificarse inmediatamente como bueno o malo. Si la política de crédito de la empresa es de 60 días, existe una demora de 15 días. Si el año anterior el resultado era de 95 días, entonces se observa una mejora. Si el sector maneja plazos de 45 días, todavía puede existir una desventaja frente al mercado.
                p La interpretación depende del contexto. Por eso, el indicador debe compararse antes de formular conclusiones.
      p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo integrador que permite aplicar los indicadores financieros de liquidez, actividad, endeudamiento y rentabilidad. 
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.bg-color-2.p-5
          p.fw-bold Ejemplo integrador
          p.mb-5 La empresa Comercial Oriente S.A.S. presenta la siguiente información del año 2:
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 7.
                span  Información financiera para calcular indicadores
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Cuenta o dato
                      th(style="width: 40%") Valor
                  tbody
                    tr
                      td Activo corriente
                      td $ 150.000.000
                    tr
                      td Inventarios
                      td $ 60.000.000
                    tr
                      td Pasivo corriente
                      td $ 90.000.000
                    tr
                      td Total activo
                      td $ 320.000.000
                    tr
                      td Total pasivo
                      td $ 180.000.000
                    tr
                      td Patrimonio
                      td $ 140.000.000
                    tr
                      td Ventas
                      td $ 420.000.000
                    tr
                      td Ventas a crédito
                      td $ 300.000.000
                    tr
                      td Costo de ventas
                      td $ 260.000.000
                    tr
                      td Utilidad bruta
                      td $ 160.000.000
                    tr
                      td Utilidad operacional
                      td $ 75.000.000
                    tr
                      td Gastos financieros
                      td $ 15.000.000
                    tr
                      td Utilidad neta
                      td $ 45.000.000
                    tr
                      td Cuentas por cobrar promedio
                      td $ 50.000.000
                    tr
                      td Inventario promedio
                      td $ 65.000.000

          p.mb-5 La tabla presenta los datos necesarios para calcular indicadores financieros básicos.
          p Se deben realizar los siguientes cálculos de indicadores de liquidez, actividad, endeudamiento y rentabilidad.
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 8.
                span  Información financiera para calcular indicadores
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 15%") Grupo
                      th(style="width: 15%") Indicador
                      th(style="width: 55%") Cálculo
                      th(style="width: 15%") Resultado
                  tbody
                    tr
                      td Liquidez
                      td Razón corriente
                      td $ 150.000.000 / $ 90.000.000
                      td 1,67
                    tr
                      td Liquidez
                      td Prueba ácida
                      td ($ 150.000.000 - $ 60.000.000) / $ 90.000.000
                      td 1,00
                    tr
                      td Liquidez
                      td Capital de trabajo neto
                      td $ 150.000.000 - $ 90.000.000
                      td $ 60.000.000
                    tr
                      td Actividad
                      td Rotación de cartera
                      td $ 300.000.000 / $ 50.000.000
                      td 6 veces
                    tr
                      td Actividad
                      td Días de cartera
                      td 360 / 6
                      td 60 días
                    tr
                      td Actividad
                      td Rotación de inventarios
                      td $ 260.000.000 / $ 65.000.000
                      td 4 veces
                    tr
                      td Actividad
                      td Días de inventario
                      td 360 / 4
                      td 90 días
                    tr
                      td Endeudamiento
                      td Nivel de endeudamiento
                      td $ 180.000.000 / $ 320.000.000 × 100
                      td 56,3 %
                    tr
                      td Endeudamiento
                      td Relación deuda-patrimonio
                      td $ 180.000.000 / $ 140.000.000
                      td 1,29
                    tr
                      td Endeudamiento
                      td Cobertura de intereses
                      td $ 75.000.000 / $ 15.000.000
                      td 5 veces
                    tr
                      td Rentabilidad
                      td Margen bruto
                      td $ 160.000.000 / $ 420.000.000 × 100
                      td 38,1 %
                    tr
                      td Rentabilidad
                      td Margen operacional
                      td $ 75.000.000 / $ 420.000.000 × 100
                      td 17,9 %
                    tr
                      td Rentabilidad
                      td Margen neto
                      td $ 45.000.000 / $ 420.000.000 × 100
                      td 10,7 %
                    tr
                      td Rentabilidad
                      td ROA
                      td $ 45.000.000 / $ 320.000.000 × 100
                      td 14,1 %
                    tr
                      td Rentabilidad
                      td ROE
                      td $ 45.000.000 / $ 140.000.000 × 100
                      td 32,1 %
              p.mt-5 Tabla con fines didácticos para integrar el cálculo de indicadores financieros básicos.
              p <b>Interpretación del caso:</b> la empresa presenta capacidad general de pago, con una razón corriente de 1,67; sin embargo, la prueba ácida de 1,00 muestra que su liquidez depende en parte de los inventarios. La cartera se recupera en 60 días y los inventarios permanecen cerca de 90 días, por lo que deben compararse con las políticas internas para identificar posibles demoras o acumulación de mercancía. El endeudamiento de 56,3 % requiere seguimiento, aunque la cobertura de intereses de 5 veces indica capacidad para cubrir gastos financieros. En rentabilidad, el margen neto de 10,7 %, el ROA de 14,1 % y el ROE de 32,1 % son favorables, pero deben compararse con periodos anteriores. En conjunto, la empresa genera utilidad, pero debe revisar cartera, inventarios y nivel de endeudamiento.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
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

<style lang="sass"></style>
