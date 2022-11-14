const { styles } = require('./src/styles/theme')
const {
  addWebpackAlias,
  addLessLoader,
  fixBabelImports,
  addBabelPlugins,  //支持jsx
  override,
  addDecoratorsLegacy
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addBabelPlugins(
    //如果安装这个了，则支持jsx加上less的写法
    [
      "styled-jsx/babel",
      {
        "vendorPrefixes": true,     // 为css自动添加前缀
        "plugins": [
          ["styled-jsx-plugin-sass", { sassOptions: {} }]
        ]
      }
    ]
  ),
  // @ 修饰器
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // 支持 less sass stylus
    style: true,
  }),
  // 支持 antd 主题定制
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: styles,
  }),
  // 别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@@': path.resolve(__dirname, 'src/components'),
  })
)
