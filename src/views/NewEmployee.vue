<template>
  <div class="NewEmployee">
       <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Ism :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="new_employee.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-2" label="Phone Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="new_employee.phone_number"
          placeholder="Phone Number"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-3" label="University:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="new_employee.university"
          placeholder="University"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-4" label="Yo'nalishiz:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="new_employee.direction"
          placeholder="Yo'nalishiz "
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-5" label="Guruh :" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="new_employee.group_name"
          placeholder="Guruh"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-6" label="Qiziqishlariz :" label-for="input-6">
        <b-form-input
          id="input-5"
          v-model="new_employee.hobbies"
          placeholder="Qiziqishlariz"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-7" label="Nima uchun bizni tanladiz:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="new_employee.because"
          placeholder="Nima uchun bizni tanladiz"
          required
        ></b-form-input>
      </b-form-group>
      <br>
     <b-form-group id="input-group-8" label="Yo'nalishizni tanlang:" label-for="input-8">
        <b-form-select
          id="input-8"
          style="height:30px;width: 100%;"
          v-model="new_employee.choice_student"
          :options="choice_student"
          required
        ></b-form-select>
      </b-form-group>
      <br>
      <b-button type="submit" variant="primary" style="width:100%">Yuborish</b-button>
     
    </b-form>
  </div>
</template>
<script>
import EmployeeService from '../service/employee.service'
export default {
  name:'NewEmployee',
  data() {
    return {
      choice_student : ['MOBILE APP DEVELOPMENT', 'WEB DEVELOPMENT', 'FARQI YO\'q'],
      new_employee : {
                    "chat_id": 1619793289,
                    "name": "",
                    "phone_number": "",
                    "university":"",
                    "direction": "",
                    "group_name":"",
                    "hobbies":"",
                    "because":"",
                    "sort_request":"",
                    "choice_student":  ""
      },
    }
  },
  methods : {
    onSubmit(event) {
      event.preventDefault()
      EmployeeService.newEmployee(this.new_employee).then(res => {
        console.log(res)
      })
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.NewEmployee {
  padding: 40px;
}
</style>