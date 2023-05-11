<script setup lang="ts">
import performers from "@/stores/performers.json";
</script>
<template>
  <!-- ======= Speakers Section ======= -->
  <section id="speakers">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Vystupující</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="performer in performers">
          <div class="speaker" data-aos="fade-up" data-aos-delay="100">
            <img
              :src="'/' + performer.img"
              :alt="performer.slug"
              class="img-fluid"
            />
            <div class="details">
              <h3>
                <RouterLink :to="'/vystupujici/' + performer.slug">{{
                  performer.name
                }}</RouterLink>
              </h3>
              <div v-if="performer['links:']" class="social">
                <a
                  v-if="performer['links:']?.www"
                  :href="performer['links:']?.www"
                  target="_blank"
                  ><i class="bi bi-browser-chrome"></i
                ></a>
                <a
                  v-if="performer['links:']?.facebook"
                  :href="performer['links:']?.facebook"
                  target="_blank"
                  ><i class="bi bi-facebook"></i
                ></a>
                <a
                  v-if="performer['links:']?.instagram"
                  :href="performer['links:']?.instagram"
                  target="_blank"
                  ><i class="bi bi-instagram"></i
                ></a>
                <a
                  v-if="performer['links:']?.youtube"
                  :href="performer['links:']?.youtube"
                  target="_blank"
                  ><i class="bi bi-youtube"></i
                ></a>
                <a
                  v-if="performer['links:']?.spotify"
                  :href="performer['links:']?.spotify"
                  target="_blank"
                  ><i class="bi bi-spotify"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Speakers Section -->
</template>
