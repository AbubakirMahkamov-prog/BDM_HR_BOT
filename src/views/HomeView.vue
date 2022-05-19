<template>
  <div class="home">
    <br><br>
    <div>
    <b-button-group style="width:350px;display: flex;justify-content: space-between;margin:auto">
      <b-button variant="info" style="width:150px;color: white;" @click="$router.push('newemployee')">👨‍🎓👩‍🎓 Shogirt tushish</b-button>
      <b-button variant="info" style="width:150px;color: white;">📩 Arizalarim</b-button>
    </b-button-group>
  </div>
  <br>
  <div>
    <b-button-group style="width:350px;">
      <b-button variant="info" style="color:white">🏬 Biz haqimizda</b-button>
      <b-button variant="info" style="color:white">🏢 Bizning manzil</b-button>
    </b-button-group>
  </div>
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
