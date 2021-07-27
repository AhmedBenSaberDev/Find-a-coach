<template>
<div>
  <section>
      Filter
  </section>
  <section>
      Coaches List
      <ul v-if="hasCoaches">
        <li v-for="coach in filtredCoaches" :key="coach.id">{{ coach.firstName }}</li>
      </ul>
      <p v-else>The are no coaches yet .</p>
  </section>
</div>
</template>

<script>
export default {
  computed:{
    filtredCoaches()
    {
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches()
    {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
}
</script>

<style>

</style>