import configDefault from './config/default'
import config from './config/customer-specific'
import StringGenerator from '../services/StringGenerator'
import StringGeneratorAugmented from '../services/customer-specific/StringGeneratorAugmented'
import { handleTogglableDefault, handleTogglableCompletelyDifferently } from '../components/appMethods'

class FeatureDecisions {
  config;
  constructor (config) {
    this.config = config
  }

  getComponentPromiseCat () {
    const name = 'cat'
    if (name === 'cat') {
      return import('../components/Cat.vue')
    }
  }
  /**
   * This is a factory, but a strategy would work similarly
   */
  createStringGenerator () {
    if (this.config.stringGeneratorStrategy === 'fancy') {
      return new StringGeneratorAugmented()
    } else {
      return new StringGenerator()
    }
  }

  createAppTogglableButtonHandler () { // TODO i do not like where the dependencies are localed folder-wise!
    if (this.config.togglableButtonStrategy === 'new') {
      return handleTogglableCompletelyDifferently
    } else {
      return handleTogglableDefault
    }
  }
}

export default new FeatureDecisions({...configDefault, ...config})
