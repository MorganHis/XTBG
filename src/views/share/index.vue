<template>
  <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div style="display:flex;justify-content:space-between;max-height: 600px">
        <img data-aos="fade-right" src="@/assets/img/home/home2.jpg" style="width:100%;">
      </div>
      <div class="container">
        <div class="carousel-caption">
          <h1 style="font-weight: 600;font-size: 30px;text-shadow: black 0.1em 0.1em 0.2em">2023 XTBG Population
            Genomics Workshop</h1>
          <h2 style="font-weight: 500;font-size: 30px;text-shadow: black 0.1em 0.1em 0.2em;margin-top: 55px">
            2023/10/09 – 2023/10/15</h2>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 1rem">
      <div style="border-radius: 10px; background-color: rgb(248,249,250);padding: 2rem 3rem">

        <p style="font-size: 1.3rem;text-align: justify;">
          中国科学院西双版纳热带植物园和中国科学院上海免疫与感染研究所联合复旦大学以及诺禾致源公司拟于2023年10月9日-15日针对国内外科研人员开设第二届培训班。
          本次培训班将历时一个星期，我们邀请到来自国际、国内种群基因组学和物种形成方向的国内外顶尖科学家，聚焦该领域最前沿的研究理论和方法通过一系列讲座，
          研讨，研究方法实际操作演练，对参与者从种群基因组学的理论和方法上进行一次彻底的提升。本次培训班主要包括：“基因组学”，“种群基因组学及物种形成”，“系统发育基因组学”三个培训项目，包括理论学习和数据实操。
        </p>
        <p style="font-size: 1.3rem;text-align: justify;">
          本次研讨会仅限 30 名参加者。这是一个小型研讨会，您将有更多时间与老师和教授互动。
        </p>
      </div>
    </div>

    <div class="container" style="margin-top: 1rem">
      <div class="alert alert-success" role="alert">
        <ul style="font-weight: 400; font-size: 1.3rem">
          <li style="margin-top: 15px"><b>举办时间: </b> 09 – 15 Oct 2023 (7 days)</li>
          <li style="margin-top: 15px"><b>举办地点: </b>
            <a>
              中国科学院西双版纳热带植物园是中国科学院直属事业单位，是集科学研究、物种保存与科普教育为一体的综合性研究机构和国内外知名的风景名胜区。
              版纳植物园由我国著名植物学家蔡希陶先生于1959年领导创建。全园占地面积约1,125公顷，收集活植物13,000多种，建有38个植物专类区，
              保存有一片面积约250公顷的原始热带雨林，是我国面积最大、收集物种最丰富、植物专类园区最多的植物园，也是世界上户外保存植物种数和向公众展示的植物类群数最多的植物园。
              版纳植物园秉承“秉恒致知，和实生物”的核心理念，以建设“生态学与生物多样性研究基地和热带植物大本营”为定位，促进我国生物多样性保护和可持续发展。
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container" style="margin-top: 3rem">
      <h2 class="display-5 fw-bold">Confirmed Speakers</h2>
      <hr class="hr" style="color: #2e3a27">
      <div class="col" v-for="m in speakers" v-bind:key="m.name">
        <div style="border-radius: 10px; background-color: rgb(230,240,250);padding: 1rem 1rem;margin-bottom: 5px">
          <div style="display:flex;justify-content:space-between;margin-top: 5px;margin-bottom: 5px;max-width: 700px">
            <img :src="m.img" class="card-img-top" :alt="m.name" style="width:60%;">
          </div>
          <h5 class="card-title">{{ m.name }}</h5>
          <div style="text-align: justify;">
            <p style="font-size: 1rem;margin-bottom: 5px" class="card-text">{{ m.affiliation1 }}</p>
            <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.affiliation2 }}</p>
            <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.affiliation3 }}</p>
            <p style="margin-bottom: 5px;font-size: 1rem;color: #48649d" class="card-text">{{ m.description }}</p>
          </div>
          <p v-show="m.link" style="margin: 0;text-align: left">
            <a :href="m.link"
               class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              More
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 1.5rem">
      <h2 class="display-5 fw-bold">Organizing Committee</h2>
      <hr class="hr" style="color: #2e3a27">

      <div class="col" v-for="m in organizers" v-bind:key="m.name">
        <div style="border-radius: 10px; background-color: rgb(230,240,250);padding: 1rem 1rem;margin-bottom: 5px">
          <div style="display:flex;justify-content:space-between;margin-top: 5px;margin-bottom: 5px;max-width: 700px">
            <img :src="m.img" class="card-img-top" :alt="m.name" style="width:60%;">
          </div>

          <h5 class="card-title">{{ m.name }}</h5>
          <div style="text-align: justify;">
            <p style="font-size: 1rem;margin-bottom: 5px" class="card-text">{{ m.institute1 }}</p>
            <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.institute2 }}</p>
            <p style="margin-bottom: 5px;font-size: 1rem" class="card-text">{{ m.institute3 }}</p>
          </div>

          <p v-show="m.link" style="margin: 0;text-align: left">
            <a :href="m.link"
               class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              More
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 1.5rem">

      <h2 class="display-5 fw-bold">Preliminary Schedule</h2>
      <hr class="hr" style="color: #2e3a27">

      <img src="@/assets/img/schedule/schedule3.png"
           style="width:100%;">
    </div>
    <div class="container" style="margin-top: 1.5rem">

      <h2 class="display-5 fw-bold">Registration</h2>
      <hr class="hr" style="color: #2e3a27">
      <div class="alert alert-success" role="alert">
        <!--      <h2 class="alert-heading">All participants must register!</h2>-->
        <ul style="font-weight: 400; font-size: 1.3rem">


          <li><b>Deadline:</b> <a style="background-color: rgba(255,171,19,0.7)"> Sep. 15th, 2023 </a> (applicants
            should
            provide a 1 -page CV in English together with a
            200-word
            summary of their current research project and reason for wishing to attend the workshop.)
          </li>
          <p></p>
          <li><b>Fees: </b> 3000 RMB/person (cover lecture room, materials, coffee breaks, costs for instructor, etc.;
            not including transportation, accommodation and meals (organizer will help to arrange).)
          </li>
          <p></p>
          <li>
            <b>Registration to the email: </b>
            <a style="color: #3b82f6">gaojie@xtbg.org.cn</a>, and
            <a style="color: #3b82f6">jlchen@ips.ac.cn</a>.
          </li>
          <li>
            <b>Website: </b>
            <a style="color: #3b82f6"
               href="https://pog.fudan.edu.cn/xtbg2023/#/home">https://pog.fudan.edu.cn/xtbg2023</a>
          </li>
          <p></p>
        </ul>
      </div>

    </div>
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
      speakers: [
        {
          name: "Jonathan Karl Pritchard",
          img: require('@/assets/img/speakers/1111.jpeg'),
          description: "Jonathan Karl Pritchard is an English-born professor of genetics at Stanford University, best known for his development of the STRUCTURE algorithm for studying population structure and his work on human genetic variation and evolution. His research interests lie in the study of human evolution, in particular in understanding the association between genetic variation among human individuals and human traits.",
          affiliation1: "Stanford University",
          affiliation2: "",
          affiliation3: "",
          affiliation4: "",
          link: "",
        },
        {
          name: "Daniel FALUSH",
          img: require('@/assets/img/speakers/Daniel.png'),
          description: "Daniel FALUSH is an English-born professor of genetics at Chinese Academy Science, who has has conducted research at institutions such as the University of Tokyo in Japan, the Max Planck Institute in Germany, and the University of Oxford in the United Kingdom. He is also the associate editor of the renowned journal Molecular Biology and Evolution (IF=16, from 2010 onwards). His research achievements include the publication of over 80 papers in journals such as Science and Nature, with over 40,000 citations and an H-index of 55 (Google Scholar). He was listed among the top 10 Chinese researchers in the field of Biology in the 2022 China Highly Cited Scholars list. ",
          affiliation1: "中国科学院上海免疫与感染研究所",
          affiliation2: "微生物、发育与健康研究中心",
          affiliation3: "The Centre for Microbes, Development and Health, Shanghai Institue of Immunity and Infection Chinese Academy of Sciences ",
          affiliation4: "",
          link: "http://sourcedb.shanghaipasteur.cas.cn/zw/yjzx_2019/principalnvestigator_2019/201909/t20190910_5379200.html",
        },
        {
          name: "Leo Speidel",
          img: require('@/assets/img/speakers/Leo.png'),
          description: "Leo Speidel is a Sir Henry Wellcome fellow at University College London, he develops statistical methods for reconstructing this history, scalable to the largest genomic datasets, which now comprise more than 100,000 individuals and record genetic diversity on an unprecedented scale. He is interested in uncovering how different evolutionary forces have shaped today’s observed genetic variation, from which we can learn about our shared evolutionary history and the impact of genetic variation on our health.",
          affiliation1: "University College London",
          affiliation2: "",
          affiliation3: "",
          affiliation4: "",
          link: "",

        },
        {
          name: "杨剑 YANG Jian",
          img: require('@/assets/img/speakers/YANGJian.png'),
          description: "YANG Jian is a Professor of Statistical Genetics at the School of Life Sciences, Westlake University, China. His primary research interests are focused on understanding the genomic variations among individuals within and between populations and the links of genomic variations with health outcomes. The research interests of his lab include (but are not limited to): Population genomics and complex traits，Discovery of new therapeutic targets for cancers, heart diseases, diabetes, and mental illness，Single-cell genomics and epigenomics，Big data modeling and deep learning，Cancer genomics and evolution，Multi-omics and precision medicine，High-performance statistical genetics methods and bioinformatics tools.",
          affiliation1: "西湖大学",
          affiliation2: "Westlake University",
          affiliation3: "",
          affiliation4: "",
          link: "https://www.westlake.edu.cn/faculty/jian-yang.html",

        },
        {
          name: "邓恋 DENG Lian",
          img: require('@/assets/img/speakers/DENGLian.jpg'),
          description: "DENG Lian is an Associate Professor (tenure-track) at the School of Life Sciences, Fudan University. Dr. Deng studies genomic and phenotypic variation in ethnically diverse East and Southeast Asian populations. She is particularly interested in human adaptive evolution, and the genetic basis of human traits, including diseases. Dr. Deng published papers in Nature, MBE, Nature Communications, NSR, etc. She was selected as a member of the Youth Innovation Promotion Association of Chinese Academy of Sciences, and was selected into Shanghai Sailing Program. She is also a recipient of the Safino-SIBS Young Faculty Awards. Dr. Deng’s research is supported by grants from the National Natural Science Foundation of China, and the National Key Research and Development Program of China.",
          affiliation1: "复旦大学-进化生物学研究中心",
          affiliation2: "Fudan University - Center for Evolutionary Biology",
          affiliation3: "",
          affiliation4: "",
          link: "https://pog.fudan.edu.cn/#/people/detail?id=119",

        },
        {
          name: "祁婷 QI Ting",
          img: require('@/assets/img/speakers/QITing.jpg'),
          description: "QI Ting is a Research Associate Professor at the School of Life Sciences, Westlake University, China. She received her PhD in 2016 from Zhejiang University, China, before undertaking postdoctoral research at the Institute for Molecular Bioscience, The University of Queensland, Australia. Trained in statistical genetics, her research focuses on understanding the genetic basis of molecular phenotypes and their link to complex diseases, leveraging multi-omics data to discover gene targets for human diseases, and developing novel statistical methods and tools to disentangle the regulatory mechanisms underlying the diseases. To date, she has published 25 papers with 2497 citations, including six first-author papers in high-impact journals such as Nature Genetics and Nature Communications, as well as collaborative research papers in top journals such as Nature and Cancer Research.",
          affiliation1: "西湖大学",
          affiliation2: "Westlake University",
          affiliation3: "",
          affiliation4: "",
          link: "",

        },
        {
          name: "陈玮 CHEN Wei",
          img: require('@/assets/img/speakers/CHENWei.jpg'),
          description: "CHEN Wei is an Associate Professor at Yunnan Agricultural University. His research interest concerns the domestication and utilization of perennial crops and medicinal plants. He organized and co-led the International 3K Grapevine Genomes Project to understand how ancient humans tamed the vine of Dionysus with population genomic approaches.",
          affiliation1: "云南农业大学 西南生物多样性国家重点实验室",
          affiliation2: "State Key Laboratory for Conservation and Utilization of Bio-Resources in Yunnan, Yunnan Agricultural University",
          affiliation3: "",
          affiliation4: "",
          link: "",
        },
        {
          name: "王国栋 WANG Guodong",
          img: require('@/assets/img/speakers/WANGGuodong.jpg'),
          description: "The focus of his research is in the fields of population genomics and the genetic mechanisms underlying the evolution of complex traits, with a primary emphasis on domestic dogs. He has published over 20 papers in renowned international SCI journals such as Nature Genetics, Nature Communications, PNAS, Cell Research, Molecular Biology and Evolution, and Nucleic Acids Research. We have also been invited to review manuscripts for distinguished international journals, including Nature Communications, Molecular Biology and Evolution, PLoS Genetics. ",
          affiliation1: "中国科学院昆明动物研究所",
          affiliation2: "",
          affiliation3: "",
          affiliation4: "",
          link: "",
        },
        {
          name: "李海鹏 LI Haipeng",
          img: require('@/assets/img/speakers/lihaipeng.jpeg'),
          description: "Professor Li Haipeng group works in the field of population genetics and bioinformatics. With regard to population genetics, our goals are to study the mechanism of recent adaptation due to positive selection in living organisms, such as humans, Drosophila and pathogens. We search for methods to detect selection which are not influenced by a high false positive rate because of the confounding impact of demography (i.e., varying population size and population structure) and genetic recombination. Our research activities can help us to understand the function of genes and the interaction between genes and environment. We are studying how natural selection has helped humans to adapt to environmental changes and especially how natural selection has accelerated the emergence of consciousness and language. In the field of bioinformatics, we develop comprehensive software to meet various needs in genetic data analysis.",
          affiliation1: "中国科学院上海免疫与感染研究所",
          affiliation2: "",
          // affiliation2: "Shanghai institute of nutrition and health, CAS",
          affiliation3: "",
          affiliation4: "",
          link: "http://www.sinh.cas.cn/rcdw/qtyjzz/201803/t20180327_4986742.html",

        },
        {
          name: "姜亚飞  Jiang Ya Fei",
          img: require('@/assets/img/speakers/jiangyafei.png'),
          description: "Yafei Jiang is an Associate Researcher specializing in Bioinformatics and Biomedical Sciences. She currently serves as the Director of Bioinformatics at the Bioinformatics Business Unit of Novogene.\n" +
              "She has extensive experience in the field, having successfully led and participated in over 20 large-scale collaborative projects and more than 30 cooperative projects. She has also undertaken the design and analysis of over 200 project proposals. Her expertise lies in multi-omics approach design, project analysis, workflow development, and research and development. She has published co-first author articles in prestigious journals such as Nature Genetics and Plant Biotechnology Journal. She has multiple authored professional patents and software copyrights in relevant areas.",
          affiliation1: "诺禾致源公司",
          affiliation2: "",
          affiliation3: "",
          affiliation4: "",
          link: "",
        }
        // ,
        // {
        //   name: "Leo Speidel",
        //   img: require('@/assets/img/speakers/Leo.png'),
        //   description: "",
        //   affiliation1: "",
        //   affiliation2: "",
        //   affiliation3: "",
        //   affiliation4: "",
        //   link: "",
        //
        // },


      ]

    }
  }
}
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
