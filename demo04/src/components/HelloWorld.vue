<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      <!-- <li v-for="(item, index) in items" :key="index">{{ item.name }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      items: [
        { id: 1, name: 'Vue.js' },
        { id: 2, name: 'React.js' },
        { id: 3, name: 'Angular.js' }
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>


