<template>
  <div v-if="property">
    <div class="card bg-dark text-light p-3 m-3 shadow-lg">
      <div class="img-conatiner">
        <img id="img" v-bind:src="property.img" />
      </div>
      <h2>{{ property.title }}</h2>
      <h2>
        <i class="fa-solid fa-hand-holding-dollar p-1"></i>{{ property.price }}
      </h2>
      <div class="text-container d-flex justify-content-center">
        <p id="property-text">
          <i class="fa-solid fa-chart-area p-1"></i>{{ property.area }}
        </p>
        <p id="property-text">
          <i class="fa-solid fa-bed p-1"></i>{{ property.bedrooms }}
        </p>
        <p id="property-text">
          <i class="fa-solid fa-shower p-1"></i>{{ property.bathrooms }}
        </p>
        <p id="property-text">
          <i class="fa-solid fa-warehouse p-1"></i>{{ property.garage }}
        </p>
        <p id="property-text">
          <i class="fa-solid fa-comment-dollar p-1"></i>{{ property.listing }}
        </p>
        <p id="property-text">
          <i class="fa-solid fa-building p-1"></i>{{ property.type }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //   props: ["property"],
  name: "propertyDetails",
  data() {
    return {
      property: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.property = data));
  },
};
</script>
<style>
.card {
  padding: 10px;
  border-radius: 0 !important;
}
#img {
  width: 30rem;
  height: auto;
}
#property-text {
  padding: 0.5rem;
}
</style>
