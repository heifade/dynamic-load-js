module.exports = {
  loadJs: function(file) {
    return require(file);
  },
  // 根据module名称，获取pappywork引用的module目录
  getToolsModulePath: function(source) {
    let url = require.resolve(source);
    return url.substr(0, url.lastIndexOf(source) + source.length);
  },
  // 根据module名称，获取工程引用的module目录
  getWorkModulePath: function(source) {
    let url = require.resolve(source, { paths: [process.cwd()] });
    return url;
  }
};
