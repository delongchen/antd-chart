if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  const Mock = require("mockjs")

  require('./service/stuInfo')

  Mock.setup({
    timeout: 600
  })
}
