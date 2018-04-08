/**
 * Our mehtods may be dependent on dependency injection container (dic)
 * and possibly on other stuff
 *
 * TODO how to solve the situation of needing different args? (in calling code)
 *
 */

export const handleTogglableDefault = (dic, config) => {
  console.log('this is the default omplementation of the togglable button handler')
}

export const handleTogglableCompletelyDifferently = (dic, config) => {
  console.log('complemtely different impelmentation of togglable butotn handler :)')
}
