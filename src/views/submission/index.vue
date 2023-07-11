<template>
  <div class="container" style="min-height: 40rem;padding: 2rem">
    <h1>GUIDELINES IN BRIEF</h1>
    <hr class="hr">
    <h2 style="margin-top: 2rem">Important Dates</h2>
    <div class="row" style="padding-top: 2rem">
      <div class="col">
        <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
          <div class="timeline-step">
            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title=""
                 data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
              <div class="inner-circle"></div>
              <p class="h2 mt-3 mb-1" style="letter-spacing: 3px">06/26/23</p>
              <p class="h6 text-muted mb-0 mb-lg-0">Opening of the Abstract Submission</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title=""
                 data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
              <div class="inner-circle"></div>
              <p class="h2 mt-3 mb-1" style="letter-spacing: 3px">08/31/23</p>
              <p class="h6 text-muted mb-0 mb-lg-0">Deadline for Abstract Submission</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title=""
                 data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
              <div class="inner-circle"></div>
              <p class="h2 mt-3 mb-1" style="letter-spacing: 3px">09/15/23</p>
              <p class="h6 text-muted mb-0 mb-lg-0">Applicants notified of talk decisions</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title=""
                 data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
              <div class="inner-circle"></div>
              <p class="h2 mt-3 mb-1" style="letter-spacing: 3px">09/31/23</p>
              <p class="h6 text-muted mb-0 mb-lg-0">Full programme available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 style="margin-top: 2rem">When submitting your abstract, you will be asked to indicate:</h2>
    <ul style="font-size: 1.2rem">
      <li>Complete name, email address and Current position</li>
      <li>Preferred means of presentation: Regular talk (15 minutes + 5 mins questions), Short talk (8 minutes + 2
        minutes questions) or Poster.
      </li>
      <li>Including conclusions or results</li>
    </ul>
    <h2 style="margin-top: 2rem">Abstracts must not exceed 250 words</h2>
    <h2 style="margin-top: 2rem">The poster size must be 100 (height) x 70 (width) cm</h2>
    <h2 style="margin-top: 2rem">E-mail</h2>
    <div style="vertical-align: center;display: flex">
      <p style="margin:0;text-decoration: underline;color: #2942DA;line-height: 32px;vertical-align: center;padding-right: 5px">
        jlchen@ips.ac.cn</p>
      <p style="margin:0;line-height: 32px;vertical-align: center;padding-top: 4px">
        <embed :src="require('@/assets/svg/email.svg')" type="image/svg+xml"
               style="width: 1.4rem;padding-top: 2px;vertical-align: center"/>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SubMission',
  data() {
    return {}
  }
}
</script>

<style scoped>
.timeline-steps {
  display: flex;
  justify-content: center;
  flex-wrap: wrap
}

.timeline-steps .timeline-step {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem
}

@media (min-width: 768px) {
  .timeline-steps .timeline-step:not(:last-child):after {
    content: "";
    display: block;
    border-top: .25rem dotted #3b82f6;
    width: 3.46rem;
    position: absolute;
    left: 7.5rem;
    top: .3125rem
  }

  .timeline-steps .timeline-step:not(:first-child):before {
    content: "";
    display: block;
    border-top: .25rem dotted #3b82f6;
    width: 3.8125rem;
    position: absolute;
    right: 7.5rem;
    top: .3125rem
  }
}

.timeline-steps .timeline-content {
  width: 10rem;
  text-align: center
}

.timeline-steps .timeline-content .inner-circle {
  border-radius: 1.5rem;
  height: 1rem;
  width: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6
}

.timeline-steps .timeline-content .inner-circle:before {
  content: "";
  background-color: #3b82f6;
  display: inline-block;
  height: 3rem;
  width: 3rem;
  min-width: 3rem;
  border-radius: 6.25rem;
  opacity: .5
}
</style>
