<template>
  <div class="container" style="padding: 2rem">
    <h1>Confirmed Speakers</h1>
    <hr class="hr">
    <div class="card mb-3" style="height: 355px;margin-bottom: 2rem" v-for="s in speakers" v-bind:key="s.name">
      <div class="row g-0">
        <div class="col-md-3">
          <img
              :src="s.img"
              class="img-fluid rounded-start"
              alt="..."
              style="height: 353px;width: 280px"
          >
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 2rem;font-weight: 650;margin-bottom: 15px">{{ s.name }}</h5>
            <p class="card-text" style="font-size: 1.15rem;margin-bottom: 3px">{{ s.affiliation1 }}</p>
            <p class="card-text" style="font-size: 1.15rem;margin-bottom: 3px">{{ s.affiliation2 }}</p>
            <p class="card-text" style="font-size: 1.15rem;margin-bottom: 7px">{{ s.affiliation3 }}</p>
            <p class="card-text" style="font-size: 1rem;text-align: justify;color: #48649d">{{ s.description }}</p>
            <p v-show="s.link" style="margin: 0;">
              <a
                  :href="s.link"
                  class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfSpeakers',
  data() {
    return {
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
          name: "楼海一 LOU Haiyi",
          img: require('@/assets/img/speakers/LOUHaiYi.png'),
          description: "LOU Haiyi is an associate professor at Fudan University. His research interest mainly focuses on genetic distribution, functional relevance, pathological mechanisms and evolutionary history of DNA structural variants (SVs) in human genomes. His work involves in applying bioinformatics approaches to characterize the genetic diversity of SVs in diverse human populations based on multiple biotechnologies, analyzing multi-omics data to uncover the functional relationship between genetic variants and human traits as well as disease susceptibilities, and using population genetic methods to reconstruct the evolutionary history. He was selected as a member of Youth Innovation Promotion Association of Chinese Academy of Sciences.",
          affiliation1: "复旦大学",
          affiliation2: "Fudan University",
          affiliation3: "",
          affiliation4: "",
          link: "https://pog.fudan.edu.cn/#/people/detail?id=118",

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

<style scoped>
@import "@/scss/blog.css";

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}
</style>
