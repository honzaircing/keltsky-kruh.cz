<script setup lang="ts">
import About from "@/components/About.vue";
import AboutInfo from "@/components/AboutInfo.vue";
import Program from "@/components/Program.vue";
import Ticket from "@/components/Ticket.vue";
import Performers from "@/components/Performers.vue";
import Info from "@/components/Info.vue";
import Contact from "@/components/Contact.vue";
import Plakat from "@/components/Plakat.vue";
import { RouterLink, useRoute } from "vue-router";
</script>
<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1 class="mb-4 pb-0">
        Trochu jiný festival “keltské” kultury<br /><span>Keltský kruh</span>
      </h1>
      <p class="mb-4 pb-0">12. července 2025 - Vodní hrad Budyně nad Ohří</p>
      <RouterLink to="/vstupenky" class="about-btn">Vstupenky</RouterLink>
    </div>
  </section>
  <!-- End Hero Section -->

  <main id="main">
    <About />
    <Program />
    <Ticket />

    <Info />
    <Contact />
  </main>
  <!-- End #main -->
</template>
