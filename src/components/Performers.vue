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
              :src="'/src/assets/img/speakers/' + performer.img"
              :alt="performer.slug"
              class="img-fluid"
            />
            <div class="details">
              <h3>
                <RouterLink :to="'/vystupujici/' + performer.slug">{{
                  performer.name
                }}</RouterLink>
              </h3>
              <p><br /><br /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Speakers Section -->
</template>
