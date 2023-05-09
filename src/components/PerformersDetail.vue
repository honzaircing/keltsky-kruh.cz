<script setup lang="ts">
import { useRoute } from "vue-router";
import performers from "@/stores/performers.json";

const route = useRoute();

const performer = route.params.performer;

const filterPerformer = performers
  .filter((e) => e.slug === performer)
  .map((e) => {
    return { name: e.name, text: e.text, img: e.img, slug: e.slug };
  })[0];
</script>
<template>
  <main id="main" class="main-page">
    <!-- ======= Speaker Details Sectionn ======= -->
    <section id="speakers-details">
      <div class="container">
        <div class="section-header">
          <h2>{{ filterPerformer.name }}</h2>
        </div>

        <div class="row">
          <div class="col-md-6">
            <img
              :src="'/src/assets/img/speakers/' + filterPerformer.img"
              :alt="filterPerformer.slug"
              class="img-fluid"
            />
          </div>

          <div class="col-md-6">
            <div class="details">
              <div v-html="filterPerformer.text!"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
