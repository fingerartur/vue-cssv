import StringGenerator from '../StringGenerator'

export default class StringGeneratorAugmented extends StringGenerator {
  generate () {
    let str = super.generate()
    str += ' ** fancy :0 **'
    return str
  }
}
