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
  imgs: ["/src/assets/img/plakat.png"],
  // initial index
  initIndex: 0,
});
</script>
<template>
  <section id="info" class="section-with-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Plakát</h2>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
        />
      </div>

  
        <div class="col-md-3">
          <div class="info-email">
            <div class="venue-gallery">
              <img
                src="@/assets/img/plakat.png"
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
