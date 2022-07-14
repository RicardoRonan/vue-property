<template>
  <div class="AllProperties">
    <propertyCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
    />
  </div>
</template>
<script>
import propertyCard from "../components/propertyCard.vue";
export default {
  components: { propertyCard },
  data() {
    return {
      properties: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => (this.properties = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
