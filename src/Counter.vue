<template>
  <div id="app">
    <h3>Count: {{ counter }}</h3>

    <div class="button-container">
      <button @click="increment">Add</button>
      <button @click="decrement">Subtract</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button-container {
  display: flex;
  width: 300px;
  justify-content: space-around;
}

button {
  padding: 5px 15px;
}
</style>
