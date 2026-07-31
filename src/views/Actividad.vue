<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos contables y financieros, el marco normativo, la ética profesional, los métodos básicos de análisis financiero y las fórmulas de indicadores de liquidez, actividad, endeudamiento y rentabilidad, mediante la aplicación de cálculos sobre resultados contables de empresas colombianas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal del análisis financiero?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar los soportes contables para cumplir con el archivo documental de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar los estados financieros para calcular impuestos y obligaciones legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interpretar información contable para evaluar la situación financiera y apoyar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Presentar los estados financieros en formatos exigidos por entidades de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El análisis financiero utiliza la información contable para comprender la situación de la empresa y aportar elementos para la toma de decisiones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Por qué los estados financieros son la base para calcular indicadores?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque contienen las cuentas necesarias para relacionar activos, pasivos, patrimonio, ingresos, costos, gastos y utilidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque muestran únicamente el comportamiento de las ventas y la utilidad neta del periodo, sin considerar otras cuentas relevantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque son cifras resumidas sin necesidad de clasificar las cuentas contables ni analizar su relación con la situación económica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque reemplazan el análisis de liquidez, endeudamiento, actividad y rentabilidad por una revisión general de resultados sin indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los indicadores se calculan relacionando cuentas tomadas del estado de situación financiera y del estado de resultados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la diferencia más precisa entre contabilidad y finanzas en el análisis financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La contabilidad calcula indicadores financieros y las finanzas elaboran los estados financieros para analizar resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La contabilidad se enfoca únicamente en medir la rentabilidad y las finanzas en elaborar soportes documentales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La contabilidad analiza riesgos financieros y las finanzas clasifican cuentas por naturaleza económica y contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La contabilidad registra hechos económicos y las finanzas interpretan la información para evaluar decisiones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El análisis financiero parte de información contable organizada y la interpreta con criterios financieros.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál concepto describe mejor un activo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una obligación de la empresa para financiar su operación y responder por compromisos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un aporte de los propietarios para respaldar el patrimonio y fortalecer los recursos propios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un recurso o derecho controlado por la empresa que puede generar beneficios económicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un desembolso necesario para administrar o vender durante el periodo y apoyar la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los activos representan recursos como efectivo, cartera, inventarios, maquinaria o derechos que pueden aportar beneficios a la empresa.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál situación afecta directamente la ética profesional en el análisis financiero?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar los indicadores junto con una explicación de sus limitaciones para mejorar el análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Clasificar una obligación como patrimonio para mejorar artificialmente el endeudamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Comparar los resultados actuales con los de periodos anteriores para identificar variaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar los soportes contables antes de calcular las razones financieras y emitir conclusiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Alterar la clasificación de una cuenta distorsiona los indicadores y puede conducir a decisiones equivocadas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la utilidad del marco normativo colombiano en el análisis financiero?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir criterios para preparar información financiera confiable y comparable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Establecer una única fórmula para calcular todos los indicadores financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar si una empresa debe aumentar sus ventas o reducir sus costos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir el criterio técnico del analista cuando los datos están incompletos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las normas orientan la preparación de estados financieros, que son la base para calcular e interpretar indicadores.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué función cumplen los indicadores financieros?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar los estados en forma narrativa para describir la información sin mediciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Relacionar cifras contables para medir condiciones financieras específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Clasificar documentos contables según su fecha de elaboración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la revisión de los estados financieros y sus notas en general.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los indicadores permiten medir liquidez, actividad, endeudamiento y rentabilidad a partir de cuentas contables.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál opción describe correctamente el análisis vertical?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compara el valor de una cuenta frente al mismo rubro de otro periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determina el número de veces que se recupera una cuenta por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Calcula el rendimiento obtenido sobre el patrimonio de la empresa',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identifica el peso de una cuenta dentro de un total de referencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El análisis vertical calcula participaciones, como inventarios sobre total activo o costo de ventas sobre ventas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál opción describe correctamente el análisis horizontal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Calcula la participación de una cuenta dentro del total del estado financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Relaciona activos corrientes con pasivos corrientes para medir liquidez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compara una cuenta entre periodos para identificar aumentos o disminuciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evalúa la utilidad generada por las ventas para medir la rentabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El análisis horizontal permite calcular variaciones absolutas y relativas entre periodos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Una empresa aumenta sus ventas, pero su utilidad neta disminuye. ¿Cuál sería la mejor lectura inicial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El crecimiento de ventas debe analizarse junto con costos, gastos y márgenes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La empresa presenta necesariamente una mejora financiera por vender más.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La disminución de utilidad solo se explica por el comportamiento del patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El resultado no requiere revisión si los ingresos operacionales aumentaron.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Vender más no garantiza mayor utilidad si los costos o gastos aumentan en mayor proporción.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué evalúan los indicadores de liquidez?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de generar utilidad sobre ventas, activos y patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El nivel de deuda de la empresa frente a sus fuentes de financiación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eficiencia con la que se recuperan cartera e inventarios dentro del ciclo operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La capacidad de cubrir obligaciones de corto plazo con recursos corrientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La liquidez se analiza principalmente con activo corriente, pasivo corriente e inventarios.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una empresa tiene razón corriente aceptable, pero prueba ácida baja. ¿Qué análisis es más adecuado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Concluir que la empresa no presenta ningún riesgo financiero de corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar si la liquidez depende en exceso de inventarios o cartera de lenta recuperación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evaluar únicamente el nivel de patrimonio porque la liquidez ya fue confirmada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar solo las ventas, porque la prueba ácida no se relaciona con obligaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La prueba ácida excluye inventarios y permite observar una liquidez más exigente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué evalúan los indicadores de actividad o gestión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de la empresa para pagar intereses con la utilidad operacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La participación de los propietarios dentro del total del patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eficiencia en la recuperación y uso de cartera, inventarios, proveedores y activos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La rentabilidad obtenida después de descontar costos y gastos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Estos indicadores permiten analizar la rotación y uso de recursos operativos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Si los días de cartera superan la política de crédito definida por la empresa, ¿cuál decisión es más coherente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revisar los procesos de cobro, cupos de crédito y vencimientos de clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar el nivel de inventarios para compensar el retraso en la recuperación de cartera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interpretar el resultado como una mejora automática de la rentabilidad del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trasladar las cuentas por cobrar al patrimonio para mejorar la presentación de los indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Una cartera lenta puede afectar la liquidez y exige revisar la política de crédito y recaudo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué evalúan los indicadores de endeudamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El rendimiento obtenido por cada peso vendido durante el periodo analizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La velocidad con la que se recuperan los inventarios dentro del ciclo operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La participación del costo de ventas dentro de los ingresos operacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La proporción de activos o patrimonio financiada con obligaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El endeudamiento mide dependencia de terceros y presión financiera sobre la empresa.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Una empresa aumenta su endeudamiento y reduce su margen neto. ¿Cuál interpretación inicial es más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa mejora automáticamente porque tiene más fuentes externas de financiación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El margen neto deja de ser importante cuando la empresa aumenta su deuda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Puede existir mayor presión financiera y menor capacidad para convertir ventas en utilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El endeudamiento solo debe analizarse si la empresa no tiene ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Más deuda y menor rentabilidad pueden afectar la estabilidad financiera y la capacidad de pago.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué evalúan los indicadores de rentabilidad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de pagar deudas de corto plazo con el activo corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad de la empresa para generar utilidad a partir de ventas, activos o patrimonio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La participación de pasivos dentro del estado de situación financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La velocidad de recuperación de cuentas por cobrar e inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La rentabilidad mide qué tan eficiente es la empresa generando resultados positivos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una empresa tiene alto volumen de ventas, pero margen neto bajo. ¿Qué revisión sería más pertinente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar costos, gastos, descuentos, gastos financieros y precios de venta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Revisar únicamente el total de activos, sin considerar el estado de resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Concluir que la empresa tiene buena rentabilidad por el volumen vendido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar solo la rotación de proveedores porque el margen neto no depende de gastos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Un margen neto bajo indica que una parte reducida de las ventas queda como utilidad final.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál práctica mejora el uso de hoja electrónica en análisis financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Bloquear la revisión de fórmulas para evitar modificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mezclar datos de distintos años cuando las cifras son iguales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Digitar todos los resultados para evitar vínculos entre celdas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Separar datos de entrada, fórmulas, resultados e interpretación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Esta organización facilita la validación, actualización y revisión de los cálculos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Si los indicadores muestran baja liquidez, cartera lenta y endeudamiento creciente, ¿cuál decisión inicial es más prudente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar compras para mejorar la rotación de inventarios y compensar la cartera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar recaudos, vencimientos, flujo de caja y nuevas obligaciones antes de asumir más deuda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Distribuir utilidades para reducir el patrimonio y equilibrar la estructura financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar únicamente el margen bruto, porque la liquidez no depende de cartera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La combinación de baja liquidez, cartera lenta y deuda creciente exige revisar capacidad de pago y gestión de efectivo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
