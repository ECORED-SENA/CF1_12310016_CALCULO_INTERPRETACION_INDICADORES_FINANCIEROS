<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Aplicación de indicadores en resultados contables
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t5/img1.png' style="width: 500px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-2.p-4(data-aos="fade-right")
            p La aplicación de indicadores financieros permite analizar la situación empresarial a partir de estados financieros, participaciones, variaciones e indicadores de liquidez, actividad, endeudamiento y rentabilidad. Este capítulo integra conceptos contables, análisis vertical y horizontal, hoja electrónica e indicadores para organizar resultados y apoyar procesos de interpretación, diagnóstico e informe financiero.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            Separador
            //- Inicio Tema5.1
            .row
              #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 5.1 Preparación de la información financiera para el análisis
            p Antes de calcular indicadores, la información financiera debe estar organizada, completa y clasificada. Esto permite identificar las cuentas necesarias para cada fórmula y evitar resultados equivocados por datos incompletos o mal ubicados. A continuación, se relaciona la información contable necesaria con los indicadores que pueden calcularse:
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
                              img(src='@/assets/curso/temas/t5/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Activo corriente
                            p Proviene del estado de situación financiera. Se utiliza para calcular razón corriente, prueba ácida y capital de trabajo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pasivo corriente
                            p Proviene del estado de situación financiera. Se usa en razón corriente, prueba ácida y concentración del endeudamiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inventarios
                            p Provienen del estado de situación financiera. Se utilizan en prueba ácida y rotación de inventarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cuentas por cobrar
                            p Provienen del estado de situación financiera. Se usan para calcular rotación de cartera y días de cartera.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Total activo
                            p Proviene del estado de situación financiera. Se utiliza en nivel de endeudamiento, ROA y rotación de activos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Total pasivo
                            p Proviene del estado de situación financiera. Se usa en nivel de endeudamiento y relación deuda-patrimonio.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Patrimonio
                            p Proviene del estado de situación financiera. Se utiliza en relación deuda-patrimonio y ROE.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ventas
                            p Provienen del estado de resultados. Se usan en márgenes de rentabilidad y rotación de activos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Costo de ventas
                            p Proviene del estado de resultados. Se utiliza en rotación de inventarios y margen bruto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_10.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Utilidad neta
                            p Proviene del estado de resultados. Se usa para calcular margen neto, ROA y ROE.
            //- Fin Carrusel
            p(data-aos="fade-left") En el siguiente ejemplo se presenta cómo seleccionar únicamente las cuentas necesarias para calcular la razón corriente, el margen neto y el nivel de endeudamiento.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t5/img2.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa desea calcular su razón corriente, margen neto y nivel de endeudamiento. Para ello, no necesita tomar todas las cuentas de los estados financieros, sino aquellas que alimentan cada fórmula.
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Razón corriente = activo corriente / pasivo corriente
                    p Margen neto = utilidad neta / ventas × 100
                    p Nivel de endeudamiento = total pasivo / total activo × 100
                p Si alguna de estas cuentas está mal clasificada o incompleta, el indicador pierde confiabilidad. Por esta razón, la preparación de datos es una etapa necesaria antes del cálculo.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Aplicación de indicadores en el estado de situación financiera
      p(data-aos="fade-left") El estado de situación financiera permite analizar liquidez, endeudamiento y estructura financiera. Sus cuentas ayudan a identificar recursos corrientes, financiación con deuda, relación entre patrimonio y obligaciones, así como alertas en cartera, inventarios y pasivos corrientes. La siguiente tabla presenta información contable resumida para aplicar indicadores financieros:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.mb-5.justify-content-center(data-aos="fade-left")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 16.
                  span Estado de situación financiera resumido de Comercial Andina S.A.S.
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 60%") Cuenta
                        th(style="width: 20%") Año 1
                        th(style="width: 20%") Año 2
                    tbody
                      tr
                        td Caja y bancos
                        td $ 22.000.000
                        td $ 18.000.000
                      tr
                        td Cuentas por cobrar
                        td $ 38.000.000
                        td $ 55.000.000
                      tr
                        td Inventarios
                        td $ 50.000.000
                        td $ 70.000.000
                      tr
                        td Total activo corriente
                        td $ 110.000.000
                        td $ 143.000.000
                      tr
                        td Propiedad, planta y equipo
                        td $ 140.000.000
                        td $ 157.000.000
                      tr
                        td Total activo
                        td $ 250.000.000
                        td $ 300.000.000
                      tr
                        td Pasivo corriente
                        td $ 70.000.000
                        td $ 95.000.000
                      tr
                        td Pasivo no corriente
                        td $ 55.000.000
                        td $ 75.000.000
                      tr
                        td Total pasivo
                        td $ 125.000.000
                        td $ 170.000.000
                      tr
                        td Patrimonio
                        td $ 125.000.000
                        td $ 130.000.000
                      tr
                        td Total pasivo más patrimonio
                        td $ 250.000.000
                        td $ 300.000.000
                p.mb-5.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para aplicar indicadores financieros a partir del estado de situación financiera.electrónica.
              p.mb-5(data-aos="fade-left") La siguiente tabla presenta indicadores de liquidez y endeudamiento calculados con la información del año 2.
              //- Inicio Tabla
              .row.mb-5.justify-content-center(data-aos="fade-left")
                .col-md-auto.col-lg-10
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 17.
                    span Indicadores aplicados al estado de situación financiera
                  .tabla-a
                    table
                      thead
                        tr
                          th(style="width: 15%") Grupo
                          th(style="width: 30%") Indicador
                          th(style="width: 40%") Fórmula aplicada
                          th(style="width: 15%") Resultado
                      tbody
                        tr
                          td Liquidez
                          td Razón corriente
                          td $ 143.000.000 / $ 95.000.000
                          td 1,51
                        tr
                          td Liquidez
                          td Prueba ácida
                          td ($ 143.000.000 - $ 70.000.000) / $ 95.000.000
                          td 0,77
                        tr
                          td Liquidez
                          td Capital de trabajo neto
                          td $ 143.000.000 - $ 95.000.000
                          td $ 48.000.000
                        tr
                          td Endeudamiento
                          td Nivel de endeudamiento
                          td $ 170.000.000 / $ 300.000.000 × 100
                          td 56,7 %
                        tr
                          td Endeudamiento
                          td Concentración del endeudamiento
                          td $ 95.000.000 / $ 170.000.000 × 100
                          td 55,9 %
                        tr
                          td Endeudamiento
                          td Relación deuda-patrimonio
                          td $ 170.000.000 / $ 130.000.000
                          td 1,31
                  p.mb-5.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para calcular indicadores financieros a partir del estado de situación financiera.
                  p <b>Interpretación inicial:</b> la razón corriente de 1,51 indica respaldo general para cubrir obligaciones de corto plazo; sin embargo, la prueba ácida de 0,77 muestra que, sin inventarios, la liquidez es insuficiente y depende de su rotación y de la recuperación de cartera.
                  p El endeudamiento de 56,7 % evidencia que más de la mitad de los activos está financiada con obligaciones. Además, el 55,9 % del pasivo vence a corto plazo y la relación deuda-patrimonio de 1,31 muestra mayor dependencia de deuda frente al patrimonio.                        
            Separador
            //- Inicio Tema5.3
            .row
              #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 5.3 Aplicación de indicadores en el estado de resultados
            p El estado de resultados permite analizar ventas, costos, gastos y utilidad para calcular indicadores de rentabilidad. Estos muestran cuánto queda de las ventas y si los activos y el patrimonio generan utilidad, considerando tanto el resultado final como su composición. La siguiente tabla presenta información del estado de resultados para aplicar indicadores de rentabilidad.
      //- Inicio Tabla
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-md-auto.col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 18.
            span Estado de resultados resumido de Comercial Andina S.A.S.
          .tabla-a
            table
              thead
                tr
                  th(style="width: 60%") Concepto
                  th(style="width: 20%") Año 1
                  th(style="width: 20%") Año 2
              tbody
                tr
                  td Ventas
                  td $ 360.000.000
                  td $ 450.000.000
                tr
                  td Costo de ventas
                  td $ 216.000.000
                  td $ 292.500.000
                tr
                  td Utilidad bruta
                  td $ 144.000.000
                  td $ 157.500.000
                tr
                  td Gastos operacionales
                  td $ 82.000.000
                  td $ 102.000.000
                tr
                  td Utilidad operacional
                  td $ 62.000.000
                  td $ 55.500.000
                tr
                  td Gastos financieros
                  td $ 12.000.000
                  td $ 16.500.000
                tr
                  td Utilidad antes de impuestos
                  td $ 50.000.000
                  td $ 39.000.000
                tr
                  td Impuesto de renta
                  td $ 17.500.000
                  td $ 13.650.000
                tr
                  td Utilidad neta
                  td $ 32.500.000
                  td $ 25.350.000
            p.mb-5.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para aplicar indicadores financieros a partir del estado de resultados.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5         
            p.mb-5(data-aos="fade-left") A continuación, mediante tabla se presentan los indicadores de rentabilidad calculados con información del año 2.
            //- Inicio Tabla
            .row.mb-5.justify-content-center(data-aos="fade-left")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 19.
                  span Indicadores aplicados al estado de resultados
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 33%") Indicador
                        th(style="width: 33%") Fórmula aplicada
                        th(style="width: 33%") Resultado
                    tbody
                      tr
                        td Margen bruto
                        td $ 157.500.000 / $ 450.000.000 × 100
                        td 35,0 %
                      tr
                        td Margen operacional
                        td $ 55.500.000 / $ 450.000.000 × 100
                        td 12,3 %
                      tr
                        td Margen neto
                        td $ 25.350.000 / $ 450.000.000 × 100
                        td 5,6 %
                      tr
                        td ROA
                        td $ 25.350.000 / $ 300.000.000 × 100
                        td 8,5 %
                      tr
                        td ROE
                        td $ 25.350.000 / $ 130.000.000 × 100
                        td 19,5 %
                      tr
                        td Cobertura de intereses
                        td $ 55.500.000 / $ 16.500.000
                        td 3,36 veces
                  p.mb-5.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para calcular indicadores de rentabilidad y cobertura a partir del estado de resultados.
                  p <b>Interpretación inicial:</b> el margen bruto de 35,0 % indica que por cada $ 100 vendidos quedan $ 35 después del costo de ventas. El margen operacional de 12,3 % refleja el efecto de los gastos operacionales y el margen neto de 5,6 % muestra la utilidad final conservada.
                  p El ROA de 8,5 % mide la rentabilidad sobre activos y el ROE de 19,5 % el rendimiento sobre patrimonio. La cobertura de intereses de 3,36 veces indica capacidad para cubrir gastos financieros, aunque estos deben vigilarse por su aumento frente al año anterior.
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Lectura comparativa de resultados financieros
      p.mb-5(data-aos="fade-left") La lectura comparativa analiza la evolución de los indicadores frente al año anterior para identificar mejoras, estabilidad o deterioro. También permite relacionar resultados entre sí, como ventas y margen neto, razón corriente y prueba ácida, o endeudamiento y rentabilidad. En la siguiente tabla se compara indicadores financieros de Comercial Andina S.A.S. entre el año 1 y el año 2.
      //- Inicio Tabla
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 20.
            span Comparación de indicadores entre periodos
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Indicador
                  th(style="width: 20%") Año 1
                  th(style="width: 20%") Año 2
                  th(style="width: 40%") Lectura comparativa
              tbody
                tr
                  td Razón corriente
                  td 1,57
                  td 1,51
                  td Leve disminución en capacidad general de pago
                tr
                  td Prueba ácida
                  td 0,86
                  td 0,77
                  td Menor liquidez sin depender de inventarios
                tr
                  td Capital de trabajo neto
                  td $ 40.000.000
                  td $ 48.000.000
                  td Aumenta en valor, pero debe revisarse su composición
                tr
                  td Nivel de endeudamiento
                  td 50,0 %
                  td 56,7 %
                  td Aumenta la financiación con terceros
                tr
                  td Relación deuda-patrimonio
                  td 1,00
                  td 1,31
                  td Crece el peso de la deuda frente al patrimonio
                tr
                  td Margen bruto
                  td 40,0 %
                  td 35,0 %
                  td Disminuye el margen después del costo de ventas
                tr
                  td Margen operacional
                  td 17,2 %
                  td 12,3 %
                  td Deterioro en el resultado operativo
                tr
                  td Margen neto
                  td 9,0 %
                  td 5,6 %
                  td Menor utilidad final sobre ventas
                tr
                  td ROA
                  td 13,0 %
                  td 8,5 %
                  td Disminuye la rentabilidad de los activos
                tr
                  td ROE
                  td 26,0 %
                  td 19,5 %
                  td Disminuye el rendimiento del patrimonio
            p.mb-5.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para comparar indicadores financieros entre dos periodos.
            p <b>Interpretación comparativa:</b> la empresa aumentó su capital de trabajo neto, pero la prueba ácida disminuyó, lo que sugiere que el activo corriente está concentrado en inventarios o cartera y no en recursos líquidos. Por ello, debe revisarse su composición antes de afirmar que la liquidez mejoró.
            p Además, el endeudamiento y la relación deuda-patrimonio aumentaron, mientras los márgenes de rentabilidad disminuyeron. Esta combinación indica mayor dependencia de financiación externa y menor utilidad sobre las ventas, lo que representa una señal de alerta financiera.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Identificación de alertas financieras iniciales
      p Las alertas financieras iniciales son señales que surgen al aplicar indicadores y comparar resultados. No representan conclusiones definitivas, pero permiten identificar aspectos que requieren revisión en liquidez, cartera, inventarios, endeudamiento, gastos o rentabilidad. Consulte cada alerta para reconocer qué resultado financiero requiere revisión y qué aspecto debe analizarse.
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
                              img(src='@/assets/curso/temas/t5/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Prueba ácida menor que 1
                            p Indica que los recursos líquidos pueden ser insuficientes sin depender de inventarios. Se recomienda revisar cartera, efectivo e inventarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cuentas por cobrar en aumento
                            p Puede señalar demora en los recaudos. Se debe revisar la política de crédito y la cartera vencida.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inventarios con alta participación
                            p Puede indicar recursos inmovilizados. Se recomienda revisar rotación de inventarios y productos de baja salida.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Endeudamiento creciente
                            p Muestra mayor dependencia de terceros. Se deben revisar plazos, tasas, obligaciones y capacidad de pago.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Margen bruto en disminución
                            p Puede indicar aumento del costo de ventas. Se recomienda revisar proveedores, precios, descuentos y costos de producción o comercialización.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Margen neto bajo
                            p Señala baja utilidad final. Se deben revisar costos, gastos operacionales, gastos financieros e impuestos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold ROA en disminución
                            p Indica menor rendimiento de los activos. Se recomienda analizar la productividad y el uso de los recursos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold ROE en disminución
                            p Muestra menor rendimiento para los propietarios. Se deben revisar la utilidad neta y la estructura patrimonial.                                                        
            //- Fin Carrusel
            p(data-aos="fade-left") El siguiente caso permite identificar alertas financieras iniciales cuando las ventas aumentan, pero los márgenes disminuyen y la estructura financiera presenta mayor presión.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t5/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p En Comercial Andina S.A.S. se observa que las ventas aumentaron, pero los márgenes de rentabilidad disminuyeron. Esta situación representa una alerta porque el crecimiento comercial no se está convirtiendo en mayor utilidad. Al revisar las cifras, se identifica que el costo de ventas creció de forma importante, afectando el margen bruto.
                p También se observa que el endeudamiento aumentó y la prueba ácida disminuyó. Esto sugiere que la empresa debe revisar su capacidad de pago, la composición del activo corriente y el peso de sus obligaciones. Estas alertas sirven como base para un análisis más profundo en la etapa de interpretación y toma de decisiones.
      p.mb-5(data-aos="fade-left") El siguiente caso integrador permite aplicar indicadores financieros a la información contable de dos periodos. Su propósito es calcular resultados de liquidez, actividad, endeudamiento y rentabilidad para identificar señales iniciales que orienten un análisis financiero posterior.
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.bg-color-2.p-5
          p.fw-bold Caso práctico integrador
          p.mb-5 La empresa Comercial del Sur S.A.S. presenta la siguiente información financiera resumida, así:
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-9
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 21.
                span  Estado de situación financiera resumido de Comercial del Sur S.A.S.
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Cuenta
                      th(style="width: 30%") Año 1
                      th(style="width: 30%") Año 2
                  tbody
                    tr
                      td Activo corriente
                      td $ 120.000.000
                      td $ 156.000.000
                    tr
                      td Inventarios
                      td $ 48.000.000
                      td $ 72.000.000
                    tr
                      td Total activo
                      td $ 260.000.000
                      td $ 340.000.000
                    tr
                      td Pasivo corriente
                      td $ 75.000.000
                      td $ 108.000.000
                    tr
                      td Total pasivo
                      td $ 130.000.000
                      td $ 204.000.000
                    tr
                      td Patrimonio
                      td $ 130.000.000
                      td $ 136.000.000                    
                p.mt-3.mb-5 Tabla con fines didácticos para aplicar indicadores financieros de liquidez y endeudamiento.
            p.mb-5(data-aos="fade-left") La siguiente tabla presenta información de ingresos, costos, gastos y utilidad para dos periodos:
            //- Inicio Tabla
            .row.mb-5
              .col-md-auto.col-lg-9
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 22.
                  span Estado de resultados resumido de Comercial del Sur S.A.S.
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Concepto
                        th(style="width: 30%") Año 1
                        th(style="width: 30%") Año 2
                    tbody
                      tr
                        td Ventas
                        td $ 400.000.000
                        td $ 520.000.000
                      tr
                        td Costo de ventas
                        td $ 240.000.000
                        td $ 348.400.000
                      tr
                        td Utilidad bruta
                        td $ 160.000.000
                        td $ 171.600.000
                      tr
                        td Utilidad operacional
                        td $ 82.000.000
                        td $ 78.000.000
                      tr
                        td Gastos financieros
                        td $ 14.000.000
                        td $ 22.000.000
                      tr
                        td Utilidad neta
                        td $ 45.000.000
                        td $ 36.000.000 
                  p.mt-3 Tabla con fines didácticos para aplicar indicadores financieros de rentabilidad y cobertura.
              p.mt-5(data-aos="fade-left") A continuación, se presenta información adicional del año 2:
              ul.lista-ul.color-vinotinto-custom.mb-0.p-1.d-inline-block.mb-5
                    li.d-flex
                      .fas.fa-check-circle.me-2
                      span Ventas a crédito: $ 390.000.000
                    li.d-flex
                      .fas.fa-check-circle.me-2
                      span Cuentas por cobrar promedio: $ 65.000.000
                    li.d-flex
                      .fas.fa-check-circle.me-2
                      span Inventario promedio: $ 80.000.000
              p La siguiente tabla presenta indicadores de liquidez, actividad, endeudamiento y rentabilidad calculados con información del año 2.                      
            //- Inicio Tabla
            .row.mb-5
              .col-md-auto.col-lg-9
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 23.
                  span Indicadores financieros del caso integrador
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") XXXXXXX
                        th(style="width: 20%") XXXXXXX
                        th(style="width: 40%") XXXXXXX
                        th(style="width: 20%") XXXXXXX
                    tbody
                      tr
                        td Liquidez
                        td Razón corriente
                        td $ 156.000.000 / $ 108.000.000
                        td 1,44
                      tr
                        td Liquidez
                        td Prueba ácida
                        td ($ 156.000.000 - $ 72.000.000) / $ 108.000.000
                        td 0,78
                      tr
                        td Liquidez
                        td Capital de trabajo neto
                        td $ 156.000.000 - $ 108.000.000
                        td $ 48.000.000
                      tr
                        td Actividad
                        td Rotación de cartera
                        td $ 390.000.000 / $ 65.000.000
                        td 6 veces
                      tr
                        td Actividad
                        td Días de cartera
                        td 360 / 6
                        td 60 días
                      tr
                        td Actividad
                        td Rotación de inventarios
                        td $ 348.400.000 / $ 80.000.000
                        td 4,36 veces
                      tr
                        td Actividad
                        td Días de inventario
                        td 360 / 4,36
                        td 83 días
                      tr
                        td Endeudamiento
                        td Nivel de endeudamiento
                        td $ 204.000.000 / $ 340.000.000 × 100
                        td 60,0 %
                      tr
                        td Endeudamiento
                        td Relación deuda-patrimonio
                        td $ 204.000.000 / $ 136.000.000
                        td 1,50
                      tr
                        td Endeudamiento
                        td Cobertura de intereses
                        td $ 78.000.000 / $ 22.000.000
                        td 3,55 veces
                      tr
                        td Rentabilidad
                        td Margen bruto
                        td $ 171.600.000 / $ 520.000.000 × 100
                        td 33,0 %
                      tr
                        td Rentabilidad
                        td Margen operacional
                        td 8.000.000 / $ 520.000.000 × 100
                        td 15,0 %
                      tr
                        td Rentabilidad
                        td Margen neto
                        td $ 36.000.000 / $ 520.000.000 × 100
                        td 6,9 %
                      tr
                        td Rentabilidad
                        td ROA
                        td $ 36.000.000 / $ 340.000.000 × 100
                        td 10,6 %
                      tr
                        td Rentabilidad
                        td ROE
                        td $ 36.000.000 / $ 136.000.000 × 100
                        td 26,5 %                                      
                  p.mt-3 Tabla con fines didácticos para integrar el cálculo de indicadores financieros básicos.
              p.mt-5(data-aos="fade-left") <b>Interpretación del caso:</b> la empresa presenta capacidad general de pago, pero la prueba ácida de 0,78 evidencia dependencia de inventarios. La cartera se recupera cada 60 días y los inventarios permanecen 83 días, lo que exige revisar recaudos y rotación. El endeudamiento de 60,0 % y la relación deuda-patrimonio de 1,50 muestran alta dependencia de obligaciones. Aunque la cobertura de intereses es de 3,55 veces, los márgenes disminuyen y el margen neto de 6,9 % refleja menor utilidad final. En conjunto, se identifican alertas sobre liquidez, actividad, endeudamiento y rentabilidad. 
      p(data-aos="fade-left") Para concluir, los temas desarrollados resaltan la importancia de organizar información contable confiable, calcular indicadores financieros y analizar resultados más allá de cifras aisladas. Este proceso permite identificar estructuras, variaciones, participaciones y condiciones de liquidez, actividad, endeudamiento y rentabilidad, como base para interpretar, diagnosticar, presentar informes y tomar decisiones financieras mejor sustentadas.
</template>

<script>
export default {
  name: 'Tema5',
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
