<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Hoja electrónica aplicada al cálculo financiero
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t4/img1.png' style="width: 500px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-2.p-4(data-aos="fade-right")
            p La hoja electrónica permite organizar datos, construir fórmulas y calcular participaciones, variaciones e indicadores financieros. En el análisis financiero, facilita trabajar con estados financieros, reducir errores y presentar resultados claros, verificables y actualizables, diferenciando datos de entrada, fórmulas, resultados e interpretación.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Organización de datos financieros en hoja electrónica      
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            p(data-aos="fade-left") La organización de datos financieros en hoja electrónica permite ubicar cuentas, periodos, valores y clasificaciones en una estructura clara. Esto facilita aplicar fórmulas, calcular variaciones, participaciones e indicadores, y reducir errores en el análisis. Los pasos para organizar los datos financieros antes de calcular variaciones, participaciones e indicadores son:
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t4/img2.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Paso 1. Identificar las cuentas")
                        p.mb-4 Registre las cuentas tomadas de los estados financieros, como caja y bancos, cuentas por cobrar, inventarios, propiedad, planta y equipo, pasivos, patrimonio, ingresos, costos o gastos.
                    .row(titulo="Paso 2. Clasificar la información")
                        p.mb-4 Asigne una clasificación a cada cuenta, por ejemplo: activo corriente, activo no corriente, pasivo corriente, patrimonio, ingreso, costo o gasto.
                    .row(titulo="Paso 3. Separar los periodos")
                        p.mb-4 Ubique los valores de cada periodo en columnas diferentes, como año 1 y año 2. Esto permite comparar cifras de forma ordenada.
                    .row(titulo="Paso 4. Diferenciar datos de entrada y resultados")
                        p.mb-4 Identifique qué valores fueron digitados y cuáles se obtienen mediante fórmulas. Por ejemplo, los valores de año 1 y año 2 son datos de entrada; las variaciones y participaciones son resultados calculados.
                    .row(titulo="Paso 5. Aplicar fórmulas de análisis")
                        p.mb-4 Calcule variación absoluta, variación relativa y participación porcentual según el análisis requerido.
                    .row(titulo="Paso 6. Verificar totales y coherencia")
                        p.mb-4 Revise que las cifras correspondan al mismo periodo, que las cuentas estén bien clasificadas y que los totales coincidan con los estados financieros originales.
            //- Fin Accordion
            p(data-aos="fade-left") La siguiente tabla presenta una estructura recomendada para organizar información antes de aplicar fórmulas de análisis financiero.
      //- Inicio Tabla
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 9.
            span Estructura básica para organizar datos financieros en hoja electrónica
          .tabla-a
            table
              thead
                tr
                  th(style="width: 10%") Cuenta
                  th(style="width: 10%") Clasificación
                  th(style="width: 10%") Año 1
                  th(style="width: 10%") Año 2
                  th(style="width: 10%") Variación absoluta
                  th(style="width: 10%") Variación relativa
                  th(style="width: 10%") Participación año 2
              tbody
                tr
                  td Caja y bancos
                  td Activo corriente
                  td $ 20.000.000
                  td $ 16.000.000
                  td -$ 4.000.000
                  td -20,0 %
                  td 6,4 %
                tr
                  td Cuentas por cobrar
                  td Activo corriente
                  td $ 35.000.000
                  td $ 52.000.000
                  td $ 17.000.000
                  td 48,6 %
                  td 20,8 %
                tr
                  td Inventarios
                  td Activo corriente
                  td $ 45.000.000
                  td $ 63.000.000
                  td $ 18.000.000
                  td 40,0 %
                  td 25,2 %
                tr
                  td Propiedad, planta y equipo
                  td Activo corriente
                  td $ 100.000.000
                  td $ 119.000.000
                  td $ 19.000.000
                  td 19,0 %
                  td 47,6 %
                tr
                  td Total activo
                  td Total
                  td $ 200.000.000
                  td $ 250.000.000
                  td $ 50.000.000
                  td 25,0 %
                  td 100,0 %
            p.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para presentar cómo organizar datos financieros antes de aplicar fórmulas en hoja electrónica.
      p(data-aos="fade-left") En la estructura, los años 1 y 2 son datos de entrada; las variaciones y participaciones son resultados calculados, lo que facilita revisar información digitada y obtenida por fórmula.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Construcción de fórmulas para análisis vertical y horizontal
      p(data-aos="fade-left") Las fórmulas permiten calcular participaciones y variaciones de manera automática en hoja electrónica. Para que los resultados sean confiables, deben tomar la base correcta, usar datos del mismo periodo y mantener referencias adecuadas. Los pasos para construir fórmulas de análisis vertical y horizontal de forma ordenada y verificable son los siguientes:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t4/img3.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Paso 1. Identificar el cálculo requerido")
                        p.mb-4 Defina si necesita calcular participación porcentual, variación absoluta, variación relativa u otra relación financiera.
                    .row(titulo="Paso 2. Seleccionar la base correcta")
                        p.mb-4 En el análisis vertical, identifique el total de referencia. Puede ser total activo, total pasivo más patrimonio o ventas, según el estado financiero analizado.
                    .row(titulo="Paso 3. Ubicar los valores de cada periodo")
                        p.mb-4 En el análisis horizontal, tome el valor del año actual y el valor del año anterior de la misma cuenta.
                    .row(titulo="Paso 4. Construir la fórmula")
                        p.mb-4 Aplique la fórmula correspondiente: participación porcentual, variación absoluta o variación relativa.
                    .row(titulo="Paso 5. Revisar las referencias de celdas")
                        p.mb-4 Verifique que la fórmula tome las celdas correctas antes de copiarla hacia otras cuentas.
                    .row(titulo="Paso 6. Validar el resultado")
                        p.mb-4 Revise que el resultado sea coherente con el comportamiento de la cuenta y con el estado financiero utilizado.
            //- Fin Accordion
            p.mb-5(data-aos="fade-left") La siguiente tabla resume las fórmulas financieras que pueden construirse en una hoja electrónica para calcular participaciones y variaciones.
            //- Inicio Tabla
            .row.mb-5.justify-content-center(data-aos="fade-left")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 10.
                  span Fórmulas para análisis vertical y horizontal en hoja electrónica
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 33%") Cálculo
                        th(style="width: 33%") Fórmula financiera
                        th(style="width: 33%") Aplicación
                    tbody
                      tr
                        td Participación porcentual
                        td Cuenta analizada / total base × 100
                        td Análisis vertical
                      tr
                        td Variación absoluta
                        td Valor año 2 - valor año 1
                        td Cambio en pesos entre periodos
                      tr
                        td Variación relativa
                        td Variación absoluta / valor año 1 × 100
                        td Cambio porcentual entre periodos
                      tr
                        td Participación de costos
                        td Costo de ventas / ventas × 100
                        td Peso del costo dentro de los ingresos
                      tr
                        td Participación del pasivo
                        td Total pasivo / total activo × 100
                        td Peso de las obligaciones en la financiación
                      tr
                        td Participación del patrimonio
                        td Patrimonio / total activo × 100
                        td Peso de los recursos propios
                  p.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para relacionar fórmulas básicas con su aplicación en hoja electrónica.
      p.mb-5(data-aos="fade-left") En el siguiente ejemplo se aplican las fórmulas de variación absoluta y relativa para calcular el cambio de las ventas entre dos periodos.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-11
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t4/img4.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa presenta ventas por $ 180.000.000 en el año 1 y $ 225.000.000 en el año 2. La variación absoluta se calcula restando el valor del año 1 al valor del año 2, y la variación relativa se calcula dividiendo esa diferencia entre el valor del año 1.
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Variación absoluta = $ 225.000.000 - $ 180.000.000 = $ 45.000.000
                    p Variación relativa = $ 45.000.000 / $ 180.000.000 × 100 = 25 %
      p(data-aos="fade-left") La hoja electrónica permite construir estas fórmulas una sola vez y copiarlas hacia otras cuentas, siempre que las celdas estén correctamente referenciadas.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Construcción de fórmulas para indicadores financieros
      p.mb-5(data-aos="fade-left") Los indicadores financieros pueden calcularse en hoja electrónica mediante fórmulas vinculadas a las cuentas de los estados financieros. Para obtener resultados confiables, es necesario ubicar correctamente los datos y verificar las celdas utilizadas. Las fórmulas para identificar cómo se calculan los indicadores de liquidez, actividad, endeudamiento y rentabilidad se detallan en la siguiente tabla:
      //- Inicio Tabla
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-md-auto.col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 11.
            span Fórmulas de indicadores financieros en hoja electrónica
          .tabla-a
            table
              thead
                tr
                  th(style="width: 33%") Grupo
                  th(style="width: 33%") Indicador
                  th(style="width: 33%") Fórmula financiera
              tbody
                tr
                  td Liquidez
                  td Razón corriente
                  td Activo corriente / pasivo corriente
                tr
                  td Liquidez
                  td Prueba ácida
                  td (Activo corriente - inventarios) / pasivo corriente
                tr
                  td Liquidez
                  td Capital de trabajo neto
                  td Activo corriente - pasivo corriente
                tr
                  td Actividad
                  td Rotación de cartera
                  td Ventas a crédito / cuentas por cobrar promedio
                tr
                  td Actividad
                  td Días de cartera
                  td 360 / rotación de cartera
                tr
                  td Endeudamiento
                  td Nivel de endeudamiento
                  td Total pasivo / total activo × 100
                tr
                  td Endeudamiento
                  td Relación deuda-patrimonio
                  td Total pasivo / patrimonio
                tr
                  td Rentabilidad
                  td Margen neto
                  td Utilidad neta / ventas × 100
                tr
                  td Rentabilidad
                  td ROA
                  td Utilidad neta / total activo × 100
                tr
                  td Rentabilidad
                  td ROE
                  td Utilidad neta / patrimonio × 100
            p.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para construir fórmulas de indicadores financieros en hoja electrónica.
      p.mb-5(data-aos="fade-left") Tabla con fines didácticos para construir fórmulas de indicadores financieros en hoja electrónica.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t4/img5.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Si una empresa tiene activo corriente por $ 150.000.000, pasivo corriente por $ 90.000.000 e inventarios por $ 60.000.000, la hoja electrónica puede calcular:
                .row.mb-3
                  .col-lg-12.p-4.bg-color-6.p-2.d-inline-block.rounded-4.text-white
                    p Razón corriente = $ 150.000.000 / $ 90.000.000 = 1,67
                    p Prueba ácida = ($ 150.000.000 - $ 60.000.000) / $ 90.000.000 = 1,00
                p La empresa tiene capacidad general de pago, aunque su liquidez queda ajustada al excluir inventarios. La hoja electrónica permite recalcular los indicadores si cambian los datos base.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Validación de resultados y revisión de errores
      p.mb-5(data-aos="fade-left") Antes de interpretar indicadores financieros, es necesario validar que la hoja electrónica esté correctamente construida. La revisión permite identificar errores en datos, fórmulas, rangos, bases de cálculo, signos, totales e interpretación. La siguiente tabla sirve como guía para revisar fórmulas, datos y resultados antes de interpretar indicadores financieros.
      //- Inicio Tabla
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-md-auto.col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 12.
            span Lista de verificación para validar resultados en hoja electrónica
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Aspecto por revisar
                  th(style="width: 63%") Pregunta de control
                  th(style="width: 20%") Cumple
              tbody
                tr
                  td Datos de entrada
                  td ¿Los valores coinciden con los estados financieros?
                  td Sí / No
                tr
                  td Periodo
                  td ¿Las cifras corresponden al mismo periodo de análisis?
                  td Sí / No
                tr
                  td Clasificación
                  td ¿Las cuentas están clasificadas correctamente?
                  td Sí / No
                tr
                  td Fórmulas
                  td ¿Las fórmulas utilizan las celdas correctas?
                  td Sí / No
                tr
                  td Totales
                  td ¿Los subtotales coinciden con los totales financieros?
                  td Sí / No
                tr
                  td Bases de cálculo
                  td ¿Los porcentajes se calculan sobre la base adecuada?
                  td Sí / No
                tr
                  td Signos
                  td ¿Los aumentos y disminuciones están correctamente expresados?
                  td Sí / No
                tr
                  td Indicadores
                  td ¿Cada indicador usa las cuentas que corresponden?
                  td Sí / No
                tr
                  td Interpretación
                  td ¿Los resultados tienen una lectura financiera coherente?
                  td Sí / No
            p.mt-5.justify-content-center.bg-color-2.p-4.text-center Tabla con fines didácticos para validar la calidad de los cálculos antes de presentar resultados financieros.
      p.mb-5(data-aos="fade-right") A continuación, se realiza un ejemplo que presenta cómo una fórmula mal construida puede cambiar la interpretación financiera de un resultado.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t4/img6.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")               
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                p.fw-bold Ejemplo aplicado
                p Una empresa calcula la variación relativa de inventarios y obtiene 140 %. Al revisar la fórmula, se identifica que dividió el valor del año 2 entre el año 1, pero no calculó primero la variación absoluta. El resultado correcto debía obtenerse así:
                .bg-color-6.p-4.rounded-4.text-white.mb-4
                  ul.lista-ul.lista-amarilla.mb-0
                    li.d-flex.align-items-start.mb-2
                      i.fas.fa-check-circle.me-3
                      span <b>Inventarios año 1:</b> $ 50.000.000
                    li.d-flex.align-items-start.mb-2
                      i.fas.fa-check-circle.me-3
                      span <b>Inventarios año 2:</b> $ 70.000.000
                    li.d-flex.align-items-start.mb-2
                      i.fas.fa-check-circle.me-3
                      span <b>Variación absoluta:</b> $ 70.000.000 - $ 50.000.000 = $ 20.000.000
                    li.d-flex.align-items-start.mb-0
                      i.fas.fa-check-circle.me-3
                      span <b>Variación relativa:</b> $ 20.000.000 / $ 50.000.000 × 100 = 40 %
                p.mb-0 El error cambia completamente la lectura financiera. No es lo mismo afirmar que los inventarios aumentaron 140 % que afirmar que aumentaron 40 %. Por esta razón, la revisión de fórmulas es indispensable antes de interpretar resultados.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5            
            Separador
            //- Inicio Tema4.5
            .row
              #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 4.5 Presentación de resultados en tablas y gráficos
            p(data-aos="fade-left") La presentación de resultados financieros debe facilitar la interpretación. Las tablas organizan datos, fórmulas y resultados; los gráficos ayudan a comparar, identificar participaciones y reconocer tendencias, siempre según el propósito del análisis. La siguiente tabla relaciona diferentes formas de presentación con su uso dentro del análisis financiero.
            //- Inicio Tabla
            .row.mb-5.justify-content-center(data-aos="fade-left")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 12.
                  span Lista de verificación para validar resultados en hoja electrónica
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Recurso
                        th(style="width: 33%") Uso recomendado
                        th(style="width: 30%") Ejemplo
                    tbody
                      tr
                        td Tabla de datos
                        td Presentar cifras base
                        td Estado financiero resumido
                      tr
                        td Tabla de cálculo
                        td Mostrar fórmulas y resultados
                        td Indicadores de liquidez
                      tr
                        td Tabla comparativa
                        td Comparar periodos
                        td Año 1 frente a año 2
                      tr
                        td Gráfico de columnas
                        td Comparar valores entre periodos
                        td Ventas, costos y utilidad
                      tr
                        td Gráfico de barras
                        td Mostrar composición o participación
                        td Activos corrientes y no corrientes
                      tr
                        td Gráfico de líneas
                        td Observar tendencias
                        td Evolución de ventas en varios años
                  p.mt-5.justify-content-center.bg-color-2.p-3.text-center.mb-5 Tabla con fines didácticos para seleccionar recursos de presentación según el propósito del análisis financiero.
              .mb-5 El siguiente ejemplo permite reconocer cómo una tabla comparativa o un gráfico pueden facilitar la lectura de variaciones entre ventas y utilidad.
              .row.justify-content-center(data-aos="fade-right")
                .col-12.col-lg-10
                  .overflow-hidden.shadow
                    .row.g-0.align-items-stretch
                      .col-12.col-md-5.col-lg-4.position-relative
                        figure.mb-0.h-100.w-100
                          img(src="@/assets/curso/temas/t4/img7.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")              
                      .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-4.d-flex.flex-column.justify-content-center
                        p.fw-bold Ejemplo aplicado
                        p Si una empresa desea mostrar que las ventas aumentaron, pero la utilidad disminuyó, puede usar una tabla comparativa con valores y variaciones. También puede complementar con un gráfico de columnas para mostrar ventas y utilidad de los dos periodos. Esta combinación facilita observar que el crecimiento en ingresos no necesariamente generó mejores resultados.
                        p La presentación debe ir acompañada de una interpretación. Un gráfico sin explicación puede mostrar una tendencia, pero no necesariamente permite comprender sus causas. Por ello, cada tabla o gráfico debe tener una lectura breve que indique qué se observa y por qué es importante.
      p(data-aos="fade-left") A continuación, se presenta un ejemplo aplicado que integra la organización de datos, la construcción de fórmulas, el cálculo de indicadores y la validación de resultados en hoja electrónica.
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-10.bg-color-2.p-5
          p.fw-bold Ejemplo integrador
          p.mb-5 La empresa Comercial Norte S.A.S. entrega los siguientes datos del año 2 para organizar en hoja electrónica:
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-9
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 14.
                span  Datos financieros para aplicar fórmulas en hoja electrónica
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 70%") Dato financiero
                      th(style="width: 30%") Valor
                  tbody
                    tr
                      td Activo corriente
                      td $ 180.000.000
                    tr
                      td Inventarios
                      td $ 70.000.000
                    tr
                      td Pasivo corriente
                      td $ 100.000.000
                    tr
                      td Total activo
                      td $ 360.000.000
                    tr
                      td Total pasivo
                      td $ 210.000.000
                    tr
                      td Patrimonio
                      td $ 150.000.000
                    tr
                      td Ventas
                      td $ 480.000.000
                    tr
                      td Utilidad neta
                      td $ 38.000.000
                    tr
                      td Cuentas por cobrar promedio
                      td $ 60.000.000
                    tr
                      td Ventas a crédito
                      td $ 360.000.000
                p.mt-3 Tabla con fines didácticos para organizar datos antes de construir fórmulas financieras.
            p.mt-3(data-aos="fade-left") La siguiente tabla refleja los indicadores calculados a partir de los datos organizados.
          //- Inicio Tabla
          .row.mb-5
            .col-md-auto.col-lg-11
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 15.
                span Resultados calculados en hoja electrónica
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Indicador
                      th(style="width: 40%") Fórmula aplicada
                      th(style="width: 20%") Resultado
                  tbody
                    tr
                      td Razón corriente
                      td $ 180.000.000 / $ 100.000.000
                      td 1,80
                    tr
                      td Prueba ácida
                      td ($ 180.000.000 - $ 70.000.000) / $ 100.000.000
                      td 1,10
                    tr
                      td Capital de trabajo neto
                      td $ 180.000.000 - $ 100.000.000
                      td $ 80.000.000
                    tr
                      td Nivel de endeudamiento
                      td $ 210.000.000 / $ 360.000.000 × 100
                      td 58,3 %
                    tr
                      td Relación deuda-patrimonio
                      td $ 210.000.000 / $ 150.000.000
                      td 1,40
                    tr
                      td Margen neto
                      td $ 38.000.000 / $ 480.000.000 × 100
                      td 7,9 %
                    tr
                      td Rotación de cartera
                      td $ 360.000.000 / $ 60.000.000
                      td 6 veces
                    tr
                      td Días de cartera
                      td 360 / 6
                      td 60 días
                p.mt-3  Tabla con fines didácticos para mostrar resultados obtenidos mediante fórmulas aplicadas en hoja electrónica.                      
            p.mt-3 <b>Interpretación del caso:</b> la empresa presenta capacidad de pago de corto plazo, con razón corriente de 1,80, prueba ácida de 1,10 y capital de trabajo positivo de $ 80.000.000; sin embargo, parte de sus recursos está concentrada en inventarios. El endeudamiento de 58,3 % y la relación deuda-patrimonio de 1,40 requieren seguimiento junto con la capacidad de pago y los gastos financieros. En rentabilidad, el margen neto de 7,9 % indica que conserva $ 7,9 por cada $ 100 vendidos, mientras la cartera se recupera cada 60 días, por lo que debe revisarse la gestión de cobro si supera la política de crédito. El ejercicio evidencia que la hoja electrónica facilita el cálculo, pero el análisis depende de validar datos, fórmulas e interpretación financiera.                 
</template>

<script>
export default {
  name: 'Tema4',
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
