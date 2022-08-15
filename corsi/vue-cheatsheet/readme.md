# Vue cheatsheet

![vue](./images/vue.jpg)

Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.

## Vue Cli

### Installation
```sh
npm install -g @vue/cli
```

### Create vue project
```sh
vue create .
```


## Basic template

```html
<template>
<!-- insert you html template here -->
</template>

<script>
export default {
  name: "myCompName",
  //Register components
  components:{},
  //Register the props
  props:{},
  //Set local data
  data() {
    return {}
  },
  //Computed properties
  computed:{},
  //Watch for changes
  watch:{},
  //methods
  methods: {},
  //Life cicle
  beforeMount() {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  unmounted() {},
}
</script>

<style>
/* insert your css style here */
</style>
```

## Expressions

```html
<template>
  <div id="app">
    <h2>Products</h2>
    <p>Product: {{ product }}</p>
    <p>Price: {{ price }}$</p>
    <p>Available: {{ available ? "Yes" : "No" }}</p>
  </div>
</template>

<script>
export default {
  name: "myCompName",
  data() {
    return {
      product: "Personal computer",
      price: 50,
      available: true,
    };
  },
};
</script>

<style>
/* insert your css style here */
</style>
```

[Edit in codesandbox.io](https://codesandbox.io/s/vue-expressions-j9et9d?file=/src/App.vue)

## Binding

```html
<template>
  <div id="app">
    <h2>Bindings</h2>
    <a :href="url">Here</a>
    <p :class="{ active: isActive }">You can learn bindings</p>
    <p :style="{ color: activeColor }">and more ...</p>
    <button :disabled="isButtonDisabled">Click</button>
  </div>
</template>

<script>
export default {
  name: "myCompName",
  data() {
    return {
      url: "https://vuejs.org/",
      disabled: false,
      isActive: true,
      activeColor: "#00ff00",
    };
  },
};
</script>

<style>
.active {
  background-color: #ff0000;
}
</style>
```

[Edit in codesandbox.io](https://codesandbox.io/s/vue-binding-1uusix?file=/src/App.vue:0-539)

## Directives

```html

```