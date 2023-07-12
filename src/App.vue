<template>
  <div id="app">

    <header class="sticky-top d-flex flex-wrap justify-content-center py-3 mb-4 bg-dark" style="padding: 0 2rem;margin: 0 !important">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4" style="color: white">2023 XTBG Population Genomics Workshop</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/home" active-class="active" class="nav-link">Home</router-link></li>

        <li class="nav-item"><router-link to="/schedule" active-class="active" class="nav-link">Schedule</router-link></li>

        <li class="nav-item"><router-link to="/speakers" active-class="active" class="nav-link">Speakers</router-link></li>
        <li class="nav-item"><router-link to="/committee" active-class="active" class="nav-link">Committee</router-link></li>
        <li class="nav-item"><router-link to="/registration" active-class="active" class="nav-link">Registration</router-link></li>
<!--        <li class="nav-item"><router-link to="/submission" active-class="active" class="nav-link">Submission</router-link></li>-->
        <li class="nav-item"><router-link to="/contact" active-class="active" class="nav-link">Contact</router-link></li>
      </ul>
    </header>
    <div>
      <router-view style="min-height:500px;"/>
    </div>
    <GroupFooter/>
  </div>
</template>

<script>
import GroupFooter from "./components/GroupFooter.vue";

export default {
  name: 'App',
  components: {
    GroupFooter
  }
}
</script>

<style lang="scss">
.highlight {
  color: var(--main-color) !important;
  //background-color: #f8f9fa;

}
.nav-link {
  color: white !important;
}
.nav-link-active {
  color: white !important;
}
body {

}

</style>
