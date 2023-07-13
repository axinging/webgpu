var nodeGPUBinding = require('bindings');

var nodeGPU = (function() {
  var nodeGPUInstance;
  function createNodeGPU() {
    var isWin = process.platform === 'win32';
    const gpuProviderModule =
        isWin ? nodeGPUBinding('dawn_windows') : nodeGPUBinding('dawn_linux');
    const gpuProviderFlags = ['disable-dawn-features=disallow_unsafe_apis'];
    nodeGPUInstance = gpuProviderModule.create(gpuProviderFlags);
    return nodeGPUInstance;
  }

  return {
    getNodeGPU: function() {
      if (!nodeGPUInstance) {
        nodeGPUInstance = createNodeGPU();
      }
      return nodeGPUInstance;
    }
  };
})();

module.exports = exports = nodeGPU;
