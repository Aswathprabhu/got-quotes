<template>
  <div class="card-container">
    <Card
      v-for="index in Number(count)"
      :key="index"
      :data="result[index - 1]"
    />
  </div>
</template>

<script>
import 'isomorphic-fetch';
import Card from './Card.vue';
export default {
  name: 'CardsContainer',
  components: {
    Card,
  },
  data() {
    return {
      result: [],
    };
  },
  created() {
    this.fetchResults(this.count);
  },
  computed: {
    count() {
      return this.$route.params.id || 1;
    },
  },
  watch: {
    count(val) {
      this.fetchResults(val);
    },
  },
  methods: {
    fetchResults(count) {
      return fetch(
        `https://game-of-thrones-quotes.herokuapp.com/v1/random/${count}`
      )
        .then((res) => res.json())
        .then((res) => (this.result = res))
        .catch(console.error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
