<template>
  <div class="container" style="min-height: 60rem;padding: 2rem 0">
    <h1>Organizing Committee</h1>
    <hr class="hr">
    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col" v-for="m in organizers" v-bind:key="m.name">
        <div class="card" style="height: 640px">
          <img :src="m.img" class="card-img-top" :alt="m.name" style="height: 420px">
          <div class="card-body">
            <h5 class="card-title">{{ m.name }}</h5>
            <div style="height: 130px">
              <p style="font-size: 1rem;margin-bottom: 5px" class="card-text">{{ m.institute1 }}</p>
              <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.institute2 }}</p>

              <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.institute3 }}</p>

            </div>

            <p
                v-show="m.link"
                style="margin: 0;text-align: right"
            >
              <a
                  :href="m.link"
                  class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>


    <h1 style="margin-top: 40px">Technical Support</h1>
    <hr class="hr">
    Yingbing Shi (Fudan University)<br>
    Xiaohan Zhao (Fudan University)
  </div>
</template>

<script>
export default {
  name: 'CommitteeMembers',
  data() {
    return {
      organizers: [
        {
          name: 'Daniel Falush',
          institute1: '中国科学院上海免疫与感染研究所',
          institute2: '微生物、发育与健康研究中心',
          institute3: 'The Centre for Microbes, Development and Health, Shanghai Institue of Immunity and Infection, Chinese Academy of Sciences',

          email: 'daniel.falush@ips.ac.cn',
          link: "http://sourcedb.shanghaipasteur.cas.cn/zw/kydw/yjzz/201911/t20191119_5438491.html",
          img: require('@/assets/img/committee/1.png')
        },
        {
          name: '高洁 GAO Jie',
          institute1: '中国科学院西双版纳热带植物园',
          institute2: 'XTBG, Chinese Academy of Sciences',
          institute3: '',
          email: '',
          link: 'https://www.xtbg.cas.cn/2022/rcdw/yjy/202210/t20221019_6535790.html ',
          img: require('@/assets/img/committee/GAOJie.png')
        },

        {
          name: '徐书华 XU Shuhua',
          institute1: '复旦大学-进化生物学研究中心',
          institute2: '上海市遗传学会 ',
          institute3: 'Fudan University - Center for Evolutionary Biology, Shanghai Society of Genetics',
          email: 'xushua@fudan.edu.cn',
          link: 'https://homo.fudan.edu.cn/b6/18/c18452a177688/page.htm',
          img: require('@/assets/img/committee/3.png')
        },

        {
          name: '星耀武 XING Yaowu',
          institute1: '中国科学院西双版纳热带植物园',
          institute2: 'XTBG, Chinese Academy of Sciences',
          institute3: '',
          email: '',
          link: 'https://www.xtbg.cas.cn/2022/rcdw/yjy/202210/t20221020_6535853.html',
          img: require('@/assets/img/committee/XingYaowu.jpg')
        },


        {
          name: '陈佳璐 CHEN Jialu',
          institute1: '中国科学院上海免疫与感染研究所',
          institute2: '微生物、发育与健康研究中心',
          institute3: 'The Centre for Microbes, Development and Health, Shanghai Institue of Immunity and Infection, Chinese Academy of Sciences',
          email: 'jlchen@ips.ac.cn',
          link: '',
          img: require('@/assets/img/committee/2.png')
        },


        {
          name: '诺禾致源 Novogene',
          institute1: ' ',
          institute2: ' ',
          institute3: '',
          email: 'service@novogene.com',
          link: 'https://www.novogene.cn/',
          img: require('@/assets/img/committee/img.png')
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
