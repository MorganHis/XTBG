<template>
  <div id="app">
<!--    <GroupNav/>-->
<!--    <nav class="navbar navbar-light bg-light second-nav" style="justify-content: center;padding: 0;">-->
<!--      <div style="width:1200px;padding: 0 10px;">-->
<!--        <div style="height:150px;display: flex;align-items: center;">-->
<!--          <a style="display:block;font-size:2rem;font-weight: 550;color: #2b4275;">-->
<!--            <span class="highlight">C</span>hinese <span class="highlight">P</span>angenome <span-->
<!--              class="highlight">C</span>onsortium-->
<!--&lt;!&ndash;            class="highlight">C</span>onsortium (Phase I)&ndash;&gt;-->
<!--          </a>-->
<!--        </div>-->
<!--        <div style="display: flex; " class="nav-links">-->
<!--          <router-link active-class="nav-link-active" to="/home">Home</router-link>-->
<!--          <p style="color:#606266; "> | </p>-->
<!--          <router-link active-class="nav-link-active" to="/phasei">Phase I</router-link>-->
<!--          <p style="color:#606266; "> | </p>-->
<!--          <router-link active-class="nav-link-active" to="/participants">Participants</router-link>-->
<!--          <p style="color:#606266; "> | </p>-->
<!--          <router-link active-class="nav-link-active" to="/data">Data</router-link>-->
<!--          <p style="color:#606266; "> | </p>-->
<!--          <router-link active-class="nav-link-active" to="/publications">Publications</router-link>-->
<!--          <p style="color:#606266; "> | </p>-->
<!--          <router-link active-class="nav-link-active" to="/conferenceTalks">Conference Talks</router-link>-->
<!--          <p style="color:#606266; "> | </p>-->
<!--          <router-link active-class="nav-link-active" to="/committee">About</router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->
    <header class="sticky-top d-flex flex-wrap justify-content-center py-3 mb-4 bg-dark" style="padding: 0 2rem;margin: 0 !important">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4" style="color: white">2023 XTBG Population Genomics Workshop</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/home" active-class="active" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/committee" active-class="active" class="nav-link">Committee</router-link></li>
        <li class="nav-item"><router-link to="/registration" active-class="active" class="nav-link">Registration</router-link></li>
        <li class="nav-item"><router-link to="/submission" active-class="active" class="nav-link">Submission</router-link></li>
        <li class="nav-item"><router-link to="/speakers" active-class="active" class="nav-link">Speakers</router-link></li>
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
