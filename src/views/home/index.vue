<template>
  <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>

      </div>
      <div class="carousel-inner">
        <div class="container">
          <div class="carousel-caption">
            <h1 style="font-weight: 700;font-size: 38px;text-shadow: black 0.1em 0.1em 0.2em">2023 XTBG Population
              Genomics Workshop</h1>
            <h1 style="font-weight: 600;font-size: 50px;text-shadow: black 0.1em 0.1em 0.2em">XTBG headquarters research
              centre (Meeting room 1)</h1>
            <h2 style="font-weight: 600;font-size: 40px;text-shadow: black 0.1em 0.1em 0.2em">09 – 15 Oct 2023 (7
              days)</h2>
            <p>
              <router-link class="btn btn-lg btn-primary" to="/contact">Contact us</router-link>
            </p>
          </div>
        </div>

        <div class="carousel-item">
          <img width="100%" height="100%" src="@/assets/img/home/home2.png"/>
        </div>
        <div class="carousel-item">
          <img width="100%" height="100%" src="@/assets/img/home/home3.png"/>
        </div>
        <div class="carousel-item">
          <img width="100%" height="100%" src="@/assets/img/home/home4.png"/>
        </div>
        <div class="carousel-item active">
          <img width="100%" height="100%" src="@/assets/img/home/home1.png"/>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container" style="margin-top: 3rem">
      <div style="border-radius: 10px; background-color: rgb(248,249,250);padding: 2rem 3rem">
        <h2 class="display-5 fw-bold">Introduction</h2>
        <p style="font-size: 1.3rem">
          The Society for Molecular Biology and Evolution (SMBE) is an international organization whose goals are to
          provide facilities for association and communication among molecular evolutionists and to further the goals of
          molecular evolution, as well as its practitioners and teachers. <b>Now, SMBE Regional Meeting comes to
          Shanghai!</b>
        </p>
        <p style="font-size: 1.3rem">
          This is an opportunity for researchers <b>of all levels of seniority, in all areas of evolutionary
          genetics</b> to present their work and to meet other researchers. There will be dedicated speaker slots
          available for students, postdocs, research staff and faculty, with prizes given to the best student and
          postdoc talks and posters. <b>Thanks to the generous support from SMBE, registration will be free for all
          those submitting a poster or an abstract for presentation.</b>
        </p>
      </div>
    </div>
    <div class="container px-4 py-5" id="featured-3" style="padding-bottom: 0 !important;">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <h3 class="fs-2">Programme</h3>
          <p>2023/10/20 15:00PM - 2023/10/22 15:00PM. Full programme available soon</p>
          <button type="button" class="btn btn-outline-primary" disabled>View PDF</button>
        </div>
        <div class="feature col">
          <h3 class="fs-2">Information</h3>
          <p>Information available soon</p>

          <button type="button" class="btn btn-outline-primary" disabled>View PDF</button>
        </div>
        <div class="feature col">
          <h3 class="fs-2">Abstract</h3>
          <p>Abstracts available soon</p>
          <button type="button" class="btn btn-outline-primary" disabled>View PDF</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/scss/carousel.css";
@import "@/scss/features.css";

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>
