<template>
  <div>
    <h1>Main - version 1</h1>
    <app-cat></app-cat>
  </div>
</template>


<script>
import registerDIs from '../feature-toggle/di'
import featureDecisions from '../feature-toggle/FeatureDecisions'

export default {
  components: {
    'app-cat': () => featureDecisions.getComponentPromiseCat() // FT a component with fixed name/purpose
  },
  created () {
    registerDIs(this.$ioc)
  },
  methods: {
    hello () {
      // this.$ioc.featureDecisions.getHelloHandler()() // FT component's method
    }
  }
}
</script>




<style>
</style>
