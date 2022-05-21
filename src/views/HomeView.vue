<template>
  <div class="home">
    <br><br>
    <div>
    <b-button-group style="width:350px;height:250px;display: flex;justify-content: space-between;margin:auto;flex-direction:column">
      <b-button variant="info" style="color: white;" @click="$router.push('newemployee')">👨‍🎓👩‍🎓 Shogirt tushish</b-button>
      <br>
      <b-button variant="info" style="color: white;" @click="$router.push('applications')">📩 Arizalarim</b-button>
      <br>
      <a href="http://bdm.uz/"> <b-button variant="info" style="color:white;width:100%" >🏬 Biz haqimizda</b-button></a>
      <br>

      <b-button variant="info" style="color:white" @click="$router.push('location')">🏢 Bizning manzil</b-button>
    </b-button-group>
  </div>
  <br>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
