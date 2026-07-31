<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Métodos básicos de análisis financiero
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t2/img1.png' style="width: 500px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-2.p-4(data-aos="fade-right")
            p Los métodos básicos de análisis financiero permiten calcular participaciones y variaciones mediante el análisis vertical y horizontal, identificar cambios relevantes y preparar información para aplicar indicadores financieros con mayor precisión.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Concepto de análisis financiero
      p(data-aos="fade-left") El análisis financiero convierte datos contables en información útil sobre la situación económica de la empresa. Sus métodos básicos permiten revisar los estados financieros antes de calcular e interpretar indicadores. Estos son:
      .row.justify-content-center(data-aos="fade-left")
        .col-12          
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center.mb-5
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-7
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta01_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Análisis vertical 
                p Analiza la participación de cada cuenta dentro de un total. Entrega porcentajes de composición, como cuando los inventarios representan el 30 % del activo total.
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-7
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta01_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Análisis horizontal
                p Analiza la variación de una cuenta entre periodos. Entrega cambios en pesos y porcentajes, como cuando las ventas aumentan 20 % frente al año anterior.
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-7
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta01_3.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Indicadores financieros
                p Relacionan dos o más cifras financieras. Entregan mediciones sobre liquidez, actividad, endeudamiento o rentabilidad, como una razón corriente de 1,5.
          //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") El siguiente ejemplo permite diferenciar cómo el análisis vertical y el análisis horizontal aportan lecturas complementarias sobre una misma cuenta financiera.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch              
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t2/img2.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")      
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta activos por $ 200.000.000, de los cuales $ 60.000.000 corresponden a inventarios. Al aplicar análisis vertical, se identifica que los inventarios representan el 30 % del activo total. Esta lectura permite reconocer que una parte importante de los recursos está concentrada en mercancía.
      p(data-aos="fade-left") Si además los inventarios del año anterior eran $ 40.000.000, el análisis horizontal muestra un aumento de $ 20.000.000, equivalente al 50 %. Esta variación debe revisarse frente al comportamiento de las ventas, porque un aumento de inventarios puede ser positivo si responde a mayor demanda, pero puede ser riesgoso si representa mercancía acumulada.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Análisis vertical
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          p.p-5.rounded-4.bg-color-6.text-white Participación porcentual = cuenta analizada / total base × 100
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-2.p-4(data-aos="fade-right")
          p El análisis vertical calcula el porcentaje de cada cuenta frente a un total de referencia. Permite identificar el peso de activos, pasivos, patrimonio, costos, gastos y utilidades dentro de los estados financieros. La fórmula es:
      p(data-aos="fade-left") Cada estado financiero utiliza una base de comparación específica para interpretar la participación de sus cuentas. Esto se explica a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta02_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Estado de situación financiera: activos
                    p.mb-0 Las cuentas de activos corrientes y no corrientes se comparan con el total activo. Esta relación permite identificar la participación de cada recurso dentro de la inversión total de la empresa.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta02_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Estado de situación financiera: pasivos y patrimonio
                    p.mb-0 Las cuentas de pasivos y patrimonio se comparan con el total pasivo más patrimonio. Esta comparación permite reconocer la participación de las fuentes de financiación de la empresa.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta02_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Estado de resultados: costos, gastos y utilidad
                    p.mb-0 Los costos, gastos y utilidades se comparan con las ventas. Esta base permite identificar la participación de cada concepto frente a los ingresos generados por la operación.
            //- Fin Tarjetas
            p(data-aos="fade-left") La selección correcta de la base de comparación es necesaria para que el análisis vertical refleje adecuadamente la estructura financiera o los resultados de la empresa. Se invita a revisar el siguiente ejemplo:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.bg-color-2.p-5
          p.fw-bold Ejemplo aplicado
          p Una empresa presenta el siguiente estado de resultados resumido:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex
              .fas.fa-check-circle.me-3
              span Ventas: $ 250.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span Costo de ventas: $ 150.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span Gastos operacionales: $ 60.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span Utilidad neta: $ 40.000.000
          p.mb-5 El análisis vertical se calcula tomando las ventas como base del 100 %.
          //- Inicio Tabla
          .row.mb-5(data-aos="fade-left")
            .col-md-auto.col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 2.
                span  Análisis vertical del estado de resultados
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 15%") Concepto
                      th(style="width: 15%") Valor
                      th(style="width: 30%") Participación sobre ventas
                  tbody
                    tr
                      td Ventas
                      td $ 250.000.000
                      td 100 %
                    tr
                      td Costo de ventas
                      td $ 150.000.000
                      td 60 %
                    tr
                      td Gastos operacionales
                      td $ 60.000.000
                      td 24 %
                    tr
                      td Utilidad neta
                      td $ 40.000.000
                      td 16 %
          p.mb-5 La tabla presenta la participación de cada cuenta frente a las ventas.
          p <b>Interpretación:</b> Por cada $ 100 vendidos, la empresa utiliza $ 60 para cubrir el costo de ventas, destina $ 24 a gastos operacionales y conserva $ 16 como utilidad neta. Esta lectura permite evaluar si los costos y gastos tienen una participación razonable frente a los ingresos.
      p El siguiente video explica el análisis vertical como método para calcular la participación de cada cuenta dentro de un total de referencia, mediante un ejemplo aplicado a estados financieros.
      .row.justify-content-center.align-items-center
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Cálculo de participaciones de las cuentas
      p(data-aos="fade-left") El cálculo de participaciones identifica las cuentas con mayor peso en los estados financieros y orienta el análisis de sus efectos sobre liquidez, endeudamiento, rentabilidad o eficiencia operativa. Estas se detallan a continuación:
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
                              img(src='@/assets/curso/temas/t2/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cuentas por cobrar
                            p.text-start Una alta participación puede indicar recursos pendientes de recaudo. Se recomienda revisar la política de crédito, la gestión de cobro y los vencimientos de clientes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inventarios
                            p.text-start Una alta participación puede mostrar recursos concentrados en mercancía. Se recomienda revisar la rotación, las compras y los productos de baja salida.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Propiedad, planta y equipo
                            p.text-start Una alta participación puede reflejar inversión importante en activos fijos. Se recomienda evaluar su uso, productividad y capacidad instalada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pasivos corrientes
                            p.text-start Una alta participación puede señalar obligaciones próximas importantes. Se recomienda revisar el flujo de caja y los vencimientos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Patrimonio
                            p.text-start Una alta participación puede indicar mayor financiación con recursos propios. Se recomienda analizar estabilidad, respaldo financiero y evolución del negocio.
            //- Fin Carrusel      
            p.mb-5 El siguiente ejemplo permite calcular la participación de cuentas por cobrar e inventarios para interpretar su peso dentro del activo total.
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12.col-lg-11
                .overflow-hidden.shadow
                  .row.g-0.align-items-stretch                
                    .col-12.col-md-5.col-lg-4.position-relative
                      figure.mb-0.h-100.w-100
                        img(src="@/assets/curso/temas/t2/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
                    .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                      p.fw-bold Ejemplo aplicado
                      p Una empresa tiene activos por $ 300.000.000. Dentro de ese total, las cuentas por cobrar suman $ 75.000.000 y los inventarios $ 90.000.000.
                      p.bg-color-8.p-2 Participación de cuentas por cobrar = $ 75.000.000 / $ 300.000.000 × 100 = 25 %
                      p.bg-color-8.p-2 Participación de inventarios = $ 90.000.000 / $ 300.000.000 × 100 = 30 %
                      p.fw-bold Interpretación
                      p Las cuentas por cobrar y los inventarios representan en conjunto el 55 % del activo total. Esta situación exige revisar si la empresa está recuperando oportunamente su cartera y si los inventarios se están vendiendo en tiempos razonables. De lo contrario, podría existir presión sobre la liquidez.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            Separador
            //- Inicio Tema2.4
            .row
              #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.4 Análisis horizontal
            p El análisis horizontal permite comparar una misma cuenta entre dos o más periodos para identificar aumentos, disminuciones y tendencias en la información financiera. Las fórmulas generales son:
            .row.justify-content-center(data-aos="fade-left")
              .col-lg-6
                p.bg-color-6.text-white.p-4.rounded-4.fw-bold Variación absoluta = valor del periodo actual - valor del periodo anterior
                p.bg-color-6.text-white.p-4.rounded-4.fw-bold Variación relativa = variación absoluta / valor del periodo anterior × 100
      p(data-aos="fade-left") El cálculo del análisis horizontal se desarrolla mediante pasos que permiten determinar cambios en pesos, porcentajes y comportamiento entre periodos; tales como:
      //- Accordeon Pasos
      .container.tarjeta.p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              .row(numero="A" titulo="Seleccionar la cuenta")
                .col-md-12
                  p Identifique la cuenta que se va a comparar, por ejemplo, ventas, costos, gastos, activos, pasivos, patrimonio, cartera o inventarios.
              .row(numero="B" titulo="Tomar los valores de cada periodo")
                .col-md-12
                  p Ubique el valor del periodo actual y el valor del periodo anterior. Ambos deben corresponder a la misma cuenta.
              .row(numero="C" titulo="Calcular la variación absoluta")
                .col-md-12
                  p Reste el valor del periodo anterior al valor del periodo actual. Este resultado muestra el cambio en pesos. La fórmula es:
                  ul.lista-ul.color-vinotinto-custom.mb-0.bg-color-9.p-1.d-inline-block
                    li.d-flex
                      .fas.fa-check-circle.me-2
                      span Variación absoluta = valor actual - valor anterior.
              .row(numero="D" titulo="Calcular la variación relativa")
                .col-md-12
                  p Divida la variación absoluta entre el valor del periodo anterior y multiplique por 100. Este resultado muestra el cambio porcentual. La fórmula es:
                  ul.lista-ul.color-vinotinto-custom.mb-0.bg-color-9.p-1.d-inline-block
                    li.d-flex
                      .fas.fa-check-circle.me-2
                      span Variación relativa = variación absoluta / valor anterior × 100.
              .row(numero="E" titulo="Interpretar el resultado")
                .col-md-12
                  p Determine si el resultado representa un aumento o una disminución. Después, analice si ese cambio es favorable o desfavorable según la cuenta evaluada y su relación con otros resultados financieros. Por ejemplo, un aumento en ventas puede ser positivo, pero debe revisarse si los costos y gastos crecieron en menor o mayor proporción.
      p.mb-5(data-aos="fade-left") Este caso aplicado presenta cómo calcular la variación en pesos y en porcentaje de las ventas entre dos periodos.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t2/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta ventas por $ 180.000.000 en el año 1 y $ 225.000.000 en el año 2.
                p.bg-color-8.p-2.d-inline-block Variación absoluta = $ 225.000.000 - $ 180.000.000 = $ 45.000.000
                p.bg-color-8.p-2.d-inline-block Variación relativa = $ 45.000.000 / $ 180.000.000 × 100 = 25 %
                p.fw-bold Interpretación
                p Las ventas aumentaron $ 45.000.000, equivalente al 25 %. Este resultado puede ser favorable, pero debe compararse con el comportamiento de costos, gastos y utilidad para determinar si el crecimiento en ventas realmente mejoró los resultados de la empresa.
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Cálculo de variaciones absolutas
      p.mb-5(data-aos="fade-left") La variación absoluta muestra el cambio en pesos de una cuenta entre un periodo y otro. Este cálculo es importante porque permite identificar cuánto aumentó o disminuyó una cifra. La siguiente tabla ejemplifica el cálculo de variaciones absolutas
      //- Inicio Tabla
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-md-auto.col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3.
            span Cálculo de variaciones absolutas
          .tabla-a
            table
              thead
                tr
                  th(style="width: 25%") Cuenta
                  th(style="width: 25%") Año 1
                  th(style="width: 25%") Año 2
                  th(style="width: 25%") Variación absoluta
              tbody
                tr
                  td Ventas
                  td $ 180.000.000
                  td $ 225.000.000
                  td $ 45.000.000
                tr
                  td Costo de ventas
                  td $ 108.000.000
                  td $ 150.000.000
                  td $ 42.000.000
                tr
                  td Gastos operacionales
                  td $ 36.000.000
                  td $ 44.000.000
                  td $ 8.000.000
                tr
                  td Utilidad neta
                  td $ 24.000.000
                  td $ 20.000.000
                  td -$ 4.000.000
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-8
          p <b>Interpretación:</b> las ventas aumentaron $ 45.000.000, pero el costo de ventas aumentó $ 42.000.000. Aunque la empresa vendió más, gran parte del crecimiento fue absorbido por el costo. Además, la utilidad neta disminuyó $ 4.000.000, lo cual indica que el aumento de ventas no se tradujo en una mejor ganancia final.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            Separador
            //- Inicio Tema2.6
            .row
              #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.6 Cálculo de variaciones relativas
            p.mb-5(data-aos="fade-left") La variación relativa expresa el cambio entre periodos en términos porcentuales. Este cálculo permite comparar cuentas de diferente tamaño y reconocer qué rubros crecieron o disminuyeron con mayor intensidad. En la siguiente tabla se presenta un ejemplo de cálculo de variaciones relativas:
            //- Inicio Tabla
            .row.justify-content-center(data-aos="fade-left")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Cálculo de variaciones relativas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Cuenta
                        th(style="width: 20%") Año 1
                        th(style="width: 20%") Año 2
                        th(style="width: 20%") Variación absoluta
                        th(style="width: 20%") Variación relativa
                    tbody
                      tr
                        td Ventas
                        td $ 180.000.000
                        td $ 225.000.000
                        td $ 45.000.000
                        td 25,0 %
                      tr
                        td Costo de ventas
                        td $ 108.000.000
                        td $ 150.000.000
                        td $ 42.000.000
                        td 38,9 %
                      tr
                        td Gastos operacionales
                        td $ 36.000.000
                        td $ 44.000.000
                        td $ 8.000.000
                        td 22,2 %
                      tr
                        td Utilidad neta
                        td $ 24.000.000
                        td $ 20.000.000
                        td -$ 4.000.000
                        td -16,7 %
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-8
          p <b>Interpretación:</b> el costo de ventas creció 38,9 %, mientras las ventas crecieron 25 %. Esta diferencia explica parte del deterioro de la utilidad neta, que disminuyó 16,7 %. El resultado muestra que el análisis horizontal no debe limitarse a identificar aumentos o disminuciones, sino a relacionar las cuentas entre sí.
      Separador
      //- Inicio Tema2.7
      .row
        #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.7 Interpretación inicial de participaciones y variaciones
      p(data-aos="fade-left") La interpretación inicial permite explicar qué significan las participaciones y variaciones calculadas. No basta con identificar aumentos, disminuciones o porcentajes; es necesario relacionar los resultados con la situación financiera de la empresa. Cada resultado financiero requiere una lectura específica y una pregunta de análisis que oriente su interpretación, tales como:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t2/img5.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Inventarios con alta participación")
                        p.mb-4 Puede indicar recursos concentrados en mercancía. La pregunta clave es: ¿la mercancía rota oportunamente?
                    .row(titulo="Cuentas por cobrar en aumento")
                        p.mb-4 Puede mostrar mayor valor pendiente por recaudar. La pregunta clave es: ¿los clientes están pagando a tiempo?
                    .row(titulo="Ventas en crecimiento")
                        p.mb-4 Puede reflejar mayor ingreso por operación. La pregunta clave es: ¿el crecimiento mejora la utilidad?
                    .row(titulo="Costos creciendo más que ventas")
                        p.mb-4 Puede indicar menor eficiencia o presión sobre el margen. La pregunta clave es: ¿se deben revisar proveedores o precios?
                    .row(titulo="Pasivos corrientes en aumento")
                        p.mb-4 Puede señalar más obligaciones de corto plazo. La pregunta clave es: ¿existe efectivo suficiente para pagar?
                    .row(titulo="Utilidad neta en disminución")
                        p.mb-4 Puede reflejar deterioro del resultado final. La pregunta clave es: ¿qué costos o gastos explican la caída?
            //- Fin Accordion
            p(data-aos="fade-left") El siguiente ejemplo permite comprender cómo el crecimiento de las ventas puede no mejorar la utilidad cuando los costos aumentan en mayor proporción.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta incremento de ventas del 25 %, pero reducción de utilidad neta del 16,7 %. Este comportamiento indica que el crecimiento comercial no fue suficiente para mejorar el resultado final. Al revisar las cuentas, se observa que el costo de ventas creció 38,9 %, lo que afectó la utilidad.
                p La interpretación inicial permite señalar que la empresa debe revisar sus costos, precios de venta, descuentos, proveedores o mezcla de productos. Esta lectura prepara el análisis para el cálculo de indicadores financieros, especialmente los de rentabilidad.
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t2/img6.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p A continuación, se presenta un ejemplo integrador que reúne los temas desarrollados en los métodos básicos de análisis financiero. 
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.bg-color-2.p-5
          p.fw-bold Ejemplo aplicado
          p La empresa Comercial Central S.A.S. presenta la siguiente información resumida del estado de situación financiera para los años 1 y 2. La siguiente tabla presenta información base para aplicar análisis vertical y horizontal:
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5.
                span Estado de situación financiera resumido
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Cuenta
                      th(style="width: 30%") Año 1
                      th(style="width: 30%") Año 2
                  tbody
                    tr
                      td Caja y bancos
                      td $ 20.000.000
                      td $ 16.000.000
                    tr
                      td Cuentas por cobrar
                      td $ 35.000.000
                      td $ 52.000.000
                    tr
                      td Inventarios
                      td $ 45.000.000
                      td $ 63.000.000
                    tr
                      td Propiedad, planta y equipo
                      td $ 100.000.000
                      td $ 119.000.000
                    tr
                      td Total activo
                      td $ 200.000.000
                      td $ 250.000.000
                    tr
                      td Pasivo corriente
                      td $ 50.000.000
                      td $ 76.000.000
                    tr
                      td Pasivo no corriente
                      td $ 40.000.000
                      td $ 54.000.000
                    tr
                      td Patrimonio
                      td $ 110.000.000
                      td $ 120.000.000
                    tr
                      td Total pasivo más patrimonio
                      td $ 200.000.000
                      td $ 250.000.000
          p Tabla con fines didácticos para desarrollar análisis vertical y horizontal en el estado de situación financiera.
          p.mb-5 A continuación, se realizan el análisis vertical y horizontal. Integra la participación del año 2 y variaciones entre los dos periodos.
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-11
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 6.
                span Análisis vertical y horizontal aplicado
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 20%") Cuenta
                      th(style="width: 20%") Año 1
                      th(style="width: 20%") Año 2
                      th(style="width: 15%") Participación año 2
                      th(style="width: 20%") Variación absoluta
                      th(style="width: 20%") Variación relativa
                  tbody
                    tr
                      td Caja y bancos
                      td $ 20.000.000
                      td $ 16.000.000
                      td 6,4 %
                      td -$ 4.000.000
                      td -20,0 %
                    tr
                      td Cuentas por cobrar
                      td $ 35.000.000
                      td $ 52.000.000
                      td 20,8 %
                      td $ 17.000.000
                      td 48,6 %
                    tr
                      td Inventarios
                      td $ 45.000.000
                      td $ 63.000.000
                      td 25,2 %
                      td $ 18.000.000
                      td 40,0 %
                    tr
                      td Propiedad, planta y equipo
                      td $ 100.000.000
                      td $ 119.000.000
                      td 47,6 %
                      td $ 19.000.000
                      td 19,0 %
                    tr
                      td Total activo
                      td $ 200.000.000
                      td $ 250.000.000
                      td 100,0 %
                      td $ 50.000.000
                      td 25,0 %
                    tr
                      td Pasivo corriente
                      td $ 50.000.000
                      td $ 76.000.000
                      td 30,4 %
                      td $ 26.000.000
                      td 52,0 %
                    tr
                      td Pasivo no corriente
                      td $ 40.000.000
                      td $ 54.000.000
                      td 21,6 %
                      td $ 14.000.000
                      td 35,0 %
                    tr
                      td Patrimonio
                      td $ 110.000.000
                      td $ 120.000.000
                      td 48,0 %
                      td $ 10.000.000
                      td 9,1 %
          p.mb-5 Tabla con fines didácticos para aplicar análisis vertical, variaciones absolutas y variaciones relativas.
          p <b>Interpretación:</b> el total activo aumentó 25 %, pero el efectivo disminuyó 20 %, mientras las cuentas por cobrar crecieron 48,6 % y los inventarios 40 %. Esto indica mayor concentración de recursos en cartera e inventarios, lo que puede afectar la liquidez. Además, el pasivo corriente aumentó 52 %, superando el crecimiento del activo, por lo que se recomienda revisar recuperación de cartera, rotación de mercancía y obligaciones de corto plazo. Estos resultados muestran cómo el análisis vertical y horizontal permite identificar señales iniciales para calcular indicadores financieros. 
</template>

<script>
export default {
  name: 'Tema2',
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
