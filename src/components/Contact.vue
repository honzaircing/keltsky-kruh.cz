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
  <section id="contact" class="section">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Kontakt</h2>
        <p>Kam se obrátit</p>
      </div>
      <div class="row contact-info">
        <div class="col-md-12">
          <div></div>
        </div>
      </div>

      <div class="row contact-info">
        <div class="col-md-6">
          <div class="contact-email">
            <i class="bi bi-envelope"></i>
            <h3>Informace pro stánkaře</h3>
            <p><a href="mailto:keltsky-kruh@partynaklic.cz">ZDE</a></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-email">
            <a
              href="https://www.facebook.com/keltskykruhbudyne/"
              target="_blank"
            >
              <i class="bi bi-facebook"></i>
              <h3>FB</h3></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
