<template>
  <div class="container" style="min-height: 50rem;padding: 2rem">
    <h1>E-MAIL</h1>
    <hr class="hr">
    <!--    <p>gaojie@xtbg.org.cn</p>-->
    <!--    <p>daniel.falush@ips.ac.cn</p>-->
    <div style="vertical-align: center;display: flex">
      <p style="margin:0;text-decoration: underline;color: #2942DA;line-height: 32px;vertical-align: center;padding-right: 5px">
        jlchen@ips.ac.cn</p>
      <p style="margin:0;line-height: 32px;vertical-align: center;padding-top: 4px">
        <embed :src="require('@/assets/svg/email.svg')" type="image/svg+xml"
               style="width: 1.4rem;padding-top: 2px;vertical-align: center"/>
      </p>
    </div>

    <div style="vertical-align: center;display: flex">
      <p style="margin:0;text-decoration: underline;color: #2942DA;line-height: 32px;vertical-align: center;padding-right: 5px">
        gaojie@xtbg.org.cn</p>
      <p style="margin:0;line-height: 32px;vertical-align: center;padding-top: 4px">
        <embed :src="require('@/assets/svg/email.svg')" type="image/svg+xml"
               style="width: 1.4rem;padding-top: 2px;vertical-align: center"/>
      </p>
    </div>
    <div style="vertical-align: center;display: flex">
      <p style="margin:0;text-decoration: underline;color: #2942DA;line-height: 32px;vertical-align: center;padding-right: 5px">
        daniel.falush@ips.ac.cn</p>
      <p style="margin:0;line-height: 32px;vertical-align: center;padding-top: 4px">
        <embed :src="require('@/assets/svg/email.svg')" type="image/svg+xml"
               style="width: 1.4rem;padding-top: 2px;vertical-align: center"/>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RegisTration',
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
