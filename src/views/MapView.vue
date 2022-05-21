<template>
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3039.940261905918!2d71.78355572883535!3d40.365848927911976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebe2ba304785ee5a!2zNDDCsDIxJzU2LjQiTiA3McKwNDcnMDAuOCJF!5e0!3m2!1sru!2s!4v1653051285884!5m2!1sru!2s" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<br>
<b-button variant="primary" style="width:100%" @click="$router.go(-1)">Home</b-button>
</div>
</template>
<script>
export default {
    name:"MapView",
}
</script>