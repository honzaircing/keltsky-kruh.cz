<script setup lang="ts">
import { ref, onMounted, watch, type HtmlHTMLAttributes } from "vue";
import { RouterLink, useRoute } from "vue-router";

const headRef = ref<any>(); // obtain the reference
const route = useRoute();
const page = ref<any>(null);
const mobilMenu = ref("");
const mobilMenuActive = ref(false);

const mobilShow = async (isActive: boolean) => {
  mobilMenuActive.value = isActive;
  if (mobilMenuActive.value && mobilMenu.value == "") {
    mobilMenu.value = "navbar-mobile";
  } else {
    mobilMenu.value = "";
  }
};

watch(
  () => route.path,
  () => {
    page.value = route.path;
    if (page.value != "/") {
      headRef.value.classList.add("header-scrolled");
    } else {
      headRef.value.classList.remove("header-scrolled");
    }
  }
),
  onMounted(() => {
    var prev = window.pageYOffset;

    window.addEventListener("scroll", () => {
      var curr = window.pageYOffset;
      if (prev + 5 < curr) {
        headRef.value.classList.add("header-scrolled");
      }
      if (curr === 0 && page.value == "/") {
        headRef.value.classList.remove("header-scrolled");
      }
      prev = curr;
    });
  });
</script>
<template>
  <header id="header" ref="headRef" class="d-flex align-items-center">
    <div class="container-fluid container-xxl d-flex align-items-center">
      <div id="logo" class="me-auto">
        <!-- Uncomment below if you prefer to use a text logo -->
        <!-- <h1><a href="index.html">The<span>Event</span></a></h1>-->
        <h1>
          <a href="#" class="scrollto"
            ><img src="@/assets/img/logo_kk_white.png" alt="" title=""
          /></a>
        </h1>
      </div>
      <nav id="navbar" class="navbar order-last order-lg-0" :class="mobilMenu">
        <ul>
          <li>
            <RouterLink
              to="/"
              class="nav-link scrollto"
              active-class="active"
              @click="mobilShow(false)"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/o-festivalu"
              class="nav-link scrollto"
              active-class="active"
              @click="mobilShow(false)"
              >O festivalu</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/program"
              class="nav-link scrollto"
              active-class="active"
              @click="mobilShow(false)"
              >Program</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/vystupujici"
              class="nav-link scrollto"
              active-class="active"
              @click="mobilShow(false)"
              >Vystupující</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/informace"
              class="nav-link scrollto"
              active-class="active"
              @click="mobilShow(false)"
              >Informace</RouterLink
            >
          </li>

          <li>
            <RouterLink
              to="/kontakt"
              class="nav-link scrollto"
              active-class="active"
              @click="mobilShow(false)"
              >Kontakt</RouterLink
            >
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle" @click="mobilShow(true)"></i>
      </nav>
      <RouterLink to="/vstupenky" class="buy-tickets scrollto"
        >Vstupenky</RouterLink
      >
    </div>
  </header>
</template>
