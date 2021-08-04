<template>
  <div>
    <section>
        <coach-filter @change-filter='setFilters'></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register">Register as Coach</base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filtredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            >{{ coach.firstName }}</coach-item
          >
        </ul>
        <h3 v-else>The are no coaches yet .</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoacheItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  data(){
    return{
      filters:{
        frontend:true,
        backend:true,
        career:true
      }
    }
  },
  components: {
    CoachItem,
    CoachFilter
  },
  computed: {
    filtredCoaches() {
      const coaches =  this.$store.getters["coaches/coaches"];
      return coaches.filter(coach=>{
        if(this.filters.frontend && coach.areas.includes('frontend')){
          return true;
        }
        if(this.filters.backend && coach.areas.includes('backend')){
          return true;
        }
        if(this.filters.career && coach.areas.includes('career')){
          return true
        }
        return false;
      })
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods:{
    setFilters(filter)
    {
      this.filters = filter;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>