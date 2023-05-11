<script setup lang="ts">
import { useRoute } from "vue-router";
import performers from "@/stores/performers.json";

const route = useRoute();

const performer = route.params.performer;

const filterPerformer = performers.filter((e) => e.slug === performer)[0];
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
              :src="'/' + filterPerformer.img"
              :alt="filterPerformer.slug"
              class="img-fluid"
            />
          </div>

          <div class="col-md-6">
            <div class="details">
              <div v-if="filterPerformer['links:']" class="social">
                <a
                  v-if="filterPerformer['links:']?.www"
                  :href="filterPerformer['links:']?.www"
                  target="_blank"
                  ><i class="bi bi-browser-chrome"></i
                ></a>
                <a
                  v-if="filterPerformer['links:']?.facebook"
                  :href="filterPerformer['links:']?.facebook"
                  target="_blank"
                  ><i class="bi bi-facebook"></i
                ></a>
                <a
                  v-if="filterPerformer['links:']?.instagram"
                  :href="filterPerformer['links:']?.instagram"
                  target="_blank"
                  ><i class="bi bi-instagram"></i
                ></a>
                <a
                  v-if="filterPerformer['links:']?.youtube"
                  :href="filterPerformer['links:']?.youtube"
                  target="_blank"
                  ><i class="bi bi-youtube"></i
                ></a>
                <a
                  v-if="filterPerformer['links:']?.spotify"
                  :href="filterPerformer['links:']?.spotify"
                  target="_blank"
                  ><i class="bi bi-spotify"></i
                ></a>
              </div>
              <div v-html="filterPerformer.text!"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
