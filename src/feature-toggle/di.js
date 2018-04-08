import featureDecisions from './FeatureDecisions'

class MyService {
  call () {
    console.log('Hello service x')
  }
}

const register = (iocContainer) => {
  iocContainer.register('serv', new MyService())
  iocContainer.register('string-gen', featureDecisions.createStringGenerator()) // FT a service with same interface
}
const override = () => {
}

export default (iocContainer) => {
  register(iocContainer)
  override(iocContainer)
}
