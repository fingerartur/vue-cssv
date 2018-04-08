export default class ConfigService {
  getConfig (name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          num: 3
        })
      }, 200)
    })
  }
}
