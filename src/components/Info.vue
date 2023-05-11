<script setup lang="ts">
import { ref } from "vue";
import VueEasyLightbox, { useEasyLightbox } from "vue-easy-lightbox";

const {
  // methods
  show,
  onHide,
  changeIndex,
  // refs
  visibleRef,
  indexRef,
  imgsRef,
} = useEasyLightbox({
  // src / src[]
  imgs: ["/src/assets/img/stanovani-300x225.jpg"],
  // initial index
  initIndex: 0,
});
</script>
<template>
  <section id="info" class="section-with-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Informace</h2>
        <p>Co je ještě dobré vědět.</p>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
        />
      </div>

      <div class="row info-info">
        <div class="col-md-3">
          <div class="info-address">
            <i class="bi bi-geo-alt"></i>
            <h3>Adresa</h3>
            <a href="https://goo.gl/maps/fscuZxxPkQys41rM9" target="_blank">
              Mírové nám. 1, 411 18 Budyně nad Ohří <br />50.404, 14.123
            </a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="info-phone">
            <i class="bi bi-car-front"></i>
            <h3>Auto & Parkování</h3>
            <p>
              Od Prahy i Ústí po
              <strong>D8 , exit 35 Doksany, Terezín</strong> a dále po silnici
              118 až do Budyně. <br />
              Od Slaného silnice 118 směr Litoměřice.
            </p>
            <br />
            <p>
              Parkovat můžete ve městě (po dodržení dopravních předpisů).
              <br />Pro pořadatele a účinkující na vyhrazeném parkoviště na
              Mírovém náměstí u kostela.
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info-bus">
            <i class="bi bi-bus-front"></i>
            <h3>Hromadná doprava</h3>
            <p>
              Jde to i vlakem/autobusem, hlavně z Roudnice nebo Slaného:
              <a href="https://idos.cz" target="_blank">IDOS</a>
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info-email">
            <i class="bi bi-chevron-up"></i>
            <h3>Stanování</h3>
            <p>Za hradem bude možné stanovat zdarma!</p>
            <div class="venue-gallery">
              <img
                src="@/assets/img/stanovani-300x225.jpg"
                alt=""
                class="img-fluid"
                @click="show"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
