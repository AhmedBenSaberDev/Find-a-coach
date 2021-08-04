<template>
<base-card>
  <section>
      <h2>Register as as coach now !</h2>
      <coach-form @submit-data="addCoach"></coach-form>
  </section>
</base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components:{
        CoachForm
    },
    methods:{
        addCoach(coachData)
        {
            this.$store.commit('coaches/addCoach',coachData);
            this.$router.push({name:'coaches'});
        }
    }
}
</script>

<style>

</style>