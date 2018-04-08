<template>
  <md-app id=app>

    <md-app-toolbar class="md-accent">
        <span class="md-title">Choose your app:</span>
        <md-button class="md-accent" v-on:click="not">instance A</md-button>
        <md-button class="md-accent" v-on:click="getString">get str</md-button>
        <md-button class="md-accent" v-on:click="showService">Call x</md-button>
        <md-button class="md-accent" v-on:click="handleTogglable">Togglable handler</md-button>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
      </md-toolbar>

      <md-list>
          <md-list-item v-on:click="not">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item v-on:click="not">
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item v-on:click="not">
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item v-on:click="not">
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
          </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <app-login v-on:success="handleLoginSuccess"></app-login>
    </md-app-content>

  </md-app>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
</template>


<script>
export default {
  components: {
    'app-login': () => import('./Login.vue')
  },
  name: 'app-layout',
  data () {
    return {
      shit: 1
    }
  },
  created () {
    console.log(this.$ioc.resolve('serv'), 'ctor this')
    console.log(this.$ioc)
    this.$ioc.register('dynamic', { hey: 'hello' })
    console.log(this.$ioc.resolve('dynamic'))
  },
  methods: {
    not: () => {},
    showService () { // TODO explain why arrow methods are useless in this case
      console.log(this)
      this.$ioc.resolve('serv').call()
      console.log('ioc in methods')
      console.log(this.$config, 'config')
    },
    getString () {
      console.log(this.$ioc.resolve('string-gen').generate())
    },
    handleTogglable () {
      this.$ioc.resolve('feature-decisions').createAppTogglableButtonHandler()()
    },
    handleLoginSuccess (config) {
      console.log('login success in app', config)
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.md-app-content {
  height: 90vh;
}
</style>
