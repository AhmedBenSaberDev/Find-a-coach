<template>
    <base-card>
        <h2>Find you coach</h2>
        <span  class="filter-opytion ">
            <input type="checkbox" id='frontend' checked @change="setFilters">
            <label for="frontend">FrontEnd</label>
        </span>
        <span  class="filter-opytion ">
            <input type="checkbox" id='career' checked @change="setFilters">
            <label for="career">career</label>
        </span>
        <span  class="filter-opytion ">
            <input type="checkbox" id='Backend' checked @change="setFilters">
            <label for="Backend">Backend</label>
        </span>
    </base-card>
</template>

<script>
export default {
    $emit:['change-filter'],
    data(){
        return{
            filters:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },
    methods:{
        setFilters(event)
        {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            this.filters[inputId] = isActive;
            this.$emit('change-filter',this.filters);
        }
    }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>