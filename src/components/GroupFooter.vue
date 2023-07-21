<template>
  <footer class="container footer mt-auto py-3">
    <div class="footer-company">
      <p>2023 © All Rights Reserved by 2023 XTBG Population Genomics Workshop</p>
      <p>
        <a href="#/home">Home</a>
        <a href="#/registration">Registration</a>
        <a href="#/contact">Contact</a>
        <a href="https://pog.fudan.edu.cn" >HumPOG</a>

      </p>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'GroupFooter',
  data() {
    return {
      relatedLinks: []
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.125rem;
}

.footer-company {
  display: flex;
  justify-content: space-between;
  margin: auto;
  color: rgb(145, 150, 159);
  border-top: 1px dashed rgb(197, 197, 197);
  padding: 10px 10px 0px;
  margin-top: 10px;

  > p > a {
    margin-left: 15px;
  }
}

p {
  margin: 0
}

li::before {
  content: '';
  display: inline-block;
  width: 0px;
  height: 0px;
  border-left: 5px solid rgb(197, 197, 197);
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 2px;
}

li {
  list-style-type: none;
  cursor: pointer;
  line-height: 32px;
}

ul {
  margin: 0 !important;
  padding-left: 0px
}

</style>
