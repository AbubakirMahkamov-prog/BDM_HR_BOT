<template>
    <div class="text">
   <b-card>
  <p class="main">
     <span class="child_left"> A`rizangiz holati </span> <span class="child_right"> {{data.status}}</span>
  </p>
  <p class="main">
      <span class="child_left">Ismingiz :</span> <span class="child_right">{{data.name}}</span>
  </p>
  <p class="main">
      <span class="child_left">Telefon Raqamingiz</span> <span class="child_right"> {{data.phone_number}}</span>
  </p>
  <p class="main">
      <span class="child_left">Oliy Gohingiz</span> <span class="child_right"> {{data.university}}</span>
  </p>
  <p class="main">
      <span class="child_left">Yo'nalishingiz</span> <span class="child_right"> {{data.direction}}</span>
  </p>
  <p class="main">
      <span class="child_left">Guruhingiz </span> <span class="child_right"> {{data.group_name}}</span>
  </p>
  <p class="main">
      <span class="child_left">Qiziqishlaringiz</span><span class="child_right"> {{data.hobbies}}</span>
  </p>
  <p class="main">
      <span  class="child_left">Kirish sababingiz</span> <span class="child_right"> {{data.because}}</span>
  </p>
      <b-button variant="primary" style="width:100%" @click="$router.go(-1)">Home</b-button>

  </b-card>
</div>
</template>
<script>
import EmployeeService from '../service/employee.service'
export default {
    name: 'ApplicationView',
    data() {
        return {
            data: []
        }
    },
    methods: {
        getApplications() {
            const chat_id = {
               "chat_id": 1619793289  
            }
            EmployeeService.getApplications(chat_id).then(res => {
                this.data = res.data
                this.data.id = this.data.id.toString()
                if(this.data.status == 0){
                    this.data.status = "👁 Ko`rilmoqda"
                }
                else if(this.data.status == 1){
                    this.data.status = "✅ Ko`rildi"
                }
                else if(this.data.status == 2) {
                    this.data.status = "Imtixonga chaqirildingiz"
                }
                else if(this.data.status == 3) {
                    this.data.status = "Suxbatga chaqirildingiz"
                }
                else if(this.data.status == 4) {
                    this.data.status = "Sizni tabriklaymiz!!! BDM jamoamizga qabul qilindingiz"
                }
                else if(this.data.status == 5) {
                    this.data.status = "Sizning arizangiz bekor qilindi. 6 oydan keyin qaytadan a`riza tashlash huquqiga egasiz"
                }
            })
        }
    },
    mounted() {
        this.getApplications()
    },
    
}
</script>
<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
        font-weight:600;
        padding:0px 10px
    }
    .main .child_right {
        color: #5F19F6 ;
        font-size: 14px;
    }
    .main .child_left {
        color: 	#1966F6;
    }

    
</style>