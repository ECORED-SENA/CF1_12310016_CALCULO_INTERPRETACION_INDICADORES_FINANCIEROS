<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") El cálculo e interpretación de indicadores financieros permite comprender la situación económica de una empresa a partir de sus estados financieros. Para lograrlo, es necesario reconocer fórmulas, definiciones y usos de los principales indicadores aplicados al análisis de gestión y resultados, junto con los métodos vertical y horizontal, que permiten calcular participaciones, variaciones y comportamientos entre periodos. 
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La información financiera se aborda como base del análisis empresarial, considerando el marco normativo colombiano y la ética profesional en el manejo de datos contables. También se estudian los indicadores de liquidez, actividad, endeudamiento y rentabilidad, los cuales ofrecen lecturas específicas sobre capacidad de pago, eficiencia operativa, nivel de obligaciones, estructura financiera y generación de utilidad para apoyar decisiones.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-2.p-4.mb-0.d-flex.align-items-center
          p.mb-0 Su aplicación resulta útil en la revisión financiera, elaboración de reportes, comparación de estados financieros y preparación de información para análisis posteriores. Además, el uso de hoja electrónica facilita organizar datos, construir fórmulas, validar cálculos y verificar resultados, permitiendo desarrollar procesos ordenados, confiables y útiles para avanzar hacia la interpretación, el diagnóstico y el informe financiero empresarial.
        .col-lg-2.bg-color-3.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/intro/img2.svg", data-aos="zoom-in", style="width: 120px").mx-auto








</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
