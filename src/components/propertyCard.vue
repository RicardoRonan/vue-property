<template>
  <h3>Click image to view full details</h3>
  <div class="card bg-dark text-light p-3 m-3 shadow-lg">
    <div class="img-conatiner">
      <router-link
        :to="{ name: 'propertyDetails', params: { id: property.id } }"
      >
        <img id="img" v-bind:src="property.img" />
      </router-link>
    </div>

    <h2>{{ property.title }}</h2>
    <h2>
      <i class="fa-solid fa-hand-holding-dollar p-1"></i>{{ property.price }}
    </h2>
  </div>
</template>
<script>
export default {
  props: ["property"],
};
</script>
<style>
.card {
  padding: 10px;
  border-radius: 0 !important;
  
}
#img {
  width: 20rem;
  height: auto;
}
#property-text {
  padding: 0.5rem;
}
</style>
