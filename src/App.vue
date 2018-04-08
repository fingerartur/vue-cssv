<template>
  <div>
    <app-login v-if="!hideLogin" v-on:success="handleLoginSuccess"></app-login>
    <app-layout v-if="hideLogin"></app-layout>
  </div>
</template>


<script>
import Login from './components/Login.vue'

// this is how private methods can be implemented
const log = (config) => {
  console.log('config passed to parent', config)
}

export default {
  components: {
    'app-login': Login,
    'app-layout': () => {
      // it is possible to access an outer variable here and decide by it (defined outside the vue object)
      // however not sure if it won't be a problem for testing
      return import('./components/Main.vue')
    }
  },
  name: 'app',
  data () {
    return {
      hideLogin: false
    }
  },
  methods: {
    handleLoginSuccess (config) {
      this.hideLogin = true
      log(config)
    }
  }
}
</script>
