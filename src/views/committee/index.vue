<template>
  <div class="container" style="min-height: 60rem;padding: 2rem 0">
    <h1>Organizing Committee</h1>
    <hr class="hr">
    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col" v-for="m in organizers" v-bind:key="m.name">
        <div class="card" style="height: 560px">
          <img :src="m.img" class="card-img-top" :alt="m.name" style="height: 350px">
          <div class="card-body">
            <h5 class="card-title">{{ m.name }}</h5>
            <div style="height: 130px">
              <p style="font-size: 1rem;margin-bottom: 5px" class="card-text">{{ m.institute1 }}</p>
              <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.institute2 }}</p>

              <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.institute3 }}</p>

            </div>

            <p v-show="m.link" style="margin: 0;text-align: right"><a :href="m.link"
            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">More</a>
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
      members: [
        {
          name: 'Kai Ye',
          institute: 'Xi’an Jiaotong University',
          email: 'kaiye@xjtu.edu.cn',
          link: 'http://www.xjtu.edu.cn/jsnr.jsp?urltype=tree.TreeTempUrl&wbtreeid=1632&wbwbxjtuteacherid=1992',
          img: require('@/assets/img/committee/4.png')
        },
        {
          name: 'Jian Lu',
          institute: 'School of Life Sciences, Peking University',
          email: 'LUJ@pku.edu.cn',
          link: 'https://bio.pku.edu.cn/homes/Index/news_cont_jl/17/46.html',
          img: require('@/assets/img/committee/5.png')
        },
        {
          name: 'Hua Chen',
          institute: 'Beijing Institute of Genomics, Chinese Academy of Sciences',
          email: 'chenh@big.ac.cn',
          link: 'http://www.big.ac.cn/sourcedb_big_cas/zw/zjrc/yjy/201506/t20150630_4381456.html',
          img: require('@/assets/img/committee/6.png')
        },
        {
          name: 'Chaolong Wang',
          institute: 'Huazhong University of Science and Technology',
          email: 'chaolong@hust.edu.cn',
          link: 'http://gwxy.tjmu.edu.cn/info/1016/1373.htm',
          img: require('@/assets/img/committee/7.png')
        },
        {
          name: 'Xuemei Lu',
          institute: 'Kunming Institute of Zoology, Chinese Academy of Sciences',
          email: 'xuemeilu@mail.kiz.ac.cn',
          link: 'https://people.ucas.edu.cn/~3979404',
          img: require('@/assets/img/committee/8.png')
        },
      ],

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
          name: '陈佳璐 CHEN Jialu',
          institute1: '中国科学院上海免疫与感染研究所',
          institute2: '微生物、发育与健康研究中心',
          institute3: 'The Centre for Microbes, Development and Health, Shanghai Institue of Immunity and Infection, Chinese Academy of Sciences',
          email: 'jlchen@ips.ac.cn',
          link: '',
          img: require('@/assets/img/committee/2.png')
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
          institute2: 'Fudan University - Center for Evolutionary Biology',
          institute3: '',
          email: 'xushua@fudan.edu.cn',
          link: 'https://homo.fudan.edu.cn/b6/18/c18452a177688/page.htm',
          img: require('@/assets/img/committee/3.png')
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
      organizers1: [
        {
          name: 'Shuhua Xu',
          institute: 'Center for Evolutionary Biology, Fudan University',
          email: 'xushua@fudan.edu.cn',
          link: 'https://homo.fudan.edu.cn/b6/18/c18452a177688/page.htm',
          img: require('@/assets/img/committee/3.png')
        },
        {
          name: 'Yan Lu',
          institute: 'Center for Evolutionary Biology, Fudan University',
          email: 'lueyan@fudan.edu.cn',
          link: 'https://life.fudan.edu.cn/65/fe/c31282a353790/page.htm',
          img: require('@/assets/img/committee/10.jpeg')
        },
        {
          name: 'Lian Deng',
          institute: 'Center for Evolutionary Biology, Fudan University',
          email: 'denglian@fudan.edu.cn',
          link: 'https://life.fudan.edu.cn/5c/34/c31285a482356/page.htm',
          img: require('@/assets/img/committee/11.jpeg')
        },
        {
          name: 'Jing Pu',
          institute: 'Center for Evolutionary Biology, Fudan University',
          email: 'pujing@picb.ac.cn',
          link: "",
          img: require('@/assets/img/committee/12.jpeg')
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
