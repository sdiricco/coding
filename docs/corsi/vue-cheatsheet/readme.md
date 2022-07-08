# Vue cheatsheet

Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.

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
    <p>I have a {{ product }}</p>
    <p>{{ product + 's' }}</p>
    <p>{{ isWorking ? 'YES' : 'NO' }}</p>
  </div>
</template>

<script>
export default {
  name: "myCompName",
  props:{
    product:{
      type: String,
      default: "myProduct"
    }
  },
  data() {
    return {
      isWorking: false
    }
  }
}
</script>

<style>
/* insert your css style here */
</style>
```

## Binding

```html
<template>
  <div id="app">
    <a :href="url">click me</a>
    <button :disabled="isButtonDisabled"></button>
    <div :class="{ active: isActive }"></div>
    <div :style="{ color: activeColor }"></div>
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
      activeColor: "#C6C6C6"
    }
  }
}
</script>

<style>
.active{
  background-color: #ff0000;
}
</style>
```

## Directives

```html

```