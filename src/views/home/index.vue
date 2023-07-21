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
            <!--            <h1 style="font-weight: 700;font-size: 38px;text-shadow: black 0.1em 0.1em 0.2em">2023 XTBG Population-->
            <!--              Genomics Workshop</h1>-->
            <h1 style="font-weight: 600;font-size: 50px;text-shadow: black 0.1em 0.1em 0.2em">2023 XTBG Population
              Genomics Workshop</h1>
            <h2 style="font-weight: 600;font-size: 40px;text-shadow: black 0.1em 0.1em 0.2em;margin-top: 55px">
              2023/10/09 – 2023/10/15</h2>
            <p>
              <router-link class="btn btn-lg btn-primary" to="/contact">Contact us</router-link>
            </p>
          </div>
        </div>


        <div class="carousel-item active">
          <img width="100%" height="100%" src="@/assets/img/home/home2.jpg"/>
        </div>
        <div class="carousel-item">
          <img width="100%" height="100%" src="@/assets/img/home/home1.jpg"/>
        </div>
        <div class="carousel-item">
          <img width="100%" height="100%" src="@/assets/img/home/home3.jpeg"/>
        </div>
        <div class="carousel-item">
          <img width="100%" height="100%" src="@/assets/img/home/home4.jpeg"/>
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
        <p style="font-size: 1.3rem;text-align: justify;">
          <b>The workshop on population genomics in Xishuangbanna Tropical Botanical Garden (XTBG), CAS</b> located at
          Xishuangbanna, Yunnan, China will bring together a world-class faculty to study state of the art techniques
          for analysis of genomic data within species and closely related species complexes. The workshop will combine
          lectures with hands-on practicals, with ample opportunity for discussion with faculty. The workshop is aimed
          at researchers from advanced Master students to faculty who are looking to apply population genetic tools to
          analyze their data. This workshop will be limited to 30 participants. It is a small workshop, you will
          have more time to interact with the faculty and professors. <b>We also look forward to welcoming participants
          from the rest of Asia and elsewhere. Applicants from nearby low income countries can apply a fee waiver,
          please send an email to explain the circumstances to request the travel expenses.</b>
        </p>
      </div>
    </div>

    <div class="container" style="min-height: 40rem;padding: 2rem">
      <h1 style="margin-top: 0;color: #22460a">when and where</h1>
      <hr class="hr" style="color: #2e3a27">
      <div class="alert alert-success" role="alert">
        <!--        style="background-color: rgb(248,249,250);color: #0c0c0c;border-color: #f8f9fa"-->
        <!--      <h2 class="alert-heading">All participants must register!</h2>-->
        <ul style="font-weight: 400; font-size: 1.3rem">

          <li style="margin-top: 15px"><b>Dates: </b> 09 – 15 Oct 2023 (7 days)</li>
          <li style="margin-top: 15px"><b>Venue: </b>
            <a
                href="https://720yun.com/t/9fdj5OmwOn9?pano_id=8717028&from=timeline#scene_id=12605930"
            >
              <!--              style="color: #3b82f6; text-decoration: underline"-->

              XTBG headquarters research centre (Meeting room 1)
            </a>
          </li>

          <li style="margin-top: 15px"><b>Host: </b>
            <!--            style="color: #3b82f6; text-decoration: underline">-->

            <a
                href="http://www.xtbg.cas.cn/"
            >
              XTBG
            </a>
            &
            <a
                href="http://www.shanghaipasteur.cas.cn/CMDH/"
            >
              The Centre for Microbes, Development and Health, Institut Pasteur of Shanghai, CAS
            </a>
            &
            <a
                href="https://www.fudan.edu.cn/"
            >
              Fudan University
            </a>
            &
            <a
                href="http://www.novogene.com"
            >
              Novogene
            </a>
          </li>

          <p style="margin-top: 25px;text-align: justify;">
            <b>Xishuangbanna Tropical Botanical Garden (XTBG) of Chinese Academy of Sciences
              (CAS)</b> was founded under the
            leadership of the late eminent botanist Cai Xitao in 1959. Geographically, it lies between 101°25′E，21°41′N,
            with an elevation of 570 m above sea level. It is a place of tropical flavor, beauty, serenity and fun far
            away from the hustle and bustle of big cities. It is a comprehensive research institution engaged in
            scientific research, species preservation, science communication, science & technology development, and a
            well-known scenic spot as well.</p>
        </ul>
      </div>
    </div>


    <!--    <div class="container px-4 py-5" id="featured-3" style="padding-bottom: 0 !important;">-->
    <!--      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">-->
    <!--        <div class="feature col">-->
    <!--          <h3 class="fs-2">Programme</h3>-->
    <!--          <p>2023/10/20 15:00PM - 2023/10/22 15:00PM. Full programme available soon</p>-->
    <!--          <button type="button" class="btn btn-outline-primary" disabled>View PDF</button>-->
    <!--        </div>-->
    <!--        <div class="feature col">-->
    <!--          <h3 class="fs-2">Information</h3>-->
    <!--          <p>Information available soon</p>-->

    <!--          <button type="button" class="btn btn-outline-primary" disabled>View PDF</button>-->
    <!--        </div>-->
    <!--        <div class="feature col">-->
    <!--          <h3 class="fs-2">Abstract</h3>-->
    <!--          <p>Abstracts available soon</p>-->
    <!--          <button type="button" class="btn btn-outline-primary" disabled>View PDF</button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

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
